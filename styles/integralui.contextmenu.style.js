import { c as css } from '../external/lit-element.js';

const iuiContextMenuDefaultStyle = css`
    .iui-contextmenu {
        background: var(--contextmenu-background, #f5f5f5);
        border: var(--contextmenu-border, thin solid #dedede);
        border-color:  var(--contextmenu-border-color, #dedede);
        border-radius: var(--contextmenu-border-radius, 1px);
        border-width: var(--contextmenu-border-width, thin);
        box-shadow: var(--contextmenu-box-shadow, none);
        color: var(--contextmenu-color, black);
        cursor: var(--contextmenu-cursor, default);
        display: var(--contextmenu-display, block);
        float: var(--contextmenu-float, none);
        height: var(--contextmenu-height, auto);
        opacity: var(--contextmenu-opacity, 1);
        overflow: visible;
        margin: var(--contextmenu-margin, 0);
        padding: var(--contextmenu-padding, 1px);
        position: var(--contextmenu-position, absolute);
        width: var(--contextmenu-width, 150px);
        z-index: 9999999;
        
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
        background: var(--contextmenu-background, #f5f5f5);
        border: var(--contextmenu-border, thin solid #dedede);
        width: var(--contextmenu-width, 150px);
    }
    .iui-contextmenuitem-root-hovered, .iui-contextmenuitem-root-selected {
        animation-name: var(--contextmenuitem-root-animation-name, none);
    }
    .iui-contextmenuitem-hovered, .iui-contextmenuitem-selected {
        animation-name: var(--contextmenuitem-root-animation-name, none);
    }
`;

export { iuiContextMenuDefaultStyle };
