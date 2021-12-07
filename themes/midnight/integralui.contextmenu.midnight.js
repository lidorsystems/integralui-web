import { c as css } from '../../external/lit-element.js';

const iuiContextMenuMidnightStyle = css`
    .iui-contextmenu {
        background: var(--contextmenu-background, #252526);
        border: var(--contextmenu-border, thin solid #151515);
        box-shadow: var(--contextmenu-box-shadow, 0 2px 5px #151515);
        color: var(--contextmenu-color, #cccccc);
    }
    .iui-menuitem-block {
        background: var(--contextmenu-background, #252526);
        border: var(--contextmenu-border, thin solid #151515);
    }
    .iui-contextmenuitem-root {
        border-color: var(--contextmenuitem-root-border-color, transparent);
        color: var(--contextmenuitem-root-color, #cccccc);
    }
    .iui-contextmenuitem-root-hovered {
        background: var(--contextmenuitem-root-hovered-background, #1177bb);
        border-color: var(--contextmenuitem-root-hovered-border-color, #1177bb);
        color: var(--contextmenuitem-root-hovered-color, white);
    }
    .iui-contextmenuitem-root-selected {
        background: var(--contextmenuitem-root-selected-background, #1177bb);
        border-color: var(--contextmenuitem-root-selected-border-color, #1177bb);
        color: var(--contextmenuitem-root-selected-color, white);
    }
    .iui-contextmenuitem-root-separator, .iui-contextmenuitem-separator {
        background: var(--contextmenuitem-separator-background, #252526);
    }
    .iui-contextmenuitem-root-separator > hr, .iui-contextmenuitem-separator > hr {
        background: var(--contextmenuitem-separator-line-background, #151515);
    }
`;

export { iuiContextMenuMidnightStyle };
