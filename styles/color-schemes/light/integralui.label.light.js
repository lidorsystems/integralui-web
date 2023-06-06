import { c as css } from '../../../external/lit-element.js';

export const iuiLabelLightStyle = css`
    .iui-label-focused {
        color: var(--iui-label-focused-color, #5081ab);
    }
    .iui-label-block {
        background: var(--iui-label-background, white);
    }
    .iui-label-block-focused {
        box-shadow: var(--iui-label-box-shadow, 0 0 0 1px #6ea9db);
    }
    .iui-label-value-inline {
        background: var(--iui-label-value-background, white);
    }
`;