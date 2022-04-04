import * as THREE from 'three';

import { UIPanel, UIButton } from '../../public/libs/ui.js';
import { AddObjectCommand } from '../../commands/AddObjectCommand.js';

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
   let mouse = new THREE.Vector3();

   // geometry
   const geometry = new THREE.BufferGeometry();

   // attributes
   let positions = new Float32Array(MAX_POINTS * 3); // 3 vertices per point
   geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));

   // draw range
   let drawCount = 1; // draw the first 2 points, only
   geometry.setDrawRange(0, drawCount);

   // material
   var material = new THREE.LineBasicMaterial({
      color: 0xffffff,
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
         editor.execute(new AddObjectCommand(editor, line));
         active = true;
         lines.addClass('selected');

         document.addEventListener('mousemove', onMouseMove);

         document.addEventListener('mousedown', addPoint);
      } else {
         active = false;
         lines.removeClass('selected');

         document.removeEventListener('mousemove', onMouseMove);
         document.removeEventListener('mousedown', addPoint);
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
      mouse.x = (event.clientX / window.innerWidth) * 4 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 4 + 1;
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
