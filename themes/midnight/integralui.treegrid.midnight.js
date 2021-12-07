import { c as css } from '../../external/lit-element.js';

const iuiTreeGridMidnightStyle = css`
    .iui-treegrid {
        background: var(--treegrid-background, #252526);
        border-color:  var(--treegrid-border-color, #252526);
        color: var(--treegrid-color, #cccccc);
    }
    .iui-treegrid-block {
        background: var(--treegrid-background, #252526);
    }
    .iui-treegrid-block-left, .iui-treegrid-block-right {
        background: var(--treegrid-block-fixed-background, #232324);
    }
    .iui-treegrid-block-hover, .iui-treegrid-block-select {
        background: transparent;
        border: thin solid #151515;
        box-shadow: 2px 3px 3px #151515;
    }
    .iui-treegrid-block-hover > div, .iui-treegrid-block-select > div {
        background: #2a2d2e;
    }
    .iui-treegrid-block-top-left, .iui-treegrid-block-top-right {
        background: transparent;
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header, 
    .iui-treegrid-block-top-left .iui-treegrid-column-filter, 
    .iui-treegrid-block-top-left .iui-treegrid-column-footer, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header, 
    .iui-treegrid-block-top-right .iui-treegrid-column-filter,
    .iui-treegrid-block-top-right .iui-treegrid-column-footer {
        background: var(--treegrid-column-fixed-background, #272a2b);
        border: var(--treegrid-column-fixed-border, thin solid transparent);
        color: var(--treegrid-column-fixed-color, #cccccc);
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-filter, .iui-treegrid-block-top-right .iui-treegrid-column-filter  {
        background: var(--treegrid-column-fixed-filter-background, transparent);
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header, 
    .iui-treegrid-block-top-left .iui-treegrid-column-filter, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header,
    .iui-treegrid-block-top-right .iui-treegrid-column-filter {
        border-bottom: thin solid #212121 !important;
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-footer, 
    .iui-treegrid-block-top-right .iui-treegrid-column-footer {
        border-top: thin solid #212121 !important;
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header-hovered, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header-hovered {
        background-color: #113954;
        border: thin solid #113954 !important;
        color: white;
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header-selected, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header-selected {
        background-color: #0c293d;
        border: thin solid #0c293d !important;
        color: white;
    }
    .iui-treegrid-block-hover {
        border: thin solid #252526;
    }
    .iui-treegrid-column-header, .iui-treegrid-column-filter, .iui-treegrid-column-footer {
        background: var(--treegrid-column-background, #2a2d2e);
        border-color: var(--treegrid-column-border-color, transparent);
        border-right: thin solid transparent !important;
        color: var(--treegrid-column-color, #cccccc);
    }
    .iui-treegrid-column-filter  {
        background: var(--treegrid-column-filter-background, transparent);
    }
    .iui-treegrid-column-header, .iui-treegrid-column-filter {
        border-bottom: thin solid #212121 !important;
    }
    .iui-treegrid-column-footer {
        border-top: thin solid #212121 !important;
        color: var(--treegrid-column-footer-color, #cccccc);
    }
    .iui-treegrid-column-header-hovered {
        background: var(--treegrid-column-header-hovered-background, #113954);
        border-color: var(--treegrid-colum-header-hovered-border-color, #113954);
        color: var(--treegrid-column-header-hovered-color, white);

        animation-name: var(--treegrid-column-header-hovered-animation-name, iui-treegrid-column-hovered-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treegrid-column-hovered-animate-enter {
        0% { background: var(--treegrid-animation-column-hovered-background-0, #2a2d2e); }
        100% { background: var(--treegrid-animation-column-hovered-background-100, #113954); }
    }
    .iui-treegrid-column-header-selected {
        background: var(--treegrid-column-header-selected-background, #0c293d);
        border-color: var(--treegrid-colum-header-selected-border-color, #0c293d);
        color: var(--treegrid-column-header-selected-color, white);

        animation-name: var(--treegrid-column-header-selected-animation-name, iui-treegrid-column-selected-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treegrid-column-selected-animate-enter {
        0% { background: var(--treegrid-animation-column-selected-background-0, #113954); }
        100% { background: var(--treegrid-animation-column-selected-background-100, #0c293d); }
    }
    .iui-treegrid-column-header-cell-selected {
        background: transparent;
    }
    .iui-treegrid-row, .iui-treegrid-row-fixed {
        color: var(--treegrid-row-color, #646464);
    }
    .iui-treegrid-row-hovered {
        background: var(--treegrid-row-hovered-background, #2a2d2e);
        color: var(--treegrid-row-hovered-color, #cccccc);

        animation-name: var(--treegrid-row-hovered-animation-name, iui-treegrid-row-hovered-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treegrid-row-hovered-animate-enter {
        0% { background: var(--treegrid-animation-row-hovered-background-0, transparent); }
        100% { background: var(--treegrid-animation-row-hovered-background-100, #2a2d2e); }
    }
    .iui-treegrid-row-selected {
        background: var(--treegrid-row-selected-background, #0a4369);
        border-color: var(--treegrid-row-selected-border-color, #0a4369);
        color: var(--treegrid-row-selected-color, white);

        animation-name: var(--treegrid-row-selected-animation-name, iui-treegrid-row-selected-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treegrid-row-selected-animate-enter {
        0% { 
            background: var(--treegrid-animation-row-selected-background-0, #2a2d2e);
            color: var(--treegrid-animation-row-selected-color-0, #cccccc);
        }
        100% { 
            background: var(--treegrid-animation-row-selected-background-100, #0a4369);
            color: var(--treegrid-animation-row-selected-color-100, white);
        }
    }
    .iui-treegrid-row-cell:first-child {
        border-left: thin solid transparent;
    }
    .iui-treegrid-row-cell:last-child {
        border-right: thin solid transparent;
    }
    .iui-treegrid-lines-horizontal:not(:last-child) {
        border-bottom-color: #212121;
    }
    .iui-treegrid-lines-horizontal:last-child {
        border-bottom: thin solid #212121;
    }
    .iui-treegrid-lines-vertical {
        border-right: thin solid transparent;
    }
    .iui-treegrid-lines-both {
        border-right: thin solid transparent;
        border-bottom: thin solid #212121;
    }
    .iui-treegrid-expand-box-open {
        background: url(../../icons/expandbox-icons.png) no-repeat -48px 0;
        opacity: 0.25;
    }
    .iui-treegrid-expand-box-open:hover, .iui-treegrid-expand-box-close:hover {
        opacity: 0.75;
    }
    .iui-treegrid-expand-box-close {
        background: url(../../icons/expandbox-icons.png) no-repeat -48px -16px;
        opacity: 0.25;
    }
    .iui-treegrid-row-selected .iui-treegrid-expand-box {
        opacity: 1;
    }
    @keyframes iui-treegrid-animate-expand-box-enter {
        0% { opacity: 0; }
        100% { opacity: 0.75; }
    } 
    @keyframes iui-treegrid-animate-expand-box-leave {
        0% { opacity: 0.75; }
        100% { opacity: 0; }
    } 

    /* Animation */
    .iui-treegrid-column-animate-select {
        background: #113954;
    }
    .iui-treegrid-row-animate-select {
        background: #113d5c;
    }
    
    /* Drag Drop */
    .iui-treegrid-handle {
        background-image: var(--treegrid-handle-background-image, url(../../icons/grab-white.ico));
    }

    /* Editor */
    .iui-treegrid-editing:hover {
        background-image: var(--treegrid-editing-background-image, url(../../icons/edit-white.ico));
    }
    .iui-treegrid-editing-active {
        background-image: var(--treegrid-editing-background-image, url(../../icons/edit-white.ico));
        opacity: 1;
    }

    /* Filtering and Sorting */
    .iui-treegrid .iui-filtering, .iui-treegrid .iui-filtering-hovered, .iui-treegrid .iui-filtering-selected {
        background-position: -96px -128px;
    }
    .iui-treegrid .iui-sort-ascending, .iui-treegrid .iui-sort-ascending-hovered, .iui-treegrid .iui-sort-ascending-selected {
        background-position: -48px -128px !important;
    }
    .iui-treegrid .iui-sort-descending, .iui-treegrid .iui-sort-descending-hovered, .iui-treegrid .iui-sort-descending-selected {
        background-position: -32px -128px !important;
    }
`;

export { iuiTreeGridMidnightStyle };
