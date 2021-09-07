import { c as css } from '../external/lit-element.js';

const iuiScrollBarStyle = css`
    .iui-scrollbar-vertical {
        background: var(--scrollbar-vertical-background, #f5f5f5);
        border: var(--scrollbar-horizontal-border, 0);
        border-color:  var(--scrollbar-border-color, #f5f5f5);
        border-left: var(--scrollbar-vertical-border-left, thin solid #f5f5f5);
        border-radius: var(--scrollbar-vertical-border-radius, 1px);
        border-width: var(--scrollbar-vertical-border-width, thin);
        cursor: var(--scrollbar-vertical-cursor, default);
        display: var(--scrollbar-vertical-display, block);
        height: var(--scrollbar-vertical-height, auto);
        margin: var(--scrollbar-vertical-margin, 0);
        opacity: var(--scrollbar-vertical-opacity, 1);
        overflow: hidden;
        padding: var(--scrollbar-vertical-padding, 2px);
        position: var(--scrollbar-vertical-position, absolute);
        top: 0;
        width: var(--scrollbar-vertical-width, 11px);
        z-index: 99;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    /*.iui-scrollbar-vertical:hover {
        background: var(--scrollbar-vertical-hover-background, #eaeaea);
        border-left: var(--scrollbar-vertical-hover-border-left, thin solid #dadada);
    }*/
    .iui-scrollbar-vertical-thumb {
        background: var(--scrollbar-thumb-background, #d5d5d5);
        border: var(--scrollbar-thumb-border, thin solid #c5c5c5);
        border-radius: var(--scrollbar-thumb-border-radius, 2px);
        position: absolute;
        top: 2px;
        width: var(--scrollbar-thumb-width, 9px);
        z-index: 99;
    }
    .iui-scrollbar-vertical-thumb:hover {
        background: var(--scrollbar-thumb-hover-background, #c5c5c5);
        border: var(--scrollbar-thumb-hover-border-color, thin solid #a1a1a1);
    }
    .iui-scrollbar-horizontal {
        background: var(--scrollbar-horizontal-background, #f5f5f5);
        border: var(--scrollbar-horizontal-border, 0);
        border-color:  var(--scrollbar-border-color, #f5f5f5);
        border-radius: var(--scrollbar-horizontal-border-radius, 1px);
        border-top: var(--scrollbar-horizontal-border-top, thin solid #f5f5f5);
        border-width: var(--scrollbar-horizontal-border-width, thin);
        bottom: 0;
        cursor: var(--scrollbar-horizontal-cursor, default);
        display: var(--scrollbar-horizontal-display, block);
        height: var(--scrollbar-horizontal-height, 11px);
        margin: var(--scrollbar-horizontal-margin, 0);
        opacity: var(--scrollbar-horizontal-opacity, 1);
        overflow: hidden;
        padding: var(--scrollbar-horizontal-padding, 2px);
        position: var(--scrollbar-horizontal-position, absolute);
        width: var(--scrollbar-horizontal-width, auto);
        z-index: 99;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    /*.iui-scrollbar-horizontal:hover {
        background: var(--scrollbar-horizontal-hover-background, #eaeaea);
        border-top: var(--scrollbar-horizontal-hover-border-top, thin solid #dadada);
    }*/
    .iui-scrollbar-horizontal-thumb {
        background: var(--scrollbar-thumb-background, #d5d5d5);
        border: var(--scrollbar-thumb-border, thin solid #c5c5c5);
        border-radius: var(--scrollbar-thumb-border-radius, 2px);
        height: var(--scrollbar-thumb-height, 9px);
        left: 2px;
        position: absolute;
        z-index: 99;
    }
    .iui-scrollbar-horizontal-thumb:hover {
        background: var(--scrollbar-thumb-hover-background, #c5c5c5);
        border: var(--scrollbar-thumb-hover-border-color, thin solid #a1a1a1);
    }
    .iui-scrollbar-corner {
        background: var(--scrollbar-corner-background, #f5f5f5);
        cursor: var(--scrollbar-corner-cursor, default);
        height: var(--scrollbar-corner-height, 15px);
        margin: 0;
        padding: 0;
        position: absolute;
        width: var(--scrollbar-corner-width, 15px);
        z-index: 99;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Disabled State */
    .iui-scrollbar-vertical-disabled div, .iui-scrollbar-horizontal-disabled div {
        opacity: var(--scrollbar-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiScrollBarStyle };
