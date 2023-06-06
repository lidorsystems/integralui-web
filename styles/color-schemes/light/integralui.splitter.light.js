import { c as css } from '../../../external/lit-element.js';

export const iuiSplitterLightStyle = css`
    .iui-splitter-bar {
        background: var(--iui-splitter-bar-background, #e5f3fe);
    }
    .iui-splitter-bar:hover {
        background: var(--iui-splitter-bar-hover-background, #e5f3fe);
    }
    .iui-splitter-bar-horizontal {
        border-top-color: var(--iui-splitter-bar-border-top-color, #d9d9d9);
        border-bottom-color: var(--iui-splitter-bar-border-bottom-color, #d9d9d9);
    }
    .iui-splitter-bar-vertical {
        border-left-color: var(--iui-splitter-bar-border-left-color, #d9d9d9);
        border-right-color: var(--iui-splitter-bar-border-right-color, #d9d9d9);
    }
    .iui-splitter-panel {
        border: var(--iui-splitter-panel-border, thin solid #d9d9d9);
    }
`;