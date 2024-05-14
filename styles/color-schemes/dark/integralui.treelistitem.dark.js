import { c as css } from '../../../external/lit-element.js';

export const iuiTreeListItemDarkStyle = css`
    .iui-treelistitem {
        color: var(--iui-treelistitem-color, #cccccc);
    }
    .iui-treelistitem-hovered {
        background: var(--iui-treelistitem-background, #2a2d2e);
        color: var(--iui-treelistitem-hovered-color, #eeeeee);
    }
    .iui-treelistitem-selected {
        background: var(--iui-treelistitem-selected-background, #37373d);
        color: var(--iui-treelistitem-selected-color, white);
    }
    .iui-treelistgroup {
        background: var(--iui-treelistgroup-background, #323232);
    }
    .iui-treelistitem-expand-icon-collapse {
        background-position: var(--iui-treelistitem-expand-icon-background-position, -48px -16px);
    }
    .iui-treelistitem-expand-icon-expand {
        background-position: var(--iui-treelistitem-expand-icon-background-position, -48px 0);
    }
    .iui-treelistitem-inline-separator, .iui-treelistitem-separator {
        background: var(--iui-treelistitem-separator-background, #151515);
    }
    .iui-treelistitem-separator-content {
        background: var(--iui-treelistitem-separator-content-background, #252526);
    }
    .iui-treelistitem-animate-select {
        background: var(--iui-treelistitem-animate-select-background, #2d2d33);
    }
    .iui-treelistitem-expand-icon-next {
        background-position: var(--iui-treelistitem-next-background-position, -48px 0);
    }
`;