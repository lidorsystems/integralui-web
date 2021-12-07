import { c as css } from '../../external/lit-element.js';

const iuiGridOfficeStyle = css`
    .iui-grid {
        border-color:  var(--grid-border-color, #d9d9d9);
        color: var(--grid-color, black);
    }
    .iui-grid-block-left, .iui-grid-block-right {
        background: var(--grid-block-fixed-background, #f9f9f9);
    }
    .iui-grid-block-top-left .iui-grid-column-header, 
    .iui-grid-block-top-left .iui-grid-column-filter, 
    .iui-grid-block-top-left .iui-grid-column-footer, 
    .iui-grid-block-top-right .iui-grid-column-header,
    .iui-grid-block-top-right .iui-grid-column-filter, 
    .iui-grid-block-top-right .iui-grid-column-footer {
        background: var(--grid-column-fixed-background, #eeeeee);
        border: var(--grid-column-fixed-border, thin solid transparent);
        color: var(--grid-column-fixed-color, black);
    }
    .iui-grid-block-top-left .iui-grid-column-header-hovered, 
    .iui-grid-block-top-right .iui-grid-column-header-hovered {
        background-color: #e9e9e9;
        border: thin solid #e9e9e9 !important;
        color: #000000;
    }
    .iui-grid-block-top-left .iui-grid-column-header-selected, 
    .iui-grid-block-top-right .iui-grid-column-header-selected {
        background-color: #d9d9d9;
        border: thin solid #d9d9d9 !important;
        color: #000000;
    }
    .iui-grid-block-hover {
        border: thin solid #bebebe;
    }
    .iui-grid-column-header, .iui-grid-column-filter, .iui-grid-column-footer {
        background: var(--grid-column-background, #f5f5f5);
        border-color: var(--grid-column-border-color, transparent);
        border-right: thin solid transparent !important;
        color: var(--grid-column-color, #49678f);
    }
    .iui-grid-column-filter {
        background: var(--grid-column-filter-background, transparent);
    }
    .iui-grid-column-header, .iui-grid-column-filter {
        border-bottom: thin solid #efefef !important;
    }
    .iui-grid-column-footer {
        border-top: thin solid #efefef !important;
        color: var(--grid-column-footer-color, #323232);
    }
    .iui-grid-column-header-hovered {
        background: var(--grid-column-header-hovered-background, #e9e9e9);
        border-color: var(--grid-colum-header-hovered-border-color, #e9e9e9);
        color: var(--grid-column-header-hovered-color, #49678f);

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
        0% { background: var(--grid-animation-column-hovered-background-0, #f5f5f5); }
        100% { background: var(--grid-animation-column-hovered-background-100, #e9e9e9); }
    }
    .iui-grid-column-header-selected {
        background: var(--grid-column-header-hovered-background, #d9d9d9);
        border-color: var(--grid-colum-header-hovered-border-color, #d9d9d9);
        color: var(--grid-column-header-hovered-color, #3d5576);

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
        0% { background: var(--grid-animation-column-selected-background-0, #e9e9e9); }
        100% { background: var(--grid-animation-column-selected-background-100, #d9d9d9); }
    }
    .iui-grid-column-header-cell-selected {
        background: transparent;
    }
    .iui-grid-row, .iui-grid-row-fixed {
        color: var(--grid-row-color, #646464);
    }
    .iui-grid-row-hovered {
        background: var(--grid-row-hovered-background, transparent);
        color: var(--grid-row-hovered-color, black);

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
        100% { background: var(--grid-animation-row-hovered-background-100, #d9edfd); }
    }
    .iui-grid-row-selected {
        background: var(--grid-row-selected-background, #d9edfd);
        border-color: var(--grid-row-selected-border-color, #99d1ff);
        color: var(--grid-row-selected-color, black);

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
        0% { background: var(--grid-animation-row-selected-background-0, #d9edfd); }
        100% { background: var(--grid-animation-row-selected-background-100, #a5d3fa); }
    }
    .iui-grid-row-cell:first-child {
        border-left: thin solid transparent;
    }
    .iui-grid-row-cell:last-child {
        border-right: thin solid transparent;
    }
    .iui-grid-lines-horizontal:not(:last-child) {
        border-bottom-color: #efefef;
    }
    .iui-grid-lines-horizontal:last-child {
        border-bottom: thin solid #efefef;
    }
    .iui-grid-lines-vertical {
        border-right: thin solid transparent;
    }
    .iui-grid-lines-both {
        border-right: thin solid transparent;
        border-bottom: thin solid #efefef;
    }
    .iui-grid-expand-box-open {
        background: url(../../icons/expandbox-icons.png) no-repeat -80px 0;
    }
    .iui-grid-expand-box-open:hover {
        background: url(../../icons/expandbox-icons.png) no-repeat -64px 0;
    }
    .iui-grid-expand-box-close {
        background: url(../../icons/expandbox-icons.png) no-repeat -80px -16px;
    }
    .iui-grid-expand-box-close:hover {
        background: url(../../icons/expandbox-icons.png) no-repeat -64px -16px;
    }

    /* Grouping */
    .iui-grid-grouping-panel {
        background: var(--grid-grouping-panel-background, #f5f5f5);
        border-bottom: var(--grid-grouping-panel-border-bottom, thin solid #d9d9d9);
    }
    .iui-grid-grouping-panel-item {
        background: var(--grid-grouping-panel-item-background, #e2e2e2);
        border: var(--grid-grouping-panel-item-border, thin solid #e2e2e2);
    }
    .iui-grid-grouping-panel-toolbar-button-add {
        background: #e2e2e2;
        border: thin solid #e2e2e2;
    }
    .iui-grid-grouping-marker::before {
        border: var(--grid-grouping-marker-before-border, 6px solid #e2e2e2);
        border-color: var(--grid-grouping-marker-before-border-color, transparent transparent transparent #e2e2e2);
    }
    .iui-grid-grouping-marker::after {
        border: var(--grid-grouping-marker-after-border, 6px solid #e2e2e2);
        border-color: var(--grid-grouping-marker-after-border-color, transparent transparent transparent #e2e2e2);
    }
    .iui-grid-grouping-panel-dropdown-list li:hover {
        background: #e5e5e5;
    }

    /* Animation */
    .iui-grid-column-animate-select {
        background: #e9e9e9;
    }
    .iui-grid-row-animate-select {
        background: #d9edfd;
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
`;

export { iuiGridOfficeStyle };
