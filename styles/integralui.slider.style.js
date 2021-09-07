import { c as css } from '../external/lit-element.js';

const iuiSliderDefaultStyle = css`
    .iui-slider {
        background: var(--slider-background, transparent);
        border: var(--slider-border, 0);
        border-color:  var(--slider-border-color, transparent);
        border-radius: var(--slider-border-radius, 1px);
        border-width: var(--slider-border-width, thin);
        color: var(--slider-color, black);
        cursor: var(--slider-cursor, default);
        display: var(--slider-display, block);
        float: var(--slider-float, none);
        height: var(--slider-height, auto);
        margin: var(--slider-margin, 0);
        opacity: var(--slider-opacity, 1);
        overflow: hidden;
        padding: var(--slider-padding, 0);
        position: var(--slider-position, relative);
        width: var(--slider-width, auto);

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

export { iuiSliderDefaultStyle };
