
import { c as css } from '../../external/lit-element.js';

export const iuiTabDefaultStyle = css`
    .iui-tab-header
    {
        background: var(--tab-header-background, transparent);
        border: var(--tab-header-border, thin solid transparent);
        border-color: var(--tab-header-border-color, transparent);
        color: var(--tab-header-color, black);
        display: inline-block;
        font-weight: var(--tab-header-font-weight, normal);
        list-style: none;
        margin: var(--tab-header-margin, 0);
        overflow: hidden;
        padding: var(--tab-header-padding, 5px);
        position: absolute;
        top: 1px;
        white-space: nowrap;
        z-index: 0;
    }
    .iui-tab-header-hovered
    {
        background: var(--tab-header-hovered-background, #fcfcfc);
        border-color: var(--tab-header-hovered-border-color, #fcfcfc);
        color: var(--tab-header-hovered-color, black);
        font-weight: var(--tab-header-hovered-font-weight, normal);

    }
    .iui-tab-header-selected
    {
        background: var(--tab-header-selected-background, white);
        border-color: var(--tab-header-selected-border-color, white);
        color: var(--tab-header-selected-color, black);
        font-weight: var(--tab-header-selected-font-weight, normal);
    }
    .iui-tab-header-dragged
    {
        border-color: var(--tab-header-dragged-border-color, #bcbcbc);
    }
    .iui-tab-selected-top
    {
        border-color: var(--tab-header-selected-border-color, white);
    }
    .iui-tab-selected-right
    {
        border-color: var(--tab-header-selected-border-color, white);
    }
    .iui-tab-selected-bottom
    {
        border-color: var(--tab-header-selected-border-color, white);
    }
    .iui-tab-selected-left
    {
        border-color: var(--tab-header-selected-border-color, white);
    }
    .iui-tab-content
    {
        background: var(--tab-content-background, white);
        border: var(--tab-content-border, 0);
        color: var(--tab-content-color, black);
        padding: var(--tab-content-padding, 5px);
        position: absolute;
        vertical-align: middle;
        overflow: hidden;
    }

    /* Disabled State */
    .iui-tab-disabled div
    {
        opacity: var(--tab-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
