import { c as css } from '../../external/lit-element.js';

export const iuiListBoxDefaultStyle = css`
    .iui-listbox {
        background: var(--iui-listbox-background, white);
        border: var(--iui-listbox-border, thin solid #cecece);
        border-color:  var(--iui-listbox-border-color, #cecece);
        border-radius: var(--iui-listbox-border-radius, 1px);
        border-width: var(--iui-listbox-border-width, thin);
        color: var(--iui-listbox-color, black);
        cursor: var(--iui-listbox-cursor, default);
        display: var(--iui-listbox-display, block);
        float: var(--iui-listbox-float, none);
        height: var(--iui-listbox-height, auto);
        margin: var(--iui-listbox-margin, 0);
        opacity: var(--iui-listbox-opacity, 1);
        overflow: hidden;
        padding: var(--iui-listbox-padding, 1px);
        position: var(--iui-listbox-position, relative);
        width: var(--iui-listbox-width, auto);
        z-index: var(--iui-listbox-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .iui-listbox li {
        display: block;
    }

    .iui-listbox-block-hover, .iui-listbox-block-select {
        background: var(--iui-listbox-block-background, transparent);
        border: var(--iui-listbox-block-border, thin solid #cecece);
        box-shadow: var(--iui-listbox-block-box-shadow, 2px 3px 3px #e5e5e5);
        pointer-events: none;
        position: absolute;
        z-index: 99;
    }
    .iui-listbox-block-hover > div, .iui-listbox-block-select > div {
        background: var(--iui-listbox-block-panel-background, #f5f5f5);
        pointer-events: auto;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 98;
    }

    /* Disabled State */
    .iui-listbox-disabled div, .iui-listbox-disabled ul
    {
        opacity: var(--iui-listbox-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
