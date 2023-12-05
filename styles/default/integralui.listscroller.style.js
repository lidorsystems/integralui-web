import { c as css } from '../../external/lit-element.js';

export const iuiListScrollerDefaultStyle = css`
    .iui-listscroller {
        background: var(--iui-listscroller-background, transparent);
        border: var(--iui-listscroller-border, 0);
        border-color:  var(--iui-listscroller-border-color, transparent);
        border-radius: var(--iui-listscroller-border-radius, 1px);
        border-width: var(--iui-listscroller-border-width, thin);
        color: var(--iui-listscroller-color, black);
        cursor: var(--iui-listscroller-cursor, default);
        display: var(--iui-listscroller-display, block);
        float: var(--iui-listscroller-float, none);
        font-size: var(--iui-listscroller-font-size, 1rem);
        font-style: var(--iui-listscroller-font-style, normal);
        height: var(--iui-listscroller-height, auto);
        margin: var(--iui-listscroller-margin, 0);
        opacity: var(--iui-listscroller-opacity, 1);
        overflow: hidden;
        padding: var(--iui-listscroller-padding, 0);
        position: var(--iui-listscroller-position, relative);
        text-align: var(--iui-listscroller-text-align, left);
        width: var(--iui-listscroller-width, auto);
        z-index: var(--iui-listscroller-z-index, auto);
      
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
        background-image: url(../../icons/prev.ico);
    }
    .iui-listscroller-leftright-increase {
        background-image: url(../../icons/next.ico);
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
        background-image: url(../../icons/down.ico);
    }
    .iui-listscroller-updown-increase {
        background-image: url(../../icons/up.ico);
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

