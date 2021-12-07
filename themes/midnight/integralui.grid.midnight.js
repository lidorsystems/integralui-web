import { c as css } from '../../external/lit-element.js';

const iuiGridMidnightStyle = css`
    .iui-grid {
        background: var(--grid-background, #252526);
        border-color:  var(--grid-border-color, #252526);
        color: var(--grid-color, #cccccc);
    }
    .iui-grid-block {
        background: var(--grid-background, #252526);
    }
    .iui-grid-block-left, .iui-grid-block-right {
        background: var(--grid-block-fixed-background, #232324);
    }
    .iui-grid-block-hover, .iui-grid-block-select {
        background: transparent;
        border: thin solid #151515;
        box-shadow: 2px 3px 3px #151515;
    }
    .iui-grid-block-hover > div, .iui-grid-block-select > div {
        background: #2a2d2e;
    }
    .iui-grid-block-top-left, .iui-grid-block-top-right {
        background: transparent;
    }
    .iui-grid-block-top-left .iui-grid-column-header, 
    .iui-grid-block-top-left .iui-grid-column-filter, 
    .iui-grid-block-top-left .iui-grid-column-footer, 
    .iui-grid-block-top-right .iui-grid-column-header, 
    .iui-grid-block-top-right .iui-grid-column-filter,
    .iui-grid-block-top-right .iui-grid-column-footer {
        background: var(--grid-column-fixed-background, #272a2b);
        border: var(--grid-column-fixed-border, thin solid transparent);
        color: var(--grid-column-fixed-color, #cccccc);
    }
    .iui-grid-block-top-left .iui-grid-column-filter, .iui-grid-block-top-right .iui-grid-column-filter  {
        background: var(--grid-column-fixed-filter-background, transparent);
    }
    .iui-grid-block-top-left .iui-grid-column-header, 
    .iui-grid-block-top-left .iui-grid-column-filter, 
    .iui-grid-block-top-right .iui-grid-column-header,
    .iui-grid-block-top-right .iui-grid-column-filter {
        border-bottom: thin solid #212121 !important;
    }
    .iui-grid-block-top-left .iui-grid-column-footer, 
    .iui-grid-block-top-right .iui-grid-column-footer {
        border-top: thin solid #212121 !important;
    }
    .iui-grid-block-top-left .iui-grid-column-header-hovered, 
    .iui-grid-block-top-right .iui-grid-column-header-hovered {
        background-color: #113954;
        border: thin solid #113954 !important;
        color: white;
    }
    .iui-grid-block-top-left .iui-grid-column-header-selected, 
    .iui-grid-block-top-right .iui-grid-column-header-selected {
        background-color: #0c293d;
        border: thin solid #0c293d !important;
        color: white;
    }
    .iui-grid-block-hover {
        border: thin solid #252526;
    }
    .iui-grid-column-header, .iui-grid-column-filter, .iui-grid-column-footer {
        background: var(--grid-column-background, #2a2d2e);
        border-color: var(--grid-column-border-color, transparent);
        border-right: thin solid transparent !important;
        color: var(--grid-column-color, #cccccc);
    }
    .iui-grid-column-filter  {
        background: var(--grid-column-filter-background, transparent);
    }
    .iui-grid-column-header, .iui-grid-column-filter {
        border-bottom: thin solid #212121 !important;
    }
    .iui-grid-column-footer {
        border-top: thin solid #212121 !important;
        color: var(--grid-column-footer-color, #cccccc);
    }
    .iui-grid-column-header-hovered {
        background: var(--grid-column-header-hovered-background, #113954);
        border-color: var(--grid-colum-header-hovered-border-color, #113954);
        color: var(--grid-column-header-hovered-color, white);

        animation-name: var(--grid-column-header-hovered-animation-name, iui-grid-column-hovered-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-grid-column-hovered-animate-enter {
        0% { background: var(--grid-animation-column-hovered-background-0, #2a2d2e); }
        100% { background: var(--grid-animation-column-hovered-background-100, #113954); }
    }
    .iui-grid-column-header-selected {
        background: var(--grid-column-header-selected-background, #0c293d);
        border-color: var(--grid-colum-header-selected-border-color, #0c293d);
        color: var(--grid-column-header-selected-color, white);

        animation-name: var(--grid-column-header-selected-animation-name, iui-grid-column-selected-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-grid-column-selected-animate-enter {
        0% { background: var(--grid-animation-column-selected-background-0, #113954); }
        100% { background: var(--grid-animation-column-selected-background-100, #0c293d); }
    }
    .iui-grid-column-header-cell-selected {
        background: transparent;
    }
    .iui-grid-row, .iui-grid-row-fixed {
        color: var(--grid-row-color, #646464);
    }
    .iui-grid-row-hovered {
        background: var(--grid-row-hovered-background, #2a2d2e);
        color: var(--grid-row-hovered-color, #cccccc);

        animation-name: var(--grid-row-hovered-animation-name, iui-grid-row-hovered-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-grid-row-hovered-animate-enter {
        0% { background: var(--grid-animation-row-hovered-background-0, transparent); }
        100% { background: var(--grid-animation-row-hovered-background-100, #2a2d2e); }
    }
    .iui-grid-row-selected {
        background: var(--grid-row-selected-background, #0a4369);
        border-color: var(--grid-row-selected-border-color, #0a4369);
        color: var(--grid-row-selected-color, white);

        animation-name: var(--grid-row-selected-animation-name, iui-grid-row-selected-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-grid-row-selected-animate-enter {
        0% { 
            background: var(--grid-animation-row-selected-background-0, #2a2d2e);
            color: var(--grid-animation-row-selected-color-0, #cccccc);
        }
        100% { 
            background: var(--grid-animation-row-selected-background-100, #0a4369);
            color: var(--grid-animation-row-selected-color-100, white);
        }
    }
    .iui-grid-row-cell:first-child {
        border-left: thin solid transparent;
    }
    .iui-grid-row-cell:last-child {
        border-right: thin solid transparent;
    }
    .iui-grid-lines-horizontal:not(:last-child) {
        border-bottom-color: #212121;
    }
    .iui-grid-lines-horizontal:last-child {
        border-bottom: thin solid #212121;
    }
    .iui-grid-lines-vertical {
        border-right: thin solid transparent;
    }
    .iui-grid-lines-both {
        border-right: thin solid transparent;
        border-bottom: thin solid #212121;
    }
    .iui-grid-expand-box-open {
        background: url(../../icons/expandbox-icons.png) no-repeat -48px 0;
        opacity: 0.25;
    }
    .iui-grid-expand-box-open:hover, .iui-grid-expand-box-close:hover {
        opacity: 0.75;
    }
    .iui-grid-expand-box-close {
        background: url(../../icons/expandbox-icons.png) no-repeat -48px -16px;
        opacity: 0.25;
    }
    .iui-grid-row-selected .iui-grid-expand-box {
        opacity: 1;
    }
    @keyframes iui-grid-animate-expand-box-enter {
        0% { opacity: 0; }
        100% { opacity: 0.75; }
    } 
    @keyframes iui-grid-animate-expand-box-leave {
        0% { opacity: 0.75; }
        100% { opacity: 0; }
    } 

    /* Animation */
    .iui-grid-column-animate-select {
        background: #113954;
    }
    .iui-grid-row-animate-select {
        background: #113d5c;
    }

    /* Filtering and Sorting */
    .iui-grid .iui-filtering, .iui-grid .iui-filtering-hovered, .iui-grid .iui-filtering-selected {
        background-position: -96px -128px;
    }
    .iui-grid .iui-sort-ascending, .iui-grid .iui-sort-ascending-hovered, .iui-grid .iui-sort-ascending-selected {
        background-position: -48px -128px !important;
    }
    .iui-grid .iui-sort-descending, .iui-grid .iui-sort-descending-hovered, .iui-grid .iui-sort-descending-selected {
        background-position: -32px -128px !important;
    }

    /* Grouping */
    .iui-grid-grouping-panel {
        background: var(--grid-grouping-panel-background, transparent);
        border-bottom: var(--grid-grouping-panel-border-bottom, thin solid #151515);
        color: var(--grid-grouping-panel-color, #cccccc);
    }
    .iui-grid-grouping-panel-toolbar-button-add:hover {
        opacity: 0.75;
    }
    .iui-grid-grouping-panel-toolbar-button-add > span {
        background-image: url(../../icons/plus-white-24.png);
    }
    .iui-grid-grouping-panel-item {
        background: var(--grid-grouping-panel-item-background, #363636);
        border: var(--grid-grouping-panel-item-border, thin solid #363636);
    }
    .iui-grid-grouping-panel-item-button {
        background-image: url(../../icons/close-gray.ico);
    }
    .iui-grid-grouping-panel-toolbar-button-add {
        background: #363636;
        border: thin solid #363636;
    }
    .iui-grid-grouping-marker::before {
        border: var(--grid-grouping-marker-before-border, 6px solid #363636);
        border-color: var(--grid-grouping-marker-before-border-color, transparent transparent transparent #363636);
    }
    .iui-grid-grouping-marker::after {
        border: var(--grid-grouping-marker-after-border, 6px solid #363636);
        border-color: var(--grid-grouping-marker-after-border-color, transparent transparent transparent #363636);
    }
    .iui-grid-grouping-panel-dropdown-list {
        background: #252526;
        border: 0;
        color: #cccccc;
    }
    .iui-grid-grouping-panel-dropdown-list li {
        background: #252526;
        color: #cccccc;
    }
    .iui-grid-grouping-panel-dropdown-list li:hover {
        background-color: #2a2d2e;
    }
    
    /* Drag Drop */
    .iui-grid-handle {
        background-image: var(--grid-handle-background-image, url(../../icons/grab-white.ico));
    }

    /* Editor */
    .iui-grid-editing:hover {
        background-image: var(--grid-editing-background-image, url(../../icons/edit-white.ico));
    }
    .iui-grid-editing-active {
        background-image: var(--grid-editing-background-image, url(../../icons/edit-white.ico));
        opacity: 1;
    }
`;

export { iuiGridMidnightStyle };
