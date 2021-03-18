
import { c as css } from '../external/lit-element.js';

export const iuiCheckBoxDefaultStyle = css`
    .iui-checkbox {
        background: var(--checkbox-background, transparent);
        border: var(--checkbox-border, 0);
        border-color: var(--checkbox-border-color, transparent);
        color: var(--checkbox-color, black);
        cursor: var(--checkbox-cursor, default);
        display: var(--checkbox-display, inline-block);
        margin: var(--checkbox-margin, 2px 0);
        overflow: hidden;
        padding: var(--checkbox-padding, 5px);
        position: relative;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Button */
    .iui-checkbox-btn {
        float: left;
        margin: var(--checkbox-btn-margin, 0 5px 0 0);
        padding: var(--checkbox-btn-padding, 0);
    }
    .iui-checkbox-btn span {
        background-image: var(--checkbox-btn-background-image, url(../icons/checkbox-unchecked-1.ico));
        background-repeat: no-repeat;
        display: block;
        padding: 0;
        margin: var(--checkbox-btn-margin, 0 0 0 3px);
        width: var(--checkbox-btn-width, 16px);
        height: var(--checkbox-btn-height, 16px);
        vertical-align: var(--checkbox-btn-vertical-align, middle);
    }
    .iui-checkbox-btn-checked span {
        background-image: var(--checkbox-btn-checked-background-image, url(../icons/checkbox-checked-1.ico));
    }
    .iui-checkbox-btn-indeterminate span {
        background-image: var(--checkbox-btn-indeterminate-background-image, url(../icons/checkbox-indeterminate-1.ico));
    }
    .iui-checkbox-btn-unchecked span {
        background-image: var(--checkbox-btn-unchecked-background-image, url(../icons/checkbox-unchecked-1.ico));
    }

    .iui-checkbox-content {
        display: inline-block;
    }

    /* Disabled State */
    .iui-checkbox-disabled {
        opacity: var(--checkbox-disabled-opacity, 0.75);
        pointer-events: none;
    }
    .iui-checkbox-btn-disabled {
        opacity: var(--checkbox-btn-disabled-opacity, 0.75);
    }
    `;
