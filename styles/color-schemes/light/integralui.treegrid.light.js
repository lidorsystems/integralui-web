import { c as css } from '../../../external/lit-element.js';

const iuiTreeGridLightStyle = css`
    .iui-treegrid {
        border-color:  var(--iui-treegrid-border-color, #d9d9d9);
        color: var(--iui-treegrid-color, black);
    }
    .iui-treegrid-block-left, .iui-treegrid-block-right {
        background: var(--iui-treegrid-block-fixed-background, #f9f9f9);
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header, 
    .iui-treegrid-block-top-left .iui-treegrid-column-filter, 
    .iui-treegrid-block-top-left .iui-treegrid-column-footer, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header,
    .iui-treegrid-block-top-right .iui-treegrid-column-filter, 
    .iui-treegrid-block-top-right .iui-treegrid-column-footer {
        background: var(--iui-treegrid-column-fixed-background, #eeeeee);
        border: var(--iui-treegrid-column-fixed-border, thin solid transparent);
        color: var(--iui-treegrid-column-fixed-color, black);
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header-hovered, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header-hovered {
        background-color: #e9e9e9;
        border: thin solid #e9e9e9;
        color: #000000;
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header-selected, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header-selected {
        background-color: #d9d9d9;
        border: thin solid #d9d9d9;
        color: #000000;
    }
    .iui-treegrid-block-hover {
        border: thin solid #bebebe;
    }
    .iui-treegrid-column-header, .iui-treegrid-column-filter, .iui-treegrid-column-footer {
        background: var(--iui-treegrid-column-background, #f5f5f5);
        border-color: var(--iui-treegrid-column-border-color, transparent);
        border-right: thin solid transparent;
        color: var(--iui-treegrid-column-color, #49678f);
    }
    .iui-treegrid-column-filter {
        background: var(--iui-treegrid-column-filter-background, transparent);
    }
    .iui-treegrid-column-header, .iui-treegrid-column-filter {
        border-bottom: thin solid #efefef;
    }
    .iui-treegrid-column-footer {
        border-top: thin solid #efefef;
        color: var(--iui-treegrid-column-footer-color, #323232);
    }
    .iui-treegrid-column-header-hovered {
        background: var(--iui-treegrid-column-header-hovered-background, #e9e9e9);
        border-color: var(--iui-treegrid-column-header-hovered-border-color, #e9e9e9);
        color: var(--iui-treegrid-column-header-hovered-color, #49678f);
    }
    .iui-treegrid-column-header-selected {
        background: var(--iui-treegrid-column-header-hovered-background, #d9d9d9);
        border-color: var(--iui-treegrid-column-header-hovered-border-color, #d9d9d9);
        color: var(--iui-treegrid-column-header-hovered-color, #3d5576);
    }
    .iui-treegrid-column-header-cell-selected {
        background: transparent;
    }
    .iui-treegrid-row, .iui-treegrid-row-fixed {
        color: var(--iui-treegrid-row-color, #646464);
    }
    .iui-treegrid-row-hovered {
        background: var(--iui-treegrid-row-hovered-background, #d9edfd);
        border-color: var(--iui-treegrid-row-hovered-border-color, #d9edfd);
        color: var(--iui-treegrid-row-hovered-color, black);
    }
    .iui-treegrid-row-selected {
        background: var(--iui-treegrid-row-selected-background, #a5d3fa);
        border-color: var(--iui-treegrid-row-selected-border-color, #99d1ff);
        color: var(--iui-treegrid-row-selected-color, black);
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
        background: url(../../../icons/expandbox-icons.png) no-repeat -80px 0;
    }
    .iui-treegrid-expand-box-open:hover {
        background: url(../../../icons/expandbox-icons.png) no-repeat -64px 0;
    }
    .iui-treegrid-expand-box-close {
        background: url(../../../icons/expandbox-icons.png) no-repeat -80px -16px;
    }
    .iui-treegrid-expand-box-close:hover {
        background: url(../../../icons/expandbox-icons.png) no-repeat -64px -16px;
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
        background-position: -48px -128px;
    }
    .iui-treegrid .iui-sort-descending, .iui-treegrid .iui-sort-descending-hovered, .iui-treegrid .iui-sort-descending-selected {
        background-position: -32px -128px;
    }
    
    /* Form */
    .iui-treegrid-form {
        background: #efefef;
    }
    .iui-treegrid-form-editor-text {
        border: var(--iui-treegrid-form-editor-text-border, 1px solid #d9d9d9);
        border-color: var(--iui-treegrid-form-editor-text-border-color, #d9d9d9);
        border-radius: var(--iui-treegrid-form-editor-text-border-radius, 3px);
        box-shadow: var(--iui-treegrid-form-editor-text-box-shadow, 0 0 0 1px transparent);
    }
    .iui-treegrid-form-editor-text:focus {
        border: var(--iui-treegrid-form-editor-text-focus-border, 1px solid #6ea9db);
        border-color: var(--iui-treegrid-form-editor-text-focus-border-color, #6ea9db);
        box-shadow: var(--iui-treegrid-form-editor-text-focus-box-shadow, 0 0 0 1px #6ea9db);
        outline: none;
    }
    .iui-treegrid-form-editor-invalid {
        border-color: var(--iui-treegrid-form-editor-invalid-border-color, #c45151);
    }
    .iui-treegrid-form-editor-invalid:focus {
        border-color: var(--iui-treegrid-form-editor-invalid-border-color, #c45151);
        box-shadow: var(--iui-treegrid-form-editor-invalid-box-shadow, 0 0 0 1px #c45151);
    }
`;

export { iuiTreeGridLightStyle };
