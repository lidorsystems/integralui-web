import { c as css } from '../external/lit-element.js';

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
        background-image: url(../icons/circular.png);
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
`;

export { iuiBaseDefaultStyle };
