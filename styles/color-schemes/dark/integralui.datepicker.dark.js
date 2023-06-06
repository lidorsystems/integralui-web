import { c as css } from '../../../external/lit-element.js';

export const iuiDatePickerDarkStyle = css`
    .iui-datepicker {
        background: var(--iui-datepicker-background, #252526);
        border: var(--iui-datepicker-header-border, thin solid #151515);
        border-radius: var(--iui-datepicker-border-radius, 3px);
        box-shadow: var(--iui-datepicker-box-shadow, 0 0 0 1px transparent);
        color: var(--iui-datepicker-color, #cccccc);
    }
    .iui-datepicker:focus {
        border: var(--iui-datepicker-header-border, thin solid #646464);
        box-shadow: var(--iui-datepicker-box-shadow, 0 0 0 1px #646464);
    }

    /* Header */
    .iui-datepicker-header {
    }
    .iui-datepicker-header-hovered {
        color: var(--iui-datepicker-header-hovered-color, white);
    }
    .iui-datepicker-header-selected {
        color: var(--iui-datepicker-header-selected-color, white);
    }
    .iui-datepicker-header-expand-box {
        background: var(--iui-datepicker-header-expand-box-background, #cccccc);
    }
`;