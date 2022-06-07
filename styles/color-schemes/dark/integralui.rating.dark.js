import { c as css } from '../../../external/lit-element.js';

export const iuiRatingDarkStyle = css`
    .iui-rating {
        background: var(--rating-background, #252526);
        border: var(--rating-border, thin solid #252526);
        color: var(--rating-color, #cccccc);
    }
    .iui-rating:focus {
        border: var(--rating-border, thin solid #646464);
        box-shadow: var(--rating-box-shadow, 0 0 0 1px #646464);
    }
`;