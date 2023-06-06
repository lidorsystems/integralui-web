import { c as css } from '../../external/lit-element.js';

export const iuiItemDefaultStyle = css`
    .iui-item {
        background: var(--iui-item-background, transparent);
        border: var(--iui-item-border, thin solid transparent);
        color: var(--iui-item-color, black);
        margin: var(--iui-item-margin, 1px);
        overflow: hidden;
        padding: var(--iui-item-padding, 3px);
    }
    .iui-item-hovered {
        background: var(--iui-item-hovered-background, transparent);
        border: var(--iui-item-hovered-border, thin solid transparent);
    }
    .iui-item-selected {
        background: var(--iui-item-selected-background, transparent);
        border: var(--iui-item-selected-border, thin solid transparent);
    }
    .iui-item-label {
        border: var(--iui-item-label-border, thin solid transparent);
        display: inline-block;
        padding: var(--iui-item-label-padding, 2px);
    }
    .iui-item-icon {
        display: inline-block;
    }
    .iui-item-icon-url {
        vertical-align: middle;
    }

    /* Disabled State */
    .iui-item-disabled div {
        opacity: var(--iui-item-disabled-opacity, 0.75);
        pointer-events: none;
    }

    .iui-item-content {
        overflow: hidden;
        position: relative;
    }
`;