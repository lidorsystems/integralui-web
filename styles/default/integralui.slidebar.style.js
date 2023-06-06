import { c as css } from '../../external/lit-element.js';

export const iuiSlideBarDefaultStyle = css`
    .iui-slidebar {
        background: var(--iui-slidebar-background, #efefef);
        border: var(--iui-slidebar-border, thin solid #e5e5e5);
        border-color:  var(--iui-slidebar-border-color, #e5e5e5);
        border-radius: var(--iui-slidebar-border-radius, 1px);
        border-width: var(--iui-slidebar-border-width, thin);
        color: var(--iui-slidebar-color, black);
        cursor: var(--iui-slidebar-cursor, default);
        display: var(--iui-slidebar-display, block);
        float: var(--iui-slidebar-float, none);
        height: var(--iui-slidebar-height, auto);
        margin: var(--iui-slidebar-margin, auto);
        opacity: var(--iui-slidebar-opacity, 1);
        overflow: hidden;
        padding: var(--iui-slidebar-padding, 0);
        position: var(--iui-slidebar-position, relative);
        width: var(--iui-slidebar-width, auto);
        z-index: var(--iui-slidebar-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-slidebar-container {
        margin:0;
        padding: 0;
    }
    .iui-slidebar-navigator {
        background: var(--iui-slidebar-navigator-background, #f5f5f5);
        font-size: 0;
        margin: 0 auto;
        padding: var(--iui-slidebar-navigator-padding, 7px 0);
        position: absolute;
        text-align: center;
        bottom: 0;
        width: 100%;
    }
    .iui-slidebar-navigator-button {
        background: var(--iui-slidebar-navigator-button-background, #c9c9c9);
        border: var(--iui-slidebar-navigator-button-border, 0);
        border-radius: var(--iui-slidebar-navigator-button-border-radius, 12px);
        display: inline-block;
        height: var(--iui-slidebar-navigator-button-height, 16px);
        margin: var(--iui-slidebar-navigator-button-margin, 0 3px);
        padding: var(--iui-slidebar-navigator-button-padding, 0);
        transform: scale(0.75);
        width: var(--iui-slidebar-navigator-button-width, 16px);
    }
    .iui-slidebar-navigator-button:hover {
        background: var(--iui-slidebar-navigator-button-hovered-background, #808080);
        transform: scale(1);
    }
    .iui-slidebar-navigator-button-selected {
        background: var(--iui-slidebar-navigator-button-selected-background, #242424);
        transform: scale(1);
    }
    .iui-slidebar-navigator-button-selected:hover {
        background: var(--iui-slidebar-navigator-button-selected-hovered-background, #646464);
    }
    .iui-slidebar-navigator-button-disabled {
        opacity: 0.5;
    }
    .iui-slidebar-arrow {
        background: transparent;
        position: absolute;
        top: 0;
        padding: var(--iui-slidebar-arrow-padding, 2px 5px);
        z-index: 9;
    }
    .iui-slidebar-arrow span {
        display: block;
        height: var(--iui-slidebar-arrow-button-height, 24px);
        width: var(--iui-slidebar-arrow-button-width, 24px);
    }
    .iui-slidebar-arrow-left {
        left: 0;
    }
    .iui-slidebar-arrow-left span {
        background: var(--iui-slidebar-arrow-left-button-background, url(../../icons/prev-large-24.png));
        opacity: 0.5;
    }
    .iui-slidebar-arrow-left:hover span {
        opacity: 1;
    }
    .iui-slidebar-arrow-right {
        right: 0;
    }
    .iui-slidebar-arrow-right span {
        background: var(--iui-slidebar-arrow-right-button-background, url(../../icons/next-large-24.png));
        opacity: 0.5;
    }
    .iui-slidebar-arrow-right:hover span {
        opacity: 1;
    }

    /* Disabled State */
    .iui-slidebar-disabled div {
        opacity: 0.75;
        pointer-events: none;
    }
`;

