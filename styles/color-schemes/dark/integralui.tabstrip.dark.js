import { c as css } from '../../../external/lit-element.js';

export const iuiTabStripDarkStyle = css`
    .iui-tabstrip {
        background: var(--iui-tabstrip-background, #1e1e1e);
    }
    .iui-tabstrip ul {
        padding: 4px;
    }
    .iui-tabstrip-content {
        background: var(--iui-tabstrip-content-background, #252526);
        border: var(--iui-tabstrip-content-border, thin solid #151515);
        border-color: var(--iui-tabstrip-content-border-color, #0f344d);
    }
    .iui-tabstrip-line {
        background: var(--iui-tabstrip-line-background, #0e639c);
        display: var(--iui-tabstrip-line-display, block);
    }
    .iui-tabstrip-scroll-inbound, .iui-tabstrip-scroll-outbound {
        background: var(--iui-tabstrip-scroll-background, #1e1e1e);
    }
    .iui-tabstrip-scroll-border-bottom {
        border-bottom: var(--iui-tabstrip-scroll-border-bottom, thin solid #151515);
    }
    .iui-tabstrip-scroll-border-left {
        border-left: var(--iui-tabstrip-scroll-border-left, thin solid #151515);
    }
    .iui-tabstrip-scroll-border-right {
        border-right: var(--iui-tabstrip-scroll-border-right, thin solid #151515);
    }
    .iui-tabstrip-scroll-border-top {
        border-top: var(--iui-tabstrip-scroll-border-top, thin solid #151515);
    }
    .iui-tabstrip-scroll-button {
        background: var(--iui-tabstrip-scroll-button-background, #1e1e1e);
        border: var(--iui-tabstrip-scroll-button-border, thin solid #1e1e1e);
        opacity: var(--iui-tabstrip-scroll-button-opacity, 0.5);
    }
    .iui-tabstrip-scroll-button:hover {
        background: var(--iui-tabstrip-scroll-button-hovered-background, #1e1e1e);
        border: var(--iui-tabstrip-scroll-button-hovered-border, thin solid #1e1e1e);
        opacity: var(--iui-tabstrip-scroll-button-hovered-opacity, 0.75);
    }
    .iui-tabstrip-scroll-button-selected {
        background: var(--iui-tabstrip-scroll-button-selected-background, #1e1e1e);
        border: var(--iui-tabstrip-scroll-button-selected-border, thin solid #1e1e1e);
        opacity: var(--iui-tabstrip-scroll-button-selected-opacity, 0.75);
    }
    .iui-tabstrip-scroll-button-left span {
        background-image: var(--iui-tabstrip-scroll-button-prev-background-image, url(../icons/prev-white-24.png));
    }
    .iui-tabstrip-scroll-button-right span {
        background-image: var(--iui-tabstrip-scroll-button-next-background-image, url(../icons/next-white-24.png));
    }
    .iui-tabstrip-scroll-button-up span {
        background-image: var(--iui-tabstrip-scroll-button-up-background-image, url(../icons/up-white-24.png));
    }
    .iui-tabstrip-scroll-button-down span {
        background-image: var(--iui-tabstrip-scroll-button-down-background-image, url(../icons/down-white-24.png));
    }
`;