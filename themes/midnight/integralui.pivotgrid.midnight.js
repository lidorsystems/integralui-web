import { c as css } from '../../external/lit-element.js';

const iuiPivotGridMidnightStyle = css`
    .iui-pivotgrid {
        background: var(--pivotgrid-background, #252526);
        border-color:  var(--pivotgrid-border-color, #252526);
        color: var(--pivotgrid-color, #cccccc);
    }
    .iui-pivotgrid-block {
        background: var(--pivotgrid-background, #252526);
    }
    .iui-pivotgrid-block-left, .iui-pivotgrid-block-right {
        background: var(--pivotgrid-block-fixed-background, #232324);
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
        background: var(--pivotgrid-column-fixed-background, #272a2b);
        border: var(--pivotgrid-column-fixed-border, thin solid transparent);
        color: var(--pivotgrid-column-fixed-color, #cccccc);
    }
    .iui-pivotgrid-block-top-left .iui-pivotgrid-column-header, 
    .iui-pivotgrid-block-top-right .iui-pivotgrid-column-header {
        border-bottom: thin solid #212121 !important;
    }
    .iui-pivotgrid-block-top-left .iui-pivotgrid-column-footer, 
    .iui-pivotgrid-block-top-right .iui-pivotgrid-column-footer {
        border-top: thin solid #212121 !important;
    }
    .iui-pivotgrid-block-top-left .iui-pivotgrid-column-header-hovered, 
    .iui-pivotgrid-block-top-right .iui-pivotgrid-column-header-hovered {
        background-color: #113954;
        border: thin solid #113954 !important;
        color: white;
    }
    .iui-pivotgrid-block-top-left .iui-pivotgrid-column-header-selected, 
    .iui-pivotgrid-block-top-right .iui-pivotgrid-column-header-selected {
        background-color: #0c293d;
        border: thin solid #0c293d !important;
        color: white;
    }
    .iui-pivotgrid-block-hover {
        border: thin solid #252526;
    }
    .iui-pivotgrid-column-header, .iui-pivotgrid-column-footer {
        background: var(--pivotgrid-column-background, #2a2d2e);
        border-color: var(--pivotgrid-column-border-color, transparent);
        border-right: thin solid transparent !important;
        color: var(--pivotgrid-column-color, #cccccc);
    }
    .iui-pivotgrid-column-header {
        border-bottom: thin solid #212121 !important;
    }
    .iui-pivotgrid-column-footer {
        border-top: thin solid #212121 !important;
        color: var(--pivotgrid-column-footer-color, #cccccc);
    }
    .iui-pivotgrid-column-header-hovered {
        background: var(--pivotgrid-column-header-hovered-background, #113954);
        border-color: var(--pivotgrid-colum-header-hovered-border-color, #113954);
        color: var(--pivotgrid-column-header-hovered-color, white);

        animation-name: var(--pivotgrid-column-header-hovered-animation-name, iui-pivotgrid-column-hovered-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-column-hovered-animate-enter {
        0% { background: var(--pivotgrid-animation-column-hovered-background-0, #2a2d2e); }
        100% { background: var(--pivotgrid-animation-column-hovered-background-100, #113954); }
    }
    .iui-pivotgrid-column-header-selected {
        background: var(--pivotgrid-column-header-selected-background, #0c293d);
        border-color: var(--pivotgrid-colum-header-selected-border-color, #0c293d);
        color: var(--pivotgrid-column-header-selected-color, white);

        animation-name: var(--pivotgrid-column-header-selected-animation-name, iui-pivotgrid-column-selected-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-column-selected-animate-enter {
        0% { background: var(--pivotgrid-animation-column-selected-background-0, #113954); }
        100% { background: var(--pivotgrid-animation-column-selected-background-100, #0c293d); }
    }
    .iui-pivotgrid-column-header-cell-selected {
        background: transparent;
    }
    .iui-pivotgrid-row, .iui-pivotgrid-row-fixed {
        color: var(--pivotgrid-row-color, #646464);
    }
    .iui-pivotgrid-row-hovered {
        background: var(--pivotgrid-row-hovered-background, #2a2d2e);
        color: var(--pivotgrid-row-hovered-color, #cccccc);

        animation-name: var(--pivotgrid-row-hovered-animation-name, iui-pivotgrid-row-hovered-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-row-hovered-animate-enter {
        0% { background: var(--pivotgrid-animation-row-hovered-background-0, transparent); }
        100% { background: var(--pivotgrid-animation-row-hovered-background-100, #2a2d2e); }
    }
    .iui-pivotgrid-row-selected {
        background: var(--pivotgrid-row-selected-background, #0a4369);
        border-color: var(--pivotgrid-row-selected-border-color, #0a4369);
        color: var(--pivotgrid-row-selected-color, white);

        animation-name: var(--pivotgrid-row-selected-animation-name, iui-pivotgrid-row-selected-animate-enter);
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
            background: var(--pivotgrid-animation-row-selected-background-0, #2a2d2e);
            color: var(--pivotgrid-animation-row-selected-color-0, #cccccc);
        }
        100% { 
            background: var(--pivotgrid-animation-row-selected-background-100, #0a4369);
            color: var(--pivotgrid-animation-row-selected-color-100, white);
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
        background: url(../../icons/expandbox-icons.png) no-repeat -48px 0;
        opacity: 0.25;
    }
    .iui-pivotgrid-expand-box-open:hover, .iui-pivotgrid-expand-box-close:hover {
        opacity: 0.75;
    }
    .iui-pivotgrid-expand-box-close {
        background: url(../../icons/expandbox-icons.png) no-repeat -48px -16px;
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
        background-position: -48px -128px !important;
    }
    .iui-pivotgrid .iui-sort-descending, .iui-pivotgrid .iui-sort-descending-hovered, .iui-pivotgrid .iui-sort-descending-selected {
        background-position: -32px -128px !important;
    }
`;

export { iuiPivotGridMidnightStyle };
