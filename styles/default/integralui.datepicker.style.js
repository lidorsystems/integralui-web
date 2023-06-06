import { c as css } from '../../external/lit-element.js';

export const iuiDatePickerDefaultStyle = css`
    .iui-datepicker {
        background: var(--iui-datepicker-background, white);
        border: var(--iui-datepicker-border, thin solid transparent);
        border-color:  var(--iui-datepicker-border-color, #cecece);
        border-radius: var(--iui-datepicker-border-radius, 1px);
        border-width: var(--iui-datepicker-border-width, 1px);
        box-shadow: var(--iui-datepicker-box-shadow, none);
        color: var(--iui-datepicker-color, black);
        cursor: var(--iui-datepicker-cursor, default);
        display: var(--iui-datepicker-display, block);
        float: var(--iui-datepicker-float, none);
        font-size: var(--iui-datepicker-font-size, 1rem);
        height: var(--iui-datepicker-height, auto);
        opacity: var(--iui-datepicker-opacity, 1);
        overflow: hidden;
        margin: var(--iui-datepicker-margin, 2px 0);
        padding: var(--iui-datepicker-padding, 0);
        position: var(--iui-datepicker-position, relative);
        white-space: nowrap;
        width: var(--iui-datepicker-width, auto);
        z-index: var(--iui-datepicker-z-index, auto);
        
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-datepicker:focus {
        border: var(--iui-datepicker-focus-border, thin dotted #cecece);
        outline: none !important;
    }

    /* Header */
    .iui-datepicker-header {
        border: var(--iui-datepicker-header-border, 0);
        padding: var(--iui-datepicker-header-padding, 3px);
        text-align: var(--iui-datepicker-header-text-align, right);
        white-space: nowrap;
    }
    .iui-datepicker-header-hovered {
        background: var(--iui-datepicker-header-hovered-background, transparent);
        border: var(--iui-datepicker-header-hovered-border, 0);
        color: var(--iui-datepicker-header-hovered-color, black);
        padding: var(--iui-datepicker-header-hovered-padding, 3px);
    }
    .iui-datepicker-header-selected {
        background: var(--iui-datepicker-header-selected-background, transparent);
        border: var(--iui-datepicker-header-selected-border, 0);
        color: var(--iui-datepicker-header-selected-color, black);
        padding: var(--iui-datepicker-header-selected-padding, 3px);
    }
    .iui-datepicker-header-expand-box {
        background: var(--iui-datepicker-header-expand-box-background, #484848);
    }
    .iui-datepicker-header .iui-header-label {
        margin: var(--iui-header-label-margin, 0 25px 0 0);
        text-align: var(--iui-header-label-text-align, right);
    }

    /* Disabled State */
    .iui-datepicker-disabled {
        opacity: var(--iui-datepicker-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;