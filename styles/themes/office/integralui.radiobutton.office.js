import { c as css } from '../../../external/lit-element.js';

export const iuiRadioButtonOfficeStyle = css`
    .iui-radio-button-btn {
        transition: var(--radio-button-btn-transition, border-color 0.25s ease-in-out);
    }
    .iui-radio-button-btn span {
        transform: var(--radio-button-btn-content-transform, scale(0));
        transition: var(--radio-button-btn-content-transition, all 0.25s ease-in-out);
    }
    .iui-radio-button-btn-checked span {
        transform: var(--radio-button-btn-checked-content-transform, scale(1));
    }
`;