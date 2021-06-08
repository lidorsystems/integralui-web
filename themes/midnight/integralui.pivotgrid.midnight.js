import { c as css } from '../../external/lit-element.js';

const iuiPivotGridMidnightStyle = css`
    .iui-pivotgrid
    {
        background-color: #252526;
        border-color: #252526;
        color: #cccccc;
    }
    .iui-pivotgrid-block {
        background: #252526;
    }
    .iui-pivotgrid-block-left, .iui-pivotgrid-block-right
    {
        background: #232324;
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
        background-color: #272a2b;
        border: thin solid transparent !important;
        color: #cccccc;
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
    .iui-pivotgrid-column-header, .iui-pivotgrid-column-footer
    {
        background-color: #2a2d2e;
        border-color: transparent;
        border-right: thin solid transparent !important;
        color: #cccccc;
    }
    .iui-pivotgrid-column-header
    {
        border-bottom: thin solid #212121 !important;
    }
    .iui-pivotgrid-column-footer
    {
        border-top: thin solid #212121 !important;
        color: #cccccc;
    }
    .iui-pivotgrid-column-header-hovered
    {
        background-color: #113954;
        border-color: #113954;
        color: white;

        animation-name: iui-pivotgrid-column-hovered-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-column-hovered-animate-enter {
        0% { background: #2a2d2e; }
        100% { background: #113954; }
    }
    .iui-pivotgrid-column-header-selected
    {
        background-color: #0c293d;
        border-right-color: #0c293d;
        color: white;

        animation-name: iui-pivotgrid-column-selected-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-column-selected-animate-enter {
        0% { background: #113954; }
        100% { background: #0c293d; }
    }
    .iui-pivotgrid-column-header-cell-selected
    {
        background-color: transparent;
    }
    .iui-pivotgrid-row, .iui-pivotgrid-row-fixed {
        color: #646464;
    }
    .iui-pivotgrid-row-hovered
    {
        background-color: #2a2d2e;
        color: #cccccc;

        animation-name: iui-pivotgrid-row-hovered-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-row-hovered-animate-enter {
        0% { background: transparent; }
        100% { background: #2a2d2e; }
    }
    .iui-pivotgrid-row-selected
    {
        background-color: #0a4369;
        border-color: #0a4369;
        color: white;

        animation-name: iui-pivotgrid-row-selected-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-row-selected-animate-enter {
        0% { background: #2a2d2e; color: #cccccc; }
        100% { background: #0a4369; color: white; }
    }
    .iui-pivotgrid-row-cell:first-child
    {
        border-left: thin solid transparent;
    }
    .iui-pivotgrid-row-cell:last-child
    {
        border-right: thin solid transparent;
    }
    .iui-pivotgrid-lines-horizontal:not(:last-child)
    {
        border-bottom-color: #212121;
    }
    .iui-pivotgrid-lines-horizontal:last-child
    {
        border-bottom: thin solid #212121;
    }
    .iui-pivotgrid-lines-vertical
    {
        border-right: thin solid transparent;
    }
    .iui-pivotgrid-lines-both
    {
        border-right: thin solid transparent;
        border-bottom: thin solid #212121;
    }
    .iui-pivotgrid-expand-box-open
    {
        background: url(../../icons/expandbox-icons.png) no-repeat -48px 0;
        opacity: 0.25;
    }
    .iui-pivotgrid-expand-box-open:hover, .iui-pivotgrid-expand-box-close:hover {
        opacity: 0.75;
    }
    .iui-pivotgrid-expand-box-close
    {
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
    .iui-pivotgrid-column-animate-select
    {
        background: #113954;
    }
    .iui-pivotgrid-row-animate-select
    {
        background: #113d5c;
    }

    /* Filtering and Sorting */
    .iui-pivotgrid .iui-filtering, .iui-pivotgrid .iui-filtering-hovered, .iui-pivotgrid .iui-filtering-selected
    {
        background-position: -96px -128px;
    }
    .iui-pivotgrid .iui-sort-ascending, .iui-pivotgrid .iui-sort-ascending-hovered, .iui-pivotgrid .iui-sort-ascending-selected
    {
        background-position: -48px -128px !important;
    }
    .iui-pivotgrid .iui-sort-descending, .iui-pivotgrid .iui-sort-descending-hovered, .iui-pivotgrid .iui-sort-descending-selected
    {
        background-position: -32px -128px !important;
    }

    .iui-pivotgrid-handle {
        background-image: var(--pivotgrid-background-image, url(../icons/grab-white.ico));
    }
`;

export { iuiPivotGridMidnightStyle };
