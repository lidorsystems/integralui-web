import { c as css } from '../../external/lit-element.js';

const iuiBaseDefaultStyle = css`
    .iui-base-loading {
        opacity: 1;
        pointer-events: none;

        animation-name: iui-base-loading-animate;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-base-loading-animate {
        0% { opacity: 1; }
        100% { opacity: 0.4; }
    }
    .iui-base-loading-end {
        opacity: 0.4;
        pointer-events: none;

        animation-name: iui-base-loading-end-animate;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-base-loading-end-animate {
        0% { opacity: 0.4; }
        100% { opacity: 1; }
    }


    .iui-loading-icon {
        background-image: url(../../icons/circular.png);
        height: 48px;
        left: 0;
        position: absolute;
        top: 0;
        width: 48px;
        z-index: 999;

        animation-name: iui-loading-icon-animate;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-loading-icon-animate {
        0% { 
            -ms-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% { 
            -ms-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .iui-draglist {
        background: var(--draglist-background, white);
        border: var(--draglist-border, thin solid transparent);
        border-color: var(--draglist-border-color, transparent);
        box-shadow: var(--draglist-box-shadow, 0 0 0 transparent);
        margin: 0;
        opacity: 0.9;
        overflow: hidden;
        padding: 0;
        pointer-events: none;
        position: absolute;
        transition: border-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
        z-index: 999;
    }
    .iui-draglist-active {
        border-color: var(--draglist-active-border-color, #e5e5e5);
        box-shadow: var(--draglist-active-box-shadow, 0 0 3px #d5d5d5);
    }
    .iui-draglist-copy {
        background: url(../../icons/copy.ico);
        display: block;
        height: 16px;
        opacity: 0.6;
        position: absolute;
        width: 16px;
        z-index: 999;
    }
    .iui-draglist-corner {
        opacity: 1;
        position: absolute;
        right: -1px;
        bottom: -3px;
        zIndex: 999;
    }
    .iui-draglist-corner-block {
        background: var(--draglist-corner-background, #f5f5f5);
        border: var(--draglist-corner-border, thin solid #e5e5e5);
        border-color: var(--draglist-corner-border-color, #e5e5e5);
        opacity: 1;
        position: absolute;
        top: -35%;
        left: -20%;
        transform: rotate(45deg);
        width: 250%;
        height: 300%;
        zIndex: 0;
    }
    .iui-draglist-num {
        color: var(--draglist-num-color, black);
        padding: 3px;
        position: relative;
        zIndex: 1;
    }
`;

export { iuiBaseDefaultStyle };
