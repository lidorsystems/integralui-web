import { c as css } from '../../../external/lit-element.js';

export const iuiTextBoxLightStyle = css`
    .iui-textbox {
        background: var(--iui-textbox-background, #fefefe);
        border: var(--iui-textbox-hovered-border, thin solid #d2d2d2);
        border-color: var(--iui-textbox-border-color, #d2d2d2);
        color: var(--iui-textbox-color, #1073c4);
    }
    .iui-textbox-hovered {
        background: var(--iui-textbox-hovered-background, #f5fbff);
        border: var(--iui-textbox-hovered-border, thin solid #a1d4ff);
        border-color: var(--iui-textbox-hovered-border-color, #a1d4ff);
    }
    .iui-textbox-selected {
        background: var(--iui-textbox-selected-background, #0a64ad);
        border: var(--iui-textbox-selected-border, thin solid #0a64ad);
        border-color: var(--iui-textbox-selected-border-color, #0a64ad);
        color: var(--iui-textbox-selected-color, white);
    }
    .iui-textbox:focus {
        background: var(--iui-textbox-focus-background, #a5d3fa);
        border-color:  var(--iui-textbox-focus-border-color, #a5d3fa);
        box-shadow: var(--iui-textbox-focus-box-shadow, 0 0 0 2px #6ea9db);
        color: var(--iui-textbox-color, black);
    }
    .iui-textbox-label {
        background: var(--iui-textbox-label-background, #fefefe);
    }

`;