import { c as css } from '../../../external/lit-element.js';

export const iuiButtonLightStyle = css`
    .iui-button {
        background: var(--iui-button-background, #fefefe);
        border: var(--iui-button-hovered-border, thin solid #d2d2d2);
        border-color: var(--iui-button-border-color, #d2d2d2);
        color: var(--iui-button-color, #1073c4);
    }
    .iui-button-hovered {
        background: var(--iui-button-hovered-background, #f5fbff);
        border: var(--iui-button-hovered-border, thin solid #a1d4ff);
        border-color: var(--iui-button-hovered-border-color, #a1d4ff);
    }
    .iui-button-selected {
        background: var(--iui-button-selected-background, #0a64ad);
        border: var(--iui-button-selected-border, thin solid #0a64ad);
        border-color: var(--iui-button-selected-border-color, #0a64ad);
        color: var(--iui-button-selected-color, white);
    }
    .iui-button:focus {
        background: var(--iui-button-focus-background, #a5d3fa);
        border-color:  var(--iui-button-focus-border-color, #a5d3fa);
        box-shadow: var(--iui-button-focus-box-shadow, 0 0 0 2px #6ea9db);
        color: var(--iui-button-color, black);
    }

`;