import { c as css } from '../../../external/lit-element.js';

export const iuiItemDarkStyle = css`
    .iui-item {
        color: var(--iui-item-color, #cccccc);
    }
    .iui-item-hovered {
        animation-name: none;
        background: var(--iui-item-hovered-background, #2a2d2e);
        border: var(--iui-item-hovered-border, thin solid #2a2d2e);
    }
    .iui-item-selected {
        animation-name: none;
        background: var(--iui-item-selected-background, #0a4369);
        border: var(--iui-item-selected-border, thin solid #0a4369);
        color: var(--iui-item-selected-color, white);
    }
`;