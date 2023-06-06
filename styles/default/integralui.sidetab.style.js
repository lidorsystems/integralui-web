
import { c as css } from '../../external/lit-element.js';

export const iuiTabDefaultStyle = css`
    .iui-tab-header
    {
        background: var(--iui-tab-header-background, transparent);
        border: var(--iui-tab-header-border, thin solid transparent);
        border-color: var(--iui-tab-header-border-color, transparent);
        color: var(--iui-tab-header-color, black);
        display: inline-block;
        font-weight: var(--iui-tab-header-font-weight, normal);
        list-style: none;
        margin: var(--iui-tab-header-margin, 0);
        overflow: hidden;
        padding: var(--iui-tab-header-padding, 5px);
        position: absolute;
        top: 1px;
        white-space: nowrap;
        z-index: 0;
    }
    .iui-tab-header-hovered
    {
        background: var(--iui-tab-header-hovered-background, #fcfcfc);
        border-color: var(--iui-tab-header-hovered-border-color, #fcfcfc);
        color: var(--iui-tab-header-hovered-color, black);
        font-weight: var(--iui-tab-header-hovered-font-weight, normal);

    }
    .iui-tab-header-selected
    {
        background: var(--iui-tab-header-selected-background, white);
        border-color: var(--iui-tab-header-selected-border-color, white);
        color: var(--iui-tab-header-selected-color, black);
        font-weight: var(--iui-tab-header-selected-font-weight, normal);
    }
    .iui-tab-header-dragged
    {
        border-color: var(--iui-tab-header-dragged-border-color, #bcbcbc);
    }
    .iui-tab-selected-top
    {
        border-color: var(--iui-tab-header-selected-border-color, white);
    }
    .iui-tab-selected-right
    {
        border-color: var(--iui-tab-header-selected-border-color, white);
    }
    .iui-tab-selected-bottom
    {
        border-color: var(--iui-tab-header-selected-border-color, white);
    }
    .iui-tab-selected-left
    {
        border-color: var(--iui-tab-header-selected-border-color, white);
    }
    .iui-tab-content
    {
        background: var(--iui-tab-content-background, white);
        border: var(--iui-tab-content-border, 0);
        color: var(--iui-tab-content-color, black);
        padding: var(--iui-tab-content-padding, 5px);
        position: absolute;
        vertical-align: middle;
        overflow: hidden;
    }

    /* Disabled State */
    .iui-tab-disabled div
    {
        opacity: var(--iui-tab-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
