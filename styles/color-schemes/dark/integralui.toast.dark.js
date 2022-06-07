import { c as css } from '../../../external/lit-element.js';

export const iuiToastDarkStyle = css`
    .iui-toast {
        box-shadow: var(--toast-box-shadow, 2px 3px 3px #181818);
        color: var(--toast-color, #f5f5f5);
    }
    .iui-toast-header {
        color: var(--toast-header-color, #f5f5f5);
    }
    .iui-toast-content {
        color: var(--toast-content-color, #f5f5f5);
    }

    .iui-toast-error {
        background: var(--toast-error-background, #d43b3b);
        border: var(--toast-error-border, thin solid transparent);
        border-color: var(--toast-error-border-color, transparent);
        color: var(--toast-error-color, #f5f5f5);
    }
    .iui-toast-info {
        background: var(--toast-info-background, #1485b5);
        border: var(--toast-info-border, thin solid transparent);
        border-color: var(--toast-info-border-color, transparent);
        color: var(--toast-info-color, #f5f5f5);
    }
    .iui-toast-success {
        background: var(--toast-success-background, #14b537);
        border: var(--toast-success-border, thin solid transparent);
        border-color: var(--toast-success-border-color, transparent);
        color: var(--toast-success-color, #f5f5f5);
    }
    .iui-toast-warning {
        background: var(--toast-warning-background, #e87b0e);
        border: var(--toast-warning-border, thin solid transparent);
        border-color: var(--toast-warning-border-color, transparent);
        color: var(--toast-warning-color, #f5f5f5);
    }
`;