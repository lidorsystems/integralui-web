import { c as css } from '../../../external/lit-element.js';

export const iuiTextBoxOfficeStyle = css`
    .iui-textbox {
        transition: all 0.25s ease-in-out;
    }
    .iui-textbox:focus {
        box-shadow: var(--iui-textbox-focus-box-shadow, 0 0 0 1px transparent);
    }
`;