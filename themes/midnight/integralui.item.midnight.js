import { c as css } from '../../external/lit-element.js';

const iuiItemMidnightStyle = css`
    .iui-item {
        color: var(--item-color, #cccccc);
    }
    .iui-item-hovered {
        animation-name: none;
        background: var(--item-hovered-background, #2a2d2e);
        border: var(--item-hovered-border, thin solid #2a2d2e);
    }
    .iui-item-selected {
        animation-name: none;
        background: var(--item-selected-background, #0a4369);
        border: var(--item-selected-border, thin solid #0a4369);
        color: var(--item-selected-color, white);
    }
`;

export { iuiItemMidnightStyle };
