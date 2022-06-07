
import { c as css } from '../../external/lit-element.js';

export const iuiProgressBarDefaultStyle = css`
    .iui-progressbar {
        background: var(--progressbar-background, transparent);
        border: var(--progressbar-border, thin solid #cecece);
        border-color:  var(--progressbar-border-color, #cecece);
        border-radius: var(--progressbar-border-radius, 1px);
        border-width: var(--progressbar-border-width, thin);
        color: var(--progressbar-color, black);
        cursor: var(--progressbar-cursor, default);
        display: var(--progressbar-display, block);
        float: var(--progressbar-float, none);
        height: var(--progressbar-height, auto);
        margin: var(--progressbar-margin, 0);
        opacity: var(--progressbar-opacity, 1);
        overflow: hidden;
        padding: var(--progressbar-padding, 2px);
        position: var(--progressbar-position, relative);
        white-space: nowrap;
        width: var(--progressbar-width, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Progress Track */
    .iui-progressbar-track {
        background: var(--progressbar-track-background, transparent);
        border-radius: var(--progressbar-track-border-radius, 1px);
        border-width: var(--progressbar-track-border-width, thin);
        display: block;
        position: absolute;
    }
    .iui-progressbar-track-content {
        background: var(--progressbar-background, transparent);
    }
    .iui-progressbar-content {
        background: var(--progressbar-content-background, #bebebe);
        border-radius: var(--progressbar-content-border-radius, 3px);
        height: var(--progressbar-content-height, 12px);
    }

    /* Progress Value */
    .iui-progressbar-label {
        background: var(--progressbar-label-background, white);
        border-radius: var(--progressbar-label-border-radius, 3px);
        display: block;
        padding: 1px 3px;
        position: absolute;
        z-index: 3;
    }

    /* Disabled State */
    .iui-progressbar-disabled div
    {
        opacity: var(--progressbar-disabled-opacity, 0.25);
        pointer-events: none;
    }
`;