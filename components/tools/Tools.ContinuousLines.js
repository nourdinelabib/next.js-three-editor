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
   let mouse = [];

   // geometry
   const geometry = new THREE.BufferGeometry();

   // attributes
   let positions = new Float32Array(MAX_POINTS * 3); // 3 vertices per point
   geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));

   // draw range
   let drawCount = 2; // draw the first 2 points, only
   geometry.setDrawRange(0, drawCount);

   // material
   var material = new THREE.LineBasicMaterial({
      color: 0xff0000,
      linewidth: 1,
   });

   // line
   const line = new THREE.Line(geometry, material);
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
         editor.execute(new AddObjectCommand(editor, line));

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
      positions[drawCount * 3 - 3] = mouse.x;
      positions[drawCount * 3 - 2] = mouse.y;
      positions[drawCount * 3 - 1] = mouse.z;
      line.geometry.attributes.position.needsUpdate = true;
      editor.execute(new AddObjectCommand(editor, line));
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
      positions[index++] = x;
      positions[index++] = y;
      positions[index++] = z;

      x += (Math.random() - 0.5) * 30;
      y += (Math.random() - 0.5) * 30;
      z += (Math.random() - 0.5) * 30;
      drawCount++;
      line.geometry.setDrawRange(0, drawCount);
      updateLine();
   }

   // container.onClick(function () {
   //    let MAX_POINTS = 500;

   //    // geometry
   //    const geometry = new THREE.BufferGeometry();

   //    // attributes
   //    let positions = new Float32Array(MAX_POINTS * 3); // 3 vertices per point
   //    geometry.addAttribute(
   //       'position',
   //       new THREE.BufferAttribute(positions, 3)
   //    );

   //    // draw range
   //    const drawCount = 2; // draw the first 2 points, only
   //    geometry.setDrawRange(0, drawCount);

   //    // material
   //    var material = new THREE.LineBasicMaterial({
   //       color: 0xff0000,
   //       linewidth: 1,
   //    });

   //    // line
   //    const line = new THREE.Line(geometry, material);
   //    line.name = 'Track';

   //    positions = line.geometry.attributes.position.array;

   //    let x = 0;
   //    let y = 0;
   //    let z = 0;
   //    let index = 0;

   //    for (let i = 0, l = MAX_POINTS; i < l; i++) {
   //       positions[index++] = x;
   //       positions[index++] = y;
   //       positions[index++] = z;

   //       x += (Math.random() - 0.5) * 30;
   //       y += (Math.random() - 0.5) * 30;
   //       z += (Math.random() - 0.5) * 30;
   //    }
   //    line.geometry.setDrawRange(0, 2);

   //    editor.execute(new AddObjectCommand(editor, line));
   // });

   // // update line
   // function updateLine() {
   //    positions[count * 3 - 3] = mouse.x;
   //    positions[count * 3 - 2] = mouse.y;
   //    positions[count * 3 - 1] = mouse.z;
   //    line.geometry.attributes.position.needsUpdate = true;
   // }

   // // mouse move handler
   // function onMouseMove(event) {
   //    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
   //    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
   //    mouse.z = 0;
   //    mouse.unproject(camera);
   //    if (count !== 0) {
   //       updateLine();
   //    }
   // }

   // // add point
   // function addPoint(event) {
   //    positions[count * 3 + 0] = mouse.x;
   //    positions[count * 3 + 1] = mouse.y;
   //    positions[count * 3 + 2] = mouse.z;
   //    count++;
   //    line.geometry.setDrawRange(0, count);
   //    updateLine();
   // }

   container.add(lines);

   return container;
}

export { ContinuousLines };
