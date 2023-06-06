import { c as css } from '../../../external/lit-element.js';

export const iuiTabStripLightStyle = css`
    .iui-tabstrip {
        background: var(--iui-tabstrip-background, white);
    }
    .iui-tabstrip ul {
        padding: 4px;
    }
    .iui-tabstrip-content {
        border: var(--iui-tabstrip-content-border, thin solid #8cb1d1);
        border-color: var(--iui-tabstrip-content-border-color, #8cb1d1);
    }
    .iui-tabstrip-line {
        background: var(--iui-tabstrip-line-background, #3e8ccf);
        display: var(--iui-tabstrip-line-display, block);
    }
    .iui-tabstrip-scroll-border-bottom {
        border-bottom: var(--iui-tabstrip-scroll-border-bottom, thin solid #8cb1d1);
    }
    .iui-tabstrip-scroll-border-left {
        border-left: var(--iui-tabstrip-scroll-border-left, thin solid #8cb1d1);
    }
    .iui-tabstrip-scroll-border-right {
        border-right: var(--iui-tabstrip-scroll-border-right, thin solid #8cb1d1);
    }
    .iui-tabstrip-scroll-border-top {
        border-top: var(--iui-tabstrip-scroll-border-top, thin solid #8cb1d1);
    }
`;