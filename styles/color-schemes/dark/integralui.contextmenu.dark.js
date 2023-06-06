import { c as css } from '../../../external/lit-element.js';

export const iuiContextMenuDarkStyle = css`
    .iui-contextmenu {
        background: var(--iui-contextmenu-background, #252526);
        border: var(--iui-contextmenu-border, thin solid #151515);
        box-shadow: var(--iui-contextmenu-box-shadow, 0 2px 5px #151515);
        color: var(--iui-contextmenu-color, #cccccc);
    }
    .iui-menuitem-block {
        background: var(--iui-contextmenu-background, #252526);
        border: var(--iui-contextmenu-border, thin solid #151515);
    }
    .iui-contextmenuitem-root {
        border-color: var(--iui-contextmenuitem-root-border-color, transparent);
        color: var(--iui-contextmenuitem-root-color, #cccccc);
    }
    .iui-contextmenuitem-root-hovered {
        background: var(--iui-contextmenuitem-root-hovered-background, #1177bb);
        border-color: var(--iui-contextmenuitem-root-hovered-border-color, #1177bb);
        color: var(--iui-contextmenuitem-root-hovered-color, white);
    }
    .iui-contextmenuitem-root-selected {
        background: var(--iui-contextmenuitem-root-selected-background, #1177bb);
        border-color: var(--iui-contextmenuitem-root-selected-border-color, #1177bb);
        color: var(--iui-contextmenuitem-root-selected-color, white);
    }
    .iui-contextmenuitem-root-separator, .iui-contextmenuitem-separator {
        background: var(--iui-contextmenuitem-separator-background, #252526);
    }
    .iui-contextmenuitem-root-separator > hr, .iui-contextmenuitem-separator > hr {
        background: var(--iui-contextmenuitem-separator-line-background, #151515);
    }
`;