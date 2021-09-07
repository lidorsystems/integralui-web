import { c as css } from '../external/lit-element.js';

const iuiDatePickerDefaultStyle = css`
    .iui-datepicker {
        background: var(--datepicker-background, white);
        border: var(--datepicker-border, 0);
        border-color:  var(--datepicker-border-color, transparent);
        border-radius: var(--datepicker-border-radius, 1px);
        border-width: var(--datepicker-border-width, 0);
        color: var(--datepicker-color, black);
        cursor: var(--datepicker-cursor, default);
        display: var(--datepicker-display, block);
        float: var(--datepicker-float, none);
        height: var(--datepicker-height, auto);
        opacity: var(--datepicker-opacity, 1);
        overflow: hidden;
        margin: var(--datepicker-margin, 2px 0);
        padding: var(--datepicker-padding, 0);
        position: var(--datepicker-position, relative);
        white-space: nowrap;
        width: var(--datepicker-width, auto);
        
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
        border: var(--datepicker-header-border, thin solid #cecece);
        padding: var(--datepicker-header-padding, 3px);
        white-space: nowrap;
    }
    .iui-datepicker-header-hovered {
        background: var(--datepicker-header-hovered-background, transparent);
        border: var(--datepicker-header-hovered-border, thin solid #cecece);
        color: var(--datepicker-header-hovered-color, black);
        padding: var(--datepicker-header-hovered-padding, 3px);
    }
    .iui-datepicker-header-selected {
        background: var(--datepicker-header-selected-background, transparent);
        border: var(--datepicker-header-selected-border, thin solid #cecece);
        color: var(--datepicker-header-selected-color, black);
        padding: var(--datepicker-header-selected-padding, 3px);
    }
    .iui-datepicker-header-expand-box {
        background: var(--datepicker-header-expand-box-background, #484848);
    }

    /* Disabled State */
    .iui-datepicker-disabled {
        opacity: var(--datepicker-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiDatePickerDefaultStyle };
