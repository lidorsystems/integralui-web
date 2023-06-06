import { c as css } from '../../../external/lit-element.js';

export const iuiTextBoxDarkStyle = css`
    .iui-textbox {
        background: var(--iui-textbox-background, #0e639c);
        border: var(--iui-textbox-hovered-border, thin solid #0e639c);
        border-color: var(--iui-textbox-border-color, #0e639c);
        color: var(--iui-textbox-color, white);
    }
    .iui-textbox-hovered {
        background: var(--iui-textbox-hovered-background, #1177bb);
        border: var(--iui-textbox-hovered-border, thin solid #1177bb);
        border-color: var(--iui-textbox-hovered-border-color, #1177bb);
        color: var(--iui-textbox-hovered-color, white);
    }
    .iui-textbox-selected {
        background: var(--iui-textbox-selected-background, #0a4369);
        border: var(--iui-textbox-selected-border, thin solid #0a4369);
        border-color: var(--iui-textbox-selected-border-color, #0a4369);
        color: var(--iui-textbox-selected-color, white);
    }
    .iui-textbox:focus {
        background: var(--iui-textbox-focus-background, #0a4369);
        border-color:  var(--iui-textbox-focus-border-color, #0a4369);
        box-shadow: var(--iui-textbox-focus-box-shadow, 0 0 0 2px #0d4d78);
    }
`;