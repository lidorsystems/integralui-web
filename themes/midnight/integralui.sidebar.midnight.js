import { c as css } from '../../external/lit-element.js';

const iuiSideBarMidnightStyle = css`
    .iui-sidebar {
        background: var(--sidebar-background, #1e1e1e);
    }
    .iui-sidebar ul {
        padding: 4px;
    }
    .iui-sidebar-block {
        background: #3e3e3e;
        border: thin solid #151515;
    }
    .iui-sidebar-content {
        background: var(--sidebar-content-background, #252526);
        border: var(--sidebar-content-border, thin solid #151515);
        border-color: var(--sidebar-content-border-color, #151515);
    }
    .iui-sidebar-line {
        background: var(--sidebar-line-background, #0e639c);
        display: var(--sidebar-line-display, block);
    }
`;

export { iuiSideBarMidnightStyle };
