import { c as css } from '../../external/lit-element.js';

const iuiSlideBarDefaultStyle = css`
    .iui-slidebar {
        background: var(--slidebar-background, #f5f5f5);
        border: var(--slidebar-border, thin solid #f5f5f5);
        border-color:  var(--slidebar-border-color, #f5f5f5);
        border-radius: var(--slidebar-border-radius, 1px);
        border-width: var(--slidebar-border-width, thin);
        color: var(--slidebar-color, black);
        cursor: var(--slidebar-cursor, default);
        display: var(--slidebar-display, block);
        float: var(--slidebar-float, none);
        height: var(--slidebar-height, auto);
        margin: var(--slidebar-margin, 0);
        opacity: var(--slidebar-opacity, 1);
        overflow: hidden;
        padding: var(--slidebar-padding, 0);
        position: var(--slidebar-position, relative);
        width: var(--slidebar-width, auto);
    }
    .iui-slidebar-container {
        list-style: none;
        margin:0;
        padding: 0;
    }
    .iui-slide {
        background: white;
        float: left;
    }

    .iui-slidebar-navigator {
        font-size: 0;
        margin: 7px auto;
        padding: 0;
        text-align: center;
        bottom: 0;
        width: 100%;
    }
    .iui-slidebar-navigator-button {
        background: url(../../icons/circle-gray.ico);
        display: inline-block;
        height:16px;
        margin: 0 2px;
        padding: 0;
        width: 16px;
    }
    .iui-slidebar-navigator-button-selected {
        background: url(../../icons/circle-dark.ico);
    }
    .iui-slidebar-navigator-button-disabled {
        opacity: 0.5;
    }
    .iui-slidebar-arrow {
        background: white;
        position: absolute;
        top: 0;
        padding: 2px 5px;
    }
    .iui-slidebar-arrow span {
        display: block;
        width: 24px;
        height: 24px;
    }
    .iui-slidebar-arrow-left {
        left: 0;
    }
    .iui-slidebar-arrow-left span {
        background: url(../../icons/prev-large-24.png);
        opacity: 0.5;
    }
    .iui-slidebar-arrow-left:hover span {
        opacity: 1;
    }
    .iui-slidebar-arrow-right {
        right: 0;
    }
    .iui-slidebar-arrow-right span {
        background: url(../../icons/next-large-24.png);
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

export { iuiSlideBarDefaultStyle };
