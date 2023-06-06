import { c as css } from '../../external/lit-element.js';

export const iuiWindowDefaultStyle = css`
    .iui-window {
        background: var(--iui-window-background, #f5f5f5);
        border: var(--iui-window-border, 3px solid #cecece);
        border-color:  var(--iui-window-border-color, #cecece);
        border-radius: var(--iui-window-border-radius, 7px);
        border-width: var(--iui-window-border-width, 3px);
        color: var(--iui-window-color, black);
        cursor: var(--iui-window-cursor, default);
        display: var(--iui-window-display, block);
        height: var(--iui-window-height, auto);
        left: var(--iui-window-left, 0);
        margin: var(--iui-window-margin, 0);
        opacity: var(--iui-window-opacity, 1); /*var(--iui-window-opacity, 0.6);*/
        overflow: hidden;
        padding: var(--iui-window-padding, 0);
        position: var(--iui-window-position, absolute);
        top: var(--iui-window-top, 0);
        width: var(--iui-window-width, auto);
        z-index: var(--iui-window-z-index, 999);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;

        animation-name: iui-window-hovered-animate-leave;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-window-hovered-animate-leave {
        0% { 
            opacity: 1; 
            z-index: 1000;
        }
        100% { 
            opacity: 0.7; 
            z-index: 999;
        }
    }

    .iui-window-selected {
        animation-name: iui-window-selected-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-window-selected-animate-enter {
        0% { 
            opacity: 0.7; 
            z-index: 999;
        }
        100% { 
            opacity: 1; 
            z-index: 1000;
        }
    }

    .iui-window-header {
        background: var(--iui-window-header-background, #cecece);
        border: var(--iui-window-header-border, thin solid #cecece);
        border-color:  var(--iui-window-header-border-color, #cecece);
        border-radius: var(--iui-window-header-border-radius, 1px);
        border-width: var(--iui-window-header-border-width, thin);
        color: var(--iui-window-header-color, black);
        cursor: var(--iui-window-header-cursor, default);
        display: block;
        margin: var(--iui-window-header-margin, 0);
        overflow: hidden;
        padding: var(--iui-window-header-padding, 2px);
        position: relative;
        white-space: nowrap;
        z-index: var(--iui-window-z-index, 9);
    }
    .iui-window-icon {
        display: inline-block;
    }
    .iui-window-icon-url {
        margin: var(--iui-window-icon-margin, 0);
        vertical-align: var(--iui-window-icon-vertical-align, top);
    }
    .iui-window-title {
        border: var(--iui-window-title-border, thin solid transparent);
        display: inline-block;
        padding: var(--iui-window-title-padding, 2px);
    }
    .iui-window-header-content {
        display: inline-block;
    }
    .iui-window-header-buttons {
        background: var(--iui-window-header-background, #cecece);
        position: absolute;
        top: 2px;
        right: 0;
        z-index: 10;
    }
    .iui-window-button {
        display: inline-block;
        padding: 0;
        margin: 3px 4px;
        opacity: 0.6;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-window-button-close {
        background-image: url(../../icons/close.ico);
    }
    .iui-window-button-maximize {
        background-image: url(../../icons/window-maximized.ico);
    }
    .iui-window-button-minimize {
        background-image: url(../../icons/window-minimized.ico);
    }
    .iui-window-button-window {
        background-image: url(../../icons/window.ico);
    }
    .iui-window-button-close:hover, .iui-window-button-maximize:hover, .iui-window-button-minimize:hover, .iui-window-button-window:hover {
        opacity: 1;
    }

    .iui-window-content {
        background: var(--iui-window-content-background, transparent);
        color: var(--iui-window-content-color, black);
        display: block;
        overflow: hidden;
        padding: var(--iui-window-content-padding, 0);
        position: relative;
    }

    /* Disabled State */
    .iui-window-disabled div {
        opacity: var(--iui-window-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;