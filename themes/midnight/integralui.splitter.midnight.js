import { c as css } from '../../external/lit-element.js';

const iuiSplitterMidnightStyle = css`
    .iui-splitter {
        color: var(--splitter-color, #cccccc);
    }
    .iui-splitter-bar {
        background: var(--splitter-bar-background, #0a4369);
    }
    .iui-splitter-bar:hover {
        background: var(--splitter-bar-hover-background, #0e639c);
    }
    .iui-splitter-bar-horizontal {
        border-top-color: var(--splitter-bar-border-top-color, #151515);
        border-bottom-color: var(--splitter-bar-border-bottom-color, #151515);
    }
    .iui-splitter-bar-vertical {
        border-left-color: var(--splitter-bar-border-left-color, #151515);
        border-right-color: var(--splitter-bar-border-right-color, #151515);
    }
    .iui-splitter-panel {
        background: var(--splitter-panel-background, #252526);
        border: var(--splitter-panel-border, thin solid #151515);
    }
`;

export { iuiSplitterMidnightStyle };
