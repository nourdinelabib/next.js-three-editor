import * as THREE from 'three';

import { UIPanel, UIButton, UIDiv } from '../../public/libs/ui.js';
import { AddObjectCommand } from '../../commands/AddObjectCommand.js';

function Clone(editor) {
   const strings = editor.strings;

   const container = new UIPanel();
   container.setId('clone');

   //* Clone

   const clone = new UIButton();
   clone.addClass('center');

   const cloneIcon = document.createElement('img');
   cloneIcon.alt = strings.getKey('clone');
   cloneIcon.src = 'images/clone.svg';

   clone.dom.appendChild(cloneIcon);
   container.add(clone);
   container.onClick(function () {
      let object = editor.selected;

      if (object === null || object.parent === null) return; // avoid cloning the camera or scene

      object = object.clone();

      editor.execute(new AddObjectCommand(editor, object));
   });

   return container;
}

export { Clone };
