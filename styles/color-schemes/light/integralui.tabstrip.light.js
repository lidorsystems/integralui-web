import { c as css } from '../../../external/lit-element.js';

export const iuiTabStripLightStyle = css`
    .iui-tabstrip {
        background: var(--tabstrip-background, white);
    }
    .iui-tabstrip ul {
        padding: 4px;
    }
    .iui-tabstrip-content {
        border: var(--tabstrip-content-border, thin solid #8cb1d1);
        border-color: var(--tabstrip-content-border-color, #8cb1d1);
    }
    .iui-tabstrip-line {
        background: var(--tabstrip-line-background, #3e8ccf);
        display: var(--tabstrip-line-display, block);
    }
    .iui-tabstrip-scroll-border-bottom {
        border-bottom: var(--tabstrip-scroll-border-bottom, thin solid #8cb1d1);
    }
    .iui-tabstrip-scroll-border-left {
        border-left: var(--tabstrip-scroll-border-left, thin solid #8cb1d1);
    }
    .iui-tabstrip-scroll-border-right {
        border-right: var(--tabstrip-scroll-border-right, thin solid #8cb1d1);
    }
    .iui-tabstrip-scroll-border-top {
        border-top: var(--tabstrip-scroll-border-top, thin solid #8cb1d1);
    }
`;