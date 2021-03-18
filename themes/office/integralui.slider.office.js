import { c as css } from '../../external/lit-element.js';

export const iuiSliderOfficeStyle = css`
    .iui-slider-background, .iui-slider-background-vertical {
        background: var(--slider-background-appearance, #5f8bde);
    }
    .iui-slider-button {
        background: var(--slider-button-background, transparent);
        border: var(--slider-button-border, 2px solid #5f8bde);
    }
`;