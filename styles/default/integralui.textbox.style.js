import { c as css } from '../../external/lit-element.js';

const iuiTextBoxDefaultStyle = css`
    .iui-textbox-block {
        padding: 5px 0 0 0;
        position: var(--textbox-position, relative);
        z-index: var(--textbox-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .iui-textbox {
        background: var(--textbox-background, #e5e5e5);
        border: var(--textbox-border, thin solid #cecece);
        border-color:  var(--textbox-border-color, #cecece);
        border-radius: var(--textbox-border-radius, 3px);
        border-width: var(--textbox-border-width, thin);
        color: var(--textbox-color, black);
        cursor: var(--textbox-cursor, default);
        display: var(--textbox-display, inline-block);
        float: var(--textbox-float, none);
        height: var(--textbox-height, auto);
        opacity: var(--textbox-opacity, 1);
        overflow: hidden;
        margin: var(--textbox-margin, 0);
        padding: var(--textbox-padding, 10px);
        text-align: var(--textbox-text-align, center);
        vertical-align: var(--textbox-vertical-align, initial);
        width: var(--textbox-width, auto);
        z-index: var(--textbox-z-index, auto);
    }
    .iui-textbox-hovered {
        background: var(--textbox-hovered-background, #efefef);
        border: var(--textbox-hovered-border, thin solid #cecece);
        border-color: var(--textbox-hovered-border-color, #cecece);
        color: var(--textbox-hovered-color, black);
    }
    .iui-textbox-selected {
        background: var(--textbox-selected-background, #d5d5d5);
        border: var(--textbox-selected-border, thin solid #bebebe);
        border-color: var(--textbox-selected-border-color, #bebebe);
        color: var(--textbox-selected-color, black);
    }
    .iui-textbox:focus {
        border-color:  var(--textbox-focus-border-color, #d5d5d5);
        outline: none !important;
    }

    .iui-textbox-label {
        background: var(--textbox-label-background, #e5e5e5);
        left: 0;
        padding: 5px;
        pointer-events: none;
        position: absolute;
        top: 0;
        z-index: 1;
    }

    .iui-textbox-value {
        border: 0;
    }
    .iui-textbox-value:focus {
        outline: none !important;
    }

    /* Disabled State */
    .iui-textbox-disabled {
        opacity: var(--textbox-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiTextBoxDefaultStyle };
