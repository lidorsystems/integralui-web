import { c as css } from '../../external/lit-element.js';

export const iuiListItemDefaultStyle = css`
    .iui-listgroup {
        background: var(--iui-listgroup-background, transparent);
        border: var(--iui-listgroup-border, 1px solid transparent);
        border-color:  var(--iui-listgroup-border-color, transparent transparent #e5e5e5 transparent);
        border-radius: var(--iui-listgroup-border-radius, 1px);
        border-width: var(--iui-listgroup-border-width, 1px);
        color: var(--iui-listgroup-color, black);
        cursor: var(--iui-listgroup-cursor, default);
        display: var(--iui-listgroup-display, block);
        font-size: var(--iui-listgroup-font-size, 1rem);
        font-style: var(--iui-listgroup-font-style, normal);
        font-weight: var(--iui-listgroup-font-weight, bold);
        height: var(--iui-listgroup-height, auto);
        list-style-type: none;
        margin: var(--iui-listgroup-margin, 0);
        opacity: var(--iui-listgroup-opacity, 1);
        overflow: hidden;
        padding: var(--iui-listgroup-padding, 1px);
        position: var(--iui-listgroup-position, relative);
        text-align: var(--iui-listgroup-text-align, left);
        white-space: var(--iui-listgroup-white-space, nowrap);
        width: var(--iui-listgroup-width, auto);
        z-index: var(--iui-listgroup-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-listgroup-general {
        list-style-type: none;
    }
    .iui-listgroup-focused {
        border: var(--iui-listgroup-focused-border, 2px solid gray);
    }
    .iui-listgroup:focus {
        outline: none !important;
    }
    .iui-listgroup-content-block {
        overflow: var(--iui-listgroup-content-overflow, hidden);
        text-overflow: var(--iui-listgroup-content-text-overflow, ellipsis);
    }
    .iui-listgroup-content {
        border: var(--iui-listgroup-border, 2px solid transparent);
        padding: var(--iui-listgroup-content-padding, 3px);
    }

    .iui-listgroup-expand-box {
        background: url(../../icons/expandbox-icons.png) no-repeat 0 0;
        display: inline-block;
        height: 16px;
        margin: var(--iui-listgroup-expand-box-margin, 1px 3px 0 0);
        overflow: hidden;
        padding: 0;
        transition: transform 0.25s;
        vertical-align: top;
        width: 16px;
    }
    .iui-listgroup-expand-box-open {
        transform: rotate(90deg);
    }
    .iui-listgroup-expand-box-close {
        transform: rotate(0deg);
    }

    /* Disabled State */
    .iui-listgroup-disabled div {
        opacity: var(--iui-listgroup-disabled-opacity, 0.75);
        pointer-events: none;
    }

    
    .iui-listitem {
        background: var(--iui-listitem-background, transparent);
        border: var(--iui-listitem-border, 2px solid transparent);
        border-color:  var(--iui-listitem-border-color, transparent);
        border-radius: var(--iui-listitem-border-radius, 1px);
        border-width: var(--iui-listitem-border-width, 2px);
        color: var(--iui-listitem-color, black);
        cursor: var(--iui-listitem-cursor, default);
        display: var(--iui-listitem-display, block);
        font-size: var(--iui-listitem-font-size, 1rem);
        font-style: var(--iui-listitem-font-style, normal);
        font-weight: var(--iui-listitem-font-weight, normal);
        height: var(--iui-listitem-height, auto);
        list-style-type: none;
        margin: var(--iui-listitem-margin, 0);
        opacity: var(--iui-listitem-opacity, 1);
        overflow: hidden;
        padding: var(--iui-listitem-padding, 0);
        position: var(--iui-listitem-position, relative);
        text-align: var(--iui-listitem-text-align, left);
        white-space: var(--iui-listitem-white-space, nowrap);
        width: var(--iui-listitem-width, auto);
    }
    .iui-listitem-general {
        list-style-type: none;
    }
    .iui-item-drag {
        height: 0;
        pointer-events: none;
    }
    .iui-item-drag-above, .iui-item-drag-below {
        border: thin dotted #cecece;
        height: 38px;
    }
    .iui-item-drag-open {
        animation-name: drag-open;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.35s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 

    }
    @keyframes drag-open {
        0% { max-height: 0; border-width: 0; opacity: 0; }
        50% { max-height: 0; border-width: 0; opacity: 0; }
        100% { max-height: 38px; border-width: 1; opacity: 1; }
    }
    .iui-item-drag-close {
        animation-name: drag-close;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.35s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 

    }
    @keyframes drag-close {
        0% { max-height: 38px; border-width: 1; opacity: 1; }
        50% { max-height: 38px; border-width: 1; opacity: 1; }
        100% { max-height: 0; border-width: 0; opacity: 0; }
    }
    .iui-listitem-hovered {
        background: var(--iui-listitem-hovered-background, #f5f5f5);
        border: var(--iui-listitem-hovered-border, 2px solid #efefef);
        border-color: var(--iui-listitem-hovered-border-color, #efefef);
        border-width: var(--iui-listitem-hovered-border-width, 2px);
        color: var(--iui-listitem-hovered-color, black);
        font-weight: var(--iui-listitem-hovered-font-weight, normal);
    }
    .iui-listitem-selected {
        background: var(--iui-listitem-selected-background, #e5e5e5);
        border: var(--iui-listitem-selected-border, 2px solid #dedede);
        border-color: var(--iui-listitem-selected-border-color, #dedede);
        border-width: var(--iui-listitem-selected-border-width, 2px);
        color: var(--iui-listitem-selected-color, black);
        font-weight: var(--iui-listitem-selected-font-weight, normal);
        z-index: 2;
    }
    .iui-listitem-focused {
        border: var(--iui-listitem-focused-border, 2px solid gray);
    }
    .iui-listitem:focus {
        outline: none !important;
    }
    .iui-listitem-content-template {
        display: var(--iui-listitem-content-template-display, inline-block);
        vertical-align: var(--iui-listitem-content-template-vertical-align, middle);
        width: var(--iui-listitem-content-template-width, 100%);
    }
    .iui-listitem-content-both {
        width: var(--iui-listitem-content-template-width, calc(100% - 44px));
    }
   .iui-listitem-content-checkbox {
        width: var(--iui-listitem-content-template-width, calc(100% - 21px));
    }
    .iui-listitem-content-radio {
        width: var(--iui-listitem-content-template-width, calc(100% - 23px));
    }

    .iui-listitem-content-block {
        overflow: var(--iui-listitem-content-overflow, hidden);
        text-overflow: var(--iui-listitem-content-text-overflow, ellipsis);
    }
    .iui-listitem-content {
        border: var(--iui-listitem-border, 2px solid transparent);
        height: var(--iui-listitem-content-height, calc(100% - 10px));
        padding: var(--iui-listitem-content-padding, 3px);
        width: var(--iui-listitem-content-width, calc(100% - 10px));
    }
    .iui-listitem-content-hovered {
    }
    .iui-listitem-content-selected {
    }
    .iui-listitem-content-focused {
        border-color: gray;
    }
    .iui-listitem-content:focus {
        outline: none !important;
    }
    .iui-listitem-separator {
        background: var(--iui-listitem-separator-background, #e5e5e5);
        border: 0;
        height: var(--iui-listitem-separator-height, 1px);
        margin: var(--iui-listitem-separator-margin, 5px);
        padding: 0;
    }

    /* CheckBox */
    .iui-listitem-checkbox {
        background-image: var(--iui-listitem-checkbox-background-image, url(../../icons/checkbox-unchecked.ico));
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: var(--iui-listitem-checkbox-padding, 0);
        margin: var(--iui-listitem-checkbox-margin, 0);
        width: 16px;
        height: 16px;
        vertical-align: var(--iui-listitem-checkbox-vertical-align, middle);
    }
    .iui-listitem-checkbox-checked {
        background-image: var(--iui-listitem-checkbox-checked-background-image, url(../../icons/checkbox-checked.ico));
    }
    .iui-listitem-checkbox-indeterminate {
        background-image: var(--iui-listitem-checkbox-indeterminate-background-image, url(../../icons/checkbox-indeterminate.ico));
    }

    /* Disabled State */
    .iui-listitem-disabled div {
        opacity: var(--iui-listitem-disabled-opacity, 0.75);
        pointer-events: none;
    }

    /* Animation */
    .iui-listitem-animate {
        border: var(--iui-listitem-animate-border, 0);
        background-color: transparent;
        box-shadow: none;
        list-style-type: none;
        overflow: hidden;
        padding: 0;
        position: relative;
    }
    .iui-listitem-animate-enter {
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
    .iui-listitem-animate-select-block {
        display: block;
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
    }
    .iui-listitem-animate-select {
        background: var(--iui-listitem-animate-select-background, #f5f5f5);
        display: block;
        left: 0;
        position: absolute;
        opacity: 0;
        top: 0;
    }
    .iui-listitem-animate-select-left {
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
    .iui-listitem-animate-select-right {
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
