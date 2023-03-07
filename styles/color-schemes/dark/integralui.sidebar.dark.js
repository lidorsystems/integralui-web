import { c as css } from '../../../external/lit-element.js';

export const iuiSideBarDarkStyle = css`
    .iui-sidebar ul {
        padding: 4px;
    }
    .iui-sidebar-block {
        background: var(--sidebar-background, #2e2e2e);
        border: var(--sidebar-border, thin solid #151515);
        border-color:  var(--sidebar-border-color, #151515);
    }
    .iui-sidebar-content {
        background: var(--sidebar-content-background, #151515);
    }
    .iui-sidebar-content-resize {
        background: var(--sidebar-content-resize-background, #007fd4);
    }
    .iui-sidebar-content-block {
        background: var(--sidebar-content-background, #252526);
        border: var(--sidebar-content-border, thin solid #151515);
        border-color: var(--sidebar-content-border-color, #151515);
    }
    .iui-sidebar-header {
        background: var(--sidebar-header-background, #323233);
        border: var(--sidebar-header-border, thin solid #323233);
        border-color: var(--sidebar-header-border-color, #323233);
        color: var(--sidebar-header-color, #cccccc);
    }
    .iui-sidebar-button-pin {
        background-image: url(../../../icons/pin-white.ico);
    }
    .iui-sidebar-line {
        background: var(--sidebar-line-background, #0e639c);
        display: var(--sidebar-line-display, block);
    }
`;