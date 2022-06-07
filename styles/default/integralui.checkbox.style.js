
import { c as css } from '../../external/lit-element.js';

export const iuiCheckBoxDefaultStyle = css`
    .iui-checkbox {
        background: var(--checkbox-background, transparent);
        border: var(--checkbox-border, thin solid transparent);
        border-color:  var(--checkbox-border-color, transparent);
        border-radius: var(--checkbox-border-radius, 1px);
        border-width: var(--checkbox-border-width, 1px);
        box-shadow: var(--checkbox-box-shadow, none);
        color: var(--checkbox-color, black);
        cursor: var(--checkbox-cursor, default);
        display: var(--checkbox-display, inline-block);
        float: var(--checkbox-float, none);
        height: var(--checkbox-height, auto);
        opacity: var(--checkbox-opacity, 1);
        overflow: hidden;
        margin: var(--checkbox-margin, 2px 0);
        padding: var(--checkbox-padding, 5px);
        position: var(--checkbox-position, relative);
        width: var(--checkbox-width, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-checkbox:focus {
        border: var(--checkbox-focus-border, thin dotted #cecece);
        outline: none !important;
    }

    /* Button */
    .iui-checkbox-btn {
        float: left;
        margin: var(--checkbox-btn-margin, 0 5px 0 0);
        padding: var(--checkbox-btn-padding, 0);
    }
    .iui-checkbox-btn span {
        background-image: var(--checkbox-btn-background-image, url(../../icons/checkbox-unchecked-1.ico));
        background-repeat: no-repeat;
        display: block;
        padding: 0;
        margin: var(--checkbox-btn-margin, 0 0 0 3px);
        width: var(--checkbox-btn-width, 16px);
        height: var(--checkbox-btn-height, 16px);
        vertical-align: var(--checkbox-btn-vertical-align, middle);
    }
    .iui-checkbox-btn-checked span {
        background-image: var(--checkbox-btn-checked-background-image, url(../../icons/checkbox-checked-1.ico));
    }
    .iui-checkbox-btn-indeterminate span {
        background-image: var(--checkbox-btn-indeterminate-background-image, url(../../icons/checkbox-indeterminate-1.ico));
    }
    .iui-checkbox-btn-unchecked span {
        background-image: var(--checkbox-btn-unchecked-background-image, url(../../icons/checkbox-unchecked-1.ico));
    }

    .iui-checkbox-content {
        display: var(--checkbox-content-display, inline-block);
    }

    /* Disabled State */
    .iui-checkbox-disabled {
        opacity: var(--checkbox-disabled-opacity, 0.75);
        pointer-events: none;
    }
    .iui-checkbox-btn-disabled {
        opacity: var(--checkbox-btn-disabled-opacity, 0.75);
    }

    .check-mark {
        stroke-dasharray: 150;
        stroke-dashoffset: 150;
        stroke-width: 11;
        fill: none;
    }

    .iui-checkbox:hover .check-mark {
        stroke-dashoffset: 0;
    }

    .check-mark-line {
        stroke-dasharray: 30;
        stroke-dashoffset: 0;
        stroke-width: 11;
        fill: red;
    }

    .iui-checkbox:hover .check-mark-line {
        stroke-dashoffset: 30;
    }

    .check-mark-line-2 {
        stroke-dasharray: 30;
        stroke-dashoffset: 0;
        stroke-width: 11;
        fill: none;
    }

    .iui-checkbox:hover .check-mark-line-2 {
        stroke-dashoffset: 30;
    }




    .expand-mark-line {
        stroke-dasharray: 45;
        stroke-dashoffset: 45;
        stroke-width: 11;
        fill: none;
    }

    .iui-checkbox:hover .expand-mark-line {
        stroke-dashoffset: 0;
    }

    .expand-mark-line-2 {
        stroke-dasharray: 45;
        stroke-dashoffset: 45;
        stroke-width: 11;
        fill: none;
    }

    .iui-checkbox:hover .expand-mark-line-2 {
        stroke-dashoffset: 0;
    }

    .expand-mark-line-3 {
        stroke-dasharray: 45;
        stroke-dashoffset: 0;
        stroke-width: 11;
        fill: none;
    }

    .iui-checkbox:hover .expand-mark-line-3 {
        stroke-dashoffset: 45;
    }

    .expand-mark-line-4 {
        stroke-dasharray: 45;
        stroke-dashoffset: 0;
        stroke-width: 11;
        fill: none;
    }

    .iui-checkbox:hover .expand-mark-line-4 {
        stroke-dashoffset: 45;
    }
`;
