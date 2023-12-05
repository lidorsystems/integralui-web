
import { c as css } from '../../external/lit-element.js';

export const iuiTabDefaultStyle = css`
    .iui-tab-header {
        background: var(--iui-tab-header-background, #e5e5e5);
        border: var(--iui-tab-header-border, thin solid #bcbcbc);
        border-color: var(--iui-tab-header-border-color, #bcbcbc);
        border-radius: var(--iui-tab-header-border-radius, 0);
        color: var(--iui-tab-header-color, black);
        display: inline-block;
        font-size: var(--iui-tab-header-font-size, 1rem);
        font-style: var(--iui-tab-header-font-style, normal);
        font-weight: var(--iui-tab-header-font-weight, normal);
        list-style: none;
        margin: var(--iui-tab-header-margin, 0);
        overflow: hidden;
        padding: var(--iui-tab-header-padding, 5px);
        position: absolute;
        text-align: var(--iui-tab-header-text-align, left);
        top: 1px;
        white-space: nowrap;
        z-index: 0;

    }
    .iui-tab-header-vertical {
        transform: rotate(-90deg);
        transform-origin: top left;
    }
    .iui-tab-header-hovered {
        background: var(--iui-tab-header-hovered-background, #f5f5f5);
        border-color: var(--iui-tab-header-hovered-border-color, #bcbcbc);
        color: var(--iui-tab-header-hovered-color, black);
        font-weight: var(--iui-tab-header-hovered-font-weight, normal);
    }
    .iui-tab-header-selected {
        background: var(--iui-tab-header-selected-background, white);
        border-color: var(--iui-tab-header-selected-border-color, #bcbcbc);
        color: var(--iui-tab-header-selected-color, black);
        font-weight: var(--iui-tab-header-selected-font-weight, normal);
    }
    .iui-tab-header-dragged {
        border-color: var(--iui-tab-header-dragged-border-color, #bcbcbc);
    }
    .iui-tab-selected-top {
        border-color: var(--iui-tab-header-selected-border-color, #bcbcbc #bcbcbc white #bcbcbc);
    }
    .iui-tab-selected-right {
        border-color: var(--iui-tab-header-selected-border-color, #bcbcbc #bcbcbc #bcbcbc white);
    }
    .iui-tab-selected-bottom {
        border-color: var(--iui-tab-header-selected-border-color, white #bcbcbc #bcbcbc #bcbcbc);
    }
    .iui-tab-selected-left {
        border-color: var(--iui-tab-header-selected-border-color, #bcbcbc white #bcbcbc #bcbcbc);
    }
    .iui-tab-content {
        background: var(--iui-tab-content-background, white);
        border: var(--iui-tab-content-border, 0);
        color: var(--iui-tab-content-color, black);
        overflow: hidden;
        padding: var(--iui-tab-content-padding, 5px);
        position: absolute;
        vertical-align: middle;
    }

    /* Disabled State */
    .iui-tab-disabled div {
        opacity: var(--iui-tab-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
