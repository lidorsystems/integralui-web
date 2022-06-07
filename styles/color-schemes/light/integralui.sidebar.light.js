import { c as css } from '../../../external/lit-element.js';

export const iuiSideBarLightStyle = css`
    .iui-sidebar {
        background: var(--sidebar-background, white);
    }
    .iui-sidebar ul {
        padding: 4px;
    }
    .iui-sidebar-content {
        border: var(--sidebar-content-border, thin solid #d9d9d9);
        border-color: var(--sidebar-content-border-color, #d9d9d9);
    }
    .iui-sidebar-line {
        background: var(--sidebar-line-background, #3e8ccf);
        display: var(--sidebar-line-display, block);
    }
`;