import { c as css } from '../../external/lit-element.js';

const iuiLoadingDefaultStyle = css`
    .iui-loading {
        background: var(--iui-loading-background, #e5e5e5);
        border: var(--iui-loading-border, 0);
        border-color:  var(--iui-loading-border-color, transparent);
        border-radius: var(--iui-loading-border-radius, 1px);
        border-width: var(--iui-loading-border-width, 0);
        color: var(--iui-loading-color, black);
        cursor: var(--iui-loading-cursor, default);
        display: var(--iui-loading-display, none);
        float: var(--iui-loading-float, none);
        height: var(--iui-loading-height, auto);
        opacity: var(--iui-loading-opacity, 1);
        overflow: var(--iui-loading-overflow, hidden);
        margin: var(--iui-loading-margin, 0);
        padding: var(--iui-loading-padding, 0);
        position: var(--iui-loading-position, absolute);
        text-align: var(--iui-loading-text-align, center);
        vertical-align: var(--iui-loading-vertical-align, initial);
        width: var(--iui-loading-width, auto);
        z-index: var(--iui-loading-z-index, 999);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-loading-progress {
        background: #0080c0;
        width: 0;
        height: 100%;
    }
    
    /* Disabled State */
    .iui-loading-disabled {
        opacity: var(--iui-loading-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiLoadingDefaultStyle };
