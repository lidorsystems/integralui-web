
import { c as css } from '../../external/lit-element.js';

export const iuiRadioButtonDefaultStyle = css`
    .iui-radio-button {
        background: var(--iui-radio-button-background, transparent);
        border: var(--iui-radio-button-border, 0);
        border-color:  var(--iui-radio-button-border-color, transparent);
        border-radius: var(--iui-radio-button-border-radius, 1px);
        border-width: var(--iui-radio-button-border-width, thin);
        color: var(--iui-radio-button-color, black);
        cursor: var(--iui-radio-button-cursor, default);
        display: var(--iui-radio-button-display, inline-block);
        float: var(--iui-radio-button-float, none);
        height: var(--iui-radio-button-height, auto);
        margin: var(--iui-radio-button-margin, 2px 0);
        opacity: var(--iui-radio-button-opacity, 1);
        overflow: hidden;
        padding: var(--iui-radio-button-padding, 5px);
        position: var(--iui-radio-button-position, relative);
        text-align: var(--iui-radio-button-text-align, left);
        vertical-align: var(--iui-radio-button-vertical-align, middle);
        width: var(--iui-radio-button-width, auto);
        z-index: var(--iui-radio-button-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Button */
    .iui-radio-button-btn {
        background: var(--iui-radio-button-btn-background, transparent);
        border: var(--iui-radio-button-btn-border, 2px solid #c9c9c9);
        border-color: var(--iui-radio-button-btn-border-color, #c9c9c9);
        border-radius: var(--iui-radio-button-btn-border-radius, 10px);
        display: block;
        float: left;
        margin: var(--iui-radio-button-btn-margin, 0 5px 0 0);
        padding: var(--iui-radio-button-btn-padding, 2px);
        transition: var(--iui-radio-button-btn-transition, none);
    }

    .iui-radio-button-btn span {
        background: var(--iui-radio-button-btn-content-background, #c9c9c9);
        border: var(--iui-radio-button-btn-content-border, 0);
        border-radius: var(--iui-radio-button-btn-content-border-radius, 8px);
        display: block;
        height: var(--iui-radio-button-btn-content-height, 12px);
        margin: var(--iui-radio-button-btn-content-margin, 0);
        opacity: var(--iui-radio-button-btn-content-opacity, 0);
        transition: var(--iui-radio-button-btn-content-transition, none);
        width: var(--iui-radio-button-btn-content-width, 12px);
    }
    .iui-radio-button-btn-checked {
        border-color: var(--iui-radio-button-btn-checked-border-color, #646464);
    }
    .iui-radio-button-btn-checked span {
        background: var(--iui-radio-button-btn-checked-content-background, #646464);
        display: block;
        opacity: var(--iui-radio-button-btn-checked-content-opacity, 1);
    }

    /* Button on Hover */
    .iui-radio-button:hover .iui-radio-button-btn {
        border-color: var(--iui-radio-button-btn-hovered-border-color, #646464);
    }
    .iui-radio-button:hover .iui-radio-button-btn span {
        background: var(--iui-radio-button-btn-content-hovered-background, #c9c9c9);
    }
    .iui-radio-button:hover .iui-radio-button-btn-checked {
        border-color: var(--iui-radio-button-btn-checked-hovered-border-color, #808080);
    }
    .iui-radio-button:hover .iui-radio-button-btn-checked span {
        background: var(--iui-radio-button-btn-checked-content-hovered-background, #808080);
    }


    /* Button as Image
    .iui-radio-button-btn {
        border: var(--iui-radio-button-btn-border, 0);
        float: left;
        margin: var(--iui-radio-button-btn-margin, 0 5px 0 0);
        padding: var(--iui-radio-button-btn-padding, 0);
    }

    .iui-radio-button-btn span {
        background-image: var(--iui-radio-button-btn-background-image, url(../../icons/radio-unchecked.ico));
        background-repeat: no-repeat;
        display: block;
        padding: 0;
        margin: var(--iui-radio-button-btn-margin, 0 0 0 3px);
        width: var(--iui-radio-button-btn-width, 16px);
        height: var(--iui-radio-button-btn-height, 16px);
        vertical-align: var(--iui-radio-button-btn-vertical-align, middle);
    }
    .iui-radio-button-btn-checked span {
        background-image: var(--iui-radio-button-btn-checked-background-image, url(../../icons/radio-checked.ico));
    }
    .iui-radio-button-btn-unchecked span {
        background-image: var(--iui-radio-button-btn-unchecked-background-image, url(../../icons/radio-unchecked.ico));
    } */


    /* Content */
    .iui-radio-button-content {
        display: inline-block;
        margin: var(--iui-radio-button-content-margin, 2px 0);
        padding: var(--iui-radio-button-content-padding, 0);
    }

    /* Disabled State */
    .iui-radio-button-disabled {
        opacity: var(--iui-radio-button-disabled-opacity, 0.75);
    }
    .iui-radio-button-btn-disabled {
        opacity: var(--iui-radio-button-btn-disabled-opacity, 0.75);
    }
`;
