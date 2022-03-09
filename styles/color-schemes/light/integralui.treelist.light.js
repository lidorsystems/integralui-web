import { c as css } from '../../../external/lit-element.js';

const iuiTreeListLightStyle = css`
    .iui-treelist {
        background: var(--treelist-background, white);
        border: var(--treelist-border, thin solid #d9d9d9);
        border-width: var(--treelist-border-width, thin);
    }
    .iui-treelist-header {
        background: var(--treelist-header-background, #0a64ad);
        border: var(--treelist-header-border, thin solid #06487d);
        border-width: var(--treelist-header-border-width, thin);
        color: var(--treelist-header-color, white);
    }
`;

export { iuiTreeListLightStyle };
