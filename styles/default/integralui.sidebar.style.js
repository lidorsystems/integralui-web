
import { c as css } from '../../external/lit-element.js';

export const iuiSideBarDefaultStyle = css`
    .iui-sidebar {
        color: var(--sidebar-color, black);
        cursor: var(--sidebar-cursor, default);
        display: var(--sidebar-display, block);
        float: var(--sidebar-float, none);
        height: var(--sidebar-height, auto);
        margin: var(--sidebar-margin, 0);
        opacity: var(--sidebar-opacity, 1);
        overflow: visible; /* hidden; */
        padding: 0;
        position: var(--sidebar-position, absolute);
        width: var(--sidebar-width, auto);
        z-index: var(--sidebar-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-sidebar-block {
        background: var(--sidebar-background, #ededed);
        border: var(--sidebar-border, thin solid #d5d5d5);
        border-color:  var(--sidebar-border-color, #d5d5d5);
        border-radius: var(--sidebar-border-radius, 1px);
        border-width: var(--sidebar-border-width, thin);
        display: inline-block;
        overflow: hidden;
        position: absolute;
        vertical-align: top;
    }
    .iui-sidebar-block > ul {
        position: absolute;
        list-style: none;
        list-style-type: none;
        margin: 0;
        padding: 0;
        white-space: nowrap;
    }
    .iui-sidebar-content {
        background: var(--sidebar-content-background, #f5f5f5);
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        z-index: var(--sidebar-content-z-index, 2);
    }
    .iui-sidebar-content-popup {
        z-index: var(--sidebar-content-popup-z-index, 999);
    }
    .iui-sidebar-content-resize {
        background: var(--sidebar-content-resize-background, #fefefe);
    }
    .iui-sidebar-content-block {
        background: var(--sidebar-content-block-background, white);
        border: var(--sidebar-content-border, thin solid #d5d5d5);
        border-color: var(--sidebar-content-border-color, #d5d5d5);
        cursor: var(--sidebar-cursor, default);
        height: calc(100% - 2px);
        overflow: hidden;
        width: calc(100% - 2px);
    }
    .iui-sidebar-content-bottom {
        cursor: ns-resize;
        padding: var(--sidebar-content-bottom-padding, 4px 0 0 0);
    }
    .iui-sidebar-content-left {
        cursor: ew-resize;
        padding: var(--sidebar-content-left-padding, 0 4px 0 0);
    }
    .iui-sidebar-content-right {
        cursor: ew-resize;
        padding: var(--sidebar-content-right-padding, 0 0 0 4px);
    }
    .iui-sidebar-content-top {
        cursor: ns-resize;
        padding: var(--sidebar-content-top-padding, 0 0 4px 0);
    }
    .iui-sidebar-header {
        background: var(--sidebar-header-background, #e5e5e5);
        border: var(--sidebar-header-border, thin solid #c5c5c5);
        border-color: var(--sidebar-header-border-color, #c5c5c5);
        color: var(--sidebar-header-color, black);
        overflow: hidden;
        padding: var(--sidebar-header-padding, 5px);
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .iui-sidebar-button {
        display: inline-block;
        height: 16px;
        padding: 0;
        opacity: 0.6;
        position: absolute;
        vertical-align: middle;
        width: 16px;
    }
    .iui-sidebar-button:hover {
        opacity: 1;
    }
    .iui-sidebar-button-pin {
        background-image: url(../../icons/pin.ico);
    }
    .iui-sidebar-button-pin-set {
        transform: rotate(45deg);
    }

    .iui-sidebar-line {
        background: var(--sidebar-line-background, #808080);
        display: var(--sidebar-line-display, none);
        left: 0;
        position: absolute;
        top: 0;
        z-index: 5;
    }

    /* Disabled State */
    .iui-sidebar-disabled div {
        opacity: var(--sidebar-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
