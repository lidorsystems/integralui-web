import { c as css } from '../../external/lit-element.js';

export const iuiDropDownButtonDefaultStyle = css`
    .iui-dropdownbutton {
        background: var(--iui-dropdownbutton-background, #e5e5e5);
        border: var(--iui-dropdownbutton-border, thin solid #cecece);
        border-color: var(--iui-dropdownbutton-border-color, #cecece);
        border-radius: var(--iui-dropdownbutton-border-radius, 3px);
        border-width: var(--iui-dropdownbutton-border-width, thin);
        color: var(--iui-dropdownbutton-color, black);
        cursor: var(--iui-dropdownbutton-cursor, default);
        display: var(--iui-dropdownbutton-display, inline-block);
        float: var(--iui-dropdownbutton-float, none);
        font-size: var(--iui-dropdownbutton-font-size, 1rem);
        font-style: var(--iui-dropdownbutton-font-style, normal);
        height: var(--iui-dropdownbutton-height, auto);
        margin: var(--iui-dropdownbutton-margin, 0);
        opacity: var(--iui-dropdownbutton-opacity, 1);
        overflow: hidden;
        padding: var(--iui-dropdownbutton-padding, 5px);
        position: var(--iui-dropdownbutton-position, relative);
        text-align: var(--iui-dropdownbutton-text-align, center);
        vertical-align: var(--iui-dropdownbutton-vertical-align, initial);
        width: var(--iui-dropdownbutton-width, auto);
        z-index: var(--iui-dropdownbutton-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
         user-select: none;
    }
    .iui-dropdownbutton-hovered {
        background: var(--iui-dropdownbutton-hovered-background, #efefef);
        border: var(--iui-dropdownbutton-hovered-border, thin solid #cecece);
        border-color: var(--iui-dropdownbutton-hovered-border-color, #cecece);
        color: var(--iui-dropdownbutton-hovered-color, black);
        opacity: var(--iui-dropdownbutton-hovered-opacity, 1);
    }
    .iui-dropdownbutton-selected {
        background: var(--iui-dropdownbutton-selected-background, #d5d5d5);
        border: var(--iui-dropdownbutton-selected-border, thin solid #bebebe);
        border-color: var(--iui-dropdownbutton-selected-border-color, #bebebe);
        color: var(--iui-dropdownbutton-selected-color, black);
        opacity: var(--iui-dropdownbutton-selected-opacity, 1);
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
        background-image: url(../../icons/down-small.ico);
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
        background-image: url(../../icons/up-small.ico);
    }
    .iui-dropdownbutton-open-left span
    {
        background-image: url(../../icons/prev-small.ico);
    }
    .iui-dropdownbutton-open-right span
    {
        background-image: url(../../icons/next-small.ico);
    }
    
    /* Disabled State */
    .iui-dropdownbutton-disabled {
        opacity: var(--iui-dropdownbutton-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
