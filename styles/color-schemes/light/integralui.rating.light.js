import { c as css } from '../../../external/lit-element.js';

const iuiRatingLightStyle = css`
    .iui-rating:focus {
        border: var(--rating-header-border, thin solid #6ea9db);
        box-shadow: var(--rating-box-shadow, 0 0 0 1px #6ea9db);
    }
`;

export { iuiRatingLightStyle };
