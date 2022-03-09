import { c as css } from '../../external/lit-element.js';

const iuiDialogDefaultStyle = css`
    .iui-dialog {
        background: var(--dialog-background, #ffffff);
        border: var(--dialog-border, 0);
        border-color:  var(--dialog-border-color, transparent);
        border-radius: var(--dialog-border-radius, 1px);
        border-width: var(--dialog-border-width, thin);
        bottom: 0;
        box-shadow: var(--dialog-box-shadow, 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12));
        color: var(--dialog-color, black);
        cursor: var(--dialog-cursor, default);
        display: var(--dialog-display, block);
        float: var(--dialog-float, none);
        height: var(--dialog-height, 400px);
        left: 0;
        max-width: var(--dialog-max-width, 800px);
        min-height: var(--dialog-min-height, 200px);
        min-width: var(--dialog-min-width, 200px);
        opacity: var(--dialog-opacity, 1);
        overflow: hidden;
        margin: var(--dialog-margin, auto);
        padding: var(--dialog-padding, 10px);
        position: var(--dialog-position, fixed);
        right: 0;
        top: 0;
        white-space: nowrap;
        width: var(--dialog-width, 600px);
        z-index: 9999989;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;

        box-shadow: 5px 5px 20px #808080;
    }
    .iui-dialog-overlay {
        background: var(--dialog-overlay-background, black);
        bottom: 0;
        left: 0;
        margin: var(--dialog-overlay-margin, 0);
        opacity: var(--dialog-overlay-opacity, 0.2);
        padding: var(--dialog-overlay-padding, 0);
        position: var(--dialog-overlay-position, fixed);
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
        opacity: var(--dialog-disabled-opacity, 0.75);
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

export { iuiDialogDefaultStyle };
