import { c as css } from '../../external/lit-element.js';

const iuiTreeListItemDefaultStyle = css`
    .iui-treelistitem {
        background: var(--iui-treelistitem-background, transparent);
        color: var(--iui-treelistitem-color, black);
        list-style-type: none;
        overflow: hidden;
        margin: var(--iui-treelistitem-margin, 0);
        padding: var(--iui-treelistitem-padding, 7px);
        text-overflow: var(--iui-treelistitem-text-overflow, ellipsis);
        white-space: var(--iui-treelistitem-white-space, nowrap);
        width: var(--iui-treelistitem-width, auto);
    }
    .iui-treelistitem-expand-icon {
        background-image: url(../../icons/expandbox-icons.png);
        background-repeat: no-repeat;
        background-position: var(--iui-treelistitem-expand-icon-background-position, 0 0);
        display: inline-block;
        float: right;
        opacity: 0.25;
        overflow: hidden;
        padding: 0;
        margin: var(--iui-treelistitem-expand-icon-margin, 0 5px 0 0);
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-treelistitem-expand-icon-collapse {
        background-position: var(--iui-treelistitem-expand-icon-background-position, 0 -16px);
        margin: var(--iui-treelistitem-expand-icon-margin, 4px 5px 0 0);
    }
    .iui-treelistitem-expand-icon-expand {
        margin: var(--iui-treelistitem-expand-icon-margin, 4px 5px 0 0);
        transform: rotate(-90deg);
    }
    .iui-treelistitem-expand-icon-next {
        float: right;
    }
    .iui-treelistitem-hovered {
        background: var(--iui-treelistitem-hovered-background, #e5e5e5);
        color: var(--iui-treelistitem-hovered-color, black);
    }
    .iui-treelistitem-hovered .iui-treelistitem-expand-icon {
        opacity: 0.75;
    }
    .iui-treelistitem-selected {
        background: var(--iui-treelistitem-selected-background, #d9d9d9);
        color: var(--iui-treelistitem-selected-color, black);
    }
    .iui-treelistgroup {
        background: var(--iui-treelistgroup-background, #f5f5f5);
        padding: var(--iui-treelistgroup-padding, 7px);
        font-weight: var(--iui-treelistgroup-font-weight, bold);
    }
    .iui-treelistgroup div:focus, .iui-treelistitem div:focus {
        outline: none !important;
    }
    .iui-treelistgroup .iui-treelistitem-expand-icon {
        margin: var(--iui-treelistgroup-expand-icon-margin, 2px 7px 0 0);
        opacity: 0.4;
    }
    .iui-treelistgroup-hovered .iui-treelistitem-expand-icon {
        opacity: 0.75;
    }
    .iui-treelistitem-separator {
        background: #e5e5e5;
        border: 0;
        margin: 0;
        padding: 0;
        height: 1px;
    }

    .iui-treelistitem-label {
        margin: var(--iui-treelistitem-label-margin, 0);
        vertical-align: var(--iui-treelistitem-label-vertical-align, middle);
    }

    /* Disabled State */
    .iui-treelist-disabled div, .iui-treelist-disabled ul {
        opacity: var(--iui-treelist-disabled-opacity, 0.75);
        pointer-events: none;
    }

    .iui-treelist-scroll {
        opacity: 0.25;
        z-index: 3;
    }
    .iui-treelist-scroll-available {
        animation-name: treelist-scroll-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes treelist-scroll-animate-enter {
        0% { opacity: 0.25; }
        100% { opacity: 1; }
    }
    .iui-treelist-scroll-not-available {
        animation-name: treelist-scroll-animate-leave;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes treelist-scroll-animate-leave {
        0% { opacity: 1; }
        100% { opacity: 0.25; }
    }

    /* Animation */
    .iui-treelistitem-animate {
        border: 0 solid transparent;
        background-color: transparent;
        box-shadow: none;
        list-style-type: none;
        overflow: hidden;
        position: relative;
    }
    .iui-treelistitem-animate-enter {
        animation-name: listitem-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.175s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes listitem-animate-enter {
        0% {       
            border: thin solid transparent;
            box-shadow: none;
        }
        100% { 
            border: thin solid #242424;
            box-shadow: 2px 3px 3px #cecece;
        }
    }
    .iui-treelistitem-animate-select-block {
        display: block;
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
    }
    .iui-treelistitem-animate-select {
        background: var(--iui-treelistitem-animate-select-background, #f5f5f5);
        display: block;
        left: 0;
        position: absolute;
        opacity: 0;
        top: 0;
    }
    .iui-treelistitem-animate-select-left {
        animation-name: listitem-animate-select-left;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes listitem-animate-select-left {
        0% {       
            left: 100%;
            opacity: 0.5;
            width: 0;
        }
        100% { 
            left: 0;
            opacity: 0;
            width: 100%;
        }
    }
    .iui-treelistitem-animate-select-right {
        animation-name: listitem-animate-select-right;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes listitem-animate-select-right {
        0% {       
            width: 0;
            opacity: 0.5;
        }
        100% { 
            width: 100%;
            opacity: 0;
        }
    }
`;

export { iuiTreeListItemDefaultStyle };
