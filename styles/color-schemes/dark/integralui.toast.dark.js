import { c as css } from '../../../external/lit-element.js';

export const iuiToastDarkStyle = css`
    .iui-toast {
        box-shadow: var(--iui-toast-box-shadow, 2px 3px 3px #181818);
        color: var(--iui-toast-color, #f5f5f5);
    }
    .iui-toast-header {
        color: var(--iui-toast-header-color, #f5f5f5);
    }
    .iui-toast-content {
        color: var(--iui-toast-content-color, #f5f5f5);
    }

    .iui-toast-error {
        background: var(--iui-toast-error-background, #d43b3b);
        border: var(--iui-toast-error-border, thin solid transparent);
        border-color: var(--iui-toast-error-border-color, transparent);
        color: var(--iui-toast-error-color, #f5f5f5);
    }
    .iui-toast-info {
        background: var(--iui-toast-info-background, #1485b5);
        border: var(--iui-toast-info-border, thin solid transparent);
        border-color: var(--iui-toast-info-border-color, transparent);
        color: var(--iui-toast-info-color, #f5f5f5);
    }
    .iui-toast-success {
        background: var(--iui-toast-success-background, #14b537);
        border: var(--iui-toast-success-border, thin solid transparent);
        border-color: var(--iui-toast-success-border-color, transparent);
        color: var(--iui-toast-success-color, #f5f5f5);
    }
    .iui-toast-warning {
        background: var(--iui-toast-warning-background, #e87b0e);
        border: var(--iui-toast-warning-border, thin solid transparent);
        border-color: var(--iui-toast-warning-border-color, transparent);
        color: var(--iui-toast-warning-color, #f5f5f5);
    }
`;