import { c as css } from '../../external/lit-element.js';

const iuiDockAreaDefaultStyle = css`
    .iui-dockarea {
        background: var(--iui-dockarea-background, transparent);
        border: var(--iui-dockarea-border, 0);
        border-color:  var(--iui-dockarea-border-color, transparent);
        border-radius: var(--iui-dockarea-border-radius, 1px);
        border-width: var(--iui-dockarea-border-width, thin);
        color: var(--iui-dockarea-color, black);
        cursor: var(--iui-dockarea-cursor, default);
        display: var(--iui-dockarea-display, block);
        float: var(--iui-dockarea-float, none);
        height: var(--iui-dockarea-height, auto);
        opacity: var(--iui-dockarea-opacity, 1);
        overflow: hidden;
        margin: var(--iui-dockarea-margin, 0);
        padding: var(--iui-dockarea-padding, 0);
        position: relative;
        text-align: var(--iui-dockarea-text-align, left);
        vertical-align: var(--iui-dockarea-vertical-align, initial);
        width: var(--iui-dockarea-width, auto);
        z-index: var(--iui-dockarea-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-dockarea-drop {
        background: var(--iui-dockarea-drop-background, #ababab);
    }

    /* Disabled State */
    .iui-dockarea-disabled {
        opacity: var(--iui-dockarea-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiDockAreaDefaultStyle };
