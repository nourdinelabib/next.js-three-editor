import * as THREE from 'three';

import { UIPanel, UIButton, UIDiv } from '../../public/libs/ui.js';
import { AddObjectCommand } from '../../commands/AddObjectCommand.js';

function Light(editor) {
   const strings = editor.strings;

   const container = new UIPanel();
   container.setId('light');

   //* Light

   const light = new UIButton();
   light.addClass('center');

   const lightIcon = document.createElement('img');
   lightIcon.alt = strings.getKey('light');
   lightIcon.src = 'images/light.svg';

   light.dom.appendChild(lightIcon);
   container.add(light);

   const options = new UIDiv();
   options.setClass('options');
   container.add(options);

   const toolsOptions = new UIDiv();
   toolsOptions.setClass('tools');
   options.add(toolsOptions);

   // AmbientLight
   const ambientlight = new UIButton();
   ambientlight.addClass('center');

   const ambientlightIcon = document.createElement('img');
   ambientlightIcon.alt = strings.getKey('light/ambientlight');
   ambientlightIcon.src = 'images/ambientlight.svg';
   ambientlight.dom.appendChild(ambientlightIcon);
   ambientlight.onClick(function () {
      const color = 0xeeeeee;

      const light = new THREE.AmbientLight(color);
      light.name = 'AmbientLight';

      editor.execute(new AddObjectCommand(editor, light));
   });
   toolsOptions.add(ambientlight);

   // DirectionalLight

   const directionallight = new UIButton();
   directionallight.addClass('center');

   const directionallightIcon = document.createElement('img');
   directionallightIcon.alt = strings.getKey('light/directionallight');
   directionallightIcon.src = 'images/directionallight.svg';
   directionallight.dom.appendChild(directionallightIcon);
   directionallight.onClick(function () {
      const color = 0xffffff;
      const intensity = 1;

      const light = new THREE.DirectionalLight(color, intensity);
      light.name = 'DirectionalLight';
      light.target.name = 'DirectionalLight Target';

      light.position.set(5, 10, 7.5);

      editor.execute(new AddObjectCommand(editor, light));
   });
   toolsOptions.add(directionallight);

   // HemisphereLight

   const hemispherelight = new UIButton();
   hemispherelight.addClass('center');

   const hemispherelightIcon = document.createElement('img');
   hemispherelightIcon.alt = strings.getKey('light/hemispherelight');
   hemispherelightIcon.src = 'images/hemispherelight.svg';
   hemispherelight.dom.appendChild(hemispherelightIcon);
   hemispherelight.onClick(function () {
      const skyColor = 0x00aaff;
      const groundColor = 0xffaa00;
      const intensity = 1;

      const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
      light.name = 'HemisphereLight';

      light.position.set(0, 10, 0);

      editor.execute(new AddObjectCommand(editor, light));
   });
   toolsOptions.add(hemispherelight);

   // PointLight

   const pointlight = new UIButton();
   pointlight.addClass('center');

   const pointlightIcon = document.createElement('img');
   pointlightIcon.alt = strings.getKey('light/pointlight');
   pointlightIcon.src = 'images/pointlight.svg';
   pointlight.dom.appendChild(pointlightIcon);
   pointlight.onClick(function () {
      const color = 0xffffff;
      const intensity = 1;
      const distance = 0;

      const light = new THREE.PointLight(color, intensity, distance);
      light.name = 'PointLight';

      editor.execute(new AddObjectCommand(editor, light));
   });
   toolsOptions.add(pointlight);

   // SpotLight

   const spotlight = new UIButton();
   spotlight.addClass('center');

   const spotlightIcon = document.createElement('img');
   spotlightIcon.alt = strings.getKey('light/spotlight');
   spotlightIcon.src = 'images/spotlight.svg';
   spotlight.dom.appendChild(spotlightIcon);
   spotlight.onClick(function () {
      const color = 0xffffff;
      const intensity = 1;
      const distance = 0;
      const angle = Math.PI * 0.1;
      const penumbra = 0;

      const light = new THREE.SpotLight(
         color,
         intensity,
         distance,
         angle,
         penumbra
      );
      light.name = 'SpotLight';
      light.target.name = 'SpotLight Target';

      light.position.set(5, 10, 7.5);

      editor.execute(new AddObjectCommand(editor, light));
   });
   toolsOptions.add(spotlight);

   return container;
}

export { Light };
