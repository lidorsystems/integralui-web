import { c as css } from '../../external/lit-element.js';

export const iuiWindowDefaultStyle = css`
    .iui-window {
        background: var(--window-background, #f5f5f5);
        border: var(--window-border, 3px solid #cecece);
        border-color:  var(--window-border-color, #cecece);
        border-radius: var(--window-border-radius, 7px);
        border-width: var(--window-border-width, 3px);
        color: var(--window-color, black);
        cursor: var(--window-cursor, default);
        display: var(--window-display, block);
        height: var(--window-height, auto);
        left: var(--window-left, 0);
        margin: var(--window-margin, 0);
        opacity: var(--window-opacity, 1); /*var(--window-opacity, 0.6);*/
        overflow: hidden;
        padding: var(--window-padding, 0);
        position: var(--window-position, absolute);
        top: var(--window-top, 0);
        width: var(--window-width, auto);
        z-index: var(--window-z-index, 999);

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
        background: var(--window-header-background, #cecece);
        border: var(--window-header-border, thin solid #cecece);
        border-color:  var(--window-header-border-color, #cecece);
        border-radius: var(--window-header-border-radius, 1px);
        border-width: var(--window-header-border-width, thin);
        color: var(--window-header-color, black);
        cursor: var(--window-header-cursor, default);
        display: block;
        margin: var(--window-header-margin, 0);
        overflow: hidden;
        padding: var(--window-header-padding, 2px);
        position: relative;
        white-space: nowrap;
        z-index: var(--window-z-index, 9);
    }
    .iui-window-icon {
        display: inline-block;
    }
    .iui-window-icon-url {
        margin: var(--window-icon-margin, 0);
        vertical-align: var(--window-icon-vertical-align, top);
    }
    .iui-window-title {
        border: var(--window-title-border, thin solid transparent);
        display: inline-block;
        padding: var(--window-title-padding, 2px);
    }
    .iui-window-header-content {
        display: inline-block;
    }
    .iui-window-header-buttons {
        background: var(--window-header-background, #cecece);
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
        background: var(--window-content-background, transparent);
        color: var(--window-content-color, black);
        display: block;
        overflow: hidden;
        padding: var(--window-content-padding, 0);
        position: relative;
    }

    /* Disabled State */
    .iui-window-disabled div {
        opacity: var(--window-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;