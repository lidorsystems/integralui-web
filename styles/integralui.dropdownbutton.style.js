import { c as css } from '../external/lit-element.js';

const iuiDropDownButtonDefaultStyle = css`
    .iui-dropdownbutton {
        background: var(--dropdownbutton-background, #e5e5e5);
        border: var(--dropdownbutton-border, thin solid #cecece);
        border-color: var(--dropdownbutton-border-color, #cecece);
        border-radius: var(--dropdownbutton-border-radius, 3px);
        border-width: var(--dropdownbutton-border-width, thin);
        color: var(--dropdownbutton-color, black);
        cursor: var(--dropdownbutton-cursor, default);
        display: var(--dropdownbutton-display, inline-block);
        float: var(--dropdownbutton-float, none);
        height: var(--dropdownbutton-height, auto);
        margin: var(--dropdownbutton-margin, 0);
        opacity: var(--dropdownbutton-opacity, 1);
        overflow: hidden;
        padding: var(--dropdownbutton-padding, 5px);
        position: var(--dropdownbutton-position, relative);
        text-align: var(--dropdownbutton-text-align, center);
        vertical-align: var(--dropdownbutton-vertical-align, initial);
        width: var(--dropdownbutton-width, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-dropdownbutton-hovered {
        background: var(--dropdownbutton-hovered-background, #efefef);
        border: var(--dropdownbutton-hovered-border, thin solid #cecece);
        border-color: var(--dropdownbutton-hovered-border-color, #cecece);
        color: var(--dropdownbutton-hovered-color, black);
        opacity: var(--dropdownbutton-hovered-opacity, 1);
    }
    .iui-dropdownbutton-selected {
        background: var(--dropdownbutton-selected-background, #d5d5d5);
        border: var(--dropdownbutton-selected-border, thin solid #bebebe);
        border-color: var(--dropdownbutton-selected-border-color, #bebebe);
        color: var(--dropdownbutton-selected-color, black);
        opacity: var(--dropdownbutton-selected-opacity, 1);
    }
    .iui-dropdownbutton-btn
    {
        padding: 0;
    }
    .iui-dropdownbutton-btn-right
    {
        border-left: thin solid #cecece;
        float: right;
        margin: 1px 0 1px 10px;
    }
    .iui-dropdownbutton-btn-left
    {
        border-right: thin solid #cecece;
        float: left;
        margin: 1px 10px 1px 0;
    }
    .iui-dropdownbutton-btn span
    {
        background-image: url(../icons/down-small.ico);
        display: block;
        padding: 0;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-dropdownbutton-btn-right span
    {
        margin: 0 0 0 3px;
    }
    
    .iui-dropdownbutton-btn-left span
    {
        margin: 0 3px 0 0;
    }
    .iui-dropdownbutton-open-above span
    {
        background-image: url(../icons/up-small.ico);
    }
    .iui-dropdownbutton-open-left span
    {
        background-image: url(../icons/prev-small.ico);
    }
    .iui-dropdownbutton-open-right span
    {
        background-image: url(../icons/next-small.ico);
    }
    
    /* Disabled State */
    .iui-dropdownbutton-disabled {
        opacity: var(--dropdownbutton-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiDropDownButtonDefaultStyle };
