import { c as css } from '../../../external/lit-element.js';

export const iuiDropDownButtonLightStyle = css`
    .iui-dropdownbutton {
        background: var(--dropdownbutton-background, #e2e2e2);
        border: var(--dropdownbutton-hovered-border, thin solid #e2e2e2);
        border-color: var(--dropdownbutton-border-color, #e2e2e2);
    }
    .iui-dropdownbutton-hovered {
        background: var(--dropdownbutton-hovered-background, #a5d3fa);
        border: var(--dropdownbutton-hovered-border, thin solid #a5d3fa);
        border-color: var(--dropdownbutton-hovered-border-color, #a5d3fa);
    }
    .iui-dropdownbutton-selected {
        background: var(--dropdownbutton-selected-background, #0a64ad);
        border: var(--dropdownbutton-selected-border, thin solid #0a64ad);
        border-color: var(--dropdownbutton-selected-border-color, #0a64ad);
        color: var(--dropdownbutton-selected-color, white);
    }
`;