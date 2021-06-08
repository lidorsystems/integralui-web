import { c as css } from '../../external/lit-element.js';

const iuiSplitContainerMidnightStyle = css`
    .iui-splitcontainer-splitter {
        background: var(--splitcontainer-splitter-background, #3c3c3c);
        border: var(--splitcontainer-splitter-border, thin solid #151515);
    }
    .iui-splitcontainer-tab {
        background: var(--splitcontainer-tab-background, transparent);
        border: var(--splitcontainer-tab-border, 0);
        color: var(--splitcontainer-tab-color, #cccccc);
   }
    .iui-splitcontainer-tab-selected {
        background: var(--splitcontainer-tab-selected-background, transparent);
    }
    .iui-splitcontainer-panel {
        background: var(--splitcontainer-panel-background, #252526);
        border: var(--splitcontainer-panel-border, thin solid #151515);
        color: var(--splitcontainer-panel-color, #cccccc);
    }
    .iui-splitcontainer-swap-button:hover {
        background: var(--splitcontainer-swap-button-hover-background, transparent);
        border-color: var(--splitcontainer-swap-button-hover-border-color, transparent);
    }
    .iui-splitcontainer-swap-button span {
        background-image: var(--splitcontainer-swap-button-background-image, url(../icons/swap-white.ico));
    }
    .iui-splitcontainer-button {
        background: var(--splitcontainer-button-background, #5e5e5e);
        border: var(--splitcontainer-button-border, thin solid #5e5e5e);
    }
    .iui-splitcontainer-button:hover {
        background: var(--splitcontainer-button-hover-background, #1177bb);
        border-color: var(--splitcontainer-button-hover-border-color, #1177bb);
    }
    .iui-splitcontainer-button-selected {
        background: var(--splitcontainer-button-selected-background, #0e639c);
        border-color: var(--splitcontainer-button-selected-border-color, #0e639c);
    }
`;

export { iuiSplitContainerMidnightStyle };
