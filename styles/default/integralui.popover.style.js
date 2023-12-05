
import { c as css } from '../../external/lit-element.js';

export const iuiPopOverDefaultStyle = css`
    .iui-popover {
        background: var(--iui-popover-background, white);
        border: var(--iui-popover-border, thin solid #cecece);
        border-color:  var(--iui-popover-border-color, #cecece);
        border-radius: var(--iui-popover-border-radius, 1px);
        border-width: var(--iui-popover-border-width, thin);
        color: var(--iui-popover-color, #323232);
        cursor: var(--iui-popover-cursor, default);
        display: var(--iui-popover-display, block);
        float: var(--iui-popover-float, none);
        font-size: var(--iui-popover-font-size, 1rem);
        font-style: var(--iui-popover-font-style, normal);
        height: var(--iui-popover-height, auto);
        margin: var(--iui-popover-margin, 0);
        opacity: var(--iui-popover-opacity, 1);
        overflow: visible;
        padding: var(--iui-popover-padding, 0);
        position: var(--iui-popover-position, absolute);
        text-align: var(--iui-popover-text-align, left);
        top: -999999px;
        width: var(--iui-popover-width, auto);
        z-index: var(--iui-popover-z-index, 9999999);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    .iui-popover div { /*Compatibility with Bootstrap */
        -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: content-box;    /* Firefox, other Gecko */
        box-sizing: content-box; 
    }
    .iui-popover-marker-top::before {
        content: "";
        border: var(--iui-popover-marker-before-border, 8px solid #cecece);
        border-color: var(--iui-popover-marker-border-top-before-color, transparent transparent #cecece transparent);
        position: absolute;
        top: -17px;
        left: calc(50% - 8px);
        width: 0;
        height: 0;
    }
    .iui-popover-marker-top::after {
        content: "";
        border: var(--iui-popover-marker-after-border, 8px solid #fefefe);
        border-color: var(--iui-popover-marker-border-top-after-color, transparent transparent #fefefe transparent);
        position: absolute;
        top: -16px;
        left: calc(50% - 8px);
        width: 0;
        height: 0;
    }
    .iui-popover-marker-bottom::before {
        content: "";
        border: var(--iui-popover-marker-before-border, 8px solid #cecece);
        border-color: var(--iui-popover-marker-border-bottom-before-color, #cecece transparent transparent transparent);
        position: absolute;
        bottom: -17px;
        left: calc(50% - 8px);
        width: 0;
        height: 0;
    }
    .iui-popover-marker-bottom::after {
        content: "";
        border: var(--iui-popover-marker-after-border, 8px solid #fefefe);
        border-color: var(--iui-popover-marker-border-bottom-after-color, #fefefe transparent transparent transparent);
        position: absolute;
        bottom: -16px;
        left: calc(50% - 8px);
        width: 0;
        height: 0;
    }
    .iui-popover-marker-left::before {
        content: "";
        border: var(--iui-popover-marker-before-border, 8px solid #cecece);
        border-color: var(--iui-popover-marker-border-left-before-color, transparent #cecece transparent transparent);
        position: absolute;
        top: calc(50% - 8px);
        left: -17px;
    }
    .iui-popover-marker-left::after {
        content: "";
        border: var(--iui-popover-marker-after-border, 8px solid #fefefe);
        border-color: var(--iui-popover-marker-border-left-after-color, transparent #fefefe transparent transparent);
        position: absolute;
        top: calc(50% - 8px);
        left: -16px;
    }
    .iui-popover-marker-right::before {
        content: "";
        border: var(--iui-popover-marker-before-border, 8px solid #cecece);
        border-color: var(--iui-popover-marker-border-right-before-color, transparent transparent transparent #cecece);
        position: absolute;
        top: calc(50% - 8px);
        right: -17px;
    }
    .iui-popover-marker-right::after {
        content: "";
        border: var(--iui-popover-marker-after-border, 8px solid #fefefe);
        border-color: var(--iui-popover-marker-border-right-after-color, transparent transparent transparent #fefefe);
        position: absolute;
        top: calc(50% - 8px);
        right: -16px;
    }

    .iui-popover-header {
        background: var(--iui-popover-header-background, #e5e5e5);
        border-bottom: var(--iui-popover-header-border-bottom, thin solid #cecece);
        padding: 5px;
    }
    .iui-popover-header:hover {
        background: var(--iui-popover-header-hovered-background, #efefef);
    }
    .iui-popover-title {
        display: inline-block;
        white-space: nowrap;
        vertical-align: top;
    }
    .iui-popover-close-button {
        opacity: 0.5;
    }
    .iui-popover-close-button:hover {
        opacity: 1;
    }
    .iui-popover-close-button span {
        background-image: url(../../icons/close-dark.ico);
        display: inline-block;
        float: right;
        height: 16px;
        margin: 0;
        overflow: hidden;
        padding: 0;
        width: 16px;
    }
    .iui-popover-content {
        padding: 0;
    }
`;
