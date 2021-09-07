import { c as css } from '../external/lit-element.js';

const iuiListScrollerDefaultStyle = css`
    .iui-listscroller {
        background: var(--listscroller-background, transparent);
        border: var(--listscroller-border, 0);
        border-color:  var(--listscroller-border-color, transparent);
        border-radius: var(--listscroller-border-radius, 1px);
        border-width: var(--listscroller-border-width, thin);
        color: var(--listscroller-color, black);
        cursor: var(--listscroller-cursor, default);
        display: var(--listscroller-display, block);
        float: var(--listscroller-float, none);
        height: var(--listscroller-height, auto);
        margin: var(--listscroller-margin, 0);
        opacity: var(--listscroller-opacity, 1);
        overflow: hidden;
        padding: var(--listscroller-padding, 0);
        position: var(--listscroller-position, relative);
        width: var(--listscroller-width, auto);
        
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-listscroller ul {
        list-style-type: none;
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: absolute;
        white-space: nowrap;
    }
    .iui-listscroller-item {
        border: thin solid #cecece;
        display: inline-block;
        margin-right: -4px;
    }
    .iui-listscroller-item-content {
        padding: 5px;
    }

    /* DisplayMode - LeftRight */
    .iui-listscroller-leftright-buttons {
        background: #f5f5f5;
        border: thin solid #cecece;
        display: inline-block;
    }
    .iui-listscroller-leftright-buttons:hover {
        background: #e5e5e5;
        border: thin solid #bebebe;
    }
    .iui-listscroller-leftright-buttons span {
        display: block;
        padding: 0;
        margin: 0;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-listscroller-leftright-decrease {
        background-image: url(../icons/prev.ico);
    }
    .iui-listscroller-leftright-increase {
        background-image: url(../icons/next.ico);
    }
    .iui-listscroller-leftright-value {
        border: thin solid #cecece;
        display: inline-block;
        margin: 0 2px;
        text-align: center;
    }

    /* DisplayMode - UpDown */
    .iui-listscroller-updown-buttons {
        background: #f5f5f5;
        border: thin solid #cecece;
        display: block;
    }
    .iui-listscroller-updown-buttons:hover {
        background: #e5e5e5;
        border: thin solid #bebebe;
    }
    .iui-listscroller-updown-buttons span {
        display: block;
        padding: 0;
        margin: 0;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-listscroller-updown-decrease {
        background-image: url(../icons/down.ico);
    }
    .iui-listscroller-updown-increase {
        background-image: url(../icons/up.ico);
    }

    /* Item */
    .iui-listscroller-item {
        border: thin solid transparent;
        color: black;
        list-style-type: none;
        overflow: hidden;
    }
    .iui-listscroller-item-hovered {
        background-color: #f5f5f5;
        border: thin solid #efefef;
    }
    .iui-listscroller-item-selected {
        background-color: #e5e5e5;
        border: thin solid #dedede;
    }
    .iui-listscroller-item-focused {
        border-color: gray;
    }
    .iui-listscroller-item:focus {
        outline: none !important;
    }
    .iui-listscroller-item-content {
        padding: 2px;
    }
    .iui-listscroller-item-content-hovered {
    }
    .iui-listscroller-item-content-selected {
    }
    .iui-listscroller-item-content-focused {
        border-color: gray;
    }
    .iui-listscroller-item-content:focus {
        outline: none !important;
    }

    /* Disabled State */
    .iui-listscroller-disabled div {
        opacity: 0.75;
        pointer-events: none;
    }
`;

export { iuiListScrollerDefaultStyle };
