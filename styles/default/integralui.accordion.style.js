import { c as css } from '../../external/lit-element.js';

export const iuiAccordionDefaultStyle = css`
    .iui-accordion {
        background: var(--iui-accordion-background, transparent);
        border: var(--iui-accordion-border, 0);
        border-color:  var(--iui-accordion-border-color, transparent);
        border-radius: var(--iui-accordion-border-radius, 1px);
        border-width: var(--iui-accordion-border-width, 0);
        color: var(--iui-accordion-color, black);
        cursor: var(--iui-accordion-cursor, default);
        display: var(--iui-accordion-display, block);
        float: var(--iui-accordion-float, none);
        font-size: var(--iui-accordion-font-size, 1rem);
        font-style: var(--iui-accordion-font-style, normal);
        height: var(--iui-accordion-height, auto);
        opacity: var(--iui-accordion-opacity, 1);
        overflow: hidden;
        margin: var(--iui-accordion-margin, 0);
        padding: var(--iui-accordion-padding, 0);
        position: var(--iui-accordion-position, relative);
        text-align: var(--iui-accordion-text-align, left);
        width: var(--iui-accordion-width, auto);
        z-index: var(--iui-accordion-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Disabled State */
    .iui-accordion-disabled div {
        opacity: var(--iui-accordion-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;