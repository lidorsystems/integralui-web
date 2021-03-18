import { c as css } from '../../external/lit-element.js';

export const iuiSliderMidnightStyle = css`
    .iui-slider-content, .iui-slider-content-vertical {
        background: var(--slider-content-background, #303030);
    }
    .iui-slider-background, .iui-slider-background-vertical {
        background: var(--slider-background-appearance, #0e639c);
    }
    .iui-slider-button {
        background: var(--slider-button-background, transparent);
        border: var(--slider-button-border, 2px solid #0e639c);
    }
`;