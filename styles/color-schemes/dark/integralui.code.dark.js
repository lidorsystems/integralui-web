import { c as css } from '../../../external/lit-element.js';

export const iuiCodeDarkStyle = css`
    .iui-code {
        background: var(--code-background, #252526);
        border: var(--code-hovered-border, thin solid #252526);
        border-color: var(--code-border-color, #252526);
        color: var(--code-color, #cccccc);
        height: var(--code-height, calc(100% - 2px));
    }
`;