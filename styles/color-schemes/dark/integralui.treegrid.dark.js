import { c as css } from '../../../external/lit-element.js';

const iuiTreeGridDarkStyle = css`
    .iui-treegrid {
        background: var(--iui-treegrid-background, #252526);
        border-color:  var(--iui-treegrid-border-color, #252526);
        color: var(--iui-treegrid-color, #cccccc);
    }
    .iui-treegrid-block {
        background: var(--iui-treegrid-background, #252526);
    }
    .iui-treegrid-block-left, .iui-treegrid-block-right {
        background: var(--iui-treegrid-block-fixed-background, #232324);
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
        background: var(--iui-treegrid-column-fixed-background, #272a2b);
        border: var(--iui-treegrid-column-fixed-border, thin solid transparent);
        color: var(--iui-treegrid-column-fixed-color, #cccccc);
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-filter, .iui-treegrid-block-top-right .iui-treegrid-column-filter  {
        background: var(--iui-treegrid-column-fixed-filter-background, transparent);
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header, 
    .iui-treegrid-block-top-left .iui-treegrid-column-filter, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header,
    .iui-treegrid-block-top-right .iui-treegrid-column-filter {
        border-bottom: thin solid #212121;
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-footer, 
    .iui-treegrid-block-top-right .iui-treegrid-column-footer {
        border-top: thin solid #212121;
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header-hovered, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header-hovered {
        background-color: #113954;
        border: thin solid #113954;
        color: white;
    }
    .iui-treegrid-block-top-left .iui-treegrid-column-header-selected, 
    .iui-treegrid-block-top-right .iui-treegrid-column-header-selected {
        background-color: #0c293d;
        border: thin solid #0c293d;
        color: white;
    }
    .iui-treegrid-block-hover {
        border: thin solid #252526;
    }
    .iui-treegrid-column-header, .iui-treegrid-column-filter, .iui-treegrid-column-footer {
        background: var(--iui-treegrid-column-background, #2a2d2e);
        border-color: var(--iui-treegrid-column-border-color, transparent);
        border-right: thin solid transparent;
        color: var(--iui-treegrid-column-color, #cccccc);
    }
    .iui-treegrid-column-filter  {
        background: var(--iui-treegrid-column-filter-background, transparent);
    }
    .iui-treegrid-column-header, .iui-treegrid-column-filter {
        border-bottom: thin solid #212121;
    }
    .iui-treegrid-column-footer {
        border-top: thin solid #212121;
        color: var(--iui-treegrid-column-footer-color, #cccccc);
    }
    .iui-treegrid-column-header-hovered {
        background: var(--iui-treegrid-column-header-hovered-background, #113954);
        border-color: var(--iui-treegrid-column-header-hovered-border-color, #113954);
        color: var(--iui-treegrid-column-header-hovered-color, white);

        animation-name: var(--iui-treegrid-column-header-hovered-animation-name, iui-treegrid-column-hovered-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treegrid-column-hovered-animate-enter {
        0% { background: var(--iui-treegrid-animation-column-hovered-background-0, #2a2d2e); }
        100% { background: var(--iui-treegrid-animation-column-hovered-background-100, #113954); }
    }
    .iui-treegrid-column-header-selected {
        background: var(--iui-treegrid-column-header-selected-background, #0c293d);
        border-color: var(--iui-treegrid-column-header-selected-border-color, #0c293d);
        color: var(--iui-treegrid-column-header-selected-color, white);

        animation-name: var(--iui-treegrid-column-header-selected-animation-name, iui-treegrid-column-selected-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treegrid-column-selected-animate-enter {
        0% { background: var(--iui-treegrid-animation-column-selected-background-0, #113954); }
        100% { background: var(--iui-treegrid-animation-column-selected-background-100, #0c293d); }
    }
    .iui-treegrid-column-header-cell-selected {
        background: transparent;
    }
    .iui-treegrid-row, .iui-treegrid-row-fixed {
        color: var(--iui-treegrid-row-color, #646464);
    }
    .iui-treegrid-row-hovered {
        background: var(--iui-treegrid-row-hovered-background, #2a2d2e);
        color: var(--iui-treegrid-row-hovered-color, #cccccc);

        animation-name: var(--iui-treegrid-row-hovered-animation-name, iui-treegrid-row-hovered-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treegrid-row-hovered-animate-enter {
        0% { background: var(--iui-treegrid-animation-row-hovered-background-0, transparent); }
        100% { background: var(--iui-treegrid-animation-row-hovered-background-100, #2a2d2e); }
    }
    .iui-treegrid-row-selected {
        background: var(--iui-treegrid-row-selected-background, #0a4369);
        border-color: var(--iui-treegrid-row-selected-border-color, #0a4369);
        color: var(--iui-treegrid-row-selected-color, white);

        animation-name: var(--iui-treegrid-row-selected-animation-name, iui-treegrid-row-selected-animate-enter);
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
            background: var(--iui-treegrid-animation-row-selected-background-0, #2a2d2e);
            color: var(--iui-treegrid-animation-row-selected-color-0, #cccccc);
        }
        100% { 
            background: var(--iui-treegrid-animation-row-selected-background-100, #0a4369);
            color: var(--iui-treegrid-animation-row-selected-color-100, white);
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
        background: url(../../../icons/expandbox-icons.png) no-repeat -48px 0;
        opacity: 0.25;
    }
    .iui-treegrid-expand-box-open:hover, .iui-treegrid-expand-box-close:hover {
        opacity: 0.75;
    }
    .iui-treegrid-expand-box-close {
        background: url(../../../icons/expandbox-icons.png) no-repeat -48px -16px;
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
        background-image: var(--iui-treegrid-handle-background-image, url(../../../icons/grab-white.ico));
    }

    /* Editor */
    .iui-treegrid-editing:hover {
        background-image: var(--iui-treegrid-editing-background-image, url(../../../icons/edit-white.ico));
    }
    .iui-treegrid-editing-active {
        background-image: var(--iui-treegrid-editing-background-image, url(../../../icons/edit-white.ico));
        opacity: 1;
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

    /* Editor */
    .iui-treegrid-editing-hover, .iui-treegrid-editing:hover {
        background-image: var(--iui-treegrid-editing-background-image, url(../../../icons/edit-white.ico));
    }
    .iui-treegrid-editing-active {
        background-image: var(--iui-treegrid-editing-background-image, url(../../../icons/edit-white.ico));
        opacity: 1;
    }

    /* Grid Form */
    .iui-treegrid-form {
        background: #2a2d2e;
    }
    .iui-treegrid-form-editor-text {
        background: var(--iui-treegrid-form-editor-text-background, #252526);
        border: var(--iui-treegrid-form-editor-text-border, 1px solid #151515);
        border-color: var(--iui-treegrid-form-editor-text-border-color, #151515);
        border-radius: var(--iui-treegrid-form-editor-text-border-radius, 3px);
        box-shadow: var(--iui-treegrid-form-editor-text-box-shadow, 0 0 0 1px transparent);
        color: var(--iui-treegrid-form-editor-text-color, #cccccc);
    }
    .iui-treegrid-form-editor-text:focus {
        border: var(--iui-treegrid-form-editor-text-focus-border, 1px solid #646464);
        border-color: var(--iui-treegrid-form-editor-text-focus-border-color, #646464);
        box-shadow: var(--iui-treegrid-form-editor-text-focus-box-shadow, 0 0 0 1px #646464);
        outline: none;
    }
    .iui-treegrid-form-editor-invalid {
        border-color: var(--iui-treegrid-form-editor-invalid-border-color, #c45151);
    }
    .iui-treegrid-form-editor-invalid:focus {
        border-color: var(--iui-treegrid-form-editor-invalid-border-color, #c45151);
        box-shadow: var(--iui-treegrid-form-editor-invalid-box-shadow, 0 0 0 1px #c45151);
    }

    /* Grid Batch Editing */
    .iui-treegrid-row-deleted, .iui-treegrid-cell-deleted {
        /*background: #303436;
        color: #646464;*/

        background: #202d39;
        color: #9cdce0;
    }
    .iui-treegrid-cell-value-changed {
        background: #a35308;
        color: #dedede;
    }

    /* Grid  Column Menu */
    .iui-treegrid-column-menu-button-line {
        background: #e5e5e5;
    }

    /* Sorting */
    .iui-treegrid-column-sort-button-order {
        color: #e5e5e5;
    }
    .iui-treegrid-column-sort-button-up .iui-treegrid-column-sort-button-up-left,
    .iui-treegrid-column-sort-button-up .iui-treegrid-column-sort-button-up-right,
    .iui-treegrid-column-sort-button-up .iui-treegrid-column-sort-button-up-hline,
    .iui-treegrid-column-sort-button-up .iui-treegrid-column-sort-button-up-vline,
    .iui-treegrid-column-sort-button-down .iui-treegrid-column-sort-button-down-left,
    .iui-treegrid-column-sort-button-down .iui-treegrid-column-sort-button-down-right,
    .iui-treegrid-column-sort-button-down .iui-treegrid-column-sort-button-down-hline,
    .iui-treegrid-column-sort-button-down .iui-treegrid-column-sort-button-down-vline
    {
        background: var(--iui-treegrid-column-sort-button-background, #808080);
    }
    .iui-treegrid-column-sort-button-up-active .iui-treegrid-column-sort-button-up-left,
    .iui-treegrid-column-sort-button-up-active .iui-treegrid-column-sort-button-up-right,
    .iui-treegrid-column-sort-button-up-active .iui-treegrid-column-sort-button-up-hline,
    .iui-treegrid-column-sort-button-up-active .iui-treegrid-column-sort-button-up-vline,
    .iui-treegrid-column-sort-button-down-active .iui-treegrid-column-sort-button-down-left,
    .iui-treegrid-column-sort-button-down-active .iui-treegrid-column-sort-button-down-right,
    .iui-treegrid-column-sort-button-down-active .iui-treegrid-column-sort-button-down-hline,
    .iui-treegrid-column-sort-button-down-active .iui-treegrid-column-sort-button-down-vline
    {
        background: var(--iui-treegrid-column-sort-button-active-background, #e5e5e5);
    }
    .iui-treegrid-column-sort-button-up:hover .iui-treegrid-column-sort-button-up-left,
    .iui-treegrid-column-sort-button-up:hover .iui-treegrid-column-sort-button-up-right,
    .iui-treegrid-column-sort-button-up:hover .iui-treegrid-column-sort-button-up-hline,
    .iui-treegrid-column-sort-button-up:hover .iui-treegrid-column-sort-button-up-vline,
    .iui-treegrid-column-sort-button-down:hover .iui-treegrid-column-sort-button-down-left,
    .iui-treegrid-column-sort-button-down:hover .iui-treegrid-column-sort-button-down-right,
    .iui-treegrid-column-sort-button-down:hover .iui-treegrid-column-sort-button-down-hline,
    .iui-treegrid-column-sort-button-down:hover .iui-treegrid-column-sort-button-down-vline 
    {
        background: var(--iui-treegrid-column-sort-button-hover-background, #e5e5e5);
    }
`;

export { iuiTreeGridDarkStyle };
