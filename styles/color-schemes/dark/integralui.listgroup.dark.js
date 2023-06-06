import { c as css } from '../../../external/lit-element.js';

export const iuiListGroupDarkStyle = css`
    .iui-listgroup {
        background: var(--iui-listgroup-background, #252526);
        color: var(--iui-listgroup-color, #cccccc);
    }
    /* Normal State */
    .iui-listgroup-header {
        background: var(--iui-listgroup-header-background, #323233);
        border: var(--iui-listgroup-header-border, thin solid #323233);
        color: var(--iui-listgroup-header-color, #cccccc);
    }
    /* Hover State */
    .iui-listgroup-header-hovered {
        animation-name: none;
        background: var(--iui-listgroup-header-hovered-background, #113d5c);
        border: var(--iui-listgroup-header-hovered-border, thin solid #113d5c);
        color: var(--iui-listgroup-header-hovered-color, white);
    }
    /* Selected State */
    .iui-listgroup-header-selected {
        animation-name: none;
        background: var(--iui-listgroup-header-selected-background, #0c293d);
        border: var(--iui-listgroup-header-selected-border, thin solid #0c293d);
        color: var(--iui-listgroup-header-selected-color, white);
    }
    .iui-listgroup-content {
        background: var(--iui-listgroup-content-background, #252526);
        border: var(--iui-listgroup-content-border, thin solid #151515);
        color: var(--iui-listgroup-content-color, #cccccc);
    }

    .iui-listgroup-header .iui-listgroup-header-expand-box {
        background: var(--iui-listgroup-header-expand-box-background, #cccccc);
        opacity: var(--iui-listgroup-header-expand-box-opacity, 0.5);
    }
    .iui-listgroup-header-hovered .iui-listgroup-header-expand-box {
        opacity: var(--iui-listgroup-header-hovered-expand-box-opacity, 0.75);
    }
    .iui-listgroup-header-selected .iui-listgroup-header-expand-box {
        background: var(--iui-listgroup-header-selected-expand-box-background, white);
        opacity: var(--iui-listgroup-header-selected-expand-box-opacity, 0.75);
    }
    .iui-listgroup-header-marker-down::before {
        animation-name: marker2;
        border: var(--iui-listgroup-header-marker-down-before-border, 7px solid #151515);
        border-color: var(--iui-listgroup-header-marker-down-before-border-color, transparent transparent #151515 transparent);
        left: var(--iui-listgroup-header-marker-down-before-left, 3px);
    }
    .iui-listgroup-header-marker-down::after {
        content: "";
        border: var(--iui-listgroup-header-marker-down-after-border, 5px solid #252526);
        border-color: var(--iui-listgroup-header-marker-down-after-border-color, transparent transparent #252526 transparent);
        z-index: 2;

        animation-name: marker;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.75s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes marker2 {
        0% { opacity: var(--iui-listgroup-header-marker-animation-opacity-0, 0); }
        50% { opacity: var(--iui-listgroup-header-marker-animation-opacity-80, 0.75); }
        100% { opacity: var(--iui-listgroup-header-marker-animation-opacity-100, 1); }
    }

    .iui-listgroup-header-animate-select {
        background: var(--iui-listgroup-header-animate-select-background, #113d5c);
    }
`;