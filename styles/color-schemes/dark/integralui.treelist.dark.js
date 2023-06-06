import { c as css } from '../../../external/lit-element.js';

export const iuiTreeListDarkStyle = css`
    .iui-treelist {
        background: var(--iui-treelist-background, #252526);
        border: var(--iui-treelist-border, thin solid #151515);
        border-width: var(--iui-treelist-border-width, thin);
        color: var(--iui-treelist-color, #cccccc);
    }
    .iui-treelist-header {
        background: var(--iui-treelist-header-background, #0c293d);
        border: var(--iui-treelist-header-border, thin solid #0c293d);
        border-width: var(--iui-treelist-header-border-width, thin);
        color: var(--iui-treelist-header-color, white);
    }
    .iui-treelist-header-back-icon {
        background-position: var(--iui-treelist-header-back-icon-position, -48px -32px);
    }
    .iui-treelist-header-animate-select {
        background: var(--iui-treelist-header-animate-select-background, #124263);
    }
`;