import { c as css } from '../../../external/lit-element.js';

export const iuiDatePickerLightStyle = css`
    .iui-datepicker {
        border: var(--datepicker-header-border, thin solid #d9d9d9);
        border-radius: var(--datepicker-border-radius, 3px);
        box-shadow: var(--datepicker-box-shadow, 0 0 0 1px transparent);
    }
    .iui-datepicker:focus {
        border: var(--datepicker-header-border, thin solid #6ea9db);
        box-shadow: var(--datepicker-box-shadow, 0 0 0 1px #6ea9db);
    }

    /* Header */
    .iui-datepicker-header-hovered .iui-datepicker-header-expand-box, .iui-datepicker-header-selected .iui-datepicker-header-expand-box {
        background: #0d7edb;
    }
`;