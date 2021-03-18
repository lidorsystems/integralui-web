import { c as css } from '../external/lit-element.js';

export const iuiDatePickerDefaultStyle = css`
    .iui-datepicker {
        background: white;
        color: black;
        cursor: default;
        display: var(--datepicker-display, block);
        margin: var(--datepicker-margin, 2px 0);
        padding: 0;
        overflow: hidden;
        position: relative;
        white-space: nowrap;
        
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-datepicker:focus {
        outline: none !important;
    }

    /* Header */
    .iui-datepicker-header {
        border: thin solid #cecece;
        padding: var(--datepicker-header-padding, 3px);
        white-space: nowrap;
    }
    .iui-datepicker-header-hovered {
        background: transparent;
        border: thin solid #cecece;
        color: black;
        padding: var(--datepicker-header-hovered-padding, 3px);
    }
    .iui-datepicker-header-selected {
        background: transparent;
        border: thin solid #cecece;
        color: black;
        padding: var(--datepicker-header-selected-padding, 3px);
    }
    .iui-datepicker-header-expand-box {
        background: #484848 !important;
    }

    /* Disabled State */
    .iui-datepicker-disabled {
        opacity: 0.75;
        pointer-events: none;
    }
`;