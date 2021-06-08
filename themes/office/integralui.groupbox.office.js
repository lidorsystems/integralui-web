import { c as css } from '../../external/lit-element.js';

const iuiGroupBoxOfficeStyle = css`
    /* Normal State */
    .iui-groupbox-header {
        background: var(--groupbox-header-background, #e2e2e2);
        border: var(--groupbox-header-border, thin solid #e2e2e2);
        color: var(--groupbox-header-color, black);
    }
    /* Hover State */
    .iui-groupbox-header-hovered {
        background: var(--groupbox-header-hovered-background, #e2e2e2);
        border: var(--groupbox-header-hovered-border, thin solid #e2e2e2);

        animation-name: iui-groupbox-header-hovered-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-groupbox-header-hovered-animate-enter {
        0% { 
            background: var(--groupbox-header-hovered-animate-enter-background-0, #e2e2e2);
            border: var(--groupbox-header-hovered-animate-enter-border-0, thin solid #e2e2e2);
        }
        100% { 
            background: var(--groupbox-header-hovered-animate-enter-background-100, #a5d3fa);
            border: var(--groupbox-header-hovered-animate-enter-border-100, thin solid #a5d3fa);
        }
    }

    /* Selected State */
    .iui-groupbox-header-selected {
        background: var(--groupbox-header-selected-background, #a5d3fa);
        border: var(--groupbox-header-selected-border, thin solid #a5d3fa);
        color: var(--groupbox-header-selected-color, white);

        animation-name: iui-groupbox-header-selected-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-groupbox-header-selected-animate-enter {
        0% { 
            background: var(--groupbox-header-selected-animate-enter-background-0, #a5d3fa);
            border: var(--groupbox-header-selected-animate-enter-border-0, thin solid #a5d3fa);
            color: var(--groupbox-header-selected-animate-enter-color-0, black);
        }
        100% { 
            background: var(--groupbox-header-selected-animate-enter-background-100, #0a64ad);
            border: var(--groupbox-header-selected-animate-enter-border-100, thin solid #0a64ad);
            color: var(--groupbox-header-selected-animate-enter-color-100, white);
        }
    }
    .iui-groupbox-content {
        background: var(--groupbox-content-background, white);
        border: var(--groupbox-content-border, thin solid #d9d9d9);
    }
    .iui-groupbox-header-selected .iui-groupbox-header-expand-box {
        background: var(--groupbox-header-selected-expand-box-background, white);
    }
    .iui-groupbox-header-animate-select {
        background: var(--groupbox-header-animate-select-background, #d9edfd);
    }
`;

export { iuiGroupBoxOfficeStyle };
