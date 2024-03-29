import { c as css } from '../../../external/lit-element.js';

export const iuiLightStyle = css`
    .iui-header-enter {
        animation-name: iui-combobox-header-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-combobox-header-animate-enter {
        0% { box-shadow: 0 0 0 transparent; }
        100% { box-shadow: 2px 3px 3px #e5e5e5; }
    } 
    .iui-header-leave {
        animation-name: iui-combobox-header-animate-leave;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-combobox-header-animate-leave {
        0% { box-shadow: 2px 3px 3px #e5e5e5; }
        100% { box-shadow: 0 0 0 transparent; }
    } 
`;