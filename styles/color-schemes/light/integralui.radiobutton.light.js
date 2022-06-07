import { c as css } from '../../../external/lit-element.js';

export const iuiRadioButtonLightStyle = css`
    /* Button */
    .iui-radio-button-btn {
        border-color: var(--radio-button-btn-border-color, #c9c9c9);
    }
    .iui-radio-button-btn span {
        background: var(--radio-button-btn-content-background, #c9c9c9);
    }
    .iui-radio-button-btn-checked {
        border-color: var(--radio-button-btn-checked-border-color, #086dbf);
    }
    .iui-radio-button-btn-checked span {
        background: var(--radio-button-btn-checked-content-background, #086dbf);
    }

    /* Button on Hover */
    .iui-radio-button:hover .iui-radio-button-btn {
        border-color: var(--radio-button-btn-hovered-border-color, #086dbf);
    }
    .iui-radio-button:hover .iui-radio-button-btn-checked {
        border-color: var(--radio-button-btn-checked-hovered-border-color, #0b7edb);
    }
    .iui-radio-button:hover .iui-radio-button-btn-checked span {
        background: var(--radio-button-btn-checked-content-hovered-background, #0b7edb);
    }
`;