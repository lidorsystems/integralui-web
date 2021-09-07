import { c as css } from '../external/lit-element.js';

const iuiRadioButtonDefaultStyle = css`
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
        float: left;
        margin: 0 5px 0 0;
        padding: 0;
    }
    .iui-radio-button-btn span {
        background-image: var(--radio-button-btn-background-image, url(../icons/radio-unchecked.ico));
        background-repeat: no-repeat;
        display: block;
        padding: 0;
        margin: var(--radio-button-btn-margin, 0 0 0 3px);
        width: var(--radio-button-btn-width, 16px);
        height: var(--radio-button-btn-height, 16px);
        vertical-align: var(--radio-button-btn-vertical-align, middle);
    }
    .iui-radio-button-btn-checked span {
        background-image: var(--radio-button-btn-checked-background-image, url(../icons/radio-checked.ico));
    }
    .iui-radio-button-btn-unchecked span {
        background-image: var(--radio-button-btn-unchecked-background-image, url(../icons/radio-unchecked.ico));
    }
    
    /* Content */
    .iui-radio-button-content {
        display: inline-block;
    }

    /* Disabled State */
    .iui-radio-button-disabled {
        opacity: var(--radio-button-disabled-opacity, 0.75);
        pointer-events: none;
    }
    .iui-radio-button-btn-disabled {
        opacity: var(--radio-button-btn-disabled-opacity, 0.75);
    }
`;

export { iuiRadioButtonDefaultStyle };
