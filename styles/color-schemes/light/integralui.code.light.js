import { c as css } from '../../../external/lit-element.js';

export const iuiCodeLightStyle = css`
    .iui-code {
        background: var(--code-background, #f5f5f5);
        border: var(--code-hovered-border, thin solid #f5f5f5);
        border-color: var(--code-border-color, #f5f5f5);
        height: var(--code-height, calc(100% - 2px));
    }
`;