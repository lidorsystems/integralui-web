
import { c as css } from '../../external/lit-element.js';

export const iuiListViewDefaultStyle = css`
    .iui-listview {
        background: var(--iui-listview-background, white);
        border: var(--iui-listview-border, thin solid #cecece);
        border-color:  var(--iui-listview-border-color, #cecece);
        border-radius: var(--iui-listview-border-radius, 1px);
        border-width: var(--iui-listview-border-width, thin);
        color: var(--iui-listview-color, black);
        cursor: var(--iui-listview-cursor, default);
        display: var(--iui-listview-display, block);
        float: var(--iui-listview-float, none);
        font-size: var(--iui-listview-font-size, 1rem);
        font-style: var(--iui-listview-font-style, normal);
        height: var(--iui-listview-height, auto);
        margin: var(--iui-listview-margin, 0);
        opacity: var(--iui-listview-opacity, 1);
        overflow: hidden;
        padding: var(--iui-listview-padding, 1px);
        position: var(--iui-listview-position, relative);
        text-align: var(--iui-listview-text-align, left);
        width: var(--iui-listview-width, auto);
        z-index: var(--iui-listview-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Disabled State */
    .iui-listview-disabled div, .iui-listview-disabled ul
    {
        opacity: var(--iui-listview-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

