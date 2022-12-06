import { c as css } from '../../../external/lit-element.js';

export const iuiTextBoxDarkStyle = css`
    .iui-textbox {
        background: var(--textbox-background, #0e639c);
        border: var(--textbox-hovered-border, thin solid #0e639c);
        border-color: var(--textbox-border-color, #0e639c);
        color: var(--textbox-color, white);
    }
    .iui-textbox-hovered {
        background: var(--textbox-hovered-background, #1177bb);
        border: var(--textbox-hovered-border, thin solid #1177bb);
        border-color: var(--textbox-hovered-border-color, #1177bb);
        color: var(--textbox-hovered-color, white);
    }
    .iui-textbox-selected {
        background: var(--textbox-selected-background, #0a4369);
        border: var(--textbox-selected-border, thin solid #0a4369);
        border-color: var(--textbox-selected-border-color, #0a4369);
        color: var(--textbox-selected-color, white);
    }
    .iui-textbox:focus {
        background: var(--textbox-focus-background, #0a4369);
        border-color:  var(--textbox-focus-border-color, #0a4369);
        box-shadow: var(--textbox-focus-box-shadow, 0 0 0 2px #0d4d78);
    }
`;