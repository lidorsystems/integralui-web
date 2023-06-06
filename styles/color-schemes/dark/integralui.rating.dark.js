import { c as css } from '../../../external/lit-element.js';

export const iuiRatingDarkStyle = css`
    .iui-rating {
        background: var(--iui-rating-background, #252526);
        border: var(--iui-rating-border, thin solid #252526);
        color: var(--iui-rating-color, #cccccc);
    }
    .iui-rating:focus {
        border: var(--iui-rating-border, thin solid #646464);
        box-shadow: var(--iui-rating-box-shadow, 0 0 0 1px #646464);
    }
`;