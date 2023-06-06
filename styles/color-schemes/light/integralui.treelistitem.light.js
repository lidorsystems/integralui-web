import { c as css } from '../../../external/lit-element.js';

export const iuiTreeListItemLightStyle = css`
    .iui-treelistitem {
        color: var(--iui-treelistitem-color, #646464);
    }
    .iui-treelistitem-hovered {
        background: var(--iui-treelistitem-hovered-background, #d9edfd);
        color: var(--iui-treelistitem-hovered-color, #323232);
    }
    .iui-treelistitem-selected {
        background: var(--iui-treelistitem-selected-background, #a5d3fa);
        color: var(--iui-treelistitem-selected-color, black);
    }
    .iui-treelistitem-animate-select {
        background: var(--iui-treelistitem-animate-select-background, #d9edfd);
    }
`;