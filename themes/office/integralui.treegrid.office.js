import { c as css } from '../../external/lit-element.js';

const iuiTreeGridOfficeStyle = css`
    .iui-treegrid {
        border-color:  var(--treegrid-border-color, #d9d9d9);
        color: var(--treegrid-color, black);
    }
    .iui-treegrid-block-left, .iui-treegrid-block-right {
        background: var(--treegrid-block-fixed-background, #f9f9f9);
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header, 
    .iui-treegrid-block-top-left .iui-treegrid-column-filter, 
    .iui-treegrid-block-top-left .iui-treegrid-column-footer, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header,
    .iui-treegrid-block-top-right .iui-treegrid-column-filter, 
    .iui-treegrid-block-top-right .iui-treegrid-column-footer {
        background: var(--treegrid-column-fixed-background, #eeeeee);
        border: var(--treegrid-column-fixed-border, thin solid transparent);
        color: var(--treegrid-column-fixed-color, black);
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header-hovered, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header-hovered {
        background-color: #e9e9e9;
        border: thin solid #e9e9e9 !important;
        color: #000000;
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header-selected, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header-selected {
        background-color: #d9d9d9;
        border: thin solid #d9d9d9 !important;
        color: #000000;
    }
    .iui-treegrid-block-hover {
        border: thin solid #bebebe;
    }
    .iui-treegrid-column-header, .iui-treegrid-column-filter, .iui-treegrid-column-footer {
        background: var(--treegrid-column-background, #f5f5f5);
        border-color: var(--treegrid-column-border-color, transparent);
        border-right: thin solid transparent !important;
        color: var(--treegrid-column-color, #49678f);
    }
    .iui-treegrid-column-filter {
        background: var(--treegrid-column-filter-background, transparent);
    }
    .iui-treegrid-column-header, .iui-treegrid-column-filter {
        border-bottom: thin solid #efefef !important;
    }
    .iui-treegrid-column-footer {
        border-top: thin solid #efefef !important;
        color: var(--treegrid-column-footer-color, #323232);
    }
    .iui-treegrid-column-header-hovered {
        background: var(--treegrid-column-header-hovered-background, #e9e9e9);
        border-color: var(--treegrid-colum-header-hovered-border-color, #e9e9e9);
        color: var(--treegrid-column-header-hovered-color, #49678f);

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
        0% { background: var(--treegrid-animation-column-hovered-background-0, #f5f5f5); }
        100% { background: var(--treegrid-animation-column-hovered-background-100, #e9e9e9); }
    }
    .iui-treegrid-column-header-selected {
        background: var(--treegrid-column-header-hovered-background, #d9d9d9);
        border-color: var(--treegrid-colum-header-hovered-border-color, #d9d9d9);
        color: var(--treegrid-column-header-hovered-color, #3d5576);

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
        0% { background: var(--treegrid-animation-column-selected-background-0, #e9e9e9); }
        100% { background: var(--treegrid-animation-column-selected-background-100, #d9d9d9); }
    }
    .iui-treegrid-column-header-cell-selected {
        background: transparent;
    }
    .iui-treegrid-row, .iui-treegrid-row-fixed {
        color: var(--treegrid-row-color, #646464);
    }
    .iui-treegrid-row-hovered {
        background: var(--treegrid-row-hovered-background, transparent);
        color: var(--treegrid-row-hovered-color, black);

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
        100% { background: var(--treegrid-animation-row-hovered-background-100, #d9edfd); }
    }
    .iui-treegrid-row-selected {
        background: var(--treegrid-row-selected-background, #d9edfd);
        border-color: var(--treegrid-row-selected-border-color, #99d1ff);
        color: var(--treegrid-row-selected-color, black);

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
        0% { background: var(--treegrid-animation-row-selected-background-0, #d9edfd); }
        100% { background: var(--treegrid-animation-row-selected-background-100, #a5d3fa); }
    }
    .iui-treegrid-row-cell:first-child {
        border-left: thin solid transparent;
    }
    .iui-treegrid-row-cell:last-child {
        border-right: thin solid transparent;
    }
    .iui-treegrid-lines-horizontal:not(:last-child) {
        border-bottom-color: #efefef;
    }
    .iui-treegrid-lines-horizontal:last-child {
        border-bottom: thin solid #efefef;
    }
    .iui-treegrid-lines-vertical {
        border-right: thin solid transparent;
    }
    .iui-treegrid-lines-both {
        border-right: thin solid transparent;
        border-bottom: thin solid #efefef;
    }
    .iui-treegrid-expand-box-open {
        background: url(../../icons/expandbox-icons.png) no-repeat -80px 0;
    }
    .iui-treegrid-expand-box-open:hover {
        background: url(../../icons/expandbox-icons.png) no-repeat -64px 0;
    }
    .iui-treegrid-expand-box-close {
        background: url(../../icons/expandbox-icons.png) no-repeat -80px -16px;
    }
    .iui-treegrid-expand-box-close:hover {
        background: url(../../icons/expandbox-icons.png) no-repeat -64px -16px;
    }

    /* Animation */
    .iui-treegrid-column-animate-select {
        background: #e9e9e9;
    }
    .iui-treegrid-row-animate-select {
        background: #d9edfd;
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

export { iuiTreeGridOfficeStyle };
