
import { c as css } from '../../external/lit-element.js';

export const iuiSliderDefaultStyle = css`
    .iui-slider {
        background: var(--iui-slider-background, transparent);
        border: var(--iui-slider-border, thin solid transparent);
        border-color:  var(--iui-slider-border-color, transparent);
        border-radius: var(--iui-slider-border-radius, 1px);
        border-width: var(--iui-slider-border-width, thin);
        color: var(--iui-slider-color, black);
        cursor: var(--iui-slider-cursor, default);
        display: var(--iui-slider-display, block);
        float: var(--iui-slider-float, none);
        height: var(--iui-slider-height, auto);
        margin: var(--iui-slider-margin, 0);
        opacity: var(--iui-slider-opacity, 1);
        overflow: hidden;
        padding: var(--iui-slider-padding, 0);
        position: var(--iui-slider-position, relative);
        width: var(--iui-slider-width, auto);
        z-index: var(--iui-slider-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-slider:focus {
        border: var(--iui-slider-focus-border, thin solid #cecece);
        outline: none !important;
    }
    .iui-slider-content {
        background: var(--iui-slider-content-background, #cecece);
        height: var(--iui-slider-content-size, 1px);
    }
    .iui-slider-content-vertical {
        background: var(--iui-slider-content-background, #cecece);
        width: var(--iui-slider-content-size, 1px);
    }
    .iui-slider-background {
        background: var(--iui-slider-background-appearance, #afafaf);
        height: var(--iui-slider-background-size, 1px);
    }
    .iui-slider-background-vertical {
        background: var(--iui-slider-background-appearance, #afafaf);
        width: var(--iui-slider-background-size, 1px);
    }
    .iui-slider-button {
        background: var(--iui-slider-button-background, #e5e5e5);
        border: var(--iui-slider-button-border, 2px solid #afafaf);
        border-radius: var(--iui-slider-button-border-radius, 3px);
        pointer-events: none;
    }


    /* Disabled State */
    .iui-slider-disabled div {
        pointer-events: none;
    }

    .iui-slider-disabled .iui-slider-content {
        background: var(--iui-slider-disabled-background, #dedede);
    }

    .iui-slider-disabled .iui-slider-value {
        background: var(--iui-slider-disabled-value-background, #f5f5f5);
        border-color: var(--iui-slider-disabled-value-border-color, #e5e5e5);
    }
`;
