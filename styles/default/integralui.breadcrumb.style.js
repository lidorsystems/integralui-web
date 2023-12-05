import { c as css } from '../../external/lit-element.js';

const iuiBreadCrumbDefaultStyle = css`
    .iui-breadcrumb {
        background: var(--iui-breadcrumb-background, white);
        border: var(--iui-breadcrumb-border, thin solid #cecece);
        border-color:  var(--iui-breadcrumb-border-color, #cecece);
        border-radius: var(--iui-breadcrumb-border-radius, 1px);
        border-width: var(--iui-breadcrumb-border-width, thin);
        color: var(--iui-breadcrumb-color, black);
        cursor: var(--iui-breadcrumb-cursor, default);
        display: var(--iui-breadcrumb-display, block);
        float: var(--iui-breadcrumb-float, none);
        font-size: var(--iui-breadcrumb-font-size, 1rem);
        font-style: var(--iui-breadcrumb-font-style, normal);
        height: var(--iui-breadcrumb-height, auto);
        opacity: var(--iui-breadcrumb-opacity, 1);
        overflow: hidden;
        margin: var(--iui-breadcrumb-margin, 0);
        padding: var(--iui-breadcrumb-padding, 1px);
        position: var(--iui-breadcrumb-position, relative);
        text-align: var(--iui-breadcrumb-text-align, left);
        white-space: nowrap;
        width: var(--iui-breadcrumb-width, auto);
        z-index: var(--iui-breadcrumb-z-index, auto);

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
        opacity: var(--iui-breadcrumb-disabled-opacity, 0.75);
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
        background: url(../../icons/menu-button.ico);
        display: inline-block;
        height: var(--iui-breadcrumb-root-button-height, 16px);
        margin: var(--iui-breadcrumb-root-button-margin, 4px 0 0 0);
        overflow: hidden;
        padding: var(--iui-breadcrumb-root-button-padding, 0);
        width: var(--iui-breadcrumb-root-button-width, 16px);
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
        margin:  var(--iui-breadcrumb-item-content-margin, 0);
        padding:  var(--iui-breadcrumb-item-content-padding, 3px);
        position: relative;
        white-space: nowrap;
    }
    .iui-breadcrumb-item-content-hovered {
        background:  var(--iui-breadcrumb-item-content-hovered-background, #f5f5f5);
        border:  var(--iui-breadcrumb-item-content-hovered-border, thin solid #cecece);
        border-color:  var(--iui-breadcrumb-item-content-hovered-border-color, #cecece);
    }
    .iui-breadcrumb-item-content-selected {
        background:  var(--iui-breadcrumb-item-content-hovered-background, #e5e5e5);
        border:  var(--iui-breadcrumb-item-content-hovered-border, thin solid #cecece);
        border-color:  var(--iui-breadcrumb-item-content-hovered-border-color, #cecece);
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
        background: #f5f5f5;
        border-top: thin solid #cecece;
        border-right: thin solid #cecece;
        border-bottom: thin solid #cecece;
    }
    .iui-breadcrumb-root-button-selected, .iui-breadcrumb-item-selected .iui-breadcrumb-item-button {
        background: #e5e5e5;
        border-top: thin solid #cecece;
        border-right: thin solid #cecece;
        border-bottom: thin solid #cecece;
    }
    .iui-breadcrumb-root-button-hovered {
        border:  var(--iui-breadcrumb-root-button-hovered-border, thin solid #cecece);
    }
    .iui-breadcrumb-root-button-selected {
        border:  var(--iui-breadcrumb-root-button-selected-border, thin solid #cecece);
    }

    .iui-breadcrumb-item-expand-box {
        background: url(../../icons/expandbox-icons.png) no-repeat 0 -48px;
        border: thin solid transparent;
        display: inline-block;
        margin: var(--iui-breadcrumb-item-expand-margin, 0);
        overflow: hidden;
        padding: 0;
        width: 16px;
        height: 16px;
        vertical-align: top;
    }
    .iui-breadcrumb-item-expand-box-open {
        background-position: var(--iui-breadcrumb-item-expand-box-open-background-position, 0 -16px);
    }
    .iui-breadcrumb-item-expand-box-open-animate {
        background-position: var(--iui-breadcrumb-item-expand-box-open-animate-background-position, 0 0);
   
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
        background-position: var(--iui-breadcrumb-item-expand-box-close-background-position, 0 0);
    }
    .iui-breadcrumb-item-expand-box-close-animate {
        background-position: var(--iui-breadcrumb-item-expand-box-close-animate-background-position, 0 0);

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
        background: url(../../icons/load.gif) no-repeat 0 0;
    }

    /* Disabled State */
    .iui-breadcrumb-item-disabled div {
        opacity: 0.75;
        pointer-events: none;
    }
`;

export { iuiBreadCrumbDefaultStyle };
