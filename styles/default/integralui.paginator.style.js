import { c as css } from '../../external/lit-element.js';

export const iuiPaginatorDefaultStyle = css`
    .iui-paginator {
        background: var(--iui-paginator-background, #f0f0f0);
        border: var(--iui-paginator-border, 0);
        border-color:  var(--iui-paginator-border-color, transparent);
        border-radius: var(--iui-paginator-border-radius, 1px);
        border-width: var(--iui-paginator-border-width, thin);
        color: var(--iui-paginator-color, black);
        cursor: var(--iui-paginator-cursor, default);
        display: var(--iui-paginator-display, block);
        float: var(--iui-paginator-float, none);
        font-size: var(--iui-paginator-font-size, 1rem);
        font-style: var(--iui-paginator-font-style, normal);
        height: var(--iui-paginator-height, auto);
        margin: var(--iui-paginator-margin, 1px 0);
        opacity: var(--iui-paginator-opacity, 1);
        overflow: hidden;
        padding: var(--iui-paginator-padding, 3px 3px 0px 3px);
        position: var(--iui-paginator-position, relative);
        text-align: var(--iui-paginator-text-align, left);
        white-space: nowrap;
        width: var(--iui-paginator-width, auto);
        z-index: var(--iui-paginator-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-paginator-button {
        background-color: var(--iui-paginator-button-background-color, #dedede);
        display: inline-block;
        border: var(--iui-paginator-button-border, thin solid #bebebe);
        border-radius: var(--iui-paginator-button-border-radius, 3px);
        height: var(--iui-paginator-button-height, 24px);
        margin: var(--iui-paginator-button-margin, 2px);
        overflow: hidden;
        padding: var(--iui-paginator-button-padding, 0);
        width: var(--iui-paginator-button-width, 24px);
    }
    .iui-paginator-button:hover {
        background-color: var(--iui-paginator-button-hover-background-color, #cecece);
    }
    .iui-paginator-first {
        background-image: var(--iui-paginator-button-first-background-image, url(../../icons/page-first-24.png));
    }
    .iui-paginator-prev {
        background-image: var(--iui-paginator-button-prev-background-image, url(../../icons/page-prev-24.png));
    }
    .iui-paginator-next {
        background-image: var(--iui-paginator-button-next-background-image, url(../../icons/page-next-24.png));
    }
    .iui-paginator-last {
        background-image: var(--iui-paginator-button-last-background-image, url(../../icons/page-last-24.png));
    }
    .iui-paginator-input {
        background: var(--iui-paginator-input-background, white);
        display: inline-block;
        border: var(--iui-paginator-input-border, thin solid #bebebe);
        border-radius: var(--iui-paginator-input-border-radius, 3px);
        color: var(--iui-paginator-input-color, black);
        height: var(--iui-paginator-input-height, 24px);
        margin: var(--iui-paginator-input-margin, 2px);
        overflow: hidden;
        padding: var(--iui-paginator-input-padding, 0 5px);
        vertical-align: top;
        width: var(--iui-paginator-input-width, 40px);
    }
    .iui-paginator-label {
        display: inline-block;
        height: var(--iui-paginator-label-height, 24px);
        margin: var(--iui-paginator-label-margin, 2px 5px);
        padding: var(--iui-paginator-label-padding, 2px 0);
        vertical-align: top;
    }

    /* Disabled State */
    .iui-paginator-disabled span {
        opacity: var(--iui-paginator-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;