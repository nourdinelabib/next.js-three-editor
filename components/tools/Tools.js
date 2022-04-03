import { UIPanel } from '../../public/libs/ui.js';

import { ToolsHistory } from './Tools.History.js';

function Tools(editor) {
   const container = new UIPanel();
   container.setId('tools');

   container.add(new ToolsHistory(editor));

   return container;
}

export { Tools };
