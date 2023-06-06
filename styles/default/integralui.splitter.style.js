
import { c as css } from '../../external/lit-element.js';

export const iuiSplitterDefaultStyle = css`
    .iui-splitter {
        background: var(--iui-splitter-background, transparent);
        border: var(--iui-splitter-border, 0);
        border-color:  var(--iui-splitter-border-color, transparent);
        border-radius: var(--iui-splitter-border-radius, 1px);
        border-width: var(--iui-splitter-border-width, thin);
        color: var(--iui-splitter-color, black);
        cursor: var(--iui-splitter-cursor, default);
        display: var(--iui-splitter-display, block);
        float: var(--iui-splitter-float, none);
        height: var(--iui-splitter-height, 100%);
        margin: var(--iui-splitter-margin, 0);
        opacity: var(--iui-splitter-opacity, 1);
        overflow: hidden;
        padding: var(--iui-splitter-padding, 0);
        position: var(--iui-splitter-position, relative);
        width: var(--iui-splitter-width, 100%);
        z-index: var(--iui-splitter-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-splitter:hover {
        background: var(--iui-splitter-hover-background, transparent);
    }
    .iui-splitter-bar {
        background: var(--iui-splitter-bar-background, #efefef);
        border: var(--iui-splitter-bar-border, thin solid transparent);
        margin: var(--iui-splitter-bar-margin, 0);
        padding: var(--iui-splitter-bar-padding, 0);
        position: absolute;
        overflow: visible;
        z-index: 1;
    }
    .iui-splitter-bar-horizontal {
        cursor: var(--iui-splitter-bar-horizontal-cursor, n-resize);
        border-top-color: var(--iui-splitter-bar-border-top-color, transparent);
        border-bottom-color: var(--iui-splitter-bar-border-bottom-color, transparent);
    }
    .iui-splitter-bar-vertical {
        cursor: var(--iui-splitter-bar-vertical-cursor, w-resize);
        border-left-color: var(--iui-splitter-bar-border-left-color, transparent);
        border-right-color: var(--iui-splitter-bar-border-right-color, transparent);
    }
    .iui-splitter-handle {
        /*background-image: url(../../icons/handle.png);*/
        background-repeat: repeat;
        display: block;
        margin: 0;
        padding: 0;
        vertical-align: middle;
    }
    .iui-splitter-handle-horizontal {
        cursor: var(--iui-splitter-handle-cursor, n-resize);
        height: var(--iui-splitter-handle-height, 7px);
        width: var(--iui-splitter-handle-width, 22px);
    }
    .iui-splitter-handle-vertical {
        cursor: var(--iui-splitter-handle-cursor, w-resize);
        height: var(--iui-splitter-handle-height, 22px);
        width: var(--iui-splitter-handle-width, 7px);
    }
    .iui-splitter-panel {
        background: var(--iui-splitter-panel-background, white);
        border: var(--iui-splitter-panel-border, thin solid gray);
        overflow: hidden;
        position: absolute;
        z-index: var(--iui-splitter-panel-z-index, 2);
    }

    /* Disabled State */
    .iui-splitter-disabled div {
        opacity: var(--iui-splitter-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
