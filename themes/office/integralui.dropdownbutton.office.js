import { c as css } from '../../external/lit-element.js';

const iuiDropDownButtonOfficeStyle = css`
    .iui-dropdownbutton {
        background: var(--dropdownbutton-background, #e2e2e2);
        border: var(--dropdownbutton-hovered-border, thin solid #e2e2e2);
        border-color: var(--dropdownbutton-border-color, #e2e2e2);
    }
    .iui-dropdownbutton-enter {
        animation-name: iui-dropdownbutton-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-dropdownbutton-animate-enter {
        0% { box-shadow: var(--dropdownbutton-enter-animation-box-shadow-0, 0 0 0 transparent); }
        100% { box-shadow: var(--dropdownbutton-enter-animation-box-shadow-100, 2px 3px 3px #e5e5e5); }
    } 
    .iui-dropdownbutton-leave {
        animation-name: iui-dropdownbutton-animate-leave;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-dropdownbutton-animate-leave {
        0% { box-shadow: var(--dropdownbutton-leave-animation-box-shadow-0, 2px 3px 3px #e5e5e5); }
        100% { box-shadow: var(--dropdownbutton-leave-animation-box-shadow-100, 0 0 0 transparent); }
    } 
    .iui-dropdownbutton-hovered {
        background: var(--dropdownbutton-hovered-background, #a5d3fa);
        border: var(--dropdownbutton-hovered-border, thin solid #a5d3fa);
        border-color: var(--dropdownbutton-hovered-border-color, #a5d3fa);
    }
    .iui-dropdownbutton-selected {
        background: var(--dropdownbutton-selected-background, #0a64ad);
        border: var(--dropdownbutton-selected-border, thin solid #0a64ad);
        border-color: var(--dropdownbutton-selected-border-color, #0a64ad);
        color: var(--dropdownbutton-selected-color, white);
    }
`;

export { iuiDropDownButtonOfficeStyle };
