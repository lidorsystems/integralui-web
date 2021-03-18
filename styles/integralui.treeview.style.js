import { c as css } from '../external/lit-element.js';

const iuiTreeViewDefaultStyle = css`
    .iui-treeview {
        background: var(--treeview-background, white);
        border: var(--treeview-border, thin solid #cecece);
        color: var(--treeview-color, black);
        cursor: var(--treeview-cursor, default);
        float: var(--treeview-float, none);
        overflow: hidden;
        margin: var(--treeview-margin, 0);
        padding: var(--treeview-padding, 1px);
        position: relative;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-treeview-item-empty-content {
        background: #f5f5f5;
        margin: 0;
    }

    .iui-treeview-block-hover, .iui-treeview-block-select {
        background: var(--treeview-block-background, transparent);
        border: var(--treeview-block-border, thin solid #cecece);
        box-shadow: var(--treeview-block-box-shadow, 2px 3px 3px #e5e5e5);
        pointer-events: none;
        position: absolute;
        z-index: 6;
    }
    .iui-treeview-block-hover > div, .iui-treeview-block-select > div {
        background: var(--treeview-block-panel-background, #f5f5f5);
        pointer-events: auto;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
    }

    /* Disabled State */
    .iui-treeview-disabled div, .iui-treeview-disabled ul {
        opacity: var(--treeview-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiTreeViewDefaultStyle };
