
import { c as css } from '../../external/lit-element.js';

export const iuiTabStripDefaultStyle = css`
    .iui-tabstrip {
        background: var(--iui-tabstrip-background, transparent);
        border: var(--iui-tabstrip-border, 0);
        border-color:  var(--iui-tabstrip-border-color, transparent);
        border-radius: var(--iui-tabstrip-border-radius, 1px);
        border-width: var(--iui-tabstrip-border-width, thin);
        color: var(--iui-tabstrip-color, black);
        cursor: var(--iui-tabstrip-cursor, default);
        display: var(--iui-tabstrip-display, block);
        float: var(--iui-tabstrip-float, none);
        height: var(--iui-tabstrip-height, auto);
        margin: var(--iui-tabstrip-margin, 0);
        opacity: var(--iui-tabstrip-opacity, 1);
        overflow: hidden;
        padding: var(--iui-tabstrip-padding, 0);
        position: var(--iui-tabstrip-position, relative);
        width: var(--iui-tabstrip-width, auto);
        z-index: var(--iui-tabstrip-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-tabstrip-block {
        display: inline-block;
        overflow: hidden;
        position: absolute;
        vertical-align: top;
    }
    .iui-tabstrip-block > ul {
        position: absolute;
        list-style: none;
        list-style-type: none;
        margin: 0;
        padding: 0;
        white-space: nowrap;
    }
    .iui-tabstrip-content {
        background: var(--iui-tabstrip-content-background, white);
        border: var(--iui-tabstrip-content-border, thin solid #bcbcbc);
        border-color: var(--iui-tabstrip-content-border-color, #bcbcbc);
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
    .iui-tabstrip-line {
        background: var(--iui-tabstrip-line-background, #808080);
        display: var(--iui-tabstrip-line-display, none);
        left: 0;
        position: absolute;
        top: 0;
        z-index: 105;
    }
    .iui-tabstrip-scroll-inbound, .iui-tabstrip-scroll-outbound {
        background: var(--iui-tabstrip-scroll-background, white);
        cursor: default;
        display: inline-block;
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: absolute;
        z-index: 109;
    }
    .iui-tabstrip-scroll-border-bottom {
        border-bottom: var(--iui-tabstrip-scroll-border-bottom, thin solid #bcbcbc);
    }
    .iui-tabstrip-scroll-border-left {
        border-left: var(--iui-tabstrip-scroll-border-left, thin solid #bcbcbc);
    }
    .iui-tabstrip-scroll-border-right {
        border-right: var(--iui-tabstrip-scroll-border-right, thin solid #bcbcbc);
    }
    .iui-tabstrip-scroll-border-top {
        border-top: var(--iui-tabstrip-scroll-border-top, thin solid #bcbcbc);
    }
    .iui-tabstrip-scroll-button {
        background: var(--iui-tabstrip-scroll-button-background, transparent);
        border: var(--iui-tabstrip-scroll-button-border, thin solid #808080);
        border-radius: var(--iui-tabstrip-scroll-button-border-radius, 2px);
        display: inline-block;
        margin: var(--iui-tabstrip-scroll-button-margin, 0);
        padding: var(--iui-tabstrip-scroll-button-padding, 0);
        opacity: var(--iui-tabstrip-scroll-button-opacity, 0.6);
    }
    .iui-tabstrip-scroll-button:hover {
        background: var(--iui-tabstrip-scroll-button-hovered-background, #fefefe);
        border: var(--iui-tabstrip-scroll-button-hovered-border, thin solid #808080);
        opacity: var(--iui-tabstrip-scroll-button-hovered-opacity, 1);
    }
    .iui-tabstrip-scroll-button-selected {
        background: var(--iui-tabstrip-scroll-button-selected-background, white);
        border: var(--iui-tabstrip-scroll-button-selected-border, thin solid #808080);
        opacity: var(--iui-tabstrip-scroll-button-selected-opacity, 1);
    }
    .iui-tabstrip-scroll-button span {
        display: block;
        height: var(--iui-tabstrip-scroll-button-height, 24px);
        margin: 0;
        padding: 0;
        width: var(--iui-tabstrip-scroll-button-width, 24px);
    }
    .iui-tabstrip-scroll-button-left, .iui-tabstrip-scroll-button-right {
        margin-top: var(--iui-tabstrip-scroll-button-margin-top, 2px);
    }
    .iui-tabstrip-scroll-button-left span {
        background-image: var(--iui-tabstrip-scroll-button-prev-background-image, url(../../icons/prev-24.png));
    }
    .iui-tabstrip-scroll-button-right span {
        background-image: var(--iui-tabstrip-scroll-button-next-background-image, url(../../icons/next-24.png));
    }
    .iui-tabstrip-scroll-button-up {
        margin: 2px 0;
    }
    .iui-tabstrip-scroll-button-up, .iui-tabstrip-scroll-button-down {
        display: block;
        height: var(--iui-tabstrip-scroll-button-height, 24px);
        width: var(--iui-tabstrip-scroll-button-width, 24px);
    }
    .iui-tabstrip-scroll-button-up span {
        background-image: var(--iui-tabstrip-scroll-button-up-background-image, url(../../icons/up-24.png));
    }
    .iui-tabstrip-scroll-button-down span {
        background-image: var(--iui-tabstrip-scroll-button-down-background-image, url(../../icons/down-24.png));
    }
    .iui-tabstrip-scroll-button-inactive:hover {
        opacity: var(--iui-tabstrip-scroll-button-hover-opacity, 0.6);
    }
    .iui-tabstrip-scroll-button-inactive span {
        opacity: 0.5;
    }

    .iui-tabstrip-left-toolbar {
        display: inline-block;
        left: 0;
        position: absolute;
        vertical-align: top;
    }
    .iui-tabstrip-right-toolbar {
        display: inline-block;
        position: absolute;
        right: 0;
        vertical-align: top;
    }

    /* Disabled State */
    .iui-tabstrip-disabled div {
        opacity: var(--iui-tabstrip-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
