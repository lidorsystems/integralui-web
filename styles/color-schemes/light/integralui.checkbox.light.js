import { c as css } from '../../../external/lit-element.js';

export const iuiCheckBoxLightStyle = css`
    .iui-checkbox {
        border-radius: var(--iui-checkbox-border-radius, 3px);
        box-shadow: var(--iui-checkbox-box-shadow, 0 0 0 1px transparent);
    }
    .iui-checkbox:focus {
        border: var(--iui-checkbox-focus-border, thin solid #6ea9db);
        box-shadow: var(--iui-checkbox-box-shadow, 0 0 0 1px #6ea9db);
    }
`;