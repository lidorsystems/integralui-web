import { c as css } from '../../external/lit-element.js';

const iuiTreeViewDefaultStyle = css`
    .iui-treeview {
        background: var(--iui-treeview-background, white);
        border: var(--iui-treeview-border, thin solid #cecece);
        border-color:  var(--iui-treeview-border-color, #cecece);
        border-radius: var(--iui-treeview-border-radius, 1px);
        border-width: var(--iui-treeview-border-width, thin);
        color: var(--iui-treeview-color, black);
        cursor: var(--iui-treeview-cursor, default);
        display: var(--iui-treeview-display, block);
        float: var(--iui-treeview-float, none);
        height: var(--iui-treeview-height, auto);
        margin: var(--iui-treeview-margin, 0);
        opacity: var(--iui-treeview-opacity, 1);
        overflow: hidden;
        padding: var(--iui-treeview-padding, 1px);
        position: var(--iui-treeview-position, relative);
        width: var(--iui-treeview-width, auto);
        z-index: var(--iui-treeview-z-index, auto);

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
        background: var(--iui-treeview-block-background, transparent);
        border: var(--iui-treeview-block-border, thin solid #cecece);
        box-shadow: var(--iui-treeview-block-box-shadow, 2px 3px 3px #e5e5e5);
        pointer-events: none;
        position: absolute;
        z-index: 99;
    }
    .iui-treeview-block-hover > div, .iui-treeview-block-select > div {
        background: var(--iui-treeview-block-panel-background, #f5f5f5);
        pointer-events: auto;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 98;
    }

    /* Disabled State */
    .iui-treeview-disabled div, .iui-treeview-disabled ul {
        opacity: var(--iui-treeview-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiTreeViewDefaultStyle };
