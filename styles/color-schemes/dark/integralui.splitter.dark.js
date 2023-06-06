import { c as css } from '../../../external/lit-element.js';

export const iuiSplitterDarkStyle = css`
    .iui-splitter {
        color: var(--iui-splitter-color, #cccccc);
    }
    .iui-splitter-bar {
        background: var(--iui-splitter-bar-background, #0a4369);
    }
    .iui-splitter-bar:hover {
        background: var(--iui-splitter-bar-hover-background, #0e639c);
    }
    .iui-splitter-bar-horizontal {
        border-top-color: var(--iui-splitter-bar-border-top-color, #151515);
        border-bottom-color: var(--iui-splitter-bar-border-bottom-color, #151515);
    }
    .iui-splitter-bar-vertical {
        border-left-color: var(--iui-splitter-bar-border-left-color, #151515);
        border-right-color: var(--iui-splitter-bar-border-right-color, #151515);
    }
    .iui-splitter-panel {
        background: var(--iui-splitter-panel-background, #252526);
        border: var(--iui-splitter-panel-border, thin solid #151515);
    }
`;