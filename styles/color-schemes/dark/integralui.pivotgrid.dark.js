import { c as css } from '../../../external/lit-element.js';

export const iuiPivotGridDarkStyle = css`
    .iui-pivotgrid {
        background: var(--iui-pivotgrid-background, #252526);
        border-color:  var(--iui-pivotgrid-border-color, #252526);
        color: var(--iui-pivotgrid-color, #cccccc);
    }
    .iui-pivotgrid-block {
        background: var(--iui-pivotgrid-background, #252526);
    }
    .iui-pivotgrid-block-left, .iui-pivotgrid-block-right {
        background: var(--iui-pivotgrid-block-fixed-background, #232324);
    }
    .iui-pivotgrid-block-hover, .iui-pivotgrid-block-select {
        background: transparent;
        border: thin solid #151515;
        box-shadow: 2px 3px 3px #151515;
    }
    .iui-pivotgrid-block-hover > div, .iui-pivotgrid-block-select > div {
        background: #2a2d2e;
    }
    .iui-pivotgrid-block-top-left, .iui-pivotgrid-block-top-right {
        background: transparent;
    }
    .iui-pivotgrid-block-top-left .iui-pivotgrid-column-header, 
    .iui-pivotgrid-block-top-left .iui-pivotgrid-column-footer, 
    .iui-pivotgrid-block-top-right .iui-pivotgrid-column-header, 
    .iui-pivotgrid-block-top-right .iui-pivotgrid-column-footer {
        background: var(--iui-pivotgrid-column-fixed-background, #272a2b);
        border: var(--iui-pivotgrid-column-fixed-border, thin solid transparent);
        color: var(--iui-pivotgrid-column-fixed-color, #cccccc);
    }
    .iui-pivotgrid-block-top-left .iui-pivotgrid-column-header, 
    .iui-pivotgrid-block-top-right .iui-pivotgrid-column-header {
        border-bottom: thin solid #212121;
    }
    .iui-pivotgrid-block-top-left .iui-pivotgrid-column-footer, 
    .iui-pivotgrid-block-top-right .iui-pivotgrid-column-footer {
        border-top: thin solid #212121;
    }
    .iui-pivotgrid-block-top-left .iui-pivotgrid-column-header-hovered, 
    .iui-pivotgrid-block-top-right .iui-pivotgrid-column-header-hovered {
        background-color: #113954;
        border: thin solid #113954;
        color: white;
    }
    .iui-pivotgrid-block-top-left .iui-pivotgrid-column-header-selected, 
    .iui-pivotgrid-block-top-right .iui-pivotgrid-column-header-selected {
        background-color: #0c293d;
        border: thin solid #0c293d;
        color: white;
    }
    .iui-pivotgrid-block-hover {
        border: thin solid #252526;
    }
    .iui-pivotgrid-column-header, .iui-pivotgrid-column-footer {
        background: var(--iui-pivotgrid-column-background, #2a2d2e);
        border-color: var(--iui-pivotgrid-column-border-color, transparent);
        border-right: thin solid transparent;
        color: var(--iui-pivotgrid-column-color, #cccccc);
    }
    .iui-pivotgrid-column-header {
        border-bottom: thin solid #212121;
    }
    .iui-pivotgrid-column-footer {
        border-top: thin solid #212121;
        color: var(--iui-pivotgrid-column-footer-color, #cccccc);
    }
    .iui-pivotgrid-column-header-hovered {
        background: var(--iui-pivotgrid-column-header-hovered-background, #113954);
        border-color: var(--iui-pivotgrid-column-header-hovered-border-color, #113954);
        color: var(--iui-pivotgrid-column-header-hovered-color, white);

        animation-name: var(--iui-pivotgrid-column-header-hovered-animation-name, iui-pivotgrid-column-hovered-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-column-hovered-animate-enter {
        0% { background: var(--iui-pivotgrid-animation-column-hovered-background-0, #2a2d2e); }
        100% { background: var(--iui-pivotgrid-animation-column-hovered-background-100, #113954); }
    }
    .iui-pivotgrid-column-header-selected {
        background: var(--iui-pivotgrid-column-header-selected-background, #0c293d);
        border-color: var(--iui-pivotgrid-column-header-selected-border-color, #0c293d);
        color: var(--iui-pivotgrid-column-header-selected-color, white);

        animation-name: var(--iui-pivotgrid-column-header-selected-animation-name, iui-pivotgrid-column-selected-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-column-selected-animate-enter {
        0% { background: var(--iui-pivotgrid-animation-column-selected-background-0, #113954); }
        100% { background: var(--iui-pivotgrid-animation-column-selected-background-100, #0c293d); }
    }
    .iui-pivotgrid-column-header-cell-selected {
        background: transparent;
    }
    .iui-pivotgrid-row, .iui-pivotgrid-row-fixed {
        color: var(--iui-pivotgrid-row-color, #646464);
    }
    .iui-pivotgrid-row-hovered {
        background: var(--iui-pivotgrid-row-hovered-background, #2a2d2e);
        color: var(--iui-pivotgrid-row-hovered-color, #cccccc);

        animation-name: var(--iui-pivotgrid-row-hovered-animation-name, iui-pivotgrid-row-hovered-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-row-hovered-animate-enter {
        0% { background: var(--iui-pivotgrid-animation-row-hovered-background-0, transparent); }
        100% { background: var(--iui-pivotgrid-animation-row-hovered-background-100, #2a2d2e); }
    }
    .iui-pivotgrid-row-selected {
        background: var(--iui-pivotgrid-row-selected-background, #0a4369);
        border-color: var(--iui-pivotgrid-row-selected-border-color, #0a4369);
        color: var(--iui-pivotgrid-row-selected-color, white);

        animation-name: var(--iui-pivotgrid-row-selected-animation-name, iui-pivotgrid-row-selected-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-row-selected-animate-enter {
        0% { 
            background: var(--iui-pivotgrid-animation-row-selected-background-0, #2a2d2e);
            color: var(--iui-pivotgrid-animation-row-selected-color-0, #cccccc);
        }
        100% { 
            background: var(--iui-pivotgrid-animation-row-selected-background-100, #0a4369);
            color: var(--iui-pivotgrid-animation-row-selected-color-100, white);
        }
    }
    .iui-pivotgrid-row-cell:first-child {
        border-left: thin solid transparent;
    }
    .iui-pivotgrid-row-cell:last-child {
        border-right: thin solid transparent;
    }
    .iui-pivotgrid-lines-horizontal:not(:last-child) {
        border-bottom-color: #212121;
    }
    .iui-pivotgrid-lines-horizontal:last-child {
        border-bottom: thin solid #212121;
    }
    .iui-pivotgrid-lines-vertical {
        border-right: thin solid transparent;
    }
    .iui-pivotgrid-lines-both {
        border-right: thin solid transparent;
        border-bottom: thin solid #212121;
    }
    .iui-pivotgrid-expand-box-open {
        background: url(../../../icons/expandbox-icons.png) no-repeat -48px 0;
        opacity: 0.25;
    }
    .iui-pivotgrid-expand-box-open:hover, .iui-pivotgrid-expand-box-close:hover {
        opacity: 0.75;
    }
    .iui-pivotgrid-expand-box-close {
        background: url(../../../icons/expandbox-icons.png) no-repeat -48px -16px;
        opacity: 0.25;
    }
    .iui-pivotgrid-row-selected .iui-pivotgrid-expand-box {
        opacity: 1;
    }
    @keyframes iui-pivotgrid-animate-expand-box-enter {
        0% { opacity: 0; }
        100% { opacity: 0.75; }
    } 
    @keyframes iui-pivotgrid-animate-expand-box-leave {
        0% { opacity: 0.75; }
        100% { opacity: 0; }
    } 

    /* Animation */
    .iui-pivotgrid-column-animate-select {
        background: #113954;
    }
    .iui-pivotgrid-row-animate-select {
        background: #113d5c;
    }

    /* Filtering and Sorting */
    .iui-pivotgrid .iui-filtering, .iui-pivotgrid .iui-filtering-hovered, .iui-pivotgrid .iui-filtering-selected {
        background-position: -96px -128px;
    }
    .iui-pivotgrid .iui-sort-ascending, .iui-pivotgrid .iui-sort-ascending-hovered, .iui-pivotgrid .iui-sort-ascending-selected {
        background-position: -48px -128px;
    }
    .iui-pivotgrid .iui-sort-descending, .iui-pivotgrid .iui-sort-descending-hovered, .iui-pivotgrid .iui-sort-descending-selected {
        background-position: -32px -128px;
    }

    /* Sorting */
    .iui-pivotgrid-column-sort-button-up .iui-pivotgrid-column-sort-button-up-left,
    .iui-pivotgrid-column-sort-button-up .iui-pivotgrid-column-sort-button-up-right,
    .iui-pivotgrid-column-sort-button-up .iui-pivotgrid-column-sort-button-up-hline,
    .iui-pivotgrid-column-sort-button-up .iui-pivotgrid-column-sort-button-up-vline,
    .iui-pivotgrid-column-sort-button-down .iui-pivotgrid-column-sort-button-down-left,
    .iui-pivotgrid-column-sort-button-down .iui-pivotgrid-column-sort-button-down-right,
    .iui-pivotgrid-column-sort-button-down .iui-pivotgrid-column-sort-button-down-hline,
    .iui-pivotgrid-column-sort-button-down .iui-pivotgrid-column-sort-button-down-vline
    {
        background: var(--iui-pivotgrid-column-sort-button-background, #808080);
    }
    .iui-pivotgrid-column-sort-button-up-active .iui-pivotgrid-column-sort-button-up-left,
    .iui-pivotgrid-column-sort-button-up-active .iui-pivotgrid-column-sort-button-up-right,
    .iui-pivotgrid-column-sort-button-up-active .iui-pivotgrid-column-sort-button-up-hline,
    .iui-pivotgrid-column-sort-button-up-active .iui-pivotgrid-column-sort-button-up-vline,
    .iui-pivotgrid-column-sort-button-down-active .iui-pivotgrid-column-sort-button-down-left,
    .iui-pivotgrid-column-sort-button-down-active .iui-pivotgrid-column-sort-button-down-right,
    .iui-pivotgrid-column-sort-button-down-active .iui-pivotgrid-column-sort-button-down-hline,
    .iui-pivotgrid-column-sort-button-down-active .iui-pivotgrid-column-sort-button-down-vline
    {
        background: var(--iui-pivotgrid-column-sort-button-active-background, #e5e5e5);
    }
    .iui-pivotgrid-column-sort-button-up:hover .iui-pivotgrid-column-sort-button-up-left,
    .iui-pivotgrid-column-sort-button-up:hover .iui-pivotgrid-column-sort-button-up-right,
    .iui-pivotgrid-column-sort-button-up:hover .iui-pivotgrid-column-sort-button-up-hline,
    .iui-pivotgrid-column-sort-button-up:hover .iui-pivotgrid-column-sort-button-up-vline,
    .iui-pivotgrid-column-sort-button-down:hover .iui-pivotgrid-column-sort-button-down-left,
    .iui-pivotgrid-column-sort-button-down:hover .iui-pivotgrid-column-sort-button-down-right,
    .iui-pivotgrid-column-sort-button-down:hover .iui-pivotgrid-column-sort-button-down-hline,
    .iui-pivotgrid-column-sort-button-down:hover .iui-pivotgrid-column-sort-button-down-vline 
    {
        background: var(--iui-pivotgrid-column-sort-button-hover-background, #e5e5e5);
    }
`;