import { c as css } from '../external/lit-element.js';

const iuiButtonDefaultStyle = css`
    .iui-button {
        background: var(--button-background, #e5e5e5);
        border: var(--button-border, thin solid #cecece);
        border-color:  var(--button-border-color, #cecece);
        border-radius: var(--button-border-radius, 3px);
        border-width: var(--button-border-width, thin);
        color: var(--button-color, black);
        cursor: var(--button-cursor, default);
        display: var(--button-display, inline-block);
        float: var(--button-float, none);
        height: var(--button-height, auto);
        opacity: var(--button-opacity, 1);
        overflow: hidden;
        margin: var(--button-margin, 0);
        padding: var(--button-padding, 5px);
        position: var(--button-position, relative);
        text-align: var(--button-text-align, center);
        vertical-align: var(--button-vertical-align, initial);
        width: var(--button-width, auto);
        z-index: var(--button-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-button-hovered {
        background: var(--button-hovered-background, #efefef);
        border: var(--button-hovered-border, thin solid #cecece);
        border-color: var(--button-hovered-border-color, #cecece);
        color: var(--button-hovered-color, black);
    }
    .iui-button-selected {
        background: var(--button-selected-background, #d5d5d5);
        border: var(--button-selected-border, thin solid #bebebe);
        border-color: var(--button-selected-border-color, #bebebe);
        color: var(--button-selected-color, black);
    }

    /* Disabled State */
    .iui-button-disabled {
        opacity: var(--button-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiButtonDefaultStyle };
