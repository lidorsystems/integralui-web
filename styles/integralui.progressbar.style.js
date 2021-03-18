
import { c as css } from '../external/lit-element.js';

export const iuiProgressBarDefaultStyle = css`
    .iui-progressbar
    {
        background: var(--progressbar-background, white);
        border: var(--progressbar-border, thin solid #cecece);
        border-radius: var(--progressbar-border-radius, 3px);
        color: var(--progressbar-color, black);
        cursor: var(--progressbar-cursor, default);
        margin: var(--progressbar-margin, 0);
        overflow: hidden;
        padding: var(--progressbar-padding, 2px);
        position: relative;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-progressbar-content
    {
        background: var(--progressbar-content-background, #bebebe);
        border-radius: var(--progressbar-content-border-radius, 3px);
        height: var(--progressbar-content-height, 12px);
    }


    /* Disabled State */
    .iui-progressbar-disabled div
    {
        opacity: var(--progressbar-disabled-opacity, 0.25);
        pointer-events: none;
    }
`;