import { c as css } from '../../external/lit-element.js';

export const iuiTabOfficeStyle = css`
    .iui-tab-header
    {
        background: var(--tab-header-background, transparent);
        border: var(--tab-header-border, thin solid transparent);
        color: var(--tab-header-color, black);
    }
    .iui-tab-header-hovered
    {
        background: var(--tab-header-hovered-background, transparent);
        border: var(--tab-header-hovered-border, thin solid transparent);
        color: var(--tab-header-hovered-color, black);

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
        }
        100% { 
            background: var(--tab-header-hovered-animation-background-100, #a5d3fa);
            border: var(--tab-header-hovered-animation-border-100, thin solid #a5d3fa);
        }
    }
    .iui-tab-header-selected
    {
        background: var(--tab-header-selected-background, white);
        border: var(--tab-header-selected-border, thin solid white);
        color: var(--tab-header-selected-color, #266499);
        font-weight: var(--tab-header-selected-font-weight, bold);
    }
    .iui-tab-content
    {
        background: var(--tab-content-background, white);
        border: var(--tab-content-border, 0);
    }
`;