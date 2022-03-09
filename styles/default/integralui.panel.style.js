import { c as css } from '../../external/lit-element.js';

const iuiPanelDefaultStyle = css`
    .iui-panel {
        background: var(--panel-background, #f5f5f5);
        border: var(--panel-border, 0);
        border-color:  var(--panel-border-color, #cecece);
        border-radius: var(--panel-border-radius, 1px);
        border-width: var(--panel-border-width, thin);
        color: var(--panel-color, black);
        cursor: var(--panel-cursor, default);
        display: var(--panel-display, block);
        float: var(--panel-float, none);
        height: var(--panel-height, 100%);
        opacity: var(--panel-opacity, 1);
        overflow: var(--panel-overflow, auto);
        margin: var(--panel-margin, 0);
        padding: var(--panel-padding, 0);
        position: var(--panel-position, relative);
        text-align: var(--panel-text-align, center);
        vertical-align: var(--panel-vertical-align, initial);
        width: var(--panel-width, auto);
        z-index: var(--panel-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Disabled State */
    .iui-panel-disabled {
        opacity: var(--panel-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiPanelDefaultStyle };
