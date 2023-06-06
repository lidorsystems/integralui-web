import { c as css } from '../../../external/lit-element.js';

export const iuiDropDownButtonDarkStyle = css`
    .iui-dropdownbutton {
        background: var(--iui-dropdownbutton-background, #0e639c);
        border: var(--iui-dropdownbutton-hovered-border, thin solid #0e639c);
        border-color: var(--iui-dropdownbutton-border-color, #0e639c);
        color: var(--iui-dropdownbutton-color, white);
    }
    .iui-dropdownbutton-hovered {
        background: var(--iui-dropdownbutton-hovered-background, #1177bb);
        border: var(--iui-dropdownbutton-hovered-border, thin solid #1177bb);
        border-color: var(--iui-dropdownbutton-hovered-border-color, #1177bb);
        color: var(--iui-dropdownbutton-hovered-color, white);
    }
    .iui-dropdownbutton-selected {
        background: var(--iui-dropdownbutton-selected-background, #0a4369);
        border: var(--iui-dropdownbutton-selected-border, thin solid #0a4369);
        border-color: var(--iui-dropdownbutton-selected-border-color, #0a4369);
        color: var(--iui-dropdownbutton-selected-color, white);
    }
`;
