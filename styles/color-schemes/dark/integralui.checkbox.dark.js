import { c as css } from '../../../external/lit-element.js';

export const iuiCheckBoxDarkStyle = css`
    .iui-checkbox {
        border-radius: var(--iui-checkbox-border-radius, 3px);
        color: var(--iui-checkbox-color, #cccccc);
    }
    .iui-checkbox:focus {
        border: var(--iui-checkbox-focus-border, thin solid #646464);
        box-shadow: var(--iui-checkbox-box-shadow, 0 0 0 1px #646464);
    }
    .iui-checkbox-btn span {
        background-image: var(--iui-checkbox-btn-background-image, url(../icons/checkbox-unchecked-10.ico));
    }
    .iui-checkbox-btn-checked span {
        background-image: var(--iui-checkbox-btn-checked-background-image, url(../icons/checkbox-checked-10.ico));
    }
    .iui-checkbox-btn-indeterminate span {
        background-image: var(--iui-checkbox-btn-indeterminate-background-image, url(../icons/checkbox-indeterminate-10.ico));
    }
    .iui-checkbox-btn-unchecked span {
        background-image: var(--iui-checkbox-btn-unchecked-background-image, url(../icons/checkbox-unchecked-10.ico));
    }
`;