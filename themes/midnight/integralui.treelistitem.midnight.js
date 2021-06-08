import { c as css } from '../../external/lit-element.js';

const iuiTreeListItemMidnightStyle = css`
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
    .iui-treelistitem-animate-select {
        background: var(--treelistitem-animate-select-background, #2d2d33);
    }
    .next {
        background-position: var(--treelistitem-next-background-position, -48px 0);
    }
`;

export { iuiTreeListItemMidnightStyle };
