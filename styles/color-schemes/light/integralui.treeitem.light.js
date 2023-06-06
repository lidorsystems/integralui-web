import { c as css } from '../../../external/lit-element.js';

const iuiTreeItemLightStyle = css`
    .iui-treeitem {
        color: var(--iui-treeitem-color, #646464);
    }
    .iui-treeitem-hovered, .iui-treeitem-content-hovered {
        background: var(--iui-treeitem-hovered-background, #d9edfd);
        border-color: var(--iui-treeitem-hovered-border-color, #d9edfd);
        color: var(--iui-treeitem-hovered-color, #323232);
    }
    .iui-treeitem-selected, .iui-treeitem-content-selected {
        background: var(--iui-treeitem-selected-background, #a5d3fa);
        border-color: var(--iui-treeitem-selected-border-color, #a5d3fa);
        color: var(--iui-treeitem-selected-color, black);
    }
    .iui-treeitem-expand-box {
        background: url(../../../icons/expandbox-icons.png) no-repeat -80px -48px;
    }
    .iui-treeitem-expand-box-open {
        background-position: -80px -16px;
    }
    .iui-treeitem-expand-box-open:hover {
        background-position: -64px -16px;
    }
    .iui-treeitem-expand-box-close {
        background-position: -80px 0;
    }
    .iui-treeitem-expand-box-close:hover {
        background-position: -64px 0;
    }
    .iui-treeitem-expand-box-open-animate {
        background-position: -64px 0;
    }
    .iui-treeitem-expand-box-close-animate {
        background-position: -64px 0;
    }
`;

export { iuiTreeItemLightStyle };
