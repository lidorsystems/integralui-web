import { c as css } from '../../../external/lit-element.js';

export const iuiTabDarkStyle = css`
    .iui-tab-header {
        background: var(--tab-header-background, transparent);
        border: var(--tab-header-border, thin solid transparent);
        color: var(--tab-header-color, #cccccc);
    }
    .iui-tab-header-hovered {
        background: var(--tab-header-hovered-background, transparent);
        border: var(--tab-header-hovered-border, thin solid transparent);
        color: var(--tab-header-hovered-color, #cccccc);

        animation-name: iui-tab-header-hovered-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-tab-header-hovered-animate-enter {
        0% { 
            background: var(--tab-header-hovered-animation-background-0, transparent);
            border: var(--tab-header-hovered-animation-border-0, thin solid transparent);
            color: var(--tab-header-hovered-animation-color-0, #cccccc);
        }
        100% { 
            background: var(--tab-header-hovered-animation-background-100, #0a4369);
            border: var(--tab-header-hovered-animation-border-100, thin solid #0a4369);
            color: var(--tab-header-hovered-animation-color-100, #3376b0);
        }
    }
    .iui-tab-header-selected {
        background: var(--tab-header-selected-background, #252526);
        border: var(--tab-header-selected-border, thin solid #252526);
        color: var(--tab-header-selected-color, #266499);
        font-weight: var(--tab-header-selected-font-weight, bold);
    }
    .iui-tab-content {
        background: var(--tab-content-background, #252526);
        border: var(--tab-content-border, 0);
        color: var(--tab-content-color, #cccccc);
    }
`;