import { c as css } from '../../external/lit-element.js';

export const iuiListGroupDefaultStyle = css`
    .iui-listgroup {
        background: var(--iui-listgroup-background, white);
        border: var(--iui-listgroup-border, 0);
        border-color:  var(--iui-listgroup-border-color, transparent);
        border-radius: var(--iui-listgroup-border-radius, 1px);
        border-width: var(--iui-listgroup-border-width, thin);
        color: var(--iui-listgroup-color, black);
        cursor: var(--iui-listgroup-cursor, default);
        display: var(--iui-listgroup-display, block);
        float: var(--iui-listgroup-float, none);
        font-size: var(--iui-listgroup-font-size, 1rem);
        font-style: var(--iui-listgroup-font-style, normal);
        height: var(--iui-listgroup-height, auto);
        margin: var(--iui-listgroup-margin, 0);
        opacity: var(--iui-listgroup-opacity, 1);
        overflow: hidden;
        padding: var(--iui-listgroup-padding, 0);
        position: var(--iui-listgroup-position, relative);
        text-align: var(--iui-listgroup-text-align, left);
        width: var(--iui-listgroup-width, auto);
        z-index: var(--iui-listgroup-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    /* Normal State */
    .iui-listgroup-item
    {
        padding: var(--iui-listgroup-item-padding, 3px);
        margin: var(--iui-listgroup-item-margin, 0);
        position: relative;
    }
    .iui-listgroup-content
    {
        border: var(--iui-listgroup-content-border, thin solid #cecece);
        margin: 0;
    }
    /* Disabled State */
    .iui-listgroup-content-disabled
    {
        border: var(--iui-listgroup-content-disabled-border, thin solid gray);
        color: var(--iui-listgroup-content-disabled-color, gray);
    }


    /* Header Normal State */
    .iui-listgroup-header
    {
        background: var(--iui-listgroup-header-background, #e5e5e5);
        border: var(--iui-listgroup-header-border, thin solid #cecece);
        color: var(--iui-listgroup-header-color, black);
        margin: 0;
        padding: var(--iui-listgroup-header-padding, 3px);
        position: relative;
    }
    /* Header Hover State */
    .iui-listgroup-header-hovered
    {
        background: var(--iui-listgroup-header-hovered-background, #f5f5f5);
        border: var(--iui-listgroup-header-hovered-border, thin solid #e5e5e5);
        margin: 0;
        padding: var(--iui-listgroup-header-hovered-padding, 3px);
        position: relative;
    }
    /* Header Selected State */
    .iui-listgroup-header-selected
    {
        background: var(--iui-listgroup-header-selected-background, #bfbfbf);
        border: var(--iui-listgroup-header-selected-border, thin solid #a1a1a1);
        color: var(--iui-listgroup-header-selected-color, white);
        padding: var(--iui-listgroup-header-selected-padding, 3px);
        margin: 0;
        position: relative;
    }
    /* Item Normal State */
    .iui-listgroup-item-normal
    {
    }
    /* Item Hover State */
    .iui-listgroup-item-hovered
    {
        background: var(--iui-listgroup-item-hovered-background, #f5f5f5);
        border: var(--iui-listgroup-item-hovered-border, thin solid #efefef);
    }
    /* Item Selected State */
    .iui-listgroup-item-selected
    {
        background: var(--iui-listgroup-item-selected-background, #e5e5e5);
        border: var(--iui-listgroup-item-selected-border, thin solid #dedede);
    }
    .iui-listgroup-header-expand-box
    {
        background: var(--iui-listgroup-header-expand-box-background, #484848);
    }

    /* Disabled State */
    .iui-listgroup-disabled div
    {
        opacity: var(--iui-listgroup-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
