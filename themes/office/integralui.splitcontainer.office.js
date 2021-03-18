import { c as css } from '../../external/lit-element.js';

export const iuiSplitContainerOfficeStyle = css`
    .iui-splitcontainer-tab {
        border: var(--splitcontainer-tab-border, thin solid #d9d9d9);
    }
    .iui-splitcontainer-splitter {
        background: var(--splitcontainer-splitter-background, #e5f3fe);
        border: var(--splitcontainer-splitter-border, thin solid #d9d9d9);
    }
    .iui-splitcontainer-panel {
        border: var(--splitcontainer-panel-border, thin solid #d9d9d9);
    }
    .iui-splitcontainer-swap-button:hover {
        background: var(--splitcontainer-swap-button-hover-background, #fefefe);
        border-color: var(--splitcontainer-swap-button-hover-border-color, #d9d9d9);
    }
`;