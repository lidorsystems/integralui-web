import { c as css } from '../../../external/lit-element.js';

export const iuiAutoCompleteDarkStyle = css`
    .iui-autocomplete {
        background: var(--autocomplete-background, #252526);
        border: var(--autocomplete-border, thin solid #151515);
        color: var(--autocomplete-color, #cccccc);
    }
    .iui-autocomplete input {
        background: var(--autocomplete-input-background, #252526);
        color: var(--autocomplete-input-color, #cccccc);
    }
`;