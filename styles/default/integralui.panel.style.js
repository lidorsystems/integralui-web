import { c as css } from '../../external/lit-element.js';

const iuiPanelDefaultStyle = css`
    .iui-panel {
        background: var(--iui-panel-background, #f5f5f5);
        border: var(--iui-panel-border, 0);
        border-color:  var(--iui-panel-border-color, #cecece);
        border-radius: var(--iui-panel-border-radius, 1px);
        border-width: var(--iui-panel-border-width, thin);
        color: var(--iui-panel-color, black);
        cursor: var(--iui-panel-cursor, default);
        display: var(--iui-panel-display, block);
        float: var(--iui-panel-float, none);
        font-size: var(--iui-panel-font-size, 1rem);
        font-style: var(--iui-panel-font-style, normal);
        height: var(--iui-panel-height, 100%);
        opacity: var(--iui-panel-opacity, 1);
        overflow: var(--iui-panel-overflow, hidden);
        margin: var(--iui-panel-margin, 0);
        padding: var(--iui-panel-padding, 0);
        position: var(--iui-panel-position, relative);
        text-align: var(--iui-panel-text-align, center);
        vertical-align: var(--iui-panel-vertical-align, initial);
        width: var(--iui-panel-width, auto);
        z-index: var(--iui-panel-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Disabled State */
    .iui-panel-disabled {
        opacity: var(--iui-panel-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiPanelDefaultStyle };
