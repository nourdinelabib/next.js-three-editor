import * as THREE from 'three';

import { UIPanel, UIButton, UIDiv } from '../../public/libs/ui.js';
import { AddObjectCommand } from '../../commands/AddObjectCommand.js';

function Mesh(editor) {
   const signals = editor.signals;
   const strings = editor.strings;

   const container = new UIPanel();
   container.setId('mesh');

   //* Mesh

   const mesh = new UIButton();
   mesh.addClass('center');

   const meshIcon = document.createElement('img');
   meshIcon.alt = strings.getKey('mesh');
   meshIcon.src = 'images/mesh.svg';

   mesh.dom.appendChild(meshIcon);
   container.add(mesh);

   const options = new UIDiv();
   options.setClass('options');
   container.add(options);

   const toolsOptions = new UIDiv();
   toolsOptions.setClass('tools');
   options.add(toolsOptions);

   // Plane
   const plane = new UIButton();
   plane.addClass('center');

   const planeIcon = document.createElement('img');
   planeIcon.alt = strings.getKey('mesh/plane');
   planeIcon.src = 'images/plane.svg';
   plane.dom.appendChild(planeIcon);
   plane.onClick(function () {
      const geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
      const material = new THREE.MeshStandardMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = 'Plane';

      editor.execute(new AddObjectCommand(editor, mesh));
   });
   toolsOptions.add(plane);

   // Box

   const box = new UIButton();
   box.addClass('center');

   const boxIcon = document.createElement('img');
   boxIcon.alt = strings.getKey('mesh/box');
   boxIcon.src = 'images/box.svg';
   box.dom.appendChild(boxIcon);
   box.onClick(function () {
      const geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
      mesh.name = 'Box';

      editor.execute(new AddObjectCommand(editor, mesh));
   });
   toolsOptions.add(box);

   // Circle

   const circle = new UIButton();
   circle.addClass('center');

   const circleIcon = document.createElement('img');
   circleIcon.alt = strings.getKey('mesh/circle');
   circleIcon.src = 'images/circle.svg';
   circle.dom.appendChild(circleIcon);
   circle.onClick(function () {
      const geometry = new THREE.CircleGeometry(1, 32, 0, Math.PI * 2);
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
      mesh.name = 'Circle';

      editor.execute(new AddObjectCommand(editor, mesh));
   });
   toolsOptions.add(circle);

   // Sphere

   const sphere = new UIButton();
   sphere.addClass('center');

   const sphereIcon = document.createElement('img');
   sphereIcon.alt = strings.getKey('mesh/sphere');
   sphereIcon.src = 'images/sphere.svg';
   sphere.dom.appendChild(sphereIcon);
   sphere.onClick(function () {
      const geometry = new THREE.SphereGeometry(
         1,
         32,
         16,
         0,
         Math.PI * 2,
         0,
         Math.PI
      );
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
      mesh.name = 'Sphere';

      editor.execute(new AddObjectCommand(editor, mesh));
   });
   toolsOptions.add(sphere);

   // Ring
   const ring = new UIButton();
   ring.addClass('center');

   const ringIcon = document.createElement('img');
   ringIcon.alt = strings.getKey('mesh/ring');
   ringIcon.src = 'images/ring.svg';
   ring.dom.appendChild(ringIcon);
   ring.onClick(function () {
      const geometry = new THREE.RingGeometry(0.5, 1, 32, 1, 0, Math.PI * 2);
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
      mesh.name = 'Ring';

      editor.execute(new AddObjectCommand(editor, mesh));
   });
   toolsOptions.add(ring);

   // Torus

   const torus = new UIButton();
   torus.addClass('center');

   const torusIcon = document.createElement('img');
   torusIcon.alt = strings.getKey('mesh/torus');
   torusIcon.src = 'images/torus.svg';
   torus.dom.appendChild(torusIcon);
   torus.onClick(function () {
      const geometry = new THREE.TorusGeometry(1, 0.4, 42, 32, Math.PI * 2);
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
      mesh.name = 'Torus';

      editor.execute(new AddObjectCommand(editor, mesh));
   });
   toolsOptions.add(torus);

   // Cylinder

   const cylinder = new UIButton();
   cylinder.addClass('center');

   const cylinderIcon = document.createElement('img');
   cylinderIcon.alt = strings.getKey('mesh/cylinder');
   cylinderIcon.src = 'images/cylinder.svg';
   cylinder.dom.appendChild(cylinderIcon);
   cylinder.onClick(function () {
      const geometry = new THREE.CylinderGeometry(
         1,
         1,
         1,
         32,
         1,
         false,
         0,
         Math.PI * 2
      );
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
      mesh.name = 'Cylinder';

      editor.execute(new AddObjectCommand(editor, mesh));
   });
   toolsOptions.add(cylinder);

   // Tetrahedron

   const tetrahedron = new UIButton();
   tetrahedron.addClass('center');

   const tetrahedronIcon = document.createElement('img');
   tetrahedronIcon.alt = strings.getKey('mesh/tetrahedron');
   tetrahedronIcon.src = 'images/tetrahedron.svg';
   tetrahedron.dom.appendChild(tetrahedronIcon);
   tetrahedron.onClick(function () {
      const geometry = new THREE.TetrahedronGeometry(1, 0);
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
      mesh.name = 'Tetrahedron';

      editor.execute(new AddObjectCommand(editor, mesh));
   });
   toolsOptions.add(tetrahedron);

   // Icosahedron

   const icosahedron = new UIButton();
   icosahedron.addClass('center');

   const icosahedronIcon = document.createElement('img');
   icosahedronIcon.alt = strings.getKey('mesh/icosahedron');
   icosahedronIcon.src = 'images/icosahedron.svg';
   icosahedron.dom.appendChild(icosahedronIcon);
   icosahedron.onClick(function () {
      const geometry = new THREE.IcosahedronGeometry(1, 0);
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
      mesh.name = 'Icosahedron';

      editor.execute(new AddObjectCommand(editor, mesh));
   });
   toolsOptions.add(icosahedron);

   // Lathe
   const lathe = new UIButton();
   lathe.addClass('center');

   const latheIcon = document.createElement('img');
   latheIcon.alt = strings.getKey('mesh/lathe');
   latheIcon.src = 'images/lathe.svg';
   lathe.dom.appendChild(latheIcon);
   lathe.onClick(function () {
      const geometry = new THREE.LatheGeometry();
      const mesh = new THREE.Mesh(
         geometry,
         new THREE.MeshStandardMaterial({ side: THREE.DoubleSide })
      );
      mesh.name = 'Lathe';

      editor.execute(new AddObjectCommand(editor, mesh));
   });
   toolsOptions.add(lathe);

   // Octahedron
   const octahedron = new UIButton();
   octahedron.addClass('center');

   const octahedronIcon = document.createElement('img');
   octahedronIcon.alt = strings.getKey('mesh/octahedron');
   octahedronIcon.src = 'images/octahedron.svg';
   octahedron.dom.appendChild(octahedronIcon);
   octahedron.onClick(function () {
      const geometry = new THREE.OctahedronGeometry(1, 0);
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
      mesh.name = 'Octahedron';

      editor.execute(new AddObjectCommand(editor, mesh));
   });
   toolsOptions.add(octahedron);

   // Dodecahedron

   const dodecahedron = new UIButton();
   dodecahedron.addClass('center');

   const dodecahedronIcon = document.createElement('img');
   dodecahedronIcon.alt = strings.getKey('mesh/dodecahedron');
   dodecahedronIcon.src = 'images/dodecahedron.svg';
   dodecahedron.dom.appendChild(dodecahedronIcon);
   dodecahedron.onClick(function () {
      const geometry = new THREE.DodecahedronGeometry(1, 0);
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
      mesh.name = 'Dodecahedron';

      editor.execute(new AddObjectCommand(editor, mesh));
   });
   toolsOptions.add(dodecahedron);

   return container;
}

export { Mesh };
