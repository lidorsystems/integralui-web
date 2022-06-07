import { c as css } from '../../../external/lit-element.js';

export const iuiLabelLightStyle = css`
    .iui-label-focused {
        color: var(--label-focused-color, #5081ab);
    }
    .iui-label-block {
        background: var(--label-background, white);
    }
    .iui-label-block-focused {
        box-shadow: var(--label-box-shadow, 0 0 0 1px #6ea9db);
    }
    .iui-label-value-inline {
        background: var(--label-value-background, white);
    }
`;