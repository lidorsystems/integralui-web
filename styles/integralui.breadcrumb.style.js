import { c as css } from '../external/lit-element.js';

const iuiBreadCrumbDefaultStyle = css`
    .iui-breadcrumb {
        background: var(--breadcrumb-background, white);
        border:  var(--breadcrumb-border, thin solid #cecece);
        border-color:  var(--breadcrumb-border-color, #cecece);
        cursor:  var(--breadcrumb-cursor, default);
        margin:  var(--breadcrumb-margin, 0);
        overflow: hidden;
        padding: 1px;
        position: relative;
        white-space: nowrap;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-breadcrumb-block {
        display: inline-block;
        margin: 0;
        padding: 0;
        vertical-align: top;
    }

    /* Disabled State */
    .iui-breadcrumb-disabled div, .iui-breadcrumb-disabled ul {
        opacity: 0.75;
        pointer-events: none;
    }

    .iui-breadcrumb-root-button {
        border: thin solid transparent;
        display: inline-block;
        margin: 0;
        padding: 0 3px;
        vertical-align: top;
    }
    .iui-breadcrumb-root-button-box {
        background: url(../icons/menu-button.ico);
        display: inline-block;
        margin: var(--breadcrumb-root-button-margin, 4px 0 0 0);
        overflow: hidden;
        padding: 0;
        width: 16px;
        height: 16px;
        vertical-align: top;
    }

    .iui-breadcrumb-item {
        display: inline-block;
        list-style-type: none;
        overflow: hidden;
        vertical-align: top;
    }
    .iui-breadcrumb-item-empty {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .iui-breadcrumb-item-content {
        border: thin solid transparent;
        display: inline-block;
        float: left;
        height: calc(100% - 8px);
        margin:  var(--breadcrumb-item-content-margin, 0);
        padding: 3px;
        position: relative;
        white-space: nowrap;
    }
    .iui-breadcrumb-item-content-hovered {
        background-color: #f5f5f5;
        border: thin solid #cecece;

        animation-name: animate-breadcrumb-item-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    .iui-breadcrumb-item-content-selected {
        background-color: #e5e5e5;
        border: thin solid #cecece;

        animation-name: animate-breadcrumb-item-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    .iui-breadcrumb-item-content-focused {
        border-color: gray;
    }
    .iui-breadcrumb-item-content:focus {
        outline: none !important;
    }
    .iui-breadcrumb-item-button {
        border-top: thin solid transparent;
        border-right: thin solid transparent;
        border-bottom: thin solid transparent;
        display: inline-block;
        float: right;
        height: calc(100% - 8px);
        margin: 0 2px 0 0;
        padding: 3px;
        vertical-align: top;
    }
    .iui-breadcrumb-item-button-first {
        border-left: thin solid transparent;
    }
    .iui-breadcrumb-item-hovered .iui-breadcrumb-item-button-first, .iui-breadcrumb-item-selected .iui-breadcrumb-item-button-first {
        border-left: thin solid #cecece;
    }
    .iui-breadcrumb-root-button-hovered, .iui-breadcrumb-item-hovered .iui-breadcrumb-item-button {
        background-color: #f5f5f5;
        border-top: thin solid #cecece;
        border-right: thin solid #cecece;
        border-bottom: thin solid #cecece;

        animation-name: animate-breadcrumb-item-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    .iui-breadcrumb-root-button-selected, .iui-breadcrumb-item-selected .iui-breadcrumb-item-button {
        background-color: #e5e5e5;
        border-top: thin solid #cecece;
        border-right: thin solid #cecece;
        border-bottom: thin solid #cecece;

        animation-name: animate-breadcrumb-item-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    .iui-breadcrumb-root-button-hovered, .iui-breadcrumb-root-button-selected {
        border: thin solid #cecece;
    }
    @keyframes animate-breadcrumb-item-enter {
        0% { background: transparent; border-color: transparent; }
        100% { background: #f5f5f5; border-color: #cecece;  }
    }

    .iui-breadcrumb-item-expand-box {
        background: url(../icons/expandbox-icons.png) no-repeat 0 -48px;
        border: thin solid transparent;
        display: inline-block;
        margin: var(--breadcrumb-item-expand-margin, 0);
        overflow: hidden;
        padding: 0;
        width: 16px;
        height: 16px;
        vertical-align: top;
    }
    .iui-breadcrumb-item-expand-box-open {
        background-position: 0 -16px;
    }
    .iui-breadcrumb-item-expand-box-open-animate {
        background-position: 0 0;
    
        animation-name: expand-box-open;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes expand-box-open {
        0% { 
            -ms-transform: rotate(0deg); /* IE 9 */
            -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */
            transform: rotate(0deg);
        }
        100% { 
            -ms-transform: rotate(90deg); /* IE 9 */
            -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
            transform: rotate(90deg);
        }
    }
    .iui-breadcrumb-item-expand-box-close {
        background-position: 0 0;
    }
    .iui-breadcrumb-item-expand-box-close-animate {
        background-position: 0 0;

        animation-name: expand-box-close;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes expand-box-close {
        0% { 
            -ms-transform: rotate(90deg); /* IE 9 */
            -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
            transform: rotate(90deg);
        }
        100% { 
            -ms-transform: rotate(0deg); /* IE 9 */
            -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */
            transform: rotate(0deg);
        }
    }
    .iui-breadcrumb-item-expand-box-load {
        background: url(../icons/load.gif) no-repeat 0 0;
    }

    /* Disabled State */
    .iui-breadcrumb-item-disabled div {
        opacity: 0.75;
        pointer-events: none;
    }
`;

export { iuiBreadCrumbDefaultStyle };
