import { c as css } from '../../../external/lit-element.js';

export const iuiGridLightStyle = css`
    .iui-grid {
        border-color:  var(--iui-grid-border-color, #d9d9d9);
        color: var(--iui-grid-color, black);
    }
    .iui-grid-block-left, .iui-grid-block-right {
        background: var(--iui-grid-block-fixed-background, #f9f9f9);
    }
    .iui-grid-block-top-left .iui-grid-column-header, 
    .iui-grid-block-top-left .iui-grid-column-filter, 
    .iui-grid-block-top-left .iui-grid-column-footer, 
    .iui-grid-block-top-right .iui-grid-column-header,
    .iui-grid-block-top-right .iui-grid-column-filter, 
    .iui-grid-block-top-right .iui-grid-column-footer {
        background: var(--iui-grid-column-fixed-background, #eeeeee);
        border: var(--iui-grid-column-fixed-border, thin solid transparent);
        color: var(--iui-grid-column-fixed-color, black);
    }
    .iui-grid-block-top-left .iui-grid-column-header-hovered, 
    .iui-grid-block-top-right .iui-grid-column-header-hovered {
        background-color: #e9e9e9;
        border: thin solid #e9e9e9;
        color: #000000;
    }
    .iui-grid-block-top-left .iui-grid-column-header-selected, 
    .iui-grid-block-top-right .iui-grid-column-header-selected {
        background-color: #d9d9d9;
        border: thin solid #d9d9d9;
        color: #000000;
    }
    .iui-grid-block-hover {
        border: thin solid #bebebe;
    }
    .iui-grid-column-header, .iui-grid-column-filter, .iui-grid-column-footer {
        background: var(--iui-grid-column-background, #f5f5f5);
        border-color: var(--iui-grid-column-border-color, transparent);
        border-right: thin solid transparent;
        color: var(--iui-grid-column-color, #49678f);
    }
    .iui-grid-column-filter {
        background: var(--iui-grid-column-filter-background, transparent);
    }
    .iui-grid-column-header, .iui-grid-column-filter {
        border-bottom: thin solid #efefef;
    }
    .iui-grid-column-footer {
        border-top: thin solid #efefef;
        color: var(--iui-grid-column-footer-color, #323232);
    }
    .iui-grid-column-header-hovered {
        background: var(--iui-grid-column-header-hovered-background, #e9e9e9);
        border-color: var(--iui-grid-column-header-hovered-border-color, #e9e9e9);
        color: var(--iui-grid-column-header-hovered-color, #49678f);
    }
    .iui-grid-column-header-selected {
        background: var(--iui-grid-column-header-hovered-background, #d9d9d9);
        border-color: var(--iui-grid-column-header-hovered-border-color, #d9d9d9);
        color: var(--iui-grid-column-header-hovered-color, #3d5576);
    }
    .iui-grid-column-header-cell-selected {
        background: transparent;
    }
    .iui-grid-row, .iui-grid-row-fixed {
        color: var(--iui-grid-row-color, #646464);
    }
    .iui-grid-row-hovered {
        background: var(--iui-grid-row-hovered-background, #d9edfd);
        border-color: var(--iui-grid-row-hovered-border-color, #d9edfd);
        color: var(--iui-grid-row-hovered-color, black);
    }
    @keyframes iui-grid-row-hovered-animate-enter {
        0% { background: var(--iui-grid-animation-row-hovered-background-0, transparent); }
        100% { background: var(--iui-grid-animation-row-hovered-background-100, #d9edfd); }
    }
    .iui-grid-row-selected {
        background: var(--iui-grid-row-selected-background, #a5d3fa);
        border-color: var(--iui-grid-row-selected-border-color, #a5d3fa);
        color: var(--iui-grid-row-selected-color, black);
    }
    @keyframes iui-grid-row-selected-animate-enter {
        0% { background: var(--iui-grid-animation-row-selected-background-0, #d9edfd); }
        100% { background: var(--iui-grid-animation-row-selected-background-100, #a5d3fa); }
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
        background: url(../../../icons/expandbox-icons.png) no-repeat -80px 0;
    }
    .iui-grid-expand-box-open:hover {
        background: url(../../../icons/expandbox-icons.png) no-repeat -64px 0;
    }
    .iui-grid-expand-box-close {
        background: url(../../../icons/expandbox-icons.png) no-repeat -80px -16px;
    }
    .iui-grid-expand-box-close:hover {
        background: url(../../../icons/expandbox-icons.png) no-repeat -64px -16px;
    }

    /* Grouping */
    .iui-grid-grouping-panel {
        background: var(--iui-grid-grouping-panel-background, #f5f5f5);
        border-bottom: var(--iui-grid-grouping-panel-border-bottom, thin solid #d9d9d9);
    }
    .iui-grid-grouping-panel-item {
        background: var(--iui-grid-grouping-panel-item-background, #e2e2e2);
        border: var(--iui-grid-grouping-panel-item-border, thin solid #e2e2e2);
    }
    .iui-grid-grouping-panel-toolbar-button-add {
        background: #e2e2e2;
        border: thin solid #e2e2e2;
    }
    .iui-grid-grouping-marker::before {
        border: var(--iui-grid-grouping-marker-before-border, 6px solid #e2e2e2);
        border-color: var(--iui-grid-grouping-marker-before-border-color, transparent transparent transparent #e2e2e2);
    }
    .iui-grid-grouping-marker::after {
        border: var(--iui-grid-grouping-marker-after-border, 6px solid #e2e2e2);
        border-color: var(--iui-grid-grouping-marker-after-border-color, transparent transparent transparent #e2e2e2);
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
        background-position: -48px -128px;
    }
    .iui-grid .iui-sort-descending, .iui-grid .iui-sort-descending-hovered, .iui-grid .iui-sort-descending-selected {
        background-position: -32px -128px;
    }
    
    /* Form */
    .iui-grid-form {
        background: #efefef;
    }

    .iui-grid-form-editor-text {
        border: var(--iui-grid-form-editor-text-border, 1px solid #d9d9d9);
        border-color: var(--iui-grid-form-editor-text-border-color, #d9d9d9);
        border-radius: var(--iui-grid-form-editor-text-border-radius, 3px);
        box-shadow: var(--iui-grid-form-editor-text-box-shadow, 0 0 0 1px transparent);
    }
    .iui-grid-form-editor-text:focus {
        border: var(--iui-grid-form-editor-text-focus-border, 1px solid #6ea9db);
        border-color: var(--iui-grid-form-editor-text-focus-border-color, #6ea9db);
        box-shadow: var(--iui-grid-form-editor-text-focus-box-shadow, 0 0 0 1px #6ea9db);
        outline: none;
    }
    .iui-grid-form-editor-invalid {
        border-color: var(--iui-grid-form-editor-invalid-border-color, #c45151);
    }
    .iui-grid-form-editor-invalid:focus {
        border-color: var(--iui-grid-form-editor-invalid-border-color, #c45151);
        box-shadow: var(--iui-grid-form-editor-invalid-box-shadow, 0 0 0 1px #c45151);
    }
`;
