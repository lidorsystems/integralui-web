import { c as css } from '../../../external/lit-element.js';

export const iuiButtonDarkStyle = css`
    .iui-button {
        background: var(--iui-button-background, #0e639c);
        border: var(--iui-button-hovered-border, thin solid #0e639c);
        border-color: var(--iui-button-border-color, #0e639c);
        color: var(--iui-button-color, white);
    }
    .iui-button-hovered {
        background: var(--iui-button-hovered-background, #1177bb);
        border: var(--iui-button-hovered-border, thin solid #1177bb);
        border-color: var(--iui-button-hovered-border-color, #1177bb);
        color: var(--iui-button-hovered-color, white);
    }
    .iui-button-selected {
        background: var(--iui-button-selected-background, #0a4369);
        border: var(--iui-button-selected-border, thin solid #0a4369);
        border-color: var(--iui-button-selected-border-color, #0a4369);
        color: var(--iui-button-selected-color, white);
    }
    .iui-button:focus {
        background: var(--iui-button-focus-background, #0a4369);
        border-color:  var(--iui-button-focus-border-color, #0a4369);
        box-shadow: var(--iui-button-focus-box-shadow, 0 0 0 2px #0d4d78);
    }
`;