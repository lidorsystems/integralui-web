import { c as css } from '../../../external/lit-element.js';

export const iuiTextBoxLightStyle = css`
    .iui-textbox {
        background: var(--textbox-background, #fefefe);
        border: var(--textbox-hovered-border, thin solid #d2d2d2);
        border-color: var(--textbox-border-color, #d2d2d2);
        color: var(--textbox-color, #1073c4);
    }
    .iui-textbox-hovered {
        background: var(--textbox-hovered-background, #f5fbff);
        border: var(--textbox-hovered-border, thin solid #a1d4ff);
        border-color: var(--textbox-hovered-border-color, #a1d4ff);
    }
    .iui-textbox-selected {
        background: var(--textbox-selected-background, #0a64ad);
        border: var(--textbox-selected-border, thin solid #0a64ad);
        border-color: var(--textbox-selected-border-color, #0a64ad);
        color: var(--textbox-selected-color, white);
    }
    .iui-textbox:focus {
        background: var(--textbox-focus-background, #a5d3fa);
        border-color:  var(--textbox-focus-border-color, #a5d3fa);
        box-shadow: var(--textbox-focus-box-shadow, 0 0 0 2px #6ea9db);
        color: var(--textbox-color, black);
    }
    .iui-textbox-label {
        background: var(--textbox-label-background, #fefefe);
    }

`;