import { c as css } from '../../external/lit-element.js';

const iuiSidePanelDefaultStyle = css`
    .iui-sidepanel {
        background: var(--sidepanel-background, #f5f5f5);
        border: var(--sidepanel-border, 0);
        border-color:  var(--sidepanel-border-color, #cecece);
        border-radius: var(--sidepanel-border-radius, 1px);
        border-width: var(--sidepanel-border-width, 0);
        color: var(--sidepanel-color, black);
        cursor: var(--sidepanel-cursor, default);
        display: var(--sidepanel-display, none);
        float: var(--sidepanel-float, none);
        height: var(--sidepanel-height, 100%);
        opacity: var(--sidepanel-opacity, 1);
        overflow: var(--sidepanel-overflow, hidden);
        margin: var(--sidepanel-margin, 0);
        padding: var(--sidepanel-padding, 0);
        position: var(--sidepanel-position, absolute);
        text-align: var(--sidepanel-text-align, center);
        vertical-align: var(--sidepanel-vertical-align, initial);
        width: var(--sidepanel-width, auto);
        z-index: var(--sidepanel-z-index, 999);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-sidepanel-content {
        overflow: auto;
    }

    /* Disabled State */
    .iui-sidepanel-disabled {
        opacity: var(--sidepanel-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiSidePanelDefaultStyle };
