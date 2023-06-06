import { c as css } from '../../external/lit-element.js';

const iuiSelectDefaultStyle = css`
    .iui-select {
        background: var(--iui-select-background, white);
        border: var(--iui-select-border, thin solid transparent);
        border-color:  var(--iui-select-border-color, transparent);
        border-radius: var(--iui-select-border-radius, 1px);
        border-width: var(--iui-select-border-width, thin);
        box-shadow: var(--iui-select-box-shadow, none);
        color: var(--iui-select-color, black);
        cursor: var(--iui-select-cursor, default);
        display: var(--iui-select-display, block);
        float: var(--iui-select-float, none);
        height: var(--iui-select-height, auto);
        margin: var(--iui-select-margin, 2px 0);
        opacity: var(--iui-select-opacity, 1);
        overflow: hidden;
        padding: var(--iui-select-padding, 0);
        position: var(--iui-select-position, relative);
        vertical-align: var(--iui-select-vertical-align, middle);
        width: var(--iui-select-width, auto);
        z-index: var(--iui-select-z-index, auto);

    }
    .iui-select:focus {
        border: var(--iui-select-focus-border, thin dotted #cecece);
        outline: none !important;
    }

    /* Header */
    .iui-select-header {
        border: var(--iui-select-header-border, 0);
        padding: var(--iui-select-header-padding, 3px);
        white-space: nowrap;
    }
    .iui-select-header-hovered {
        background: transparent;
        border: var(--iui-select-header-hovered-border, 0);
        color: black;
        padding: var(--iui-select-header-hovered-padding, 3px);
    }
    .iui-select-header-selected {
        background: transparent;
        border: var(--iui-select-header-selected-border, 0);
        color: black;
        padding: var(--iui-select-header-selected-padding, 3px);
    }
    .iui-select-header-expand-box {
        background: #484848;
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
