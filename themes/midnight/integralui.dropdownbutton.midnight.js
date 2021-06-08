import { c as css } from '../../external/lit-element.js';

const iuiDropDownButtonMidnightStyle = css`
    .iui-dropdownbutton {
        background: var(--dropdownbutton-background, #0e639c);
        border: var(--dropdownbutton-hovered-border, thin solid #0e639c);
        border-color: var(--dropdownbutton-border-color, #0e639c);
        color: var(--dropdownbutton-color, white);
    }
    .iui-dropdownbutton-hovered {
        background: var(--dropdownbutton-hovered-background, #1177bb);
        border: var(--dropdownbutton-hovered-border, thin solid #1177bb);
        border-color: var(--dropdownbutton-hovered-border-color, #1177bb);
        color: var(--dropdownbutton-hovered-color, white);
    }
    .iui-dropdownbutton-selected {
        background: var(--dropdownbutton-selected-background, #0a4369);
        border: var(--dropdownbutton-selected-border, thin solid #0a4369);
        border-color: var(--dropdownbutton-selected-border-color, #0a4369);
        color: var(--dropdownbutton-selected-color, white);
    }
`;

export { iuiDropDownButtonMidnightStyle };
