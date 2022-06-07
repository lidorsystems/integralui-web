import { c as css } from '../../../external/lit-element.js';

export const iuiButtonDarkStyle = css`
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
    .iui-button:focus {
        background: var(--button-focus-background, #0a4369);
        border-color:  var(--button-focus-border-color, #0a4369);
        box-shadow: var(--button-focus-box-shadow, 0 0 0 2px #0d4d78);
    }
`;