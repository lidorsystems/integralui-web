import { c as css } from '../../external/lit-element.js';

export const iuiButtonMidnightStyle = css`
    .iui-button {
        background: var(--button-background, #0e639c);
        border: var(--button-hovered-border, thin solid #0e639c);
        border-color: var(--button-border-color, #0e639c);
        color: var(--button-color, white);
    }
    .iui-button-hovered {
        background: var(--button-hovered-background, #1177bb);
        border: var(--button-hovered-border, thin solid #1177bb);
        border-color: var(--button-hovered-border-color, #1177bb);
        color: var(--button-hovered-color, white);
    }
    .iui-button-selected {
        background: var(--button-selected-background, #0a4369);
        border: var(--button-selected-border, thin solid #0a4369);
        border-color: var(--button-selected-border-color, #0a4369);
        color: var(--button-selected-color, white);
    }
`;