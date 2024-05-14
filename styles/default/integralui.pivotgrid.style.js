
import { c as css } from '../../external/lit-element.js';

export const iuiPivotGridDefaultStyle = css`
    .iui-pivotgrid {
        background: var(--iui-pivotgrid-background, white);
        border: var(--iui-pivotgrid-border, thin solid #cecece);
        border-color:  var(--iui-pivotgrid-border-color, #cecece);
        border-radius: var(--iui-pivotgrid-border-radius, 1px);
        border-width: var(--iui-pivotgrid-border-width, thin);
        color: var(--iui-pivotgrid-color, black);
        cursor: var(--iui-pivotgrid-cursor, default);
        display: var(--iui-pivotgrid-display, block);
        float: var(--iui-pivotgrid-float, none);
        font-size: var(--iui-pivotgrid-font-size, 1rem);
        font-style: var(--iui-pivotgrid-font-style, normal);
        height: var(--iui-pivotgrid-height, auto);
        margin: var(--iui-pivotgrid-margin, 0);
        opacity: var(--iui-pivotgrid-opacity, 1);
        overflow: hidden;
        padding: var(--iui-pivotgrid-padding, 0);
        position: var(--iui-pivotgrid-position, relative);
        text-align: var(--iui-pivotgrid-text-align, left);
        width: var(--iui-pivotgrid-width, auto);
        z-index: var(--iui-pivotgrid-z-index, auto);

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-pivotgrid table {
        color: var(--iui-pivotgrid-color, black);
    }
    .iui-pivotgrid div { /*Compatibility with Bootstrap */
        -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: content-box;    /* Firefox, other Gecko */
        box-sizing: content-box; 
    }
    .iui-pivotgrid-rtl {
        direction: rtl;
    }
    .iui-pivotgrid-block {
        background: var(--iui-pivotgrid-background, #white);
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: relative;
        z-index: 0;
    }
    .iui-pivotgrid-block-left {
        background: var(--iui-pivotgrid-block-fixed-background, #f5f5f5);
        left: 0;
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: absolute;
        top: 0;
        z-index: 4;
    }
    .iui-pivotgrid-block-right {
        background: var(--iui-pivotgrid-block-fixed-background, #f5f5f5);
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
    }
    .iui-pivotgrid-block-top {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .iui-pivotgrid-block-top-left {
        background: transparent;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 12;
    }
    .iui-pivotgrid-block-top-right {
        background: transparent;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 11;
    }
    .iui-pivotgrid-block-bottom {
        bottom: 0;
        left: 0;
        position: absolute;
        z-index: 7;
    }
    .iui-pivotgrid-block-bottom-left {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 9;
    }
    .iui-pivotgrid-block-bottom-right {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 8;
    }
    .iui-pivotgrid-block-middle {
        position: absolute;
        top: 0;
        left: 0;
    }
    .iui-pivotgrid-block-hover, .iui-pivotgrid-block-select {
        background: transparent;
        border: thin solid #cecece;
        box-shadow: 2px 3px 3px #e5e5e5;
        pointer-events: none;
        position: absolute;
        z-index: 6;
    }
    .iui-pivotgrid-block-hover > div, .iui-pivotgrid-block-select > div {
        background: #f5f5f5;
        pointer-events: auto;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
    }
    .iui-pivotgrid-block-shift-left {
        /*margin-left: 16px !important;*/
        padding-left: 15px;
    }
    .iui-pivotgrid-block-shift-right {
        margin-right: 16px;
    }
    .iui-pivotgrid-row-block {
        padding: 0 0 0 15px;
    }
    .iui-pivotgrid-row-block-rtl {
        padding: 0 15px 0 0;
    }
    .iui-pivotgrid-column-header, .iui-pivotgrid-column-footer {
        background: var(--iui-pivotgrid-column-background, #ededed);
        border: var(--iui-pivotgrid-column-border, thin solid #d5d5d5);
        border-color: var(--iui-pivotgrid-column-border-color, #d5d5d5);
        color: var(--iui-pivotgrid-column-color, black);
        margin: 0;
        padding: var(--iui-pivotgrid-column-padding, 3px 0);
        position: relative;
        vertical-align:middle;
        white-space: nowrap;
        z-index: 1;
    }
    .iui-pivotgrid-column-header-content {
        overflow: hidden;
        text-overflow: var(--iui-pivotgrid-column-header-text-overflow, ellipsis);
        white-space: var(--iui-pivotgrid-column-header-white-space, nowrap);
    }
    .iui-pivotgrid-block-top-left .iui-pivotgrid-column-header, 
    .iui-pivotgrid-block-top-left .iui-pivotgrid-column-footer, 
    .iui-pivotgrid-block-top-right .iui-pivotgrid-column-header, 
    .iui-pivotgrid-block-top-right .iui-pivotgrid-column-footer {
        background: var(--iui-pivotgrid-column-fixed-background, #dddddd);
        border: thin solid #c5c5c5;
    }
    .iui-pivotgrid-column-header-hovered {
        animation-name: var(--iui-pivotgrid-column-header-hovered-animation-name, none);
        background: var(--iui-pivotgrid-column-header-hovered-background, #d5d5d5);
        border-color: var(--iui-pivotgrid-column-header-hovered-border-color, #cecece);
        color: var(--iui-pivotgrid-column-header-hovered-color, black);
    }
    .iui-pivotgrid-column-header-selected {
        animation-name: var(--iui-pivotgrid-column-header-selected-animation-name, none);
        background: var(--iui-pivotgrid-column-header-selected-background, #bebebe);
        border-color: var(--iui-pivotgrid-column-header-selected-border-color, #aeaeae);
        color: var(--iui-pivotgrid-column-header-selected-color, black);
    }
    .iui-pivotgrid-column-header > div, .iui-pivotgrid-column-footer > div, .iui-pivotgrid-row-cell > div {
        border: 2px solid transparent;
        margin: 0;
        padding: 2px;
        vertical-align: middle;
        overflow: hidden;
        text-align: left;
        /*text-overflow: ellipsis;*/
        white-space2: nowrap;
    }
    .iui-pivotgrid-column-header-cell-content, .iui-pivotgrid-column-footer-cell-content, .iui-pivotgrid-row-cell-label {
        display: inline;
        padding: 0 3px;
        vertical-align: middle;
        cursor: default;
    }
    .iui-pivotgrid-row, .iui-pivotgrid-row-fixed {
        color: var(--iui-pivotgrid-row-color, black);
        margin: 0;
        padding: 0;
        white-space: nowrap;
        z-index: 0;
    }
    .iui-pivotgrid-row-hovered {
        animation-name: var(--iui-pivotgrid-row-hovered-animation-name, none);
        background: var(--iui-pivotgrid-row-hovered-background, #f5f5f5);
        border: var(--iui-pivotgrid-row-hovered-border, thin solid #efefef);
        border-color: var(--iui-pivotgrid-row-hovered-border-color, #efefef);
        color: var(--iui-pivotgrid-row-hovered-color, black);
    }
    .iui-pivotgrid-row-selected {
        animation-name: var(--iui-pivotgrid-row-selected-animation-name, none);
        background: var(--iui-pivotgrid-row-selected-background, #e5e5e5);
        border: var(--iui-pivotgrid-row-selected-border, thin solid #dedede);
        border-color: var(--iui-pivotgrid-row-selected-border-color, #dedede);
        color: var(--iui-pivotgrid-row-selected-color, black);
    }
    .iui-pivotgrid-row-cell {
        border-left: thin solid transparent;
        border-right: thin solid transparent;
        border-bottom: thin solid transparent;
        padding: 0;
        /*position: relative;*/
        vertical-align: middle;
    }
    .iui-pivotgrid-row-cell-content {
        border: 2px solid transparent;
        white-space: nowrap;
    }
    .iui-pivotgrid-row-cell-content:focus {
        outline: none !important;
    }
    .iui-pivotgrid-row-cell-content-focused {
        border: 2px solid gray !important;
    }
    .iui-pivotgrid-cell-empty {
        border: thin solid transparent !important;
    }
    .iui-pivotgrid-expand-box {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: var(--iui-pivotgrid-expand-box-margin, 2px 3px 0 0);
        vertical-align: top;
    }
    .iui-pivotgrid-enter .iui-pivotgrid-expand-box {
        animation-name: iui-pivotgrid-animate-expand-box-enter2;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-animate-expand-box-enter {
        0% { opacity: 0; }
        100% { opacity: 1; }
    } 
    .iui-pivotgrid-leave .iui-pivotgrid-expand-box {
        animation-name: iui-pivotgrid-animate-expand-box-leave2;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-pivotgrid-animate-expand-box-leave {
        0% { opacity: 1; }
        100% { opacity: 0; }
    } 
    .iui-pivotgrid-expand-box-load {
        background: url(../../icons/load.gif) no-repeat 0 0;
    }
    .iui-pivotgrid-expand-box-open {
        background: url(../../icons/expand.ico) no-repeat 0 0;
    }
    .iui-pivotgrid-expand-box-open-disabled {
        background: url(../../icons/expand-disabled.ico) no-repeat 0 0;
    }
    .iui-pivotgrid-expand-box-close {
        background: url(../../icons/collapse.ico) no-repeat 0 0;
    }
    .iui-pivotgrid-expand-box-close-disabled {
        background: url(../../icons/collapse-disabled.ico) no-repeat 0 0;
    }
    .iui-pivotgrid-column-reorder-mark {
        position: absolute;
        pointer-events: none;
    }
    .iui-pivotgrid-column-reorder-mark span {
        background-repeat: no-repeat;
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-pivotgrid-column-reorder-mark-left {
        background-image: url(../../icons/move-left.ico);
    }
    .iui-pivotgrid-column-reorder-mark-right {
        background-image: url(../../icons/move-right.ico);
    }
    .iui-pivotgrid-column-reorder-tooltip {
        background: -webkit-linear-gradient(white, #F1EFEC);
        background:    -moz-linear-gradient(white, #F1EFEC);
        background:     -ms-linear-gradient(white, #F1EFEC);
        background:      -o-linear-gradient(white, #F1EFEC);
        background :         linear-gradient(white, #F1EFEC);

        background-color: #F1EFEC;
        border: thin solid black;
        border-radius: 3px;
        font-size: 16px;
        margin:0;
        padding:0;
        position: absolute;
        box-shadow: 0 0 3px #888888;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 200px;
        z-index: 999;
    }
    .iui-pivotgrid-column-reorder-tooltip span {
        display: inline-block;
        padding: 3px;
        margin: 0 2px 0 0;
        vertical-align: middle;
    }
    .iui-pivotgrid-column-header-left, .iui-pivotgrid-column-footer-left {
        border-right: 1px solid #ababab;
    }
    .iui-pivotgrid-column-header-right, .iui-pivotgrid-column-footer-right {
        border-left: 1px solid #ababab;
    }
    .iui-pivotgrid-rows-left, .iui-pivotgrid-rows-left-top, .iui-pivotgrid-rows-left-bottom {
        border-right: 1px solid #ababab;
    }
    .iui-pivotgrid-rows-right, .iui-pivotgrid-rows-right-top, .iui-pivotgrid-rows-right-bottom {
        border-left: 1px solid #ababab;
    }
    .iui-pivotgrid-rows-top-block {
        background: #f6f6f6;
        border-bottom: thin solid #efefef;
    }
    .iui-pivotgrid-rows-bottom-block {
        background: #f6f6f6;
        border-top: thin solid #c5c5c5;
        z-index: 2;
    }
    .iui-pivotgrid-rows-bottom-block .iui-pivotgrid-row:last-child .iui-pivotgrid-lines-both {
        border-bottom: 0;
    }
    .iui-pivotgrid-row-cell:first-child {
        border-left: thin solid #d5d5d5;
    }
    .iui-pivotgrid-row-cell:last-child {
        border-right: thin solid #d5d5d5;
    }
    .iui-pivotgrid-lines-none {
        border-color: transparent !important;
    }
    .iui-pivotgrid-lines-horizontal:not(:last-child) {
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: #d5d5d5;
    }
    .iui-pivotgrid-lines-horizontal:last-child {
        border-left-color: transparent;
        border-bottom-color: #d5d5d5;
    }
    .iui-pivotgrid-lines-vertical {
        border-right-color: #d5d5d5;
    }
    .iui-pivotgrid-column-header .iui-pivotgrid-lines-vertical, .iui-pivotgrid-column-footer .iui-pivotgrid-lines-vertical {
        border-left-color: #d5d5d5;
        border-right-color: #d5d5d5;
    }
    .iui-pivotgrid-row:last-child .iui-pivotgrid-lines-vertical {
        border-bottom-color: #d5d5d5;
    }
    .iui-pivotgrid-lines-both {
        border-right-color: #d5d5d5;
        border-bottom-color: #d5d5d5;
    }
    .iui-pivotgrid-column-header .iui-pivotgrid-lines-both, .iui-pivotgrid-column-footer .iui-pivotgrid-lines-both {
        border-left-color: #d5d5d5;
        border-right-color: #d5d5d5;
        border-bottom-color: #d5d5d5;
    }
    
    /* Disabled State */
    .iui-pivotgrid-disabled div {
        opacity: var(--iui-pivotgrid-disabled-opacity, 0.75);
        pointer-events: none;
    }
    .iui-pivotgrid-row-disabled {
        opacity: var(--iui-pivotgrid-row-disabled-opacity, 0.6);
        pointer-events: none;
    }

    /* Animation */
    .iui-pivotgrid-column-animate {
        border: 0;
        background-color: transparent;
        box-shadow: none;
        overflow: hidden;
        position: relative;
    }
    .iui-pivotgrid-column-animate-enter {
        animation-name: pivotgrid-column-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.175s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes pivotgrid-column-animate-enter {
        0% { 	   
            border: thin solid transparent;
            box-shadow: none;
        }
        100% { 
            border: thin solid #242424;
            box-shadow: 2px 3px 3px #cecece;
        }
    }
    .iui-pivotgrid-column-animate-select-block {
        display: block;
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
    }
    .iui-pivotgrid-column-animate-select {
        background: #d5d5d5;
        display: block;
        left: 0;
        position: absolute;
        opacity: 0;
        top: 0;
    }
    .iui-pivotgrid-column-animate-select-left {
        animation-name: pivotgrid-column-animate-select-left;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes pivotgrid-column-animate-select-left {
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
    .iui-pivotgrid-column-animate-select-right {
        animation-name: pivotgrid-column-animate-select-right;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes pivotgrid-column-animate-select-right {
        0% { 	   
            width: 0;
            opacity: 0.5;
        }
        100% { 
            width: 100%;
            opacity: 0;
        }
    }


    .iui-pivotgrid-row-animate {
        border: 0;
        background-color: transparent;
        box-shadow: none;
        display: block;
        overflow: hidden;
        position: relative;
    }
    .iui-pivotgrid-row-animate-enter {
        animation-name: pivotgrid-row-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.175s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes pivotgrid-row-animate-enter {
        0% { 	   
            border: thin solid transparent;
            box-shadow: none;
        }
        100% { 
            border: thin solid #242424;
            box-shadow: 2px 3px 3px #cecece;
        }
    }
    .iui-pivotgrid-row-animate-select-block {
        display: block;
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
    }
    .iui-pivotgrid-row-animate-select {
        background: #f5f5f5;
        display: block;
        left: 0;
        position: absolute;
        opacity: 0;
        top: 0;
    }
    .iui-pivotgrid-row-animate-select-left {
        animation-name: pivotgrid-row-animate-select-left;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes pivotgrid-row-animate-select-left {
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
    .iui-pivotgrid-row-animate-select-right {
        animation-name: pivotgrid-row-animate-select-right;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes pivotgrid-row-animate-select-right {
        0% { 	   
            width: 0;
            opacity: 0.5;
        }
        100% { 
            width: 100%;
            opacity: 0;
        }
    }


    /* For Drag Drop with border to each row
    .iui-pivotgrid table {
        border-collapse: collapse;
    }
    .iui-pivotgrid-row:hover {
        border: thin solid red;
        box-shadow: 2px 3px 3px #e5e5e5;
    }
    */


   .iui-pivotgrid-handle {
        background-image: var(--iui-pivotgrid-background-image, url(../../icons/grab.ico));
        background-repeat: repeat;
        cursor: var(--iui-pivotgrid-handle-cursor, grab);
        display: block;
        height: var(--iui-pivotgrid-handle-height, 16px);
        margin: var(--iui-pivotgrid-handle-margin, 2px 0);
        padding: 0;
        vertical-align: middle;
        width: var(--iui-pivotgrid-handle-width, 16px);
    }

    /* Sorting */
    .iui-pivotgrid-column-sort-button {
        overflow: hidden;
        position: absolute;
        right: 8px;
        top: 8px;
        width: 18px;
        height: 18px;
    }
    .iui-pivotgrid-column-sort-button-up {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 1;
        transform: scale(1);
        transition: all 0.25s ease-in-out;
        width: 10px;
        height: 12px;
    }
    .iui-pivotgrid-column-sort-button-up-active {
        left: 3px;
        top: 2px;
        opacity: 1;
        transform: scale(1.25);
    }
    .iui-pivotgrid-column-sort-button-up-inactive {
        left: -9px;
        top: -9px;
        opacity: 0;
        transform: scale(0);
    }
    .iui-pivotgrid-column-sort-button-up-left {
        position: absolute;
        left: 0;
        top: 2px;
        transform: rotate(-60deg);
        width: 7px;
        height: 2px;
    }
    .iui-pivotgrid-column-sort-button-up-right {
        position: absolute;
        left: 3px;
        top: 2px;
        transform: rotate(60deg);
        width: 7px;
        height: 2px;
    }
    .iui-pivotgrid-column-sort-button-up-hline {
        position: absolute;
        left: 2px;
        top: 4px;
        width: 6px;
        height: 2px;
    }
    .iui-pivotgrid-column-sort-button-up-vline {
        position: absolute;
        left: 4px;
        top: 0;
        width: 2px;
        height: 12px;
    }

    .iui-pivotgrid-column-sort-button-down {
        position: absolute;
        right: 0;
        bottom: 0;
        opacity: 1;
        transform: scale(1);
        transition: all 0.25s ease-in-out;
        width: 10px;
        height: 12px;
    }
    .iui-pivotgrid-column-sort-button-down-active {
        right: 5px;
        bottom: 3px;
        opacity: 1;
        transform: scale(1.25);
    }
    .iui-pivotgrid-column-sort-button-down-inactive {
        right: -9px;
        bottom: -9px;
        opacity: 0;
        transform: scale(0);
    }
    .iui-pivotgrid-column-sort-button-down-left {
        position: absolute;
        right: 3px;
        bottom: 2px;
        transform: rotate(60deg);
        width: 7px;
        height: 2px;
    }
    .iui-pivotgrid-column-sort-button-down-right {
        position: absolute;
        right: 0;
        bottom: 2px;
        transform: rotate(-60deg);
        width: 7px;
        height: 2px;
    }
    .iui-pivotgrid-column-sort-button-down-hline {
        position: absolute;
        right: 2px;
        bottom: 4px;
        width: 6px;
        height: 2px;
    }
    .iui-pivotgrid-column-sort-button-down-vline {
        position: absolute;
        right: 4px;
        bottom: 0;
        width: 2px;
        height: 12px;
    }

    .iui-pivotgrid-column-sort-button-up .iui-pivotgrid-column-sort-button-up-left,
    .iui-pivotgrid-column-sort-button-up .iui-pivotgrid-column-sort-button-up-right,
    .iui-pivotgrid-column-sort-button-up .iui-pivotgrid-column-sort-button-up-hline,
    .iui-pivotgrid-column-sort-button-up .iui-pivotgrid-column-sort-button-up-vline,
    .iui-pivotgrid-column-sort-button-down .iui-pivotgrid-column-sort-button-down-left,
    .iui-pivotgrid-column-sort-button-down .iui-pivotgrid-column-sort-button-down-right,
    .iui-pivotgrid-column-sort-button-down .iui-pivotgrid-column-sort-button-down-hline,
    .iui-pivotgrid-column-sort-button-down .iui-pivotgrid-column-sort-button-down-vline
    {
        background: var(--iui-pivotgrid-column-sort-button-background, #a5a5a5);
    }
    .iui-pivotgrid-column-sort-button-up-active .iui-pivotgrid-column-sort-button-up-left,
    .iui-pivotgrid-column-sort-button-up-active .iui-pivotgrid-column-sort-button-up-right,
    .iui-pivotgrid-column-sort-button-up-active .iui-pivotgrid-column-sort-button-up-hline,
    .iui-pivotgrid-column-sort-button-up-active .iui-pivotgrid-column-sort-button-up-vline,
    .iui-pivotgrid-column-sort-button-down-active .iui-pivotgrid-column-sort-button-down-left,
    .iui-pivotgrid-column-sort-button-down-active .iui-pivotgrid-column-sort-button-down-right,
    .iui-pivotgrid-column-sort-button-down-active .iui-pivotgrid-column-sort-button-down-hline,
    .iui-pivotgrid-column-sort-button-down-active .iui-pivotgrid-column-sort-button-down-vline
    {
        background: var(--iui-pivotgrid-column-sort-button-active-background, #646464);
    }
    .iui-pivotgrid-column-sort-button-up:hover .iui-pivotgrid-column-sort-button-up-left,
    .iui-pivotgrid-column-sort-button-up:hover .iui-pivotgrid-column-sort-button-up-right,
    .iui-pivotgrid-column-sort-button-up:hover .iui-pivotgrid-column-sort-button-up-hline,
    .iui-pivotgrid-column-sort-button-up:hover .iui-pivotgrid-column-sort-button-up-vline,
    .iui-pivotgrid-column-sort-button-down:hover .iui-pivotgrid-column-sort-button-down-left,
    .iui-pivotgrid-column-sort-button-down:hover .iui-pivotgrid-column-sort-button-down-right,
    .iui-pivotgrid-column-sort-button-down:hover .iui-pivotgrid-column-sort-button-down-hline,
    .iui-pivotgrid-column-sort-button-down:hover .iui-pivotgrid-column-sort-button-down-vline 
    {
        background: var(--iui-pivotgrid-column-sort-button-hover-background, #646464);
    }
`;
