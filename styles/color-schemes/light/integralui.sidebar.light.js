import { c as css } from '../../../external/lit-element.js';

export const iuiSideBarLightStyle = css`
    .iui-sidebar ul {
        padding: 4px;
    }
    .iui-sidebar-content {
        background: var(--iui-sidebar-content-background, #f5f5f5);
    }
    .iui-sidebar-content-resize {
        background: var(--iui-sidebar-content-resize-background, #c8e4fa);
    }
    .iui-sidebar-content-block {
        border: var(--iui-sidebar-content-border, thin solid #d5d5d5);
        border-color: var(--iui-sidebar-content-border-color, #d5d5d5);
    }
    .iui-sidebar-line {
        background: var(--iui-sidebar-line-background, #3e8ccf);
        display: var(--iui-sidebar-line-display, block);
    }
`;