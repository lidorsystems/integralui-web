import { c as css } from '../../../external/lit-element.js';

export const iuiSplitContainerLightStyle = css`
    .iui-splitcontainer-tab {
        border: var(--iui-splitcontainer-tab-border, thin solid #d9d9d9);
    }
    .iui-splitcontainer-splitter {
        background: var(--iui-splitcontainer-splitter-background, #e5f3fe);
        border: var(--iui-splitcontainer-splitter-border, thin solid #d9d9d9);
    }
    .iui-splitcontainer-panel {
        border: var(--iui-splitcontainer-panel-border, thin solid #d9d9d9);
    }
    .iui-splitcontainer-swap-button:hover {
        background: var(--iui-splitcontainer-swap-button-hover-background, #fefefe);
        border-color: var(--iui-splitcontainer-swap-button-hover-border-color, #d9d9d9);
    }
`;