import { c as css } from '../../external/lit-element.js';

const iuiTextBoxDefaultStyle = css`
    .iui-textbox-block {
        padding: 5px 0 0 0;
        position: var(--iui-textbox-position, relative);
        z-index: var(--iui-textbox-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .iui-textbox {
        background: var(--iui-textbox-background, #e5e5e5);
        border: var(--iui-textbox-border, thin solid #cecece);
        border-color:  var(--iui-textbox-border-color, #cecece);
        border-radius: var(--iui-textbox-border-radius, 3px);
        border-width: var(--iui-textbox-border-width, thin);
        color: var(--iui-textbox-color, black);
        cursor: var(--iui-textbox-cursor, default);
        display: var(--iui-textbox-display, inline-block);
        float: var(--iui-textbox-float, none);
        height: var(--iui-textbox-height, auto);
        opacity: var(--iui-textbox-opacity, 1);
        overflow: hidden;
        margin: var(--iui-textbox-margin, 0);
        padding: var(--iui-textbox-padding, 10px);
        text-align: var(--iui-textbox-text-align, center);
        vertical-align: var(--iui-textbox-vertical-align, initial);
        width: var(--iui-textbox-width, auto);
        z-index: var(--iui-textbox-z-index, auto);
    }
    .iui-textbox-hovered {
        background: var(--iui-textbox-hovered-background, #efefef);
        border: var(--iui-textbox-hovered-border, thin solid #cecece);
        border-color: var(--iui-textbox-hovered-border-color, #cecece);
        color: var(--iui-textbox-hovered-color, black);
    }
    .iui-textbox-selected {
        background: var(--iui-textbox-selected-background, #d5d5d5);
        border: var(--iui-textbox-selected-border, thin solid #bebebe);
        border-color: var(--iui-textbox-selected-border-color, #bebebe);
        color: var(--iui-textbox-selected-color, black);
    }
    .iui-textbox:focus {
        border-color:  var(--iui-textbox-focus-border-color, #d5d5d5);
        outline: none !important;
    }

    .iui-textbox-label {
        background: var(--iui-textbox-label-background, #e5e5e5);
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
        opacity: var(--iui-textbox-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiTextBoxDefaultStyle };
