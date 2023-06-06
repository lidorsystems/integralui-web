import { c as css } from '../../../external/lit-element.js';

export const iuiCodeLightStyle = css`
    .iui-code {
        background: var(--iui-code-background, #f5f5f5);
        border: var(--iui-code-hovered-border, thin solid #f5f5f5);
        border-color: var(--iui-code-border-color, #f5f5f5);
        height: var(--iui-code-height, calc(100% - 2px));
    }
`;