import { c as css } from '../../../external/lit-element.js';

export const iuiToastLightStyle = css`
    .iui-toast-error {
        background: var(--iui-toast-error-background, #ffe0e0);
        border: var(--iui-toast-error-border, thin solid transparent);
        border-color: var(--iui-toast-error-border-color, transparent);
        color: var(--iui-toast-error-color, black);
    }
    .iui-toast-info {
        background: var(--iui-toast-info-background, #d1e9ff);
        border: var(--iui-toast-info-border, thin solid transparent);
        border-color: var(--iui-toast-info-border-color, transparent);
        color: var(--iui-toast-info-color, black);
    }
    .iui-toast-success {
        background: var(--iui-toast-success-background, #d6ffd1);
        border: var(--iui-toast-success-border, thin solid transparent);
        border-color: var(--iui-toast-success-border-color, transparent);
        color: var(--iui-toast-success-color, black);
    }
    .iui-toast-warning {
        background: var(--iui-toast-warning-background, #ffe0c9);
        border: var(--iui-toast-warning-border, thin solid transparent);
        border-color: var(--iui-toast-warning-border-color, transparent);
        color: var(--iui-toast-warning-color, black);
    }
`;