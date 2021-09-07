import { c as css } from '../external/lit-element.js';

const iuiPopOverDefaultStyle = css`
    .iui-popover {
        animation: popover-open 0.5s 0s 1 forwards;
        background: var(--popover-background, white);
        border: var(--popover-border, thin solid #cecece);
        border-color:  var(--popover-border-color, #cecece);
        border-radius: var(--popover-border-radius, 1px);
        border-width: var(--popover-border-width, thin);
        color: var(--popover-color, #323232);
        cursor: var(--popover-cursor, default);
        display: var(--popover-display, block);
        float: var(--popover-float, none);
        height: var(--popover-height, auto);
        margin: var(--popover-margin, 0);
        opacity: var(--popover-opacity, 1);
        overflow: hidden;
        padding: var(--popover-padding, 0);
        position: var(--popover-position, absolute);
        top: -999999px;
        width: var(--popover-width, auto);
        z-index: 9999999;
        
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    @keyframes popover-open {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    .iui-popover div { /*Compatibility with Bootstrap */
        -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: content-box;    /* Firefox, other Gecko */
        box-sizing: content-box; 
    }
    .iui-popover-marker-top::before {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent #1e4691 transparent;
        position: absolute;
        top: -9px;
        left: calc(50% - 4px);
        width: 0;
        height: 0;
    }
    .iui-popover-marker-top::after {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent #fefefe transparent;
        position: absolute;
        top: -8px;
        left: calc(50% - 4px);
        width: 0;
        height: 0;
    }
    .iui-popover-marker-bottom::before {
        content: "";
        border: 4px solid #fefefe;
        border-color: #1e4691 transparent transparent transparent;
        position: absolute;
        bottom: -9px;
        left: calc(50% - 4px);
        width: 0;
        height: 0;
    }
    .iui-popover-marker-bottom::after {
        content: "";
        border: 4px solid #fefefe;
        border-color: #fefefe transparent transparent transparent;
        position: absolute;
        bottom: -8px;
        left: calc(50% - 4px);
        width: 0;
        height: 0;
    }
    .iui-popover-marker-left::before {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent #1e4691 transparent transparent;
        position: absolute;
        top: calc(50% - 4px);
        left: -9px;
    }
    .iui-popover-marker-left::after {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent #fefefe transparent transparent;
        position: absolute;
        top: calc(50% - 4px);
        left: -8px;
    }
    .iui-popover-marker-right::before {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent transparent #1e4691;
        position: absolute;
        top: calc(50% - 2px);
        right: -9px;
    }
    .iui-popover-marker-right::after {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent transparent #fefefe;
        position: absolute;
        top: calc(50% - 2px);
        right: -8px;
    }

    .iui-popover-header {
        background: #e5e5e5;
        border-bottom: thin solid #cecece;
        padding: 5px;
    }
    .iui-popover-header:hover {
        background: #efefef;
    }
    .iui-popover-title {
        display: inline-block;
        white-space: nowrap;
        vertical-align: top;
    }
    .iui-popover-close-button {
        opacity: 0.5;
    }
    .iui-popover-close-button:hover {
        opacity: 1;
    }
    .iui-popover-close-button span {
        background-image: url(../icons/close-dark.ico);
        display: inline-block;
        float: right;
        height: 16px;
        margin: 0;
        overflow: hidden;
        padding: 0;
        width: 16px;
    }
    .iui-popover-content {
        padding: 0;
    }
`;

export { iuiPopOverDefaultStyle };
