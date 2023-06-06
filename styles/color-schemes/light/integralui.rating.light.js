import { c as css } from '../../../external/lit-element.js';

export const iuiRatingLightStyle = css`
    .iui-rating:focus {
        border: var(--iui-rating-header-border, thin solid #6ea9db);
        box-shadow: var(--iui-rating-box-shadow, 0 0 0 1px #6ea9db);
    }
`;