
import { c as css } from '../../external/lit-element.js';

export const iuiGridDefaultStyle = css`
    .iui-grid {
        background: var(--iui-grid-background, white);
        border: var(--iui-grid-border, thin solid #cecece);
        border-color:  var(--iui-grid-border-color, #cecece);
        border-radius: var(--iui-grid-border-radius, 1px);
        border-width: var(--iui-grid-border-width, thin);
        color: var(--iui-grid-color, black);
        cursor: var(--iui-grid-cursor, default);
        display: var(--iui-grid-display, block);
        float: var(--iui-grid-float, none);
        font-size: var(--iui-grid-font-size, 1rem);
        font-style: var(--iui-grid-font-style, normal);
        height: var(--iui-grid-height, auto);
        margin: var(--iui-grid-margin, 0);
        opacity: var(--iui-grid-opacity, 1);
        overflow: hidden;
        padding: var(--iui-grid-padding, 0);
        position: var(--iui-grid-position, relative);
        text-align: var(--iui-grid-text-align, left);
        width: var(--iui-grid-width, auto);
        z-index: var(--iui-grid-z-index, auto);
      
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-grid table {
        color: var(--iui-grid-color, black);
    }
    .iui-grid div { /*Compatibility with Bootstrap */
        -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: content-box;    /* Firefox, other Gecko */
        box-sizing: content-box; 
    }
    .iui-grid-rtl {
        direction: rtl;
    }
    .iui-grid-block {
        background: var(--iui-grid-background, #white);
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: relative;
        z-index: 0;
    }
    .iui-grid-block-left {
        background: var(--iui-grid-block-fixed-background, #f5f5f5);
        left: 0;
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: absolute;
        top: 0;
        z-index: 4;
    }
    .iui-grid-block-right {
        background: var(--iui-grid-block-fixed-background, #f5f5f5);
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
    }
    .iui-grid-block-top {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .iui-grid-block-top-left {
        background: transparent;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 12;
    }
    .iui-grid-block-top-right {
        background: transparent;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 11;
    }
    .iui-grid-block-filter {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .iui-grid-block-filter-left {
        background: transparent;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 12;
    }
    .iui-grid-block-filter-right {
        background: transparent;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 11;
    }
    .iui-grid-block-bottom {
        bottom: 0;
        left: 0;
        position: absolute;
        z-index: 7;
    }
    .iui-grid-block-bottom-left {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 9;
    }
    .iui-grid-block-bottom-right {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 8;
    }
    .iui-grid-block-middle {
        position: absolute;
        top: 0;
        left: 0;
    }
    .iui-grid-block-hover, .iui-grid-block-select {
        background: transparent;
        border: thin solid #cecece;
        box-shadow: 2px 3px 3px #e5e5e5;
        pointer-events: none;
        position: absolute;
        z-index: 6;
    }
    .iui-grid-block-hover > div, .iui-grid-block-select > div {
        background: #f5f5f5;
        pointer-events: auto;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
    }
    .iui-grid-block-shift-left {
        /*margin-left: 16px !important;*/
        padding-left: 15px;
    }
    .iui-grid-block-shift-right {
        margin-right: 16px;
    }
    .iui-grid-filter-block-top {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .iui-grid-row-block {
        padding: 0 0 0 15px;
    }
    .iui-grid-row-block-rtl {
        padding: 0 15px 0 0;
    }
    .iui-grid-column-header, .iui-grid-column-filter, .iui-grid-column-footer {
        background: var(--iui-grid-column-background, #ededed);
        border: var(--iui-grid-column-border, thin solid #d5d5d5);
        border-color: var(--iui-grid-column-border-color, #d5d5d5);
        color: var(--iui-grid-column-color, black);
        margin: 0;
        padding: var(--iui-grid-column-padding, 3px 0);
        position: relative;
        vertical-align:middle;
        white-space: nowrap;
        z-index: 1;
    }
    .iui-grid-column-header-content {
        overflow: hidden;
        text-overflow: var(--iui-grid-column-header-text-overflow, ellipsis);
        white-space: var(--iui-grid-column-header-white-space, nowrap);
    }
    .iui-grid-column-filter  {
        background: var(--iui-grid-column-filter-background, transparent);
        padding: var(--iui-grid-column-filter-padding, 0px 0);
    }
    .iui-grid-block-top-left .iui-grid-column-header, 
    .iui-grid-block-top-left .iui-grid-column-filter, 
    .iui-grid-block-top-left .iui-grid-column-footer, 
    .iui-grid-block-top-right .iui-grid-column-header, 
    .iui-grid-block-top-right .iui-grid-column-filter,
    .iui-grid-block-top-right .iui-grid-column-footer {
        background: var(--iui-grid-column-fixed-background, #dddddd);
        border: thin solid #c5c5c5;
    }
    .iui-grid-block-top-left .iui-grid-column-filter, .iui-grid-block-top-right .iui-grid-column-filter  {
        background: var(--iui-grid-column-filter-fixed-background, transparent);
    }
    .iui-grid-column-header-hovered {
        animation-name: var(--iui-grid-column-header-hovered-animation-name, none);
        background: var(--iui-grid-column-header-hovered-background, #d5d5d5);
        border-color: var(--iui-grid-column-header-hovered-border-color, #cecece);
        color: var(--iui-grid-column-header-hovered-color, black);
    }
    .iui-grid-column-header-selected {
        animation-name: var(--iui-grid-column-header-selected-animation-name, none);
        background: var(--iui-grid-column-header-selected-background, #bebebe);
        border-color: var(--iui-grid-column-header-selected-border-color, #aeaeae);
        color: var(--iui-grid-column-header-selected-color, black);
    }
    .iui-grid-column-header > div, .iui-grid-column-filter > div, .iui-grid-column-footer > div {
        border: 2px solid transparent;
        margin: 0;
        padding: 2px;
        vertical-align: middle;
        overflow: hidden;
        text-align: left;
        /*text-overflow: ellipsis;*/
        white-space2: nowrap;
    }
    .iui-grid-column-header-cell-content, .iui-grid-column-filter-cell-content, .iui-grid-column-footer-cell-content, .iui-grid-row-cell-label {
        display: inline;
        padding: 0 3px;
        vertical-align: middle;
        cursor: default;
    }
    .iui-grid-row, .iui-grid-row-fixed {
        color: var(--iui-grid-row-color, black);
        margin: 0;
        padding: 0;
        white-space: nowrap;
        z-index: 0;
    }
    .iui-grid-row-hovered {
        animation-name: var(--iui-grid-row-hovered-animation-name, none);
        background: var(--iui-grid-row-hovered-background, #f5f5f5);
        border: var(--iui-grid-row-hovered-border, thin solid #efefef);
        border-color: var(--iui-grid-row-hovered-border-color, #efefef);
        color: var(--iui-grid-row-hovered-color, black);
    }
    .iui-grid-row-selected {
        animation-name: var(--iui-grid-row-selected-animation-name, none);
        background: var(--iui-grid-row-selected-background, #e5e5e5);
        border: var(--iui-grid-row-selected-border, thin solid #dedede);
        border-color: var(--iui-grid-row-selected-border-color, #dedede);
        color: var(--iui-grid-row-selected-color, black);
    }
    .iui-grid-row-cell {
        border-left: thin solid transparent;
        border-right: thin solid transparent;
        border-bottom: thin solid transparent;
        padding: 0;
        /*position: relative;*/
        vertical-align: middle;
    }
    .iui-grid-row-cell-content {
        border: 2px solid transparent;
        border-color: var(--iui-grid-row-cell-content-border-color, transparent);
        margin: 0;
        padding: 2px;
        vertical-align: middle;
        overflow: hidden;
        text-align: left;
        /*text-overflow: ellipsis;*/
        white-space: nowrap;
    }
    .iui-grid-row-cell-content:focus {
        outline: none !important;
    }
    .iui-grid-row-cell-content-focused {
        /*border: 2px solid gray !important;*/
        border: 2px solid gray;
    }
    .iui-grid-row-cell-content-invalid {
        border-color: var(--iui-grid-row-cell-content-invalid-border-color, #c45151);
    }
    .iui-grid-cell-empty {
        border: thin solid transparent !important;
    }
    .iui-grid-expand-box {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: var(--iui-grid-expand-box-margin, 2px 3px 0 0);
        vertical-align: top;
    }
    .iui-grid-enter .iui-grid-expand-box {
        animation-name: iui-grid-animate-expand-box-enter2;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-grid-animate-expand-box-enter {
        0% { opacity: 0; }
        100% { opacity: 1; }
    } 
    .iui-grid-leave .iui-grid-expand-box {
        animation-name: iui-grid-animate-expand-box-leave2;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-grid-animate-expand-box-leave {
        0% { opacity: 1; }
        100% { opacity: 0; }
    } 
    .iui-grid-expand-box-load {
        background: url(../../icons/load.gif) no-repeat 0 0;
    }
    .iui-grid-expand-box-open {
        background: url(../../icons/expand.ico) no-repeat 0 0;
    }
    .iui-grid-expand-box-open-disabled {
        background: url(../../icons/expand-disabled.ico) no-repeat 0 0;
    }
    .iui-grid-expand-box-close {
        background: url(../../icons/collapse.ico) no-repeat 0 0;
    }
    .iui-grid-expand-box-close-disabled {
        background: url(../../icons/collapse-disabled.ico) no-repeat 0 0;
    }
    .iui-grid-column-reorder-mark {
        position: absolute;
        pointer-events: none;
    }
    .iui-grid-column-reorder-mark span {
        background-repeat: no-repeat;
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-grid-column-reorder-mark-left {
        background-image: url(../../icons/move-left.ico);
    }
    .iui-grid-column-reorder-mark-right {
        background-image: url(../../icons/move-right.ico);
    }
    .iui-grid-column-reorder-tooltip {
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
    .iui-grid-column-reorder-tooltip span {
        display: inline-block;
        padding: 3px;
        margin: 0 2px 0 0;
        vertical-align: middle;
    }
    .iui-grid-column-header-left, .iui-grid-column-filter-left, .iui-grid-column-footer-left {
        border-right: 1px solid #ababab;
    }
    .iui-grid-column-header-right, .iui-grid-column-filter-right, .iui-grid-column-footer-right {
        border-left: 1px solid #ababab;
    }
    .iui-grid-rows-left, .iui-grid-rows-left-top, .iui-grid-rows-left-bottom {
        border-right: 1px solid #ababab;
    }
    .iui-grid-rows-right, .iui-grid-rows-right-top, .iui-grid-rows-right-bottom {
        border-left: 1px solid #ababab;
    }
    .iui-grid-rows-top-block {
        background: #f6f6f6;
        border-bottom: thin solid #efefef;
    }
    .iui-grid-rows-bottom-block {
        background: #f6f6f6;
        border-top: thin solid #c5c5c5;
        z-index: 2;
    }
    .iui-grid-rows-bottom-block .iui-grid-row:last-child .iui-grid-lines-both {
        border-bottom: 0;
    }
    .iui-grid-row-cell:first-child {
        border-left: thin solid #d5d5d5;
    }
    .iui-grid-row-cell:last-child {
        border-right: thin solid #d5d5d5;
    }
    .iui-grid-lines-none {
        border-color: transparent !important;
    }
    .iui-grid-lines-horizontal:not(:last-child) {
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: #d5d5d5;
    }
    .iui-grid-lines-horizontal:last-child {
        border-left-color: transparent;
        border-bottom-color: #d5d5d5;
    }
    .iui-grid-lines-vertical {
        border-right-color: #d5d5d5;
    }
    .iui-grid-column-header .iui-grid-lines-vertical, .iui-grid-column-filter .iui-grid-lines-vertical, .iui-grid-column-footer .iui-grid-lines-vertical {
        border-left-color: #d5d5d5;
        border-right-color: #d5d5d5;
    }
    .iui-grid-row:last-child .iui-grid-lines-vertical {
        border-bottom-color: #d5d5d5;
    }
    .iui-grid-lines-both {
        border-right-color: #d5d5d5;
        border-bottom-color: #d5d5d5;
    }
    .iui-grid-column-header .iui-grid-lines-both, .iui-grid-column-filter .iui-grid-lines-both, .iui-grid-column-footer .iui-grid-lines-both {
        border-left-color: #d5d5d5;
        border-right-color: #d5d5d5;
        border-bottom-color: #d5d5d5;
    }

    /* Grouping */
    .iui-grid-grouping-panel {
        background: var(--iui-grid-grouping-panel-background, #f0f0f0);
        border: var(--iui-grid-grouping-panel-border, 0);
        border-bottom: var(--iui-grid-grouping-panel-border-bottom, thin solid #d5d5d5);
        color: var(--iui-grid-grouping-panel-color, black);
        margin: 0;
        padding: var(--iui-grid-grouping-panel-padding, 3px);
        position: absolute;
        top: 0;
        white-space: nowrap;
        width: 100%;
    }
    .iui-grid-grouping-panel-add-buttton {
        background: var(--iui-grid-grouping-panel-add-button-background, transparent);
        border: var(--iui-grid-grouping-panel-add-button-border, thin solid transparent);
        border-radius: var(--iui-grid-grouping-panel-add-button-border-radius, 3px);
        display: inline-block;
        height: 24px;
        margin: 2px 0 2px -4px;
        position: relative;
        vertical-align: top;
        width: 24px;
    }
    .iui-grid-grouping-panel-add-buttton:hover {
        background: var(--iui-grid-grouping-panel-add-button-hover-background, #e9e9e9);
        border-color: var(--iui-grid-grouping-panel-add-button-hover-border-color, #d9d9d9);
    }
    .iui-grid-grouping-panel-line-horizontal {
        background: var(--iui-grid-grouping-panel-add-button-line-background, black);
        position: absolute;
        top: 11px;
        left: 6px;
        width: 12px;
        height: 2px;
    }
    .iui-grid-grouping-panel-line-vertical {
        background: var(--iui-grid-grouping-panel-add-button-line-background, black);
        position: absolute;
        top: 6px;
        left: 11px;
        width: 2px;
        height: 12px;
    }
    .iui-grid-grouping-panel-item {
        background: var(--iui-grid-grouping-panel-item-background, #dedede);
        border: var(--iui-grid-grouping-panel-item-border, thin solid #bebebe);
        display: inline-block;
        border-radius: var(--iui-grid-grouping-panel-item-border-radius, 3px);
        margin: var(--iui-grid-grouping-panel-item-margin, 2px 3px);
        /*overflow: hidden;*/
        padding: var(--iui-grid-grouping-panel-item-padding, 2px 5px);
        position: relative;
    }
    .iui-grid-grouping-panel-item:hover {
        background: var(--iui-grid-grouping-panel-item-hover-background, #e9e9e9);
        border-color: var(--iui-grid-grouping-panel-item-hover-border-color, #d9d9d9);
    }
    .iui-grid-grouping-panel-item-disabled {
        color: var(--iui-grid-grouping-panel-item-disabled-color, gray);
    }
    .iui-grid-grouping-panel-item-label {
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 0 4px 0 0;
        vertical-align: middle;
    }
    .iui-grid-grouping-panel-toolbar {
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 0;
        vertical-align: middle;
    }
    .iui-grid-grouping-panel-toolbar-button-add {
        background: #dedede;
        border: thin solid #bebebe;
        border-radius: 3px;
        display: inline-block;
        opacity: 0.5;
        overflow: hidden;
        padding: 0;
        vertical-align: middle;
    }
    .iui-grid-grouping-panel-toolbar-button-add:hover {
        opacity: 1;
    }
    .iui-grid-grouping-panel-toolbar-button-add > span {
        background-image: url(../../icons/plus-24.png);
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 0;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .iui-grid-grouping-panel-item-button-close {
        background-image: url(../../icons/close-dark.ico);
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 0 0 0 -4px;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-grid-grouping-marker::before {
        content: "";
        border: var(--iui-grid-grouping-marker-before-border, 6px solid #dedede);
        border-color: var(--iui-grid-grouping-marker-before-border-color, transparent transparent transparent #ababab);
        position: absolute;
        top: 25%;
        right: -12px;
        width: 0;
        height: 0;
    }
    .iui-grid-grouping-marker::after {
        content: "";
        border: var(--iui-grid-grouping-marker-after-border, 6px solid #dedede);
        border-color: var(--iui-grid-grouping-marker-after-border-color, transparent transparent transparent #dedede);
        position: absolute;
        top: 25%;
        right: -11px;
        width: 0;
        height: 0;
    }
    .iui-grid-grouping-panel-dropdown-list {
        cursor: default;
        margin: 0;
        overflow: auto;
        padding: 0;
        list-style-type: none;
        white-space: nowrap;
        width: auto;
        height: auto;
    }
    .iui-grid-grouping-panel-dropdown-list li {
        padding: 5px;
    }
    .iui-grid-grouping-panel-dropdown-list li:hover {
        background: #e5e5e5;
    }
    .iui-grid-grouping-panel-dropdown-list-checkbox {
        /*background: url('') no-repeat 0 0;*/
        display: inline-block;
        padding: 0;
        margin: -2px 7px 0 3px;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-grid-grouping-panel-dropdown-list-checkbox-true {
        background-image: url(../../icons/check-mark-dark.ico);
    }

    /* Group Sorting */
    .iui-grid-grouping-panel-item-button-sort {
        display: inline-block;
        height: 18px;
        margin: 0 0 0 -4px;
        overflow: hidden;
        position: relative;
        vertical-align: middle;
        width: 24px;
    }
    .iui-grid-grouping-panel-item-button-sort-order {
        color: #646464;
        font-size: 0.75rem;
        left: 18px;
        position: absolute;
        top: 12px;
    }

    .iui-grid-grouping-panel-item-button-sort-up {
        position: absolute;
        left: 3px;
        top: 3px;
        opacity: 1;
        transform: scale(1);
        transition: all 0.25s ease-in-out;
        width: 10px;
        height: 12px;
    }
    .iui-grid-grouping-panel-item-button-sort-up-active {
        left: 7px;
        top: 6px;
        opacity: 1;
        transform: scale(1.25);
    }
    .iui-grid-grouping-panel-item-button-sort-up-inactive {
        left: -9px;
        top: -9px;
        opacity: 0;
        transform: scale(0);
    }
    .iui-grid-grouping-panel-item-button-sort-up-left {
        position: absolute;
        left: 0;
        top: 2px;
        transform: rotate(-60deg);
        width: 7px;
        height: 2px;
    }
    .iui-grid-grouping-panel-item-button-sort-up-right {
        position: absolute;
        left: 3px;
        top: 2px;
        transform: rotate(60deg);
        width: 7px;
        height: 2px;
    }
    .iui-grid-grouping-panel-item-button-sort-up-hline {
        position: absolute;
        left: 2px;
        top: 4px;
        width: 6px;
        height: 2px;
    }
    .iui-grid-grouping-panel-item-button-sort-up-vline {
        position: absolute;
        left: 4px;
        top: 0;
        width: 2px;
        height: 12px;
    }

    .iui-grid-grouping-panel-item-button-sort-down {
        position: absolute;
        right: 3px;
        bottom: 3px;
        opacity: 1;
        transform: scale(1);
        transition: all 0.25s ease-in-out;
        width: 10px;
        height: 12px;
    }
    .iui-grid-grouping-panel-item-button-sort-down-active {
        right: 7px;
        bottom: 6px;
        opacity: 1;
        transform: scale(1.25);
    }
    .iui-grid-grouping-panel-item-button-sort-down-inactive {
        right: -9px;
        bottom: -9px;
        opacity: 0;
        transform: scale(0);
    }
    .iui-grid-grouping-panel-item-button-sort-down-left {
        position: absolute;
        right: 3px;
        bottom: 2px;
        transform: rotate(60deg);
        width: 7px;
        height: 2px;
    }
    .iui-grid-grouping-panel-item-button-sort-down-right {
        position: absolute;
        right: 0;
        bottom: 2px;
        transform: rotate(-60deg);
        width: 7px;
        height: 2px;
    }
    .iui-grid-grouping-panel-item-button-sort-down-hline {
        position: absolute;
        right: 2px;
        bottom: 4px;
        width: 6px;
        height: 2px;
    }
    .iui-grid-grouping-panel-item-button-sort-down-vline {
        position: absolute;
        right: 4px;
        bottom: 0;
        width: 2px;
        height: 12px;
    }

    .iui-grid-grouping-panel-item-button-sort-up .iui-grid-grouping-panel-item-button-sort-up-left,
    .iui-grid-grouping-panel-item-button-sort-up .iui-grid-grouping-panel-item-button-sort-up-right,
    .iui-grid-grouping-panel-item-button-sort-up .iui-grid-grouping-panel-item-button-sort-up-hline,
    .iui-grid-grouping-panel-item-button-sort-up .iui-grid-grouping-panel-item-button-sort-up-vline,
    .iui-grid-grouping-panel-item-button-sort-down .iui-grid-grouping-panel-item-button-sort-down-left,
    .iui-grid-grouping-panel-item-button-sort-down .iui-grid-grouping-panel-item-button-sort-down-right,
    .iui-grid-grouping-panel-item-button-sort-down .iui-grid-grouping-panel-item-button-sort-down-hline,
    .iui-grid-grouping-panel-item-button-sort-down .iui-grid-grouping-panel-item-button-sort-down-vline
    {
        background: var(--iui-grid-grouping-panel-item-button-sort-background, #a5a5a5);
    }
    .iui-grid-grouping-panel-item-button-sort-up-active .iui-grid-grouping-panel-item-button-sort-up-left,
    .iui-grid-grouping-panel-item-button-sort-up-active .iui-grid-grouping-panel-item-button-sort-up-right,
    .iui-grid-grouping-panel-item-button-sort-up-active .iui-grid-grouping-panel-item-button-sort-up-hline,
    .iui-grid-grouping-panel-item-button-sort-up-active .iui-grid-grouping-panel-item-button-sort-up-vline,
    .iui-grid-grouping-panel-item-button-sort-down-active .iui-grid-grouping-panel-item-button-sort-down-left,
    .iui-grid-grouping-panel-item-button-sort-down-active .iui-grid-grouping-panel-item-button-sort-down-right,
    .iui-grid-grouping-panel-item-button-sort-down-active .iui-grid-grouping-panel-item-button-sort-down-hline,
    .iui-grid-grouping-panel-item-button-sort-down-active .iui-grid-grouping-panel-item-button-sort-down-vline
    {
        background: var(--iui-grid-grouping-panel-item-button-sort-active-background, #646464);
    }
    .iui-grid-grouping-panel-item-button-sort-up:hover .iui-grid-grouping-panel-item-button-sort-up-left,
    .iui-grid-grouping-panel-item-button-sort-up:hover .iui-grid-grouping-panel-item-button-sort-up-right,
    .iui-grid-grouping-panel-item-button-sort-up:hover .iui-grid-grouping-panel-item-button-sort-up-hline,
    .iui-grid-grouping-panel-item-button-sort-up:hover .iui-grid-grouping-panel-item-button-sort-up-vline,
    .iui-grid-grouping-panel-item-button-sort-down:hover .iui-grid-grouping-panel-item-button-sort-down-left,
    .iui-grid-grouping-panel-item-button-sort-down:hover .iui-grid-grouping-panel-item-button-sort-down-right,
    .iui-grid-grouping-panel-item-button-sort-down:hover .iui-grid-grouping-panel-item-button-sort-down-hline,
    .iui-grid-grouping-panel-item-button-sort-down:hover .iui-grid-grouping-panel-item-button-sort-down-vline 
    {
        background: var(--iui-grid-grouping-panel-item-button-sort-hover-background, #646464);
    }

    /* Group ExpandBox */
    .iui-grid-grouping-panel-item-button-expandbox {
        display: inline-block;
        height: 18px;
        overflow: hidden;
        position: relative;
        vertical-align: middle;
        width: 16px;
    }
    .iui-grid-grouping-panel-item-button-expandbox-collapse-up {
        position: absolute;
        left: 6px;
        top: 3px;
        opacity: 1;
        transform: rotate(45deg);
        transform-origin: top left;
        width: 9px;
        height: 2px;
    }
    .iui-grid-grouping-panel-item-button-expandbox-collapse-down {
        position: absolute;
        right: 2px;
        bottom: 2px;
        opacity: 1;
        transform: rotate(-45deg);
        transform-origin: top left;
        width: 9px;
        height: 2px;
    }
    .iui-grid-grouping-panel-item-button-expandbox-expand-up {
        position: absolute;
        left: 3px;
        top: 6px;
        opacity: 1;
        transform: rotate(45deg);
        transform-origin: top left;
        width: 9px;
        height: 2px;
    }
    .iui-grid-grouping-panel-item-button-expandbox-expand-down {
        position: absolute;
        right: 0px;
        bottom: 4px;
        opacity: 1;
        transform: rotate(-45deg);
        transform-origin: top left;
        width: 9px;
        height: 2px;
    }
    .iui-grid-grouping-panel-item-button-expandbox > div
    {
        background: var(--iui-grid-grouping-panel-item-button-expandbox-line-background, #646464);
    }
    .iui-grid-grouping-panel-item-button-expandbox:hover > div
    {
        background: var(--iui-grid-grouping-panel-item-button-expandbox-line-background, black);
    }

    /* Disabled State */
    .iui-grid-disabled div {
        opacity: var(--iui-grid-disabled-opacity, 0.75);
        pointer-events: none;
    }
    .iui-grid-row-disabled {
        opacity: var(--iui-grid-row-disabled-opacity, 0.6);
        pointer-events: none;
    }



    /* Animation */
    .iui-grid-column-animate {
        border: 0;
        background-color: transparent;
        box-shadow: none;
        overflow: hidden;
        position: relative;
    }
    .iui-grid-column-animate-enter {
        animation-name: grid-column-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.175s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-column-animate-enter {
        0% { 	   
            border: thin solid transparent;
            box-shadow: none;
        }
        100% { 
            border: thin solid #242424;
            box-shadow: 2px 3px 3px #cecece;
        }
    }
    .iui-grid-column-animate-select-block {
        display: block;
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
    }
    .iui-grid-column-animate-select {
        background: #d5d5d5;
        display: block;
        left: 0;
        position: absolute;
        opacity: 0;
        top: 0;
    }
    .iui-grid-column-animate-select-left {
        animation-name: grid-column-animate-select-left;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-column-animate-select-left {
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
    .iui-grid-column-animate-select-right {
        animation-name: grid-column-animate-select-right;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-column-animate-select-right {
        0% { 	   
            width: 0;
            opacity: 0.5;
        }
        100% { 
            width: 100%;
            opacity: 0;
        }
    }


    .iui-grid-row-animate {
        border: 0;
        background-color: transparent;
        box-shadow: none;
        display: block;
        overflow: hidden;
        position: relative;
    }
    .iui-grid-row-animate-enter {
        animation-name: grid-row-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.175s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-row-animate-enter {
        0% { 	   
            border: thin solid transparent;
            box-shadow: none;
        }
        100% { 
            border: thin solid #242424;
            box-shadow: 2px 3px 3px #cecece;
        }
    }
    .iui-grid-row-animate-select-block {
        display: block;
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
    }
    .iui-grid-row-animate-select {
        background: #f5f5f5;
        display: block;
        left: 0;
        position: absolute;
        opacity: 0;
        top: 0;
    }
    .iui-grid-row-animate-select-left {
        animation-name: grid-row-animate-select-left;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-row-animate-select-left {
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
    .iui-grid-row-animate-select-right {
        animation-name: grid-row-animate-select-right;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-row-animate-select-right {
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
    .iui-grid table {
        border-collapse: collapse;
    }
    .iui-grid-row:hover {
        border: thin solid red;
        box-shadow: 2px 3px 3px #e5e5e5;
    }
    */


    /* Drag Drop Column */
   .iui-grid-handle {
        background-image: var(--iui-grid-handle-background-image, url(../../icons/grab.ico));
        background-repeat: repeat;
        cursor: var(--iui-grid-handle-cursor, grab);
        display: block;
        height: var(--iui-grid-handle-height, 16px);
        margin: var(--iui-grid-handle-margin, 2px 0);
        padding: 0;
        vertical-align: middle;
        width: var(--iui-grid-handle-width, 16px);
    }

    /* Editing Column */
    .iui-grid-editing {
        background-repeat: repeat;
        cursor: var(--iui-grid-editing-cursor, default);
        display: block;
        height: var(--iui-grid-editing-height, 16px);
        margin: var(--iui-grid-editing-margin, 2px 0);
        opacity: 0.25;
        padding: 0;
        vertical-align: middle;
        width: var(--iui-grid-editing-width, 16px);
    }
    .iui-grid-editing-hover, .iui-grid-editing:hover {
        background-image: var(--iui-grid-editing-background-image, url(../../icons/edit.ico));
        opacity: 0.25;
    }
    .iui-grid-editing-active {
        background-image: var(--iui-grid-editing-background-image, url(../../icons/edit.ico));
        opacity: 1;
    }
    .iui-grid-editing-active:hover {
        opacity: 1 !important;
    }
    .iui-grid-editor-save-column {
        opacity: 0;
    }

    /* Grid Form */
    .iui-grid-form {
        background: #f5f5f5;
        cursor: ew-resize;
        opacity: 0;
        overflow: auto;
        padding: 0 0 0 15px;
        position: absolute;
        right: -320px;
        top: 0;
        width: 300px;
        z-index: 101;
    }
    .iui-grid-form > div {
        cursor: default;
        height: calc(100% - 25px);
        padding: 10px 10px 10px 0;
    }    
    .iui-grid-form-active {
        opacity: 1;
        right: 0;
    }
    .iui-grid-form-label {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .iui-grid-form-label-inline {
        display:inline-block; 
        margin-top: 5px; 
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
        white-space: nowrap;
    }
    .iui-grid-form-editor-text {
        background: var(--iui-grid-form-editor-text-background, white);
        border: var(--iui-grid-form-editor-text-border, 1px solid #cecece);
        border-color: var(--iui-grid-form-editor-text-border-color, #cecece);
        border-radius: var(--iui-grid-form-editor-text-border-radius, 1px);
        box-shadow: var(--iui-grid-form-editor-text-box-shadow, 0 0 0 1px transparent);
        color: var(--iui-grid-form-editor-text-color, black);
        display: block;
        margin: 2px 0 15px 0;
        padding: 7px 5px;
        width: calc(100% - 14px);
    }
    .iui-grid-form-editor-invalid {
        border-color: var(--iui-grid-form-editor-invalid-border-color, #c45151);
    }
    .iui-grid-form-editor-invalid:focus {
        border-color: var(--iui-grid-form-editor-invalid-border-color, #c45151);
        box-shadow: var(--iui-grid-form-editor-invalid-box-shadow, 0 0 0 1px #c45151);
    }

    /* Grid Batch Editing */
    .iui-grid-row-deleted, .iui-grid-cell-deleted {
        background: #e5e5e5;
        color: #999999;
    }
    .iui-grid-cell-value-changed {
        background: #ffc58f;
        color: black;
    }

    /* Grid  Column Buttons */
    .iui-grid-column-button-block {
        height: 24px;
        overflow: hidden;
        position: absolute;
        right: 5px;
        top: 5px;
    }

    /* Grid  Column Menu */
    .iui-grid-column-menu-button {
        height: 24px;
        overflow: hidden;
        padding: 1px 0 0 0;
        position: absolute;
        top: 0;
        right: 0;
        width: 24px;
    }
    .iui-grid-column-menu-button-line {
        background: #646464;
        overflow: hidden;
        margin: 4px 4px 0 4px;
        height: 2px;
    }

    /* Sorting */
    .iui-grid-column-sort-button {
        height: 24px;
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 24px;
        width: 24px;
    }
    .iui-grid-column-sort-button-order {
        color: #646464;
        font-size: 0.75rem;
        left: 18px;
        position: absolute;
        top: 12px;
    }

    .iui-grid-column-sort-button-up {
        position: absolute;
        left: 3px;
        top: 3px;
        opacity: 1;
        transform: scale(1);
        transition: all 0.25s ease-in-out;
        width: 10px;
        height: 12px;
    }
    .iui-grid-column-sort-button-up-active {
        left: 7px;
        top: 6px;
        opacity: 1;
        transform: scale(1.25);
    }
    .iui-grid-column-sort-button-up-inactive {
        left: -9px;
        top: -9px;
        opacity: 0;
        transform: scale(0);
    }
    .iui-grid-column-sort-button-up-left {
        position: absolute;
        left: 0;
        top: 2px;
        transform: rotate(-60deg);
        width: 7px;
        height: 2px;
    }
    .iui-grid-column-sort-button-up-right {
        position: absolute;
        left: 3px;
        top: 2px;
        transform: rotate(60deg);
        width: 7px;
        height: 2px;
    }
    .iui-grid-column-sort-button-up-hline {
        position: absolute;
        left: 2px;
        top: 4px;
        width: 6px;
        height: 2px;
    }
    .iui-grid-column-sort-button-up-vline {
        position: absolute;
        left: 4px;
        top: 0;
        width: 2px;
        height: 12px;
    }

    .iui-grid-column-sort-button-down {
        position: absolute;
        right: 3px;
        bottom: 3px;
        opacity: 1;
        transform: scale(1);
        transition: all 0.25s ease-in-out;
        width: 10px;
        height: 12px;
    }
    .iui-grid-column-sort-button-down-active {
        right: 7px;
        bottom: 6px;
        opacity: 1;
        transform: scale(1.25);
    }
    .iui-grid-column-sort-button-down-inactive {
        right: -9px;
        bottom: -9px;
        opacity: 0;
        transform: scale(0);
    }
    .iui-grid-column-sort-button-down-left {
        position: absolute;
        right: 3px;
        bottom: 2px;
        transform: rotate(60deg);
        width: 7px;
        height: 2px;
    }
    .iui-grid-column-sort-button-down-right {
        position: absolute;
        right: 0;
        bottom: 2px;
        transform: rotate(-60deg);
        width: 7px;
        height: 2px;
    }
    .iui-grid-column-sort-button-down-hline {
        position: absolute;
        right: 2px;
        bottom: 4px;
        width: 6px;
        height: 2px;
    }
    .iui-grid-column-sort-button-down-vline {
        position: absolute;
        right: 4px;
        bottom: 0;
        width: 2px;
        height: 12px;
    }

    .iui-grid-column-sort-button-up .iui-grid-column-sort-button-up-left,
    .iui-grid-column-sort-button-up .iui-grid-column-sort-button-up-right,
    .iui-grid-column-sort-button-up .iui-grid-column-sort-button-up-hline,
    .iui-grid-column-sort-button-up .iui-grid-column-sort-button-up-vline,
    .iui-grid-column-sort-button-down .iui-grid-column-sort-button-down-left,
    .iui-grid-column-sort-button-down .iui-grid-column-sort-button-down-right,
    .iui-grid-column-sort-button-down .iui-grid-column-sort-button-down-hline,
    .iui-grid-column-sort-button-down .iui-grid-column-sort-button-down-vline
    {
        background: var(--iui-grid-column-sort-button-background, #a5a5a5);
    }
    .iui-grid-column-sort-button-up-active .iui-grid-column-sort-button-up-left,
    .iui-grid-column-sort-button-up-active .iui-grid-column-sort-button-up-right,
    .iui-grid-column-sort-button-up-active .iui-grid-column-sort-button-up-hline,
    .iui-grid-column-sort-button-up-active .iui-grid-column-sort-button-up-vline,
    .iui-grid-column-sort-button-down-active .iui-grid-column-sort-button-down-left,
    .iui-grid-column-sort-button-down-active .iui-grid-column-sort-button-down-right,
    .iui-grid-column-sort-button-down-active .iui-grid-column-sort-button-down-hline,
    .iui-grid-column-sort-button-down-active .iui-grid-column-sort-button-down-vline
    {
        background: var(--iui-grid-column-sort-button-active-background, #646464);
    }
    .iui-grid-column-sort-button-up:hover .iui-grid-column-sort-button-up-left,
    .iui-grid-column-sort-button-up:hover .iui-grid-column-sort-button-up-right,
    .iui-grid-column-sort-button-up:hover .iui-grid-column-sort-button-up-hline,
    .iui-grid-column-sort-button-up:hover .iui-grid-column-sort-button-up-vline,
    .iui-grid-column-sort-button-down:hover .iui-grid-column-sort-button-down-left,
    .iui-grid-column-sort-button-down:hover .iui-grid-column-sort-button-down-right,
    .iui-grid-column-sort-button-down:hover .iui-grid-column-sort-button-down-hline,
    .iui-grid-column-sort-button-down:hover .iui-grid-column-sort-button-down-vline 
    {
        background: var(--iui-grid-column-sort-button-hover-background, #646464);
    }
`;
