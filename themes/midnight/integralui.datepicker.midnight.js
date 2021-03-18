import { c as css } from '../../external/lit-element.js';

export const iuiDatePickerMidnightStyle = css`
    .iui-datepicker {
        background-color: #252526;
        border-color: #151515;
        color: #cccccc;
    }

    /* Header */
    .iui-datepicker-header {
        border: thin solid #151515;
    }
    .iui-datepicker-header-hovered, .iui-datepicker-header-selected {
        background: transparent;
        border: thin solid #151515;
        color: white;
    }
    .iui-datepicker-header-expand-box {
        background: #484848 !important;
    }
`;