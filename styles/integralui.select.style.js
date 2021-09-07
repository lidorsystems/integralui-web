import { c as css } from '../external/lit-element.js';

const iuiSelectDefaultStyle = css`
    .iui-select {
        background: var(--select-background, white);
        border: var(--select-border, 0);
        border-color:  var(--select-border-color, transparent);
        border-radius: var(--select-border-radius, 1px);
        border-width: var(--select-border-width, thin);
        color: var(--select-color, black);
        cursor: var(--select-cursor, default);
        display: var(--select-display, block);
        float: var(--select-float, none);
        height: var(--select-height, auto);
        margin: var(--select-margin, 2px 0);
        opacity: var(--select-opacity, 1);
        overflow: hidden;
        padding: var(--select-padding, 0);
        position: var(--select-position, relative);
        vertical-align: var(--select-vertical-align, middle);
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
    .iui-select-header:focus {
        outline: none !important;
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
