import { c as css } from '../../external/lit-element.js';

export const iuiScrollBarStyle = css`
    .iui-scrollbar {
        background: var(--scrollbar-background, #f5f5f5);
        border: var(--scrollbar-border, 0);
        border-color:  var(--scrollbar-border-color, #f5f5f5);
        border-radius: var(--scrollbar-border-radius, 1px);
        border-width: var(--scrollbar-border-width, thin);
        cursor: var(--scrollbar-cursor, default);
        display: var(--scrollbar-display, block);
        height: var(--scrollbar-height, auto);
        margin: var(--scrollbar-margin, 0);
        opacity: var(--scrollbar-opacity, 0);
        overflow: hidden;
        padding: var(--scrollbar-padding, 2px);
        position: var(--scrollbar-position, absolute);
        width: var(--scrollbar-width, auto);
        z-index: var(--scrollbar-z-index, 99);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-scrollbar-enter {
        opacity: var(--scrollbar-enter-opacity, 1);
        transition: opacity 0.4s ease-in-out;
    }
    .iui-scrollbar-leave {
        opacity: var(--scrollbar-opacity, 0);
        transition: opacity 1s ease-in-out;
    }
    .iui-scrollbar-vertical {
        border-left: var(--scrollbar-vertical-border-left, thin solid #f5f5f5);
        display: var(--scrollbar-vertical-display, block);
        top: 0;
        width: var(--scrollbar-vertical-width, 11px);
    }
    .iui-scrollbar-horizontal {
        border-top: var(--scrollbar-horizontal-border-top, thin solid #f5f5f5);
        bottom: 0;
        display: var(--scrollbar-horizontal-display, block);
        height: var(--scrollbar-horizontal-height, 11px);
    }
    
    /* ScrollBar Thumb */
    .iui-scrollbar-thumb {
        background: var(--scrollbar-thumb-background, #e5e5e5);
        border: var(--scrollbar-thumb-border, thin solid #d5d5d5);
        border-color: var(--scrollbar-thumb-border-color, #d5d5d5);
        border-radius: var(--scrollbar-thumb-border-radius, 2px);
        position: absolute;
        transition: background 0.25s ease-in-out, border 0.25s ease-in-out;
        z-index: var(--scrollbar-thumb-z-index, 99);
    }
    .iui-scrollbar-thumb-hovered {
        background: var(--scrollbar-thumb-hovered-background, #d5d5d5);
        border: var(--scrollbar-thumb-hovered-border, thin solid #c5c5c5);
        border-color: var(--scrollbar-thumb-hovered-border-color, #c5c5c5);
    }
    .iui-scrollbar-thumb-selected {
        background: var(--scrollbar-thumb-selected-background, #c5c5c5);
        border: var(--scrollbar-thumb-selected-border, thin solid #b5b5b5);
        border-color: var(--scrollbar-thumb-selected-border-color, #b5b5b5);
    }
    .iui-scrollbar-thumb-vertical {
        top: 2px;
        width: var(--scrollbar-thumb-vertical-width, 9px);
    }
    .iui-scrollbar-thumb-horizontal {
        left: 2px;
        height: var(--scrollbar-thumb-height, 9px);
    }
    
    /* ScrollBar Dynamic */
    .iui-scrollbar-dynamic {
        background: var(--scrollbar-dynamic-background, transparent);
        border-color:  var(--scrollbar-dynamic-border-color, transparent);
        border-left: var(--scrollbar-dynamic-border-left, 0);
        border-top: var(--scrollbar-dynamic-border-top, 0);
        padding: var(--scrollbar-dynamic-padding, 0);
        opacity: var(--scrollbar-opacity, 0.8);
    }
    .iui-scrollbar-dynamic-enter {
        opacity: var(--scrollbar-enter-opacity, 0.8);
    }
    .iui-scrollbar-dynamic-leave {
        opacity: var(--scrollbar-opacity, 0);
    }
    .iui-scrollbar-dynamic-vertical {
        width: var(--scrollbar-vertical-width, 9px);
    }
    .iui-scrollbar-dynamic-horizontal {
        height: var(--scrollbar-vertical-height, 9px);
    }
    .iui-scrollbar-dynamic .iui-scrollbar-thumb-vertical {
        top: 0;
        width: var(--scrollbar-thumb-width, 7px);
    }
    .iui-scrollbar-dynamic .iui-scrollbar-thumb-horizontal {
        left: 0;
        height: var(--scrollbar-thumb-height, 7px);
    }
    .iui-scrollbar-dynamic .iui-scrollbar-thumb {
        border-color: var(--scrollbar-thumb-border-color, #e5e5e5);
        border-radius: var(--scrollbar-thumb-border-radius, 0);
    }
    .iui-scrollbar-dynamic .iui-scrollbar-thumb-hovered {
        border-color: var(--scrollbar-thumb-hovered-border-color, #d5d5d5);
    }
    .iui-scrollbar-dynamic .iui-scrollbar-thumb-selected {
        border-color: var(--scrollbar-thumb-selected-border-color, #c5c5c5);
    }

    /* ScrollBar Corer */
    .iui-scrollbar-corner {
        background: var(--scrollbar-corner-background, #f5f5f5);
        bottom: 0;
        cursor: var(--scrollbar-corner-cursor, default);
        height: var(--scrollbar-corner-height, 16px);
        margin: 0;
        padding: 0;
        position: absolute;
        right: 0;
        width: var(--scrollbar-corner-width, 16px);
        z-index: var(--scrollbar-corner-z-index, 99);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-scrollbar-corner-dynamic {
        background: var(--scrollbar-corner-dynamic-background, transparent);
        height: var(--scrollbar-corner-height, 9px);
        width: var(--scrollbar-corner-width, 9px);
    }

    /* Disabled State */
    .iui-scrollbar-disabled div, .iui-scrollbar-thumb-disabled, .iui-scrollbar-corner-disabled {
        opacity: var(--scrollbar-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
