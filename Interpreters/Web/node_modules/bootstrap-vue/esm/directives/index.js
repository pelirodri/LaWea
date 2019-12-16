import { pluginFactory } from '../utils/plugins';
import { VBModalPlugin } from './modal';
import { VBPopoverPlugin } from './popover';
import { VBScrollspyPlugin } from './scrollspy';
import { VBTogglePlugin } from './toggle';
import { VBTooltipPlugin } from './tooltip'; // Main plugin for installing all directive plugins

export var directivesPlugin =
/*#__PURE__*/
pluginFactory({
  plugins: {
    VBModalPlugin: VBModalPlugin,
    VBPopoverPlugin: VBPopoverPlugin,
    VBScrollspyPlugin: VBScrollspyPlugin,
    VBTogglePlugin: VBTogglePlugin,
    VBTooltipPlugin: VBTooltipPlugin
  }
});