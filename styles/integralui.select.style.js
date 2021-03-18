import { c as css } from '../external/lit-element.js';

const iuiSelectDefaultStyle = css`
    .iui-select {
        background: white;
        color: black;
        cursor: default;
        display: var(--select-display, block);
        margin: var(--select-margin, 2px 0);
        overflow: hidden;
        padding: 0;
        position: relative;
        width: var(--select-width, auto);
    }
    .iui-select:focus {
        outline: none !important;
    }

    /* Header */
    .iui-select-header {
        border: thin solid #cecece;
        padding: var(--select-header-padding, 3px);
        white-space: nowrap;
    }
    .iui-select-header-hovered {
        background: transparent;
        border: thin solid #cecece;
        color: black;
        padding: var(--select-header-hovered-padding, 3px);
    }
    .iui-select-header-selected {
        background: transparent;
        border: thin solid #cecece;
        color: black;
        padding: var(--select-header-selected-padding, 3px);
    }
    .iui-select-header-expand-box {
        background: #484848 !important;
    }

    /* DropDown Window */
    .iui-select-dropdown {
        background: white;
        border: thin solid #cecece;
        margin: 0;
        overflow-y: auto;
        overflow-x: hidden;
        position: absolute;
        z-index: 999;
    }
    .iui-select-dropdown:focus {
        outline: none !important;
    }
    .iui-select-dropdown .iui-item {
        margin: 1px;
        padding: 1px;
    }
    .iui-select-dropdown .iui-item-hovered {
        background-color: #f5f5f5;
        border: thin solid #efefef;
        margin: 1px;
        padding: 1px;
    }
    .iui-select-dropdown .iui-item-selected {
        background-color: #e5e5e5;
        border: thin solid #dedede;
        margin: 1px;
        padding: 1px;
    }

    /* Disabled State */
    .iui-select-disabled div {
        opacity: 0.75;
        pointer-events: none;
    }
`;

export { iuiSelectDefaultStyle };
