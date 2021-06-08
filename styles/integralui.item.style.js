import { c as css } from '../external/lit-element.js';

const iuiItemDefaultStyle = css`
    .iui-item {
        background: var(--item-background, transparent);
        border: var(--item-border, thin solid transparent);
        color: var(--item-color, black);
        margin: var(--item-margin, 1px);
        overflow: hidden;
        padding: var(--item-padding, 3px);
    }
    .iui-item-hovered {
        background: var(--item-hovered-background, transparent);
        border: var(--item-hovered-border, thin solid transparent);
    }
    .iui-item-selected {
        background: var(--item-selected-background, transparent);
        border: var(--item-selected-border, thin solid transparent);
    }
    .iui-item-label {
        border: var(--item-label-border, thin solid transparent);
        display: inline-block;
        padding: var(--item-label-padding, 2px);
    }
    .iui-item-icon {
    }
    .iui-item-icon-url {
        vertical-align: middle;
    }

    /* Disabled State */
    .iui-item-disabled div {
        opacity: var(--item-disabled-opacity, 0.75);
        pointer-events: none;
    }

    .iui-item-content {
        overflow: hidden;
        position: relative;
    }
`;

export { iuiItemDefaultStyle };
