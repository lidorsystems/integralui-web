import { c as css } from '../../../external/lit-element.js';

export const iuiTreeViewDarkStyle = css`
    .iui-treeview {
        background: var(--iui-treeview-background, #252526);
        border: var(--iui-treeview-border, thin solid #151515);
        color: var(--iui-treeview-color, #cccccc);
    }
    .iui-treeview-block-hover, .iui-treeview-block-select {
        border: var(--iui-treeview-block-border, thin solid #151515);
        box-shadow: var(--iui-treeview-block-box-shadow, 2px 3px 3px #151515);
    }
    .iui-treeview-block-hover > div, .iui-treeview-block-select > div {
        background: var(--iui-treeview-block-panel-background, #2a2d2e);
    }
`;