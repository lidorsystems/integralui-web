import { c as css } from '../../external/lit-element.js';

const iuiTreeItemDefaultStyle = css`
    .iui-treeitem {
        background: var(--treeitem-background, transparent);
        color: var(--treeitem-color, black);
        list-style-type: none;
        overflow: hidden;
        margin: var(--treeitem-margin, 0);
        padding: var(--treeitem-padding, 0);
    }
    .iui-treeitem-block, .iui-treeitem-content-block {
        border: var(--treeitem-border, 2px solid transparent);
    }
    .iui-treeitem-hovered, .iui-treeitem-content-hovered {
        background: var(--treeitem-hovered-background, #f5f5f5);
        border: var(--treeitem-hovered-border, 2px solid #efefef);
        color: var(--treeitem-hovered-color, black);
    }
    .iui-treeitem-selected, .iui-treeitem-content-selected {
        background: var(--treeitem-selected-background, #e5e5e5);
        border: var(--treeitem-selected-border, 2px solid #dedede);
        color: var(--treeitem-selected-color, black);
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
        border: var(--treeitem-border, 2px solid transparent);
        display: block;
        margin: 0;
        padding: var(--treeitem-content-padding, 3px);
        position: relative;
        white-space: nowrap;
    }
    .iui-treeitem-content-focused {
        border-color: var(--treeitem-content-focused-border-color, gray);
    }
    .iui-treeitem-content:focus {
        outline: none !important;
    }
    .iui-treeitem-expand-box {
        background: url(../../icons/expandbox-icons.png) no-repeat 0 -48px;
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: var(--treeitem-expand-box-margin, 1px 3px 0 0);
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
        background: var(--treeitem-expand-box-load-background-image, url(../../icons/load.gif)) no-repeat 0 0 !important;
    }
    .iui-treeitem-list {
        list-style-type: none;
        margin: 0;
        padding: 0 0 0 20px;
        overflow: hidden;
    }

    /* Disabled State */
    .iui-treeitem-disabled div {
        opacity: var(--treeitem-disabled-opacity, 0.75);
        pointer-events: none;
    }

    /* CheckBox */
    .iui-treeitem-checkbox {
        background-image: url(../../icons/checkbox-unchecked.ico);
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 0 5px 0 0;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-treeitem-checkbox-checked {
        background-image: url(../../icons/checkbox-checked.ico);
    }
    .iui-treeitem-checkbox-indeterminate {
        background-image: url(../../icons/checkbox-indeterminate.ico);
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

export { iuiTreeItemDefaultStyle };
