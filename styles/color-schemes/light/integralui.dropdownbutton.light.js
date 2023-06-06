import { c as css } from '../../../external/lit-element.js';

export const iuiDropDownButtonLightStyle = css`
    .iui-dropdownbutton {
        background: var(--iui-dropdownbutton-background, #e2e2e2);
        border: var(--iui-dropdownbutton-hovered-border, thin solid #e2e2e2);
        border-color: var(--iui-dropdownbutton-border-color, #e2e2e2);
    }
    .iui-dropdownbutton-hovered {
        background: var(--iui-dropdownbutton-hovered-background, #a5d3fa);
        border: var(--iui-dropdownbutton-hovered-border, thin solid #a5d3fa);
        border-color: var(--iui-dropdownbutton-hovered-border-color, #a5d3fa);
    }
    .iui-dropdownbutton-selected {
        background: var(--iui-dropdownbutton-selected-background, #0a64ad);
        border: var(--iui-dropdownbutton-selected-border, thin solid #0a64ad);
        border-color: var(--iui-dropdownbutton-selected-border-color, #0a64ad);
        color: var(--iui-dropdownbutton-selected-color, white);
    }
`;