import { c as css } from '../../external/lit-element.js';

const iuiTreeViewMidnightStyle = css`
    .iui-treeview {
        background: var(--treeview-background, #252526);
        border: var(--treeview-border, thin solid #151515);
        color: var(--treeview-color, #cccccc);
    }
    .iui-treeview-block-hover, .iui-treeview-block-select {
        border: var(--treeview-block-border, thin solid #151515);
        box-shadow: var(--treeview-block-box-shadow, 2px 3px 3px #151515);
    }
    .iui-treeview-block-hover > div, .iui-treeview-block-select > div {
        background: var(--treeview-block-panel-background, #2a2d2e);
    }
`;

export { iuiTreeViewMidnightStyle };
