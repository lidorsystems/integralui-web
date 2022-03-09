import { c as css } from '../../../external/lit-element.js';

const iuiTreeListDarkStyle = css`
    .iui-treelist {
        background: var(--treelist-background, #252526);
        border: var(--treelist-border, thin solid #151515);
        border-width: var(--treelist-border-width, thin);
        color: var(--treelist-color, #cccccc);
    }
    .iui-treelist-header {
        background: var(--treelist-header-background, #0c293d);
        border: var(--treelist-header-border, thin solid #0c293d);
        border-width: var(--treelist-header-border-width, thin);
        color: var(--treelist-header-color, white);
    }
    .iui-treelist-header-back-icon {
        background-position: var(--treelist-header-back-icon-position, -48px -32px);
    }
    .iui-treelist-header-animate-select {
        background: var(--treelist-header-animate-select-background, #124263);
    }
`;

export { iuiTreeListDarkStyle };
