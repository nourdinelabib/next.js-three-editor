import * as THREE from 'three';

import { UIPanel, UIButton } from '../../public/libs/ui.js';
import { AddObjectCommand } from '../../commands/AddObjectCommand.js';

function ContinuousLines(editor) {
   const strings = editor.strings;

   const viewport = document.querySelector('canvas');

   const container = new UIPanel();
   container.setId('lines');

   container.dom.addEventListener('mousedown', (e) => {
      e.stopPropagation();
   });

   //* Camera
   const aspect = editor.camera.aspect;
   const camera = new THREE.OrthographicCamera(-aspect, aspect);
   camera.name = 'Drowing Camera';
   camera.position.set(0, 0, 1);

   editor.viewportCamera = editor.camera;

   //* lines
   const lines = new UIButton();
   lines.addClass('center');

   const linesIcon = document.createElement('img');
   linesIcon.alt = strings.getKey('lines');
   linesIcon.src = 'images/lines.svg';

   lines.dom.appendChild(linesIcon);

   let active = false;

   let MAX_POINTS = 150;
   const mouse = new THREE.Vector2();

   // geometry
   const geometry = new THREE.BufferGeometry();

   // attributes
   let positions = new Float32Array(MAX_POINTS * 3); // 3 vertices per point
   geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

   // // draw range
   // let drawCount = 1; // draw the first 2 points, only
   // geometry.setDrawRange(0, drawCount);

   // material
   var material = new THREE.LineBasicMaterial({
      color: 0xff0000,
      linewidth: 1,
   });

   // line
   let line = new THREE.Line(geometry, material);
   line.name = 'Track';

   positions = line.geometry.attributes.position.array;

   let x = 0;
   let y = 0;
   let z = 0;
   let index = 0;

   lines.onClick(function () {
      if (!active) {
         active = true;
         lines.addClass('selected');
         document.addEventListener('mousemove', onMouseMove, false);
         document.addEventListener('mousedown', addPoint, false);

         editor.viewportCamera = camera;
      } else {
         active = false;
         lines.removeClass('selected');
         document.removeEventListener('mousemove', onMouseMove, false);
         document.removeEventListener('mousedown', addPoint, false);
         RemoveLastLine();

         editor.viewportCamera = editor.camera;
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
      mouse.x = (event.clientX / viewport.offsetWidth) * 2 - 1;
      mouse.y = -(event.clientY / viewport.offsetHeight) * 2 + 1;
      mouse.z = 0;
      if (index > 0) {
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

   // update line
   function RemoveLastLine() {
      positions[index * 3 - 3] = positions[(index - 1) * 3 - 3];
      positions[index * 3 - 2] = positions[(index - 1) * 3 - 2];
      positions[index * 3 - 1] = positions[(index - 1) * 3 - 1];

      editor.execute(new AddObjectCommand(editor, line));
      line.geometry.attributes.position.needsUpdate = true;
   }

   container.add(lines);

   return container;
}

export { ContinuousLines };
