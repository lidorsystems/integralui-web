
import { c as css } from '../../external/lit-element.js';

export const iuiDialogDefaultStyle = css`
    .iui-dialog {
        background: var(--iui-dialog-background, #ffffff);
        border: var(--iui-dialog-border, 0);
        border-color:  var(--iui-dialog-border-color, transparent);
        border-radius: var(--iui-dialog-border-radius, 1px);
        border-width: var(--iui-dialog-border-width, thin);
        bottom: 0;
        box-shadow: var(--iui-dialog-box-shadow, 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12));
        color: var(--iui-dialog-color, black);
        cursor: var(--iui-dialog-cursor, default);
        display: var(--iui-dialog-display, block);
        float: var(--iui-dialog-float, none);
        font-size: var(--iui-dialog-font-size, 1rem);
        font-style: var(--iui-dialog-font-style, normal);
        height: var(--iui-dialog-height, 400px);
        left: 0;
        max-width: var(--iui-dialog-max-width, 800px);
        min-height: var(--iui-dialog-min-height, 200px);
        min-width: var(--iui-dialog-min-width, 200px);
        opacity: var(--iui-dialog-opacity, 1);
        overflow: hidden;
        margin: var(--iui-dialog-margin, auto);
        padding: var(--iui-dialog-padding, 10px);
        position: var(--iui-dialog-position, fixed);
        right: 0;
        text-align: var(--iui-dialog-text-align, left);
        top: 0;
        white-space: nowrap;
        width: var(--iui-dialog-width, 600px);
        z-index: var(--iui-dialog-z-index, 9999999);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;

        box-shadow: 5px 5px 20px #808080;
    }
    .iui-dialog-overlay {
        background: var(--iui-dialog-overlay-background, black);
        bottom: 0;
        left: 0;
        margin: var(--iui-dialog-overlay-margin, 0);
        opacity: var(--iui-dialog-overlay-opacity, 0.2);
        padding: var(--iui-dialog-overlay-padding, 0);
        position: var(--iui-dialog-overlay-position, fixed);
        top: 0;
        right: 0;
        z-index: 9999979;
    }
    .iui-dialog-icon {
        display: inline-block;
        padding: 0;
        margin: 0;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .iui-dialog-buttons {
        position: absolute;
        top: 7px;
        right: 7px;
        z-index: 10;
    }
    .iui-dialog-button-close {
        background-image: url(../../icons/close-24.png);
        opacity: 0.4;
    }
    .iui-dialog-button-close:hover {
        opacity: 1;
    }

    /* Disabled State */
    .iui-dialog-disabled {
        opacity: var(--iui-dialog-disabled-opacity, 0.75);
        pointer-events: none;
    }

    .iui-dialog-animation {
        animation-name: dialog;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes dialog {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    .iui-overlay-animation {
        animation-name: overlay;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes overlay {
        0% { opacity: 0; }
        100% { opacity: 0.2; }
    }
`;