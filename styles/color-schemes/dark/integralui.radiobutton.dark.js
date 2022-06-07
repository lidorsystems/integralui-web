import { c as css } from '../../../external/lit-element.js';

export const iuiRadioButtonDarkStyle = css`
    .iui-radio-button {
        color: var(--radio-button-color, #cccccc);
    }
    
    /* Button */
    .iui-radio-button-btn {
        border-color: var(--radio-button-btn-border-color, #0a4369);
    }
    .iui-radio-button-btn span {
        background: var(--radio-button-btn-content-background, #0a4369);
    }
    .iui-radio-button-btn-checked {
        border-color: var(--radio-button-btn-checked-border-color, #0e639c);
    }
    .iui-radio-button-btn-checked span {
        background: var(--radio-button-btn-checked-content-background, #0e639c);
    }

    /* Button on Hover */
    .iui-radio-button:hover .iui-radio-button-btn {
        border-color: var(--radio-button-btn-hovered-border-color, #0e639c);
    }
    .iui-radio-button:hover .iui-radio-button-btn-checked {
        border-color: var(--radio-button-btn-checked-hovered-border-color, #1177bb);
    }
    .iui-radio-button:hover .iui-radio-button-btn-checked span {
        background: var(--radio-button-btn-checked-content-hovered-background, #1177bb);
    }

`;