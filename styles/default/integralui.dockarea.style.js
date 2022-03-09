import { c as css } from '../../external/lit-element.js';

const iuiDockAreaDefaultStyle = css`
    .iui-dockarea {
        background: var(--dockarea-background, transparent);
        border: var(--dockarea-border, 0);
        border-color:  var(--dockarea-border-color, transparent);
        border-radius: var(--dockarea-border-radius, 1px);
        border-width: var(--dockarea-border-width, thin);
        color: var(--dockarea-color, black);
        cursor: var(--dockarea-cursor, default);
        display: var(--dockarea-display, block);
        float: var(--dockarea-float, none);
        height: var(--dockarea-height, auto);
        opacity: var(--dockarea-opacity, 1);
        overflow: hidden;
        margin: var(--dockarea-margin, 0);
        padding: var(--dockarea-padding, 0);
        position: relative;
        text-align: var(--dockarea-text-align, left);
        vertical-align: var(--dockarea-vertical-align, initial);
        width: var(--dockarea-width, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-dockarea-drop {
        background: var(--dockarea-drop-background, #ababab);
    }

    /* Disabled State */
    .iui-dockarea-disabled {
        opacity: var(--dockarea-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiDockAreaDefaultStyle };
