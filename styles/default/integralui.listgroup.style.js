import { c as css } from '../../external/lit-element.js';

export const iuiListGroupDefaultStyle = css`
    .iui-listgroup {
        background: var(--listgroup-background, white);
        border: var(--listgroup-border, 0);
        border-color:  var(--listgroup-border-color, transparent);
        border-radius: var(--listgroup-border-radius, 1px);
        border-width: var(--listgroup-border-width, thin);
        color: var(--listgroup-color, black);
        cursor: var(--listgroup-cursor, default);
        display: var(--listgroup-display, block);
        float: var(--listgroup-float, none);
        height: var(--listgroup-height, auto);
        margin: var(--listgroup-margin, 0);
        opacity: var(--listgroup-opacity, 1);
        overflow: hidden;
        padding: var(--listgroup-padding, 0);
        position: var(--listgroup-position, relative);
        width: var(--listgroup-width, auto);
        z-index: var(--listgroup-z-index, auto);

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
        padding: var(--listgroup-item-padding, 3px);
        margin: var(--listgroup-item-margin, 0);
        position: relative;
    }
    .iui-listgroup-content
    {
        border: var(--listgroup-content-border, thin solid #cecece);
        margin: 0;
    }
    /* Disabled State */
    .iui-listgroup-content-disabled
    {
        border: var(--listgroup-content-disabled-border, thin solid gray);
        color: var(--listgroup-content-disabled-color, gray);
    }


    /* Header Normal State */
    .iui-listgroup-header
    {
        background: var(--listgroup-header-background, #e5e5e5);
        border: var(--listgroup-header-border, thin solid #cecece);
        color: var(--listgroup-header-color, black);
        margin: 0;
        padding: var(--listgroup-header-padding, 3px);
        position: relative;
    }
    /* Header Hover State */
    .iui-listgroup-header-hovered
    {
        background: var(--listgroup-header-hovered-background, #f5f5f5);
        border: var(--listgroup-header-hovered-border, thin solid #e5e5e5);
        margin: 0;
        padding: var(--listgroup-header-hovered-padding, 3px);
        position: relative;
    }
    /* Header Selected State */
    .iui-listgroup-header-selected
    {
        background: var(--listgroup-header-selected-background, #bfbfbf);
        border: var(--listgroup-header-selected-border, thin solid #a1a1a1);
        color: var(--listgroup-header-selected-color, white);
        padding: var(--listgroup-header-selected-padding, 3px);
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
        background: var(--listgroup-item-hovered-background, #f5f5f5);
        border: var(--listgroup-item-hovered-border, thin solid #efefef);
    }
    /* Item Selected State */
    .iui-listgroup-item-selected
    {
        background: var(--listgroup-item-selected-background, #e5e5e5);
        border: var(--listgroup-item-selected-border, thin solid #dedede);
    }
    .iui-listgroup-header-expand-box
    {
        background: var(--listgroup-header-expand-box-background, #484848);
    }

    /* Disabled State */
    .iui-listgroup-disabled div
    {
        opacity: var(--listgroup-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
