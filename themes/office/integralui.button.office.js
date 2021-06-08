import { c as css } from '../../external/lit-element.js';

const iuiButtonOfficeStyle = css`
    .iui-button {
        background: var(--button-background, #e2e2e2);
        border: var(--button-hovered-border, thin solid #e2e2e2);
        border-color: var(--button-border-color, #e2e2e2);
    }
    .iui-button-enter {
        animation-name: iui-button-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-button-animate-enter {
        0% { box-shadow: var(--button-enter-animation-box-shadow-0, 0 0 0 transparent); }
        100% { box-shadow: var(--button-enter-animation-box-shadow-100, 2px 3px 3px #e5e5e5); }
    } 
    .iui-button-leave {
        animation-name: iui-button-animate-leave;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-button-animate-leave {
        0% { box-shadow: var(--button-leave-animation-box-shadow-0, 2px 3px 3px #e5e5e5); }
        100% { box-shadow: var(--button-leave-animation-box-shadow-100, 0 0 0 transparent); }
    } 
    .iui-button-hovered {
        background: var(--button-hovered-background, #a5d3fa);
        border: var(--button-hovered-border, thin solid #a5d3fa);
        border-color: var(--button-hovered-border-color, #a5d3fa);
    }
    .iui-button-selected {
        background: var(--button-selected-background, #0a64ad);
        border: var(--button-selected-border, thin solid #0a64ad);
        border-color: var(--button-selected-border-color, #0a64ad);
        color: var(--button-selected-color, white);
    }
`;

export { iuiButtonOfficeStyle };
