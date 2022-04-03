import { UIPanel } from '../../public/libs/ui.js';

import { ToolsHistory } from './Tools.History.js';
import { Mesh } from './Tools.Mesh.js';
import { Light } from './Tools.Light.js';

function Tools(editor) {
   const container = new UIPanel();
   container.setId('tools');

   container.add(new ToolsHistory(editor));
   container.add(new Mesh(editor));
   container.add(new Light(editor));

   return container;
}

export { Tools };
