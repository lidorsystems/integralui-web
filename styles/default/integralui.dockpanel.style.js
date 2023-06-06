import { c as css } from '../../external/lit-element.js';

const iuiDockPanelDefaultStyle = css`
    .iui-dockpanel {
        background: var(--iui-dockpanel-background, #e5e5e5);
        border: var(--iui-dockpanel-border, 0);
        border-color:  var(--iui-dockpanel-border-color, #cecece);
        border-radius: var(--iui-dockpanel-border-radius, 1px);
        border-width: var(--iui-dockpanel-border-width, 0);
        color: var(--iui-dockpanel-color, black);
        cursor: var(--iui-dockpanel-cursor, default);
        display: var(--iui-dockpanel-display, block);
        float: var(--iui-dockpanel-float, none);
        height: var(--iui-dockpanel-height, auto);
        opacity: var(--iui-dockpanel-opacity, 1);
        overflow: hidden;
        margin: var(--iui-dockpanel-margin, 0);
        padding: var(--iui-dockpanel-padding, 0);
        position: relative;
        text-align: var(--iui-dockpanel-text-align, left);
        vertical-align: var(--iui-dockpanel-vertical-align, initial);
        width: var(--iui-dockpanel-width, auto);
        z-index: var(--iui-dockpanel-z-index, 10);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-dockpanel-bottom {
        cursor: ns-resize;
        padding: var(--iui-dockpanel-bottom-padding, 7px 0 0 0);
    }
    .iui-dockpanel-left {
        cursor: ew-resize;
        padding: var(--iui-dockpanel-left-padding, 0 7px 0 0);
    }
    .iui-dockpanel-right {
        cursor: ew-resize;
        padding: var(--iui-dockpanel-right-padding, 0 0 0 7px);
    }
    .iui-dockpanel-top {
        cursor: ns-resize;
        padding: var(--iui-dockpanel-top-padding, 0 0 7px 0);
    }

    .iui-dockpanel-content {
        background: var(--iui-dockpanel-content-background, white);
        cursor: var(--iui-dockpanel-cursor, default);
        height: 100%;
        width: 100%;
    }

    /* Disabled State */
    .iui-dockpanel-disabled {
        opacity: var(--iui-dockpanel-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiDockPanelDefaultStyle };
