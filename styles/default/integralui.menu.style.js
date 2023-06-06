
import { c as css } from '../../external/lit-element.js';

export const iuiMenuDefaultStyle = css`
    .iui-menu
    {
        background: var(--iui-menu-background, #f5f5f5);
        border: var(--iui-menu-border, 0);
        border-color:  var(--iui-menu-border-color, transparent);
        border-radius: var(--iui-menu-border-radius, 1px);
        border-width: var(--iui-menu-border-width, thin);
        color: var(--iui-menu-color, black);
        cursor: var(--iui-menu-cursor, default);
        display: var(--iui-menu-display, block);
        float: var(--iui-menu-float, none);
        height: var(--iui-menu-height, auto);
        margin: var(--iui-menu-margin, 0);
        opacity: var(--iui-menu-opacity, 1);
        overflow: visible;
        padding: var(--iui-menu-padding, 0);
        position: var(--iui-menu-position, relative);
        width: var(--iui-menu-width, auto);
        z-index: var(--iui-menu-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-menu-block, .iui-menuitem-block
    {
        background: transparent;
        list-style-type: none;
        margin: 0;
        padding: 3px;
        position: relative;
    }

    /* Disabled State */
    .iui-menu-disabled div
    {
        opacity: 0.75;
        pointer-events: none;
    }
`;
