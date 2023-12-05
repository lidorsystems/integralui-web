import { c as css } from '../../external/lit-element.js';

export const iuiRatingDefaultStyle = css`
    .iui-rating {
        background: var(--iui-rating-background, white);
        border: var(--iui-rating-border, thin solid #cecece);
        border-color:  var(--iui-rating-border-color, #cecece);
        border-radius: var(--iui-rating-border-radius, 1px);
        border-width: var(--iui-rating-border-width, thin);
        box-shadow: var(--iui-rating-box-shadow, none);
        color: var(--iui-rating-color, black);
        cursor: var(--iui-rating-cursor, default);
        display: var(--iui-rating-display, block);
        float: var(--iui-rating-float, none);
        font-size: var(--iui-rating-font-size, 1rem);
        font-style: var(--iui-rating-font-style, normal);
        height: var(--iui-rating-height, 16px);
        margin: var(--iui-rating-margin, 0);
        opacity: var(--iui-rating-opacity, 1);
        overflow: hidden;
        padding: var(--iui-rating-padding, 1px);
        position: var(--iui-rating-position, relative);
        text-align: var(--iui-rating-text-align, left);
        width: var(--iui-rating-width, auto);
        z-index: var(--iui-rating-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-rating:focus {
        border: var(--iui-rating-focus-border, thin solid #cecece);
        outline: none !important;
    }
    .iui-rating-content
    {
        background-image: var(--iui-rating-content-image, url(../../icons/star-empty.ico));
        background-repeat: repeat-x;
        height: var(--iui-rating-content-image-height, 16px);
    }
    .iui-rating-value
    {
        background-image: var(--iui-rating-value-image, url(../../icons/star-full.ico));
        background-repeat: repeat-x;
        height: var(--iui-rating-value-image-height, 16px);
    }


    /* Disabled State */
    .iui-rating-disabled div
    {
        opacity: var(--iui-rating-disabled-opacity, 0.4);
        pointer-events: none;
    }
`;