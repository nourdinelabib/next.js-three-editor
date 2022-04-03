import * as THREE from 'three';

import { UIPanel, UIButton } from '../../public/libs/ui.js';

function ToolsHistory(editor) {
   const signals = editor.signals;
   const strings = editor.strings;

   const container = new UIPanel();
   container.setId('menu');

   // History

   const historyIcon = document.createElement('img');
   historyIcon.alt = strings.getKey('tools/history');
   historyIcon.src = 'images/history.svg';
   const history = new UIButton();

   history.addClass('center');
   history.dom.appendChild(historyIcon);
   history.onClick(function () {
      signals.transformModeChanged.dispatch('translate');
   });
   container.add(history);

   return container;
}

export { ToolsHistory };
