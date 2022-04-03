import * as THREE from 'three';

import { UIPanel, UIButton, UIDiv } from '../../public/libs/ui.js';
import { AddObjectCommand } from '../../commands/AddObjectCommand.js';

function Camera(editor) {
   const strings = editor.strings;

   const container = new UIPanel();
   container.setId('camera');

   //* Camera

   const camera = new UIButton();
   camera.addClass('center');

   const cameraIcon = document.createElement('img');
   cameraIcon.alt = strings.getKey('camera');
   cameraIcon.src = 'images/camera.svg';

   camera.dom.appendChild(cameraIcon);
   container.add(camera);

   const options = new UIDiv();
   options.setClass('options');
   container.add(options);

   const toolsOptions = new UIDiv();
   toolsOptions.setClass('tools');
   options.add(toolsOptions);

   // PerspectiveCamera
   const perspectivecamera = new UIButton();
   perspectivecamera.addClass('center');

   const perspectivecameraIcon = document.createElement('img');
   perspectivecameraIcon.alt = strings.getKey('light/perspectivecamera');
   perspectivecameraIcon.src = 'images/perspectivecamera.svg';
   perspectivecamera.dom.appendChild(perspectivecameraIcon);
   perspectivecamera.onClick(function () {
      const camera = new THREE.PerspectiveCamera();
      camera.name = 'PerspectiveCamera';

      editor.execute(new AddObjectCommand(editor, camera));
   });
   toolsOptions.add(perspectivecamera);

   // OrthographicCamera
   const orthographiccamera = new UIButton();
   orthographiccamera.addClass('center');

   const orthographiccameraIcon = document.createElement('img');
   orthographiccameraIcon.alt = strings.getKey('light/orthographiccamera');
   orthographiccameraIcon.src = 'images/orthographiccamera.svg';
   orthographiccamera.dom.appendChild(orthographiccameraIcon);
   orthographiccamera.onClick(function () {
      const aspect = editor.camera.aspect;
      const camera = new THREE.OrthographicCamera(-aspect, aspect);
      camera.name = 'OrthographicCamera';

      editor.execute(new AddObjectCommand(editor, camera));
   });
   toolsOptions.add(orthographiccamera);

   return container;
}

export { Camera };
