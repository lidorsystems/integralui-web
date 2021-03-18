import { c as css } from '../external/lit-element.js';

export const iuiNumericDefaultStyle = css`
    .iui-numeric {
        background: white;
        color: black;
        cursor: default;
        display: var(--numeric-display, block);
        margin: var(--numeric-margin, 0);
        overflow: hidden;
        padding: 0;
        position: relative;
        
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
        padding: 1px;
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
        padding: 3px;
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
        background-image: url(../icons/up.ico);
    }
    .iui-numeric-inbound-button-down {
        background-image: url(../icons/down.ico);
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
        background-image: url(../icons/prev.ico);
    }
    .iui-numeric-leftright-increase {
        background-image: url(../icons/next.ico);
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
        background-image: url(../icons/down.ico);
    }
    .iui-numeric-updown-increase {
        background-image: url(../icons/up.ico);
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


    /* Disabled State */
    .iui-numeric-disabled div {
        opacity: 0.75;
        pointer-events: none;
    }
`;

