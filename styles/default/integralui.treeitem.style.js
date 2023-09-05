import { c as css } from '../../external/lit-element.js';

export const iuiTreeItemDefaultStyle = css`
    .iui-treeitem {
        background: var(--iui-treeitem-background, transparent);
        color: var(--iui-treeitem-color, black);
        list-style-type: none;
        overflow: hidden;
        margin: var(--iui-treeitem-margin, 0);
        padding: var(--iui-treeitem-padding, 0);
    }
    .iui-treeitem-block {
        border: var(--iui-treeitem-border, 2px solid transparent);
        border-color: var(--iui-treeitem-border-color, transparent);
        border-width: var(--iui-treeitem-border-width, 2px);
    }
    .iui-treeitem-hovered {
        background: var(--iui-treeitem-hovered-background, #f5f5f5);
        border-color: var(--iui-treeitem-hovered-border-color, #efefef);
        color: var(--iui-treeitem-hovered-color, black);
    }
    .iui-treeitem-selected {
        background: var(--iui-treeitem-selected-background, #e5e5e5);
        border-color: var(--iui-treeitem-selected-border-color, #dedede);
        color: var(--iui-treeitem-selected-color, black);
    }
    .iui-treeitem-content-block {
        border: var(--iui-treeitem-content-border, 2px solid transparent);
        border-color: var(--iui-treeitem-content-border-color, transparent);
        border-width: var(--iui-treeitem-content-border-width, 2px);
    }
    .iui-treeitem-content-hovered {
        background: var(--iui-treeitem-content-hovered-background, #f5f5f5);
        border-color: var(--iui-treeitem-content-hovered-border-color, #efefef);
        color: var(--iui-treeitem-content-hovered-color, black);
    }
    .iui-treeitem-content-selected {
        background: var(--iui-treeitem-content-selected-background, #e5e5e5);
        border-color: var(--iui-treeitem-content-selected-border-color, #dedede);
        color: var(--iui-treeitem-content-selected-color, black);
    }
    .iui-treeitem:focus {
        outline: none !important;
    }
    .iui-treeitem-empty {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .iui-treeitem-content {
        border: var(--iui-treeitem-content-border, 2px solid transparent);
        display: block;
        margin: 0;
        padding: var(--iui-treeitem-content-padding, 3px);
        position: relative;
        white-space: nowrap;
    }
    .iui-treeitem-content-focused {
        border-color: var(--iui-treeitem-content-focused-border-color, gray);
    }
    .iui-treeitem-content:focus {
        outline: none !important;
    }
    .iui-treeitem-content-template {
        display: var(--iui-treeitem-content-template-display, inline-block);
        vertical-align: var(--iui-treeitem-content-template-vertical-align, middle);
    }
    .iui-treeitem-expand-box {
        background: url(../../icons/expandbox-icons.png) no-repeat 0 -48px;
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: var(--iui-treeitem-expand-box-margin, 1px 3px 0 0);
        width: 16px;
        height: 16px;
        vertical-align: top;
    }
    .iui-treeview-enter .iui-treeitem-expand-box-general {
        animation-name: iui-treeview-animate-expand-box-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treeview-animate-expand-box-enter {
        0% { opacity: 0; }
        100% { opacity: 1; }
    } 
    .iui-treeview-leave .iui-treeitem-expand-box-general {
        animation-name: iui-treeview-animate-expand-box-leave;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treeview-animate-expand-box-leave {
        0% { opacity: 1; }
        100% { opacity: 0; }
    } 
    .iui-treeitem-expand-box-open {
        background-position: 0 -16px;
    }
    .iui-treeitem-expand-box-open-animate {
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
    .iui-treeitem-expand-box-close {
        background-position: 0 0;
    }
    .iui-treeitem-expand-box-close-animate {
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
    .iui-treeitem-expand-box-load {
        background: var(--iui-treeitem-expand-box-load-background-image, url(../../icons/load.gif)) no-repeat 0 0 !important;
    }
    .iui-treeitem-list {
        list-style-type: none;
        margin: 0;
        padding: 0 0 0 20px;
        overflow: hidden;
    }

    /* Disabled State */
    .iui-treeitem-disabled div {
        opacity: var(--iui-treeitem-disabled-opacity, 0.75);
        pointer-events: none;
    }

    /* CheckBox */
    .iui-treeitem-checkbox {
        background-image: var(--iui-treeitem-checkbox-background-image, url(../../icons/checkbox-unchecked.ico));
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: var(--iui-treeitem-checkbox-padding, 0);
        margin: var(--iui-treeitem-checkbox-margin, 0 5px 0 0);
        width: 16px;
        height: 16px;
        vertical-align: var(--iui-treeitem-checkbox-vertical-align, middle);
    }
    .iui-treeitem-checkbox-checked {
        background-image: var(--iui-treeitem-checkbox-checked-background-image, url(../../icons/checkbox-checked.ico));
    }
    .iui-treeitem-checkbox-indeterminate {
        background-image: var(--iui-treeitem-checkbox-indeterminate-background-image, url(../../icons/checkbox-indeterminate.ico));
    }

    /* Animations */
    .iui-treeitem-animate {
        border: 0 solid transparent;
        background-color: transparent;
        box-shadow: none;
        list-style-type: none;
        position: relative;
    }
`;