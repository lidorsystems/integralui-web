import { c as css } from '../external/lit-element.js';

const iuiPaginatorDefaultStyle = css`
    .iui-paginator {
        background: var(--paginator-background, #f0f0f0);
        border: var(--paginator-border, 0);
        border-color:  var(--paginator-border-color, transparent);
        border-radius: var(--paginator-border-radius, 1px);
        border-width: var(--paginator-border-width, thin);
        color: var(--paginator-color, black);
        cursor: var(--paginator-cursor, default);
        display: var(--paginator-display, block);
        float: var(--paginator-float, none);
        height: var(--paginator-height, auto);
        margin: var(--paginator-margin, 1px 0);
        opacity: var(--paginator-opacity, 1);
        overflow: hidden;
        padding: var(--paginator-padding, 3px 3px 0px 3px);
        position: var(--paginator-position, relative);
        white-space: nowrap;
        width: var(--paginator-width, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-paginator-button {
        background-color: var(--paginator-button-background-color, #dedede);
        display: inline-block;
        border: var(--paginator-button-border, thin solid #bebebe);
        border-radius: var(--paginator-button-border-radius, 3px);
        height: var(--paginator-button-height, 24px);
        margin: var(--paginator-button-margin, 2px);
        overflow: hidden;
        padding: var(--paginator-button-padding, 0);
        width: var(--paginator-button-width, 24px);
    }
    .iui-paginator-button:hover {
        background-color: var(--paginator-button-hover-background-color, #cecece);
    }
    .iui-paginator-first {
        background-image: var(--paginator-button-first-background-image, url(../icons/page-first-24.png));
    }
    .iui-paginator-prev {
        background-image: var(--paginator-button-prev-background-image, url(../icons/page-prev-24.png));
    }
    .iui-paginator-next {
        background-image: var(--paginator-button-next-background-image, url(../icons/page-next-24.png));
    }
    .iui-paginator-last {
        background-image: var(--paginator-button-last-background-image, url(../icons/page-last-24.png));
    }
    .iui-paginator-input {
        background: var(--paginator-input-background, white);
        display: inline-block;
        border: var(--paginator-input-border, thin solid #bebebe);
        border-radius: var(--paginator-input-border-radius, 3px);
        color: var(--paginator-input-color, black);
        height: var(--paginator-input-height, 24px);
        margin: var(--paginator-input-margin, 2px);
        overflow: hidden;
        padding: var(--paginator-input-padding, 0 5px);
        vertical-align: top;
        width: var(--paginator-input-width, 40px);
    }
    .iui-paginator-label {
        display: inline-block;
        height: var(--paginator-label-height, 24px);
        margin: var(--paginator-label-margin, 2px 5px);
        padding: var(--paginator-label-padding, 2px 0);
        vertical-align: top;
    }

    /* Disabled State */
    .iui-paginator-disabled span {
        opacity: var(--paginator-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiPaginatorDefaultStyle };
