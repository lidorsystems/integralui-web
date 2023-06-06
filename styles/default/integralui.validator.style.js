
import { c as css } from '../../external/lit-element.js';

export const iuiValidatorStyle = css`
    .iui-validator {
        background: var(--iui-validator-background, #c45151);
        border: var(--iui-validator-border, thin solid #c45151);
        border-color:  var(--iui-validator-border-color, #c45151);
        border-radius: var(--iui-validator-border-radius, 5px);
        border-width: var(--iui-validator-border-width, thin);
        color: var(--iui-validator-color, white);
        cursor: var(--iui-validator-cursor, default);
        display: var(--iui-validator-display, block);
        font-size: var(--iui-validator-font-size, 1rem);
        height: var(--iui-validator-height, auto);
        margin: var(--iui-validator-margin, 0);
        opacity: var(--iui-validator-opacity, 0);
        overflow: visible;
        padding: var(--iui-validator-padding, 0);
        position: var(--iui-validator-position, absolute);
        top: -9999999px;
        transform: scale(0);
        width: var(--iui-validator-width, auto);
        z-index: var(--iui-button-z-index, 9999999);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;

    }
    .iui-validator-open {
        opacity: var(--iui-validator-open-opacity, 1);
        transform: scale(1);
    }
    .iui-validator div {
        -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: content-box;    /* Firefox, other Gecko */
        box-sizing: content-box; 
    }
    .iui-validator > div {
        padding: var(--iui-validator-padding, 5px);
        position: absolute;
        top: 0;
        left: 0;
        white-space: nowrap;
    }
    .iui-validator-marker-top::before {
        content: "";
        border: var(--iui-validator-marker-top-before-border, 5px solid #c45151);
        border-color: var(--iui-validator-marker-top-before-border-color, transparent transparent #c45151 transparent);
        position: absolute;
        top: -10px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-validator-marker-top::after {
        content: "";
        border: var(--iui-validator-marker-top-after-border, 5px solid #c45151);
        border-color: var(--iui-validator-marker-top-after-border-color, transparent transparent #c45151 transparent);
        position: absolute;
        top: -9px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-validator-marker-bottom::before {
        content: "";
        border: var(--iui-validator-marker-bottom-before-border, 5px solid #c45151);
        border-color: var(--iui-validator-marker-bottom-before-border-color, #c45151 transparent transparent transparent);
        position: absolute;
        bottom: -10px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-validator-marker-bottom::after {
        content: "";
        border: var(--iui-validator-marker-bottom-after-border, 5px solid #c45151);
        border-color: var(--iui-validator-marker-bottom-after-border-color, #c45151 transparent transparent transparent);
        position: absolute;
        bottom: -9px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-validator-marker-left::before {
        content: "";
        border: var(--iui-validator-marker-left-before-border, 5px solid #c45151);
        border-color: var(--iui-validator-marker-left-before-border-color, transparent #c45151 transparent transparent);
        position: absolute;
        top: 12px;
        left: -10px;
    }
    .iui-validator-marker-left::after {
        content: "";
        border: var(--iui-validator-marker-left-after-border, 5px solid #c45151);
        border-color: var(--iui-validator-marker-left-after-border-color, transparent #c45151 transparent transparent);
        position: absolute;
        top: 12px;
        left: -9px;
    }
    .iui-validator-marker-right::before {
        content: "";
        border: var(--iui-validator-marker-right-before-border, 5px solid #c45151);
        border-color: var(--iui-validator-marker-right-before-border-color, transparent transparent transparent #c45151);
        position: absolute;
        top: 12px;
        right: -10px;
    }
    .iui-validator-marker-right::after {
        content: "";
        border: var(--iui-validator-marker-right-after-border, 5px solid #c45151);
        border-color: var(--iui-validator-marker-right-after-border-color, transparent transparent transparent #c45151);
        position: absolute;
        top: 12px;
        right: -9px;
    }
`;
