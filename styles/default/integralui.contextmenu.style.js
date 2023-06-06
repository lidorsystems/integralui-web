
import { c as css } from '../../external/lit-element.js';

export const iuiContextMenuDefaultStyle = css`
    .iui-contextmenu {
        background: var(--iui-contextmenu-background, #f5f5f5);
        border: var(--iui-contextmenu-border, thin solid #dedede);
        border-color:  var(--iui-contextmenu-border-color, #dedede);
        border-radius: var(--iui-contextmenu-border-radius, 1px);
        border-width: var(--iui-contextmenu-border-width, thin);
        box-shadow: var(--iui-contextmenu-box-shadow, none);
        color: var(--iui-contextmenu-color, black);
        cursor: var(--iui-contextmenu-cursor, default);
        display: var(--iui-contextmenu-display, block);
        float: var(--iui-contextmenu-float, none);
        height: var(--iui-contextmenu-height, auto);
        opacity: var(--iui-contextmenu-opacity, 1);
        overflow: visible;
        margin: var(--iui-contextmenu-margin, 0);
        padding: var(--iui-contextmenu-padding, 1px);
        position: var(--iui-contextmenu-position, absolute);
        width: var(--iui-contextmenu-width, 150px);
        z-index: var(--iui-contextmenu-z-index, 9999999);
        
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-contextmenu:focus {
        outline: none !important;
    }
    .iui-contextmenu ul {
        margin: 0;
        padding: 0;
    }
    .iui-menuitem-block {
        background: var(--iui-contextmenu-background, #f5f5f5);
        border: var(--iui-contextmenu-border, thin solid #dedede);
        width: var(--iui-contextmenu-width, 150px);
    }
    .iui-contextmenuitem-root-hovered, .iui-contextmenuitem-root-selected {
        animation-name: var(--iui-contextmenuitem-root-animation-name, none);
    }
    .iui-contextmenuitem-hovered, .iui-contextmenuitem-selected {
        animation-name: var(--iui-contextmenuitem-root-animation-name, none);
    }
`;