import { c as css } from '../external/lit-element.js';

export const iuiRatingDefaultStyle = css`
    .iui-rating
    {
        background: var(--rating-background, white);
        border: var(--rating-border, thin solid #cecece);
        border-radius: var(--rating-border-radius, 3px);
        color: var(--rating-color, black);
        cursor: var(--rating-cursor, default);
        display: var(--rating-display, block);
        height: var(--rating-image-height, 16px);
        margin: var(--rating-margin, 0);
        overflow: hidden;
        padding: var(--rating-padding, 1px);
        position: relative;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-rating:focus {
        outline: none !important;
    }
    .iui-rating-content
    {
        background-image: var(--rating-content-image, url(../icons/star-empty.ico));
        background-repeat: repeat-x;
        height: var(--rating-content-image-height, 16px);
    }
    .iui-rating-value
    {
        background-image: var(--rating-value-image, url(../icons/star-full.ico));
        background-repeat: repeat-x;
        height: var(--rating-value-image-height, 16px);
    }


    /* Disabled State */
    .iui-rating-disabled div
    {
        opacity: var(--rating-disabled-opacity, 0.4);
        pointer-events: none;
    }
`;