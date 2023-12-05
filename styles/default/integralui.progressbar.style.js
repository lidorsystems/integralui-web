
import { c as css } from '../../external/lit-element.js';

export const iuiProgressBarDefaultStyle = css`
    .iui-progressbar {
        background: var(--iui-progressbar-background, transparent);
        border: var(--iui-progressbar-border, thin solid #cecece);
        border-color:  var(--iui-progressbar-border-color, #cecece);
        border-radius: var(--iui-progressbar-border-radius, 1px);
        border-width: var(--iui-progressbar-border-width, thin);
        color: var(--iui-progressbar-color, black);
        cursor: var(--iui-progressbar-cursor, default);
        display: var(--iui-progressbar-display, block);
        float: var(--iui-progressbar-float, none);
        font-size: var(--iui-progressbar-font-size, 1rem);
        font-style: var(--iui-progressbar-font-style, normal);
        height: var(--iui-progressbar-height, auto);
        margin: var(--iui-progressbar-margin, 0);
        opacity: var(--iui-progressbar-opacity, 1);
        overflow: hidden;
        padding: var(--iui-progressbar-padding, 2px);
        position: var(--iui-progressbar-position, relative);
        text-align: var(--iui-progressbar-text-align, left);
        white-space: nowrap;
        width: var(--iui-progressbar-width, auto);
        z-index: var(--iui-progressbar-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Progress Track */
    .iui-progressbar-track {
        background: var(--iui-progressbar-track-background, transparent);
        border-radius: var(--iui-progressbar-track-border-radius, 1px);
        border-width: var(--iui-progressbar-track-border-width, thin);
        display: block;
        position: absolute;
    }
    .iui-progressbar-track-content {
        background: var(--iui-progressbar-background, transparent);
    }
    .iui-progressbar-content {
        background: var(--iui-progressbar-content-background, #bebebe);
        border-radius: var(--iui-progressbar-content-border-radius, 3px);
        height: var(--iui-progressbar-content-height, 12px);
    }

    /* Progress Value */
    .iui-progressbar-label {
        background: var(--iui-progressbar-label-background, white);
        border-radius: var(--iui-progressbar-label-border-radius, 3px);
        display: block;
        padding: 1px 3px;
        position: absolute;
        z-index: 3;
    }

    /* Disabled State */
    .iui-progressbar-disabled div
    {
        opacity: var(--iui-progressbar-disabled-opacity, 0.25);
        pointer-events: none;
    }
`;