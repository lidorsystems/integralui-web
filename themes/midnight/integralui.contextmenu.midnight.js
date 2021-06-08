import { c as css } from '../../external/lit-element.js';

const iuiContextMenuMidnightStyle = css`
    .iui-contextmenu {
        background-color: #252526;
        border: solid thin #151515;
        box-shadow: 0 2px 5px #151515;
        color: #cccccc;
    }
    .iui-contextmenu .iui-menuitem-block {
        background: #252526;
        border: solid thin #151515;
    }
    .iui-contextmenuitem-root {
        border-color: transparent;
        color: #cccccc;
    }
    .iui-contextmenuitem-root-hovered, .iui-contextmenuitem-root-selected {
        animation-name: none;
        background-color: #1177bb !important;
        border-color: #1177bb !important;
        color: white;
    }
    .iui-contextmenuitem-root-separator, .iui-contextmenuitem-separator {
        background-color: #252526;
    }
    .iui-contextmenuitem-root-separator > hr, .iui-contextmenuitem-separator > hr {
        background-color: #151515;
    }
`;

export { iuiContextMenuMidnightStyle };
