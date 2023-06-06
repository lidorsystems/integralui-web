import { c as css } from '../../../external/lit-element.js';

export const iuiListGroupLightStyle = css`
    /* Header Normal State */
    .iui-listgroup-header
    {
        background: var(--iui-listgroup-header-background, #e2e2e2);
        border: var(--iui-listgroup-header-border, thin solid #e2e2e2);
        color: var(--iui-listgroup-header-color, black);
    }
    /* Header Hover State */
    .iui-listgroup-header-hovered
    {
        background: var(--iui-listgroup-header-hovered-background, #e2e2e2);
        border: var(--iui-listgroup-header-hovered-border, thin solid #e2e2e2);

        animation-name: iui-listgroup-header-hovered-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-listgroup-header-hovered-animate-enter {
        0% { 
            background: var(--iui-listgroup-header-hovered-animate-enter-background-0, #e2e2e2);
            border: var(--iui-listgroup-header-hovered-animate-enter-border-0, thin solid #e2e2e2);
        }
        100% { 
            background: var(--iui-listgroup-header-hovered-animate-enter-background-100, #a5d3fa);
            border: var(--iui-listgroup-header-hovered-animate-enter-border-100, thin solid #a5d3fa);
        }
    }
    /* Header Selected State */
    .iui-listgroup-header-selected
    {
        background: var(--iui-listgroup-header-selected-background, #a5d3fa);
        border: var(--iui-listgroup-header-selected-border, thin solid #a5d3fa);
        color: var(--iui-listgroup-header-selected-color, white);

        animation-name: iui-listgroup-header-selected-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-listgroup-header-selected-animate-enter {
        0% { 
            background: var(--iui-listgroup-header-selected-animate-enter-background-0, #a5d3fa);
            border: var(--iui-listgroup-header-selected-animate-enter-border-0, thin solid #a5d3fa);
            color: var(--iui-listgroup-header-selected-animate-enter-color-0, black);
        }
        100% { 
            background: var(--iui-listgroup-header-selected-animate-enter-background-100, #0a64ad);
            border: var(--iui-listgroup-header-selected-animate-enter-border-100, thin solid #0a64ad);
            color: var(--iui-listgroup-header-selected-animate-enter-color-100, white);
        }
    }
    .iui-listgroup-content {
        background: var(--iui-listgroup-content-background, #ffffff);
        border: var(--iui-listgroup-content-border, thin solid #d9d9d9);
    }
    .iui-listgroup-header-selected .iui-listgroup-header-expand-box {
        background: var(--iui-listgroup-header-selected-expand-box-background, white);
    }
    .iui-listgroup-header-animate-select {
        background: var(--iui-listgroup-header-animate-select-background, #d9edfd);
    }
`;