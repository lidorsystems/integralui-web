import { c as css } from '../../../external/lit-element.js';

export const iuiTreeListLightStyle = css`
    .iui-treelist {
        background: var(--iui-treelist-background, white);
        border: var(--iui-treelist-border, thin solid #d9d9d9);
        border-width: var(--iui-treelist-border-width, thin);
    }
    .iui-treelist-header {
        background: var(--iui-treelist-header-background, #0a64ad);
        border: var(--iui-treelist-header-border, thin solid #06487d);
        border-width: var(--iui-treelist-header-border-width, thin);
        color: var(--iui-treelist-header-color, white);
    }
`;