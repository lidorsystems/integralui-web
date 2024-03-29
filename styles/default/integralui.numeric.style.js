import { c as css } from '../../external/lit-element.js';

export const iuiNumericDefaultStyle = css`
    .iui-numeric {
        background: var(--iui-numeric-background, white);
        border: var(--iui-numeric-border, 0);
        border-color:  var(--iui-numeric-border-color, transparent);
        border-radius: var(--iui-numeric-border-radius, 1px);
        border-width: var(--iui-numeric-border-width, thin);
        color: var(--iui-numeric-color, black);
        cursor: var(--iui-numeric-cursor, default);
        display: var(--iui-numeric-display, block);
        float: var(--iui-numeric-float, none);
        font-size: var(--iui-numeric-font-size, 1rem);
        font-style: var(--iui-numeric-font-style, normal);
        height: var(--iui-numeric-height, auto);
        margin: var(--iui-numeric-margin, 0);
        opacity: var(--iui-numeric-opacity, 1);
        overflow: hidden;
        padding: var(--iui-numeric-padding, 0);
        position: var(--iui-numeric-position, relative);
        text-align: var(--iui-numeric-text-align, left);
        vertical-align: var(--iui-numeric-vertical-align, initial);
        width: var(--iui-numeric-width, auto);
        z-index: var(--iui-numeric-z-index, auto);

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    
    .iui-numeric input {
        border: 0;
        font: inherit;
        font-family: inherit;
        text-align: right;
        width: calc(100% - 7px);
    }
    .iui-numeric input:focus {
        outline: none !important;
    }
    /* Chrome, Safari, Edge, Opera */
    .iui-numeric input::-webkit-outer-spin-button,
    .iui-numeric input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    /* Firefox */
    .iui-numeric input[type=number] {
        -moz-appearance: textfield;
    }

    /* DisplayMode - InBound */
    .iui-numeric-inbound-value {
        border: thin solid #cecece;
        float: left;
        margin: 0 1px 0 0;
        padding: var(--iui-numeric-inbound-value-padding,  1px);
        text-align: right;
        vertical-align: middle;
    }

    .iui-numeric-inbound-buttons {
        float: left;
    }
    .iui-numeric-inbound-btn {
        background: #f5f5f5;
        border: thin solid #cecece;
        display: inline-block;
        margin: 0 -3px 0 0;
        padding: var(--iui-numeric-inbound-btn-padding,  3px);
    }
    .iui-numeric-inbound-btn:last-of-type {
        margin: 0;
    }
    .iui-numeric-inbound-btn:hover {
        background: #e5e5e5;
        border: thin solid #bebebe;
    }
    .iui-numeric-inbound-buttons span {
        display: block;
        padding: 0;
        margin: 0;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-numeric-inbound-button-up {
        background-image: url(../../icons/up.ico);
    }
    .iui-numeric-inbound-button-down {
        background-image: url(../../icons/down.ico);
    }
    .iui-numeric-inbound-button-up:hover, .iui-numeric-inbound-button-down:hover {
    }

    /* DisplayMode - LeftRight */
    .iui-numeric-leftright-buttons {
        background: #f5f5f5;
        border: thin solid #cecece;
        display: inline-block;
        padding: 2px;
    }
    .iui-numeric-leftright-buttons:hover {
        background: #e5e5e5;
        border: thin solid #bebebe;
    }
    .iui-numeric-leftright-buttons span {
        display: block;
        padding: 0;
        margin: 0;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-numeric-leftright-decrease {
        background-image: url(../../icons/prev.ico);
    }
    .iui-numeric-leftright-increase {
        background-image: url(../../icons/next.ico);
    }
    .iui-numeric-leftright-value {
        border: thin solid #cecece;
        display: inline-block;
        margin: 0 1px;
        text-align: center;
    }

    /* DisplayMode - UpDown */
    .iui-numeric-updown-buttons {
        background: #f5f5f5;
        border: thin solid #cecece;
        display: block;
    }
    .iui-numeric-updown-buttons:hover {
        background: #e5e5e5;
        border: thin solid #bebebe;
    }
    .iui-numeric-updown-buttons span {
        display: block;
        padding: 0;
        margin: 0;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-numeric-updown-decrease {
        background-image: url(../../icons/down.ico);
    }
    .iui-numeric-updown-increase {
        background-image: url(../../icons/up.ico);
    }
    .iui-numeric-updown-value {
        border: thin solid #cecece;
        display: block;
        margin: 1px 0;
        text-align: center;
    }
    .iui-numeric-updown-value input {
        text-align: center;
    }

    
    .iui-numeric-inbound-value input, .iui-numeric-leftright-value input, .iui-numeric-updown-value input {
        background: transparent;
        border: 0;
    }


    /* Disabled State */
    .iui-numeric-disabled div {
        opacity: 0.75;
        pointer-events: none;
    }
`;

