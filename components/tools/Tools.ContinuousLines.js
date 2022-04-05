import * as THREE from 'three';

import { UIPanel, UIButton } from '../../public/libs/ui.js';
import { AddObjectCommand } from '../../commands/AddObjectCommand.js';
import { RemoveObjectCommand } from '../../commands/RemoveObjectCommand.js';

function ContinuousLines(editor) {
   const strings = editor.strings;

   const viewport = document.querySelector('canvas');

   const container = new UIPanel();
   container.setId('lines');

   //* lines

   const lines = new UIButton();
   lines.addClass('center');

   const linesIcon = document.createElement('img');
   linesIcon.alt = strings.getKey('lines');
   linesIcon.src = 'images/lines.svg';

   lines.dom.appendChild(linesIcon);

   let active = false;

   let MAX_POINTS = 500;
   const mouse = new THREE.Vector2();

   // geometry
   const geometry = new THREE.BufferGeometry();

   // attributes
   let positions = new Float32Array(MAX_POINTS * 3); // 3 vertices per point
   geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

   // draw range
   let drawCount = 2; // draw the first 2 points, only
   geometry.setDrawRange(0, drawCount);

   // material
   var material = new THREE.LineBasicMaterial({
      color: 0xff0000,
      side: THREE.DoubleSide,
      wireframe: true,
      // depthTest: false,
      blending: THREE.NormalBlending,
   });

   // line
   let line = new THREE.Line(geometry, material);
   line.name = 'Track';

   positions = line.geometry.attributes.position.array;

   let x = 0;
   let y = 0;
   let z = 0;
   let index = 0;

   // Camera
   const aspect = editor.camera.aspect;
   const camera = new THREE.OrthographicCamera(-aspect, aspect);
   camera.name = 'Track Camera';
   camera.position.set(0, 0, 1);

   lines.onClick(function () {
      if (!active) {
         editor.execute(new AddObjectCommand(editor, line));
         active = true;
         lines.addClass('selected');

         document.addEventListener('mousemove', onMouseMove);
         document.addEventListener('mousedown', addPoint);

         editor.execute(new AddObjectCommand(editor, camera));
      } else {
         active = false;
         lines.removeClass('selected');

         document.removeEventListener('mousemove', onMouseMove);
         document.removeEventListener('mousedown', addPoint);
         editor.execute(new RemoveObjectCommand(editor, camera));
      }
   });

   // update line
   function updateLine() {
      positions[index * 3 - 3] = mouse.x;
      positions[index * 3 - 2] = mouse.y;
      positions[index * 3 - 1] = mouse.z;
      editor.execute(new AddObjectCommand(editor, line));
      line.geometry.attributes.position.needsUpdate = true;
   }

   // mouse move handler
   function onMouseMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.z = 0;
      //mouse.unproject(camera);
      if (drawCount !== 0) {
         updateLine();
      }
   }

   // add point
   function addPoint() {
      positions[index * 3 + 0] = mouse.x;
      positions[index * 3 + 1] = mouse.y;
      positions[index * 3 + 2] = mouse.z;
      index++;
      line.geometry.setDrawRange(0, index);
      updateLine();
   }

   container.add(lines);

   return container;
}

export { ContinuousLines };
