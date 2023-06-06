import { c as css } from '../../external/lit-element.js';

const iuiCodeDefaultStyle = css`
    .iui-code {
        background: var(--iui-code-background, #f5f5f5);
        border: var(--iui-code-border, 0);
        border-color:  var(--iui-code-border-color, #cecece);
        border-radius: var(--iui-code-border-radius, 1px);
        border-width: var(--iui-code-border-width, 0);
        color: var(--iui-code-color, black);
        cursor: var(--iui-code-cursor, default);
        display: var(--iui-code-display, none);
        float: var(--iui-code-float, none);
        height: var(--iui-code-height, 100%);
        opacity: var(--iui-code-opacity, 1);
        overflow: var(--iui-code-overflow, hidden);
        margin: var(--iui-code-margin, 0);
        padding: var(--iui-code-padding, 0);
        position: var(--iui-code-position, absolute);
        text-align: var(--iui-code-text-align, center);
        vertical-align: var(--iui-code-vertical-align, initial);
        width: var(--iui-code-width, auto);
        z-index: var(--iui-code-z-index, 999);

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
        opacity: var(--iui-code-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiCodeDefaultStyle };
