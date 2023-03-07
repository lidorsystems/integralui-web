import { c as css } from '../../external/lit-element.js';

const iuiLoadingDefaultStyle = css`
    .iui-loading {
        background: var(--loading-background, #e5e5e5);
        border: var(--loading-border, 0);
        border-color:  var(--loading-border-color, transparent);
        border-radius: var(--loading-border-radius, 1px);
        border-width: var(--loading-border-width, 0);
        color: var(--loading-color, black);
        cursor: var(--loading-cursor, default);
        display: var(--loading-display, none);
        float: var(--loading-float, none);
        height: var(--loading-height, auto);
        opacity: var(--loading-opacity, 1);
        overflow: var(--loading-overflow, hidden);
        margin: var(--loading-margin, 0);
        padding: var(--loading-padding, 0);
        position: var(--loading-position, absolute);
        text-align: var(--loading-text-align, center);
        vertical-align: var(--loading-vertical-align, initial);
        width: var(--loading-width, auto);
        z-index: var(--loading-z-index, 999);

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
        opacity: var(--loading-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiLoadingDefaultStyle };
