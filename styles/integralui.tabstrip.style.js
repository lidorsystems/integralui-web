import { c as css } from '../external/lit-element.js';

const iuiTabStripDefaultStyle = css`
    .iui-tabstrip {
        background: var(--tabstrip-background, transparent);
        border: var(--tabstrip-border, 0);
        color: var(--tabstrip-color, black);
        cursor: var(--tabstrip-cursor, default);
        overflow: hidden;
        margin: var(--tabstrip-margin, 0);
        padding: var(--tabstrip-padding, 0);
        position: relative;

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
        background: var(--tabstrip-content-background, white);
        border: var(--tabstrip-content-border, thin solid #bcbcbc);
        border-color: var(--tabstrip-content-border-color, #bcbcbc);
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    .iui-tabstrip-line {
        background: var(--tabstrip-line-background, #808080);
        display: var(--tabstrip-line-display, none);
        left: 0;
        position: absolute;
        top: 0;
        z-index: 5;
    }
    .iui-tabstrip-scroll-inbound, .iui-tabstrip-scroll-outbound {
        background: var(--tabstrip-scroll-background, white);
        cursor: default;
        display: inline-block;
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: absolute;
        z-index: 9;
    }
    .iui-tabstrip-scroll-border-bottom {
        border-bottom: var(--tabstrip-scroll-border-bottom, thin solid #bcbcbc);
    }
    .iui-tabstrip-scroll-border-left {
        border-left: var(--tabstrip-scroll-border-left, thin solid #bcbcbc);
    }
    .iui-tabstrip-scroll-border-right {
        border-right: var(--tabstrip-scroll-border-right, thin solid #bcbcbc);
    }
    .iui-tabstrip-scroll-border-top {
        border-top: var(--tabstrip-scroll-border-top, thin solid #bcbcbc);
    }
    .iui-tabstrip-scroll-button {
        background: var(--tabstrip-scroll-button-background, transparent);
        border: var(--tabstrip-scroll-button-border, thin solid #808080);
        border-radius: var(--tabstrip-scroll-button-border-radius, 2px);
        display: inline-block;
        margin: var(--tabstrip-scroll-button-margin, 0);
        padding: var(--tabstrip-scroll-button-padding, 0);
        opacity: var(--tabstrip-scroll-button-opacity, 0.6);
    }
    .iui-tabstrip-scroll-button:hover {
        background: var(--tabstrip-scroll-button-hovered-background, #fefefe);
        border: var(--tabstrip-scroll-button-hovered-border, thin solid #808080);
        opacity: var(--tabstrip-scroll-button-hovered-opacity, 1);
    }
    .iui-tabstrip-scroll-button-selected {
        background: var(--tabstrip-scroll-button-selected-background, white);
        border: var(--tabstrip-scroll-button-selected-border, thin solid #808080);
        opacity: var(--tabstrip-scroll-button-selected-opacity, 1);
    }
    .iui-tabstrip-scroll-button span {
        display: block;
        height: var(--tabstrip-scroll-button-height, 24px);
        margin: 0;
        padding: 0;
        width: var(--tabstrip-scroll-button-width, 24px);
    }
    .iui-tabstrip-scroll-button-left, .iui-tabstrip-scroll-button-right {
        margin-top: var(--tabstrip-scroll-button-margin-top, 2px);
    }
    .iui-tabstrip-scroll-button-left span {
        background-image: var(--tabstrip-scroll-button-prev-background-image, url(../icons/prev-24.png));
    }
    .iui-tabstrip-scroll-button-right span {
        background-image: var(--tabstrip-scroll-button-next-background-image, url(../icons/next-24.png));
    }
    .iui-tabstrip-scroll-button-up {
        margin: 2px 0;
    }
    .iui-tabstrip-scroll-button-up, .iui-tabstrip-scroll-button-down {
        display: block;
        height: var(--tabstrip-scroll-button-height, 24px);
        width: var(--tabstrip-scroll-button-width, 24px);
    }
    .iui-tabstrip-scroll-button-up span {
        background-image: var(--tabstrip-scroll-button-up-background-image, url(../icons/up-24.png));
    }
    .iui-tabstrip-scroll-button-down span {
        background-image: var(--tabstrip-scroll-button-down-background-image, url(../icons/down-24.png));
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
        opacity: var(--tabstrip-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiTabStripDefaultStyle };
