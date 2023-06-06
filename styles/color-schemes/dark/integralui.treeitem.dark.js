import { c as css } from '../../../external/lit-element.js';

export const iuiTreeItemDarkStyle = css`
    .iui-treeitem {
        color: var(--iui-treeitem-color, #cccccc);
    }
    .iui-treeitem-hovered, .iui-treeitem-content-hovered {
        background: var(--iui-treeitem-hovered-background, #2a2d2e);
        border-color: var(--iui-treeitem-hovered-border-color, #2a2d2e);
        color: var(--iui-treeitem-hovered-color, #eeeeee);
    }
    .iui-treeitem-selected, .iui-treeitem-content-selected {
        background: var(--iui-treeitem-selected-background, #0a4369);
        border-color: var(--iui-treeitem-selected-border-color, #0a4369);
        color: var(--iui-treeitem-selected-color, white);
    }
    .iui-treeitem-selected .iui-treeitem-expand-box, .iui-treeitem-content-selected .iui-treeitem-expand-box {
        opacity: 1;
    }
    .iui-treeitem-expand-box {
        background: url(../../../icons/expandbox-icons.png) no-repeat -48px -48px;
    }
    .iui-treeitem-expand-box-open {
        background-position: -48px -16px;
        opacity: 0.25;
    }
    .iui-treeitem-expand-box-open:hover {
        opacity: 0.75;
    }
    .iui-treeitem-expand-box-close {
        background-position: -48px 0;
        opacity: 0.25;
    }
    .iui-treeitem-expand-box-close:hover {
        opacity: 0.75;
    }
    .iui-treeitem-expand-box-open-animate {
        background-position: -48px 0;
    }
    .iui-treeitem-expand-box-close-animate {
        background-position: -48px 0;
    }
`;