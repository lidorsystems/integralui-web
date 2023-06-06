import { c as css } from '../../../external/lit-element.js';

export const iuiButtonOfficeStyle = css`
    .iui-button {
        transition: all 0.25s ease-in-out;
    }
    .iui-button:focus {
        box-shadow: var(--iui-button-focus-box-shadow, 0 0 0 1px transparent);
    }
`;