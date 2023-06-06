import { c as css } from '../../../external/lit-element.js';

export const iuiGroupBoxDarkStyle = css`
    /* Normal State */
    .iui-groupbox-header {
        background: var(--iui-groupbox-header-background, #323233);
        border: var(--iui-groupbox-header-border, thin solid #323233);
        color: var(--iui-groupbox-header-color, #cccccc);
    }
    /* Hover State */
    .iui-groupbox-header-hovered {
        animation-name: none;
        background: var(--iui-groupbox-header-hovered-background, #113d5c);
        border: var(--iui-groupbox-header-hovered-border, thin solid #113d5c);
        color: var(--iui-groupbox-header-hovered-color, white);
    }
    /* Selected State */
    .iui-groupbox-header-selected {
        animation-name: none;
        background: var(--iui-groupbox-header-selected-background, #0c293d);
        border: var(--iui-groupbox-header-selected-border, thin solid #0c293d);
        color: var(--iui-groupbox-header-selected-color, white);
    }
    .iui-groupbox-content {
        background: var(--iui-groupbox-content-background, #252526);
        border: var(--iui-groupbox-content-border, thin solid #151515);
        color: var(--iui-groupbox-content-color, #cccccc);
    }

    .iui-groupbox-header .iui-groupbox-header-expand-box {
        background: var(--iui-groupbox-header-expand-box-background, #cccccc);
        opacity: var(--iui-groupbox-header-expand-box-opacity, 0.5);
    }
    .iui-groupbox-header-hovered .iui-groupbox-header-expand-box {
        opacity: var(--iui-groupbox-header-hovered-expand-box-opacity, 0.75);
    }
    .iui-groupbox-header-selected .iui-groupbox-header-expand-box {
        background: var(--iui-groupbox-header-selected-expand-box-background, white);
        opacity: var(--iui-groupbox-header-selected-expand-box-opacity, 0.75);
    }
    .iui-groupbox-header-marker-down::before {
        animation-name: marker2;
        border: var(--iui-groupbox-header-marker-down-before-border, 7px solid #151515);
        border-color: var(--iui-groupbox-header-marker-down-before-border-color, transparent transparent #151515 transparent);
        left: var(--iui-groupbox-header-marker-down-before-left, 3px);
    }
    .iui-groupbox-header-marker-down::after {
        content: "";
        border: var(--iui-groupbox-header-marker-down-after-border, 5px solid #252526);
        border-color: var(--iui-groupbox-header-marker-down-after-border-color, transparent transparent #252526 transparent);
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
        0% { opacity: var(--iui-groupbox-header-marker-animation-opacity-0, 0); }
        50% { opacity: var(--iui-groupbox-header-marker-animation-opacity-80, 0.75); }
        100% { opacity: var(--iui-groupbox-header-marker-animation-opacity-100, 1); }
    }

    .iui-groupbox-header-animate-select {
        background: var(--iui-groupbox-header-animate-select-background, #113d5c);
    }
`;

