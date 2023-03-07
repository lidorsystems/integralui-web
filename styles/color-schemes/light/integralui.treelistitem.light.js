import { c as css } from '../../../external/lit-element.js';

export const iuiTreeListItemLightStyle = css`
    .iui-treelistitem {
        color: var(--treelistitem-color, #646464);
    }
    .iui-treelistitem-hovered {
        background: var(--treelistitem-hovered-background, #d9edfd);
        color: var(--treelistitem-hovered-color, #323232);
    }
    .iui-treelistitem-selected {
        background: var(--treelistitem-selected-background, #a5d3fa);
        color: var(--treelistitem-selected-color, black);
    }
    .iui-treelistitem-animate-select {
        background: var(--treelistitem-animate-select-background, #d9edfd);
    }
`;