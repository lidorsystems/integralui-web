import { c as css } from '../../../external/lit-element.js';

export const iuiSelectLightStyle = css`
    .iui-select {
        border: var(--select-border, thin solid #d9d9d9);
        border-radius: var(--select-border-radius, 3px);
        box-shadow: var(--select-box-shadow, 0 0 0 1px transparent);
    }
    .iui-select:focus {
        border: var(--select-focus-border, thin solid #6ea9db);
        box-shadow: var(--select-box-shadow, 0 0 0 1px #6ea9db);
    }

    /* Header */
    .iui-select-header-hovered .iui-select-header-expand-box, .iui-select-header-selected .iui-select-header-expand-box {
        background: #0d7edb !important;
    }
`;