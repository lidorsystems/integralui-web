
import { c as css } from '../../external/lit-element.js';

export const iuiRadioButtonDefaultStyle = css`
    .iui-radio-button {
        background: var(--radio-button-background, transparent);
        border: var(--radio-button-border, 0);
        border-color:  var(--radio-button-border-color, transparent);
        border-radius: var(--radio-button-border-radius, 1px);
        border-width: var(--radio-button-border-width, thin);
        color: var(--radio-button-color, black);
        cursor: var(--radio-button-cursor, default);
        display: var(--radio-button-display, inline-block);
        float: var(--radio-button-float, none);
        height: var(--radio-button-height, auto);
        margin: var(--radio-button-margin, 2px 0);
        opacity: var(--radio-button-opacity, 1);
        overflow: hidden;
        padding: var(--radio-button-padding, 5px);
        position: var(--radio-button-position, relative);
        width: var(--radio-button-width, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Button */
    .iui-radio-button-btn {
        background: var(--radio-button-btn-background, transparent);
        border: var(--radio-button-btn-border, 2px solid #c9c9c9);
        border-color: var(--radio-button-btn-border-color, #c9c9c9);
        border-radius: var(--radio-button-btn-border-radius, 10px);
        display: block;
        float: left;
        margin: var(--radio-button-btn-margin, 0 5px 0 0);
        padding: var(--radio-button-btn-padding, 2px);
        transition: var(--radio-button-btn-transition, none);
    }

    .iui-radio-button-btn span {
        background: var(--radio-button-btn-content-background, #c9c9c9);
        border: var(--radio-button-btn-content-border, 0);
        border-radius: var(--radio-button-btn-content-border-radius, 8px);
        display: block;
        height: var(--radio-button-btn-content-height, 12px);
        margin: var(--radio-button-btn-content-margin, 0);
        opacity: var(--radio-button-btn-content-opacity, 0);
        transition: var(--radio-button-btn-content-transition, none);
        width: var(--radio-button-btn-content-width, 12px);
    }
    .iui-radio-button-btn-checked {
        border-color: var(--radio-button-btn-checked-border-color, #646464);
    }
    .iui-radio-button-btn-checked span {
        background: var(--radio-button-btn-checked-content-background, #646464);
        display: block;
        opacity: var(--radio-button-btn-checked-content-opacity, 1);
    }

    /* Button on Hover */
    .iui-radio-button:hover .iui-radio-button-btn {
        border-color: var(--radio-button-btn-hovered-border-color, #646464);
    }
    .iui-radio-button:hover .iui-radio-button-btn span {
        background: var(--radio-button-btn-content-hovered-background, #c9c9c9);
    }
    .iui-radio-button:hover .iui-radio-button-btn-checked {
        border-color: var(--radio-button-btn-checked-hovered-border-color, #808080);
    }
    .iui-radio-button:hover .iui-radio-button-btn-checked span {
        background: var(--radio-button-btn-checked-content-hovered-background, #808080);
    }


    /* Button as Image
    .iui-radio-button-btn {
        border: var(--radio-button-btn-border, 0);
        float: left;
        margin: var(--radio-button-btn-margin, 0 5px 0 0);
        padding: var(--radio-button-btn-padding, 0);
    }

    .iui-radio-button-btn span {
        background-image: var(--radio-button-btn-background-image, url(../../icons/radio-unchecked.ico));
        background-repeat: no-repeat;
        display: block;
        padding: 0;
        margin: var(--radio-button-btn-margin, 0 0 0 3px);
        width: var(--radio-button-btn-width, 16px);
        height: var(--radio-button-btn-height, 16px);
        vertical-align: var(--radio-button-btn-vertical-align, middle);
    }
    .iui-radio-button-btn-checked span {
        background-image: var(--radio-button-btn-checked-background-image, url(../../icons/radio-checked.ico));
    }
    .iui-radio-button-btn-unchecked span {
        background-image: var(--radio-button-btn-unchecked-background-image, url(../../icons/radio-unchecked.ico));
    } */


    /* Content */
    .iui-radio-button-content {
        display: inline-block;
        margin: var(--radio-button-content-margin, 2px 0);
        padding: var(--radio-button-content-padding, 0);
    }

    /* Disabled State */
    .iui-radio-button-disabled {
        opacity: var(--radio-button-disabled-opacity, 0.75);
    }
    .iui-radio-button-btn-disabled {
        opacity: var(--radio-button-btn-disabled-opacity, 0.75);
    }
`;
