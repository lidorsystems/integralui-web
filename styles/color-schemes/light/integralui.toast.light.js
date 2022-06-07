import { c as css } from '../../../external/lit-element.js';

export const iuiToastLightStyle = css`
    .iui-toast-error {
        background: var(--toast-error-background, #ffe0e0);
        border: var(--toast-error-border, thin solid transparent);
        border-color: var(--toast-error-border-color, transparent);
        color: var(--toast-error-color, black);
    }
    .iui-toast-info {
        background: var(--toast-info-background, #d1e9ff);
        border: var(--toast-info-border, thin solid transparent);
        border-color: var(--toast-info-border-color, transparent);
        color: var(--toast-info-color, black);
    }
    .iui-toast-success {
        background: var(--toast-success-background, #d6ffd1);
        border: var(--toast-success-border, thin solid transparent);
        border-color: var(--toast-success-border-color, transparent);
        color: var(--toast-success-color, black);
    }
    .iui-toast-warning {
        background: var(--toast-warning-background, #ffe0c9);
        border: var(--toast-warning-border, thin solid transparent);
        border-color: var(--toast-warning-border-color, transparent);
        color: var(--toast-warning-color, black);
    }
`;