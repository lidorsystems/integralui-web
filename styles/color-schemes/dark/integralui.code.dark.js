import { c as css } from '../../../external/lit-element.js';

export const iuiCodeDarkStyle = css`
    .iui-code {
        background: var(--iui-code-background, #252526);
        border: var(--iui-code-hovered-border, thin solid #252526);
        border-color: var(--iui-code-border-color, #252526);
        color: var(--iui-code-color, #cccccc);
        height: var(--iui-code-height, calc(100% - 2px));
    }
`;