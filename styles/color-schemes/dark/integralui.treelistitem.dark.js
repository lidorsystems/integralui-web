import { c as css } from '../../../external/lit-element.js';

const iuiTreeListItemDarkStyle = css`
    .iui-treelistitem {
        color: var(--treelistitem-color, #cccccc);
    }
    .iui-treelistitem-hovered {
        background: var(--treelistitem-background, #2a2d2e);
    }
    .iui-treelistitem-selected {
        background: var(--treelistitem-selected-background, #37373d);
        color: var(--treelistitem-selected-color, white);
    }
    .iui-treelistgroup {
        background: var(--treelistgroup-background, #113b57);
    }
    .iui-treelistitem-expand-icon-collapse {
        background-position: var(--treelistitem-expand-icon-background-position, -48px -16px);
    }
    .iui-treelistitem-expand-icon-expand {
        background-position: var(--treelistitem-expand-icon-background-position, -48px 0);
    }
    .iui-treelistitem-separator {
        background: #151515;
    }
    .iui-treelistitem-animate-select {
        background: var(--treelistitem-animate-select-background, #2d2d33);
    }
    .iui-treelistitem-expand-icon-next {
        background-position: var(--treelistitem-next-background-position, -48px 0);
    }
`;

export { iuiTreeListItemDarkStyle };
