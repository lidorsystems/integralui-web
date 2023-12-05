import { c as css } from '../../external/lit-element.js';

export const iuiListDefaultStyle = css`
    .iui-list {
        background: var(--iui-list-background, white);
        border: var(--iui-list-border, thin solid #cecece);
        border-color:  var(--iui-list-border-color, #cecece);
        border-radius: var(--iui-list-border-radius, 1px);
        border-width: var(--iui-list-border-width, thin);
        color: var(--iui-list-color, black);
        cursor: var(--iui-list-cursor, default);
        display: var(--iui-list-display, block);
        float: var(--iui-list-float, none);
        font-size: var(--iui-list-font-size, 1rem);
        font-style: var(--iui-list-font-style, normal);
        height: var(--iui-list-height, auto);
        margin: var(--iui-list-margin, 0);
        opacity: var(--iui-list-opacity, 1);
        overflow: hidden;
        padding: var(--iui-list-padding, 1px);
        position: var(--iui-list-position, relative);
        text-align: var(--iui-list-text-align, left);
        width: var(--iui-list-width, auto);
        z-index: var(--iui-list-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-list:focus {
        outline: none !important;
    }
    .iui-list li {
        display: block;
    }

    .iui-list-block-hover, .iui-list-block-select {
        background: var(--iui-list-block-background, transparent);
        border: var(--iui-list-block-border, thin solid #cecece);
        box-shadow: var(--iui-list-block-box-shadow, 2px 3px 3px #e5e5e5);
        pointer-events: none;
        position: absolute;
        z-index: 6;
    }
    .iui-list-block-hover > div, .iui-list-block-select > div {
        background: var(--iui-list-block-panel-background, #f5f5f5);
        pointer-events: auto;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
    }

    /* Disabled State */
    .iui-list-disabled div, .iui-list-disabled ul
    {
        opacity: var(--iui-list-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
