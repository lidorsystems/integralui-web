
import { c as css } from '../external/lit-element.js';

export const iuiSliderDefaultStyle = css`
    .iui-slider {
        background: var(--slider-background, transparent);
        cursor: var(--slider-cursor, default);
        margin: var(--slider-margin, 0);
        overflow: hidden;
        padding: 0;
        position: relative;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-slider:focus {
        outline: none !important;
    }
    .iui-slider-content {
        background: var(--slider-content-background, #cecece);
        height: var(--slider-content-size, 1px);
    }
    .iui-slider-content-vertical {
        background: var(--slider-content-background, #cecece);
        width: var(--slider-content-size, 1px);
    }
    .iui-slider-background {
        background: var(--slider-background-appearance, #afafaf);
        height: var(--slider-background-size, 1px);
    }
    .iui-slider-background-vertical {
        background: var(--slider-background-appearance, #afafaf);
        width: var(--slider-background-size, 1px);
    }
    .iui-slider-button {
        background: var(--slider-button-background, #e5e5e5);
        border: var(--slider-button-border, 2px solid #afafaf);
        border-radius: var(--slider-button-border-radius, 3px);
        pointer-events: none;
    }


    /* Disabled State */
    .iui-slider-disabled div {
        pointer-events: none;
    }

    .iui-slider-disabled .iui-slider-content {
        background: var(--slider-disabled-background, #dedede);
    }

    .iui-slider-disabled .iui-slider-value {
        background: var(--slider-disabled-value-background, #f5f5f5);
        border-color: var(--slider-disabled-value-border-color, #e5e5e5);
    }
`;
