import { c as css } from '../../external/lit-element.js';

const iuiTabStripOfficeStyle = css`
    .iui-tabstrip {
        background: var(--tabstrip-background, white);
    }
    .iui-tabstrip ul {
        padding: 4px;
    }
    .iui-tabstrip-content {
        border: var(--tabstrip-content-border, thin solid #d9d9d9);
        border-color: var(--tabstrip-content-border-color, #d9d9d9);
    }
    .iui-tabstrip-line {
        background: var(--tabstrip-line-background, #3e8ccf);
        display: var(--tabstrip-line-display, block);
    }
    .iui-tabstrip-scroll-border-bottom {
        border-bottom: var(--tabstrip-scroll-border-bottom, thin solid #d9d9d9);
    }
    .iui-tabstrip-scroll-border-left {
        border-left: var(--tabstrip-scroll-border-left, thin solid #d9d9d9);
    }
    .iui-tabstrip-scroll-border-right {
        border-right: var(--tabstrip-scroll-border-right, thin solid #d9d9d9);
    }
    .iui-tabstrip-scroll-border-top {
        border-top: var(--tabstrip-scroll-border-top, thin solid #d9d9d9);
    }
`;

export { iuiTabStripOfficeStyle };
