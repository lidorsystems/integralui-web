import { c as css } from '../../external/lit-element.js';

const iuiSidePanelDefaultStyle = css`
    .iui-sidepanel {
        background: var(--iui-sidepanel-background, #f5f5f5);
        border: var(--iui-sidepanel-border, 0);
        border-color:  var(--iui-sidepanel-border-color, #cecece);
        border-radius: var(--iui-sidepanel-border-radius, 1px);
        border-width: var(--iui-sidepanel-border-width, 0);
        color: var(--iui-sidepanel-color, black);
        cursor: var(--iui-sidepanel-cursor, default);
        display: var(--iui-sidepanel-display, none);
        float: var(--iui-sidepanel-float, none);
        font-size: var(--iui-sidepanel-font-size, 1rem);
        font-style: var(--iui-sidepanel-font-style, normal);
        height: var(--iui-sidepanel-height, 100%);
        opacity: var(--iui-sidepanel-opacity, 1);
        overflow: var(--iui-sidepanel-overflow, hidden);
        margin: var(--iui-sidepanel-margin, 0);
        padding: var(--iui-sidepanel-padding, 0);
        position: var(--iui-sidepanel-position, absolute);
        text-align: var(--iui-sidepanel-text-align, center);
        vertical-align: var(--iui-sidepanel-vertical-align, initial);
        width: var(--iui-sidepanel-width, auto);
        z-index: var(--iui-sidepanel-z-index, 999);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-sidepanel-content {
        overflow: var(--iui-sidepanel-content-overflow, auto);
    }

    /* Disabled State */
    .iui-sidepanel-disabled {
        opacity: var(--iui-sidepanel-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiSidePanelDefaultStyle };
