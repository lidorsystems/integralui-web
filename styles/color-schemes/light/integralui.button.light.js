import { c as css } from '../../../external/lit-element.js';

const iuiButtonLightStyle = css`
    .iui-button {
        background: var(--button-background, #fefefe);
        border: var(--button-hovered-border, thin solid #d2d2d2);
        border-color: var(--button-border-color, #d2d2d2);
        color: var(--button-color, #1073c4);
    }
    .iui-button-hovered {
        background: var(--button-hovered-background, #f5fbff);
        border: var(--button-hovered-border, thin solid #a1d4ff);
        border-color: var(--button-hovered-border-color, #a1d4ff);
    }
    .iui-button-selected {
        background: var(--button-selected-background, #0a64ad);
        border: var(--button-selected-border, thin solid #0a64ad);
        border-color: var(--button-selected-border-color, #0a64ad);
        color: var(--button-selected-color, white);
    }
    .iui-button:focus {
        background: var(--button-focus-background, #a5d3fa);
        border-color:  var(--button-focus-border-color, #a5d3fa);
        box-shadow: var(--button-focus-box-shadow, 0 0 0 2px #6ea9db);
        color: var(--button-color, black);
    }

`;

export { iuiButtonLightStyle };
