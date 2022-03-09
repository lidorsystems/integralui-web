import { c as css } from '../../external/lit-element.js';

const iuiDockPanelDefaultStyle = css`
    .iui-dockpanel {
        background: var(--dockpanel-background, #e5e5e5);
        border: var(--dockpanel-border, 0);
        border-color:  var(--dockpanel-border-color, #cecece);
        border-radius: var(--dockpanel-border-radius, 1px);
        border-width: var(--dockpanel-border-width, 0);
        color: var(--dockpanel-color, black);
        cursor: var(--dockpanel-cursor, default);
        display: var(--dockpanel-display, block);
        float: var(--dockpanel-float, none);
        height: var(--dockpanel-height, auto);
        opacity: var(--dockpanel-opacity, 1);
        overflow: hidden;
        margin: var(--dockpanel-margin, 0);
        padding: var(--dockpanel-padding, 0);
        position: relative;
        text-align: var(--dockpanel-text-align, left);
        vertical-align: var(--dockpanel-vertical-align, initial);
        width: var(--dockpanel-width, auto);
        z-index: var(--dockpanel-z-index, 10);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-dockpanel-bottom {
        cursor: ns-resize;
        padding: var(--dockpanel-bottom-padding, 7px 0 0 0);
    }
    .iui-dockpanel-left {
        cursor: ew-resize;
        padding: var(--dockpanel-left-padding, 0 7px 0 0);
    }
    .iui-dockpanel-right {
        cursor: ew-resize;
        padding: var(--dockpanel-right-padding, 0 0 0 7px);
    }
    .iui-dockpanel-top {
        cursor: ns-resize;
        padding: var(--dockpanel-top-padding, 0 0 7px 0);
    }

    .iui-dockpanel-content {
        background: var(--dockpanel-content-background, white);
        cursor: var(--dockpanel-cursor, default);
        height: 100%;
        width: 100%;
    }

    /* Disabled State */
    .iui-dockpanel-disabled {
        opacity: var(--dockpanel-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiDockPanelDefaultStyle };
