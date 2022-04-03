import * as THREE from 'three';

import { UIPanel, UIButton, UIDiv } from '../../public/libs/ui.js';
import { SidebarSettingsHistory } from '../sidebar/Sidebar.Settings.History';

function ToolsHistory(editor) {
   const strings = editor.strings;

   const container = new UIPanel();
   container.setId('history');

   //* History

   const history = new UIButton();
   history.addClass('center');

   const historyIcon = document.createElement('img');
   historyIcon.alt = strings.getKey('tools/history');
   historyIcon.src = 'images/history.svg';

   history.dom.appendChild(historyIcon);
   container.add(history);

   const options = new UIDiv();
   options.setClass('options');
   container.add(options);

   const toolsOptions = new UIDiv();
   toolsOptions.setClass('tools');
   options.add(toolsOptions);

   // Undo

   const undo = new UIButton();
   const undoIcon = document.createElement('img');
   undoIcon.alt = strings.getKey('tools/undo');
   undoIcon.src = 'images/undo.svg';
   undo.dom.appendChild(undoIcon);
   undo.onClick(function () {
      editor.undo();
   });
   toolsOptions.add(undo);

   // Redo

   const redo = new UIButton();
   const redoIcon = document.createElement('img');
   redoIcon.alt = strings.getKey('tools/redo');
   redoIcon.src = 'images/redo.svg';
   redo.dom.appendChild(redoIcon);
   redo.onClick(function () {
      editor.redo();
   });
   toolsOptions.add(redo);

   // history table
   const historyTable = new SidebarSettingsHistory(editor, false);
   options.add(historyTable);

   return container;
}

export { ToolsHistory };
