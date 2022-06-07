import { c as css } from '../../../external/lit-element.js';

export const iuiLabelDarkStyle = css`
    .iui-label {
        color: var(--label-color, #808080);
    }
    .iui-label-focused {
        color: var(--label-focused-color, #cccccc);
    }
    .iui-label-block {
        background: var(--label-background, #252526);
        border-color:  var(--label-border-color, #646464);
    }
    .iui-label-block-focused {
        box-shadow: var(--label-box-shadow, 0 0 0 1px #646464);
    }
    .iui-label-value-inline {
        background: var(--label-value-background, #252526);
    }
`;