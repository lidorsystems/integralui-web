import { c as css } from '../../external/lit-element.js';

const iuiDatePickerMidnightStyle = css`
    .iui-datepicker {
        background: var(--datepicker-background, #252526);
        color: var(--datepicker-color, #cccccc);
    }
    .iui-datepicker:focus {
        border-color: #646464;
    }

    /* Header */
    .iui-datepicker-header {
        border: var(--datepicker-header-border, thin solid #151515);
    }
    .iui-datepicker-header-hovered {
        border: var(--datepicker-header-hovered-border, thin solid #151515);
        color: var(--datepicker-header-hovered-color, white);
    }
    .iui-datepicker-header-selected {
        border: var(--datepicker-header-selected-border, thin solid #151515);
        color: var(--datepicker-header-selected-color, white);
    }
    .iui-datepicker-header-expand-box {
        background: var(--datepicker-header-expand-box-background, #cccccc);
    }
`;

export { iuiDatePickerMidnightStyle };
