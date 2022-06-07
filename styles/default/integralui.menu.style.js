
import { c as css } from '../../external/lit-element.js';

export const iuiMenuDefaultStyle = css`
    .iui-menu
    {
        background: var(--menu-background, #f5f5f5);
        border: var(--menu-border, 0);
        border-color:  var(--menu-border-color, transparent);
        border-radius: var(--menu-border-radius, 1px);
        border-width: var(--menu-border-width, thin);
        color: var(--menu-color, black);
        cursor: var(--menu-cursor, default);
        display: var(--menu-display, block);
        float: var(--menu-float, none);
        height: var(--menu-height, auto);
        margin: var(--menu-margin, 0);
        opacity: var(--menu-opacity, 1);
        overflow: visible;
        padding: var(--menu-padding, 0);
        position: var(--menu-position, relative);
        width: var(--menu-width, auto);
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
