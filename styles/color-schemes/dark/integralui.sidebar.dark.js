import { c as css } from '../../../external/lit-element.js';

export const iuiSideBarDarkStyle = css`
    .iui-sidebar ul {
        padding: 4px;
    }
    .iui-sidebar-block {
        background: var(--iui-sidebar-background, #2e2e2e);
        border: var(--iui-sidebar-border, thin solid #151515);
        border-color:  var(--iui-sidebar-border-color, #151515);
    }
    .iui-sidebar-content {
        background: var(--iui-sidebar-content-background, #151515);
    }
    .iui-sidebar-content-resize {
        background: var(--iui-sidebar-content-resize-background, #007fd4);
    }
    .iui-sidebar-content-block {
        background: var(--iui-sidebar-content-background, #252526);
        border: var(--iui-sidebar-content-border, thin solid #151515);
        border-color: var(--iui-sidebar-content-border-color, #151515);
    }
    .iui-sidebar-header {
        background: var(--iui-sidebar-header-background, #323233);
        border: var(--iui-sidebar-header-border, thin solid #323233);
        border-color: var(--iui-sidebar-header-border-color, #323233);
        color: var(--iui-sidebar-header-color, #cccccc);
    }
    .iui-sidebar-button-pin {
        background-image: url(../../../icons/pin-white.ico);
    }
    .iui-sidebar-line {
        background: var(--iui-sidebar-line-background, #0e639c);
        display: var(--iui-sidebar-line-display, block);
    }
`;