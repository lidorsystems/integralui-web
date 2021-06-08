import { c as css } from '../external/lit-element.js';

const iuiSplitterDefaultStyle = css`
    .iui-splitter {
        background: var(--splitter-background, transparent);
        border: var(--splitter-border, 0 solid transparent);
        color: var(--listbox-color, black);
        cursor: var(--splitter-cursor, default);
        height: 100%;
        margin: var(--splitter-margin, 0);
        overflow: hidden;
        padding: var(--splitter-padding, 0);
        position: relative;
        width: 100%;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-splitter:hover {
        background: var(--splitter-hover-background, transparent);
    }
    .iui-splitter-bar {
        background: var(--splitter-bar-background, #efefef);
        border: var(--splitter-bar-border, thin solid transparent);
        margin: var(--splitter-bar-margin, 0);
        padding: var(--splitter-bar-padding, 0);
        position: absolute;
        overflow: visible;
        z-index: 1;
    }
    .iui-splitter-bar-horizontal {
        cursor: var(--splitter-bar-horizontal-cursor, n-resize);
        border-top-color: var(--splitter-bar-border-top-color, transparent);
        border-bottom-color: var(--splitter-bar-border-bottom-color, transparent);
    }
    .iui-splitter-bar-vertical {
        cursor: var(--splitter-bar-vertical-cursor, w-resize);
        border-left-color: var(--splitter-bar-border-left-color, transparent);
        border-right-color: var(--splitter-bar-border-right-color, transparent);
    }
    .iui-splitter-handle {
        /*background-image: url(../icons/handle.png);*/
        background-repeat: repeat;
        display: block;
        margin: 0;
        padding: 0;
        vertical-align: middle;
    }
    .iui-splitter-handle-horizontal {
        cursor: var(--splitter-handle-cursor, n-resize);
        height: var(--splitter-handle-height, 7px);
        width: var(--splitter-handle-width, 22px);
    }
    .iui-splitter-handle-vertical {
        cursor: var(--splitter-handle-cursor, w-resize);
        height: var(--splitter-handle-height, 22px);
        width: var(--splitter-handle-width, 7px);
    }
    .iui-splitter-panel {
        background: var(--splitter-panel-background, white);
        border: var(--splitter-panel-border, thin solid gray);
        overflow: hidden;
        position: absolute;
        z-index: var(--splitter-panel-z-index, 2);
    }

    /* Disabled State */
    .iui-splitter-disabled div {
        opacity: var(--splitter-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiSplitterDefaultStyle };
