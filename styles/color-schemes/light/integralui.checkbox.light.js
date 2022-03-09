import { c as css } from '../../../external/lit-element.js';

const iuiCheckBoxLightStyle = css`
    .iui-checkbox {
        border-radius: var(--checkbox-border-radius, 3px);
        box-shadow: var(--checkbox-box-shadow, 0 0 0 1px transparent);
    }
    .iui-checkbox:focus {
        border: var(--checkbox-focus-border, thin solid #6ea9db);
        box-shadow: var(--checkbox-box-shadow, 0 0 0 1px #6ea9db);
    }
`;

export { iuiCheckBoxLightStyle };
