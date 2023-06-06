import { c as css } from '../../../external/lit-element.js';

export const iuiSplitContainerDarkStyle = css`
    .iui-splitcontainer-splitter {
        background: var(--iui-splitcontainer-splitter-background, #3c3c3c);
        border: var(--iui-splitcontainer-splitter-border, thin solid #151515);
    }
    .iui-splitcontainer-tab {
        background: var(--iui-splitcontainer-tab-background, transparent);
        border: var(--iui-splitcontainer-tab-border, 0);
        color: var(--iui-splitcontainer-tab-color, #cccccc);
   }
    .iui-splitcontainer-tab-selected {
        background: var(--iui-splitcontainer-tab-selected-background, transparent);
    }
    .iui-splitcontainer-panel {
        background: var(--iui-splitcontainer-panel-background, #252526);
        border: var(--iui-splitcontainer-panel-border, thin solid #151515);
        color: var(--iui-splitcontainer-panel-color, #cccccc);
    }
    .iui-splitcontainer-swap-button:hover {
        background: var(--iui-splitcontainer-swap-button-hover-background, transparent);
        border-color: var(--iui-splitcontainer-swap-button-hover-border-color, transparent);
    }
    .iui-splitcontainer-swap-button span {
        background-image: var(--iui-splitcontainer-swap-button-background-image, url(../../../icons/swap-white.ico));
    }
    .iui-splitcontainer-button {
        background: var(--iui-splitcontainer-button-background, #5e5e5e);
        border: var(--iui-splitcontainer-button-border, thin solid #5e5e5e);
    }
    .iui-splitcontainer-button:hover {
        background: var(--iui-splitcontainer-button-hover-background, #1177bb);
        border-color: var(--iui-splitcontainer-button-hover-border-color, #1177bb);
    }
    .iui-splitcontainer-button-selected {
        background: var(--iui-splitcontainer-button-selected-background, #0e639c);
        border-color: var(--iui-splitcontainer-button-selected-border-color, #0e639c);
    }
`;