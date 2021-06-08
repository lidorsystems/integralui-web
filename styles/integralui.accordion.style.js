import { c as css } from '../external/lit-element.js';

const iuiAccordionDefaultStyle = css`
    .iui-accordion {
        background: var(--accordion-background, transparent);
        border: var(--accordion-border, 0);
        color: var(--accordion-color, black);
        cursor: var(--accordion-cursor, default);
        margin: var(--accordion-margin, 0);
        padding: var(--accordion-padding, 0);
        position: relative;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Disabled State */
    .iui-accordion-disabled div {
        opacity: var(--accordion-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiAccordionDefaultStyle };
