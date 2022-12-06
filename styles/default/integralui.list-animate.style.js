import { c as css } from '../../external/lit-element.js';

export const iuiListAnimateDefaultStyle = css`
    .iui-list-animate {
        background: var(--list-animate-background, white);
        border: var(--list-animate-border, thin solid #cecece);
        border-color:  var(--list-animate-border-color, #cecece);
        border-radius: var(--list-animate-border-radius, 1px);
        border-width: var(--list-animate-border-width, thin);
        color: var(--list-animate-color, black);
        cursor: var(--list-animate-cursor, default);
        display: var(--list-animate-display, block);
        float: var(--list-animate-float, none);
        height: var(--list-animate-height, auto);
        margin: var(--list-animate-margin, 0);
        opacity: var(--list-animate-opacity, 1);
        overflow: hidden;
        padding: var(--list-animate-padding, 1px);
        position: var(--list-animate-position, relative);
        width: var(--list-animate-width, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .iui-list-animate li {
        display: block;
    }

    .iui-list-animate-block-hover, .iui-list-animate-block-select {
        background: var(--list-animate-block-background, transparent);
        border: var(--list-animate-block-border, thin solid #cecece);
        box-shadow: var(--list-animate-block-box-shadow, 2px 3px 3px #e5e5e5);
        pointer-events: none;
        position: absolute;
        z-index: 6;
    }
    .iui-list-animate-block-hover > div, .iui-list-animate-block-select > div {
        background: var(--list-animate-block-panel-background, #f5f5f5);
        pointer-events: auto;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
    }

    .iui-list-animate-block-drag {
        border: thin solid gray;
        box-shadow: var(--list-animate-block-box-shadow, 2px 3px 3px #e5e5e5);
        pointer-events: none;
        position: absolute;
        z-index: 6;
    }

    /* Disabled State */
    .iui-list-animate-disabled div, .iui-list-animate-disabled ul
    {
        opacity: var(--list-animate-disabled-opacity, 0.75);
        pointer-events: none;
    }

    .iui-list-animate-item {
        border: thin solid transparent;
        opacity: 1;
        margin-top: 0px;
        max-height: 200px;
        overflow: hidden;
        transform: translateY(30px) rotateX(90deg);
    }
    .iui-list-animate-item-added {
        border: thin solid gray;
        transform: translateY(0) rotateX(0deg);
    }
    .iui-list-animate-item-present {
        border: thin solid gray;
        transform: translateY(0) rotateX(0deg);
    }
    .iui-list-animate-item-removed {
        border: thin solid transparent;
        max-height: 0;
        transform: rotateX(90deg);
    }

    .iui-list-animate-item-drag-above {
        margin-top: 75px;
    }

    .iui-list-animate-item-drag-below {
        margin-bottom: 30px;
    }

    .iui-list-animate-item-drag-source {
        opacity: 0;
    }
`;
