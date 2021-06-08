import { c as css } from '../../external/lit-element.js';

const iuiCheckBoxMidnightStyle = css`
    .iui-checkbox {
        color: var(--checkbox-color, #cccccc);
    }
    .iui-checkbox-btn span {
        background-image: var(--checkbox-btn-background-image, url(../icons/checkbox-unchecked-10.ico));
    }
    .iui-checkbox-btn-checked span {
        background-image: var(--checkbox-btn-checked-background-image, url(../icons/checkbox-checked-10.ico));
    }
    .iui-checkbox-btn-indeterminate span {
        background-image: var(--checkbox-btn-indeterminate-background-image, url(../icons/checkbox-indeterminate-10.ico));
    }
    .iui-checkbox-btn-unchecked span {
        background-image: var(--checkbox-btn-unchecked-background-image, url(../icons/checkbox-unchecked-10.ico));
    }
`;

export { iuiCheckBoxMidnightStyle };
