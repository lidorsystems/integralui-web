import { c as css } from '../../../external/lit-element.js';

const iuiDatePickerDarkStyle = css`
    .iui-datepicker {
        background: var(--datepicker-background, #252526);
        border: var(--datepicker-header-border, thin solid #151515);
        border-radius: var(--datepicker-border-radius, 3px);
        box-shadow: var(--datepicker-box-shadow, 0 0 0 1px transparent);
        color: var(--datepicker-color, #cccccc);
    }
    .iui-datepicker:focus {
        border: var(--datepicker-header-border, thin solid #646464);
        box-shadow: var(--datepicker-box-shadow, 0 0 0 1px #646464);
    }

    /* Header */
    .iui-datepicker-header {
    }
    .iui-datepicker-header-hovered {
        color: var(--datepicker-header-hovered-color, white);
    }
    .iui-datepicker-header-selected {
        color: var(--datepicker-header-selected-color, white);
    }
    .iui-datepicker-header-expand-box {
        background: var(--datepicker-header-expand-box-background, #cccccc);
    }
`;

export { iuiDatePickerDarkStyle };
