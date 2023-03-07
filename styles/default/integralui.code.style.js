import { c as css } from '../../external/lit-element.js';

const iuiCodeDefaultStyle = css`
    .iui-code {
        background: var(--code-background, #f5f5f5);
        border: var(--code-border, 0);
        border-color:  var(--code-border-color, #cecece);
        border-radius: var(--code-border-radius, 1px);
        border-width: var(--code-border-width, 0);
        color: var(--code-color, black);
        cursor: var(--code-cursor, default);
        display: var(--code-display, none);
        float: var(--code-float, none);
        height: var(--code-height, 100%);
        opacity: var(--code-opacity, 1);
        overflow: var(--code-overflow, hidden);
        margin: var(--code-margin, 0);
        padding: var(--code-padding, 0);
        position: var(--code-position, absolute);
        text-align: var(--code-text-align, center);
        vertical-align: var(--code-vertical-align, initial);
        width: var(--code-width, auto);
        z-index: var(--code-z-index, 999);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-code-content {
        overflow: auto;
    }

    /* Disabled State */
    .iui-code-disabled {
        opacity: var(--code-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiCodeDefaultStyle };
