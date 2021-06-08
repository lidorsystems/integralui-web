import { c as css } from '../external/lit-element.js';

const iuiGridDefaultStyle = css`
    .iui-grid
    {
        background: var(--grid-background, white);
        border: var(--grid-border, thin solid #cecece);
        border-radius: var(--grid-border-radius, 3px);
        color: var(--grid-color, black);
        cursor: var(--grid-cursor, default);
        display: var(--grid-display, block);
        float: var(--grid-float, none);
        overflow: hidden;
        margin: var(--grid-margin, 0);
        padding: var(--grid-padding, 0);
        position: relative;
        
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-grid table
    {
        color: black;
    }
    .iui-grid div /*Compatibility with Bootstrap */
    {
        -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: content-box;    /* Firefox, other Gecko */
        box-sizing: content-box; 
    }
    .iui-grid-rtl
    {
        direction: rtl;
    }
    .iui-grid-block
    {
        background: white;
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: relative;
        z-index: 0;
    }
    .iui-grid-block-left
    {
        background: #f5f5f5;
        left: 0;
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: absolute;
        top: 0;
        z-index: 4;
    }
    .iui-grid-block-right
    {
        background: #f5f5f5;
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
    }
    .iui-grid-block-top
    {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .iui-grid-block-top-left
    {
        background: transparent;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 12;
    }
    .iui-grid-block-top-right
    {
        background: transparent;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 11;
    }
    .iui-grid-block-bottom
    {
        bottom: 0;
        left: 0;
        position: absolute;
        z-index: 7;
    }
    .iui-grid-block-bottom-left
    {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 9;
    }
    .iui-grid-block-bottom-right
    {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 8;
    }
    .iui-grid-block-middle
    {
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
    .iui-grid-block-shift-left
    {
        /*margin-left: 16px !important;*/
        padding-left: 15px;
    }
    .iui-grid-block-shift-right
    {
        margin-right: 16px;
    }
    .iui-grid-row-block
    {
        padding: 0 0 0 15px;
    }
    .iui-grid-row-block-rtl
    {
        padding: 0 15px 0 0;
    }
    .iui-grid-column-header, .iui-grid-column-footer
    {
        background-color: #ededed;
        border: thin solid #d5d5d5;
        color: black;
        margin: 0;
        padding: 3px 0;
        position: relative;
        vertical-align:middle;
        white-space: nowrap;
        z-index: 1;
    }
    .iui-grid-block-top-left .iui-grid-column-header, 
    .iui-grid-block-top-left .iui-grid-column-footer, 
    .iui-grid-block-top-right .iui-grid-column-header, 
    .iui-grid-block-top-right .iui-grid-column-footer {
        background-color: #dddddd;
        border: thin solid #c5c5c5;
    }
    .iui-grid-column-header-hovered
    {
        background-color: #d5d5d5;
        border-color: #cecece;
        color: black;
    }
    .iui-grid-column-header-selected
    {
        background-color: #bebebe;
        border: thin solid #aeaeae;
        color: black;
    }
    .iui-grid-column-header > div, .iui-grid-column-footer > div, .iui-grid-row-cell > div
    {
        border: 2px solid transparent;
        margin: 0;
        padding: 2px;
        vertical-align: middle;
        overflow: hidden;
        text-align: left;
        /*text-overflow: ellipsis;*/
        white-space2: nowrap;
    }
    .iui-grid-column-header-cell-content, .iui-grid-column-footer-cell-content, .iui-grid-row-cell-label
    {
        display: inline;
        padding: 0 3px;
        vertical-align: middle;
        cursor: default;
    }
    .iui-grid-row, .iui-grid-row-fixed
    {
        color: black;
        margin: 0;
        padding: 0;
        white-space: nowrap;
        z-index: 0;
    }
    .iui-grid-row-hovered
    {
        background-color: #f5f5f5;
        border: thin solid #efefef;
        color: black;
    }
    .iui-grid-row-selected
    {
        background-color: #e5e5e5;
        border: thin solid #dedede;
        color: black;
    }
    .iui-grid-row-cell
    {
        border-left: thin solid transparent;
        border-right: thin solid transparent;
        border-bottom: thin solid transparent;
        padding: 0;
        /*position: relative;*/
        vertical-align: middle;
    }
    .iui-grid-row-cell-content
    {
        border: 2px solid transparent;
        white-space: nowrap;
    }
    .iui-grid-row-cell-content:focus
    {
        outline: none !important;
    }
    .iui-grid-row-cell-content-focused
    {
        border: 2px solid gray !important;
    }
    .iui-grid-cell-empty
    {
        border: thin solid transparent !important;
    }
    .iui-grid-expand-box
    {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: 2px 3px 0 0;
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
    .iui-grid-expand-box-load
    {
        background: url(../icons/load.gif) no-repeat 0 0;
    }
    .iui-grid-expand-box-open
    {
        background: url(../icons/expand.ico) no-repeat 0 0;
    }
    .iui-grid-expand-box-open-disabled
    {
        background: url(../icons/expand-disabled.ico) no-repeat 0 0;
    }
    .iui-grid-expand-box-close
    {
        background: url(../icons/collapse.ico) no-repeat 0 0;
    }
    .iui-grid-expand-box-close-disabled
    {
        background: url(../icons/collapse-disabled.ico) no-repeat 0 0;
    }
    .iui-grid-column-reorder-mark
    {
        position: absolute;
        pointer-events: none;
    }
    .iui-grid-column-reorder-mark span
    {
        background-repeat: no-repeat;
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-grid-column-reorder-mark-left
    {
        background-image: url(../icons/move-left.ico);
    }
    .iui-grid-column-reorder-mark-right
    {
        background-image: url(../icons/move-right.ico);
    }
    .iui-grid-column-reorder-tooltip
    {
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
    .iui-grid-column-reorder-tooltip span
    {
        display: inline-block;
        padding: 3px;
        margin: 0 2px 0 0;
        vertical-align: middle;
    }
    .iui-grid-column-header-left, .iui-grid-column-footer-left
    {
        border-right: 1px solid #ababab;
    }
    .iui-grid-column-header-right, .iui-grid-column-footer-right
    {
        border-left: 1px solid #ababab;
    }
    .iui-grid-rows-left, .iui-grid-rows-left-top, .iui-grid-rows-left-bottom
    {
        border-right: 1px solid #ababab;
    }
    .iui-grid-rows-right, .iui-grid-rows-right-top, .iui-grid-rows-right-bottom
    {
        border-left: 1px solid #ababab;
    }
    .iui-grid-rows-top-block
    {
        background: #f6f6f6;
        border-bottom: thin solid #efefef;
    }
    .iui-grid-rows-bottom-block
    {
        background: #f6f6f6;
        border-top: thin solid #c5c5c5;
        z-index: 2;
    }
    .iui-grid-rows-bottom-block .iui-grid-row:last-child .iui-grid-lines-both
    {
        border-bottom: 0;
    }
    .iui-grid-row-cell:first-child
    {
        border-left: thin solid #d5d5d5;
    }
    .iui-grid-row-cell:last-child
    {
        border-right: thin solid #d5d5d5;
    }
    .iui-grid-lines-none
    {
        border-color: transparent !important;
    }
    .iui-grid-lines-horizontal:not(:last-child)
    {
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: #d5d5d5;
    }
    .iui-grid-lines-horizontal:last-child
    {
        border-left-color: transparent;
        border-bottom-color: #d5d5d5;
    }
    .iui-grid-lines-vertical
    {
        border-right-color: #d5d5d5;
    }
    .iui-grid-column-header .iui-grid-lines-vertical, .iui-grid-column-footer .iui-grid-lines-vertical
    {
        border-left-color: #d5d5d5;
        border-right-color: #d5d5d5;
    }
    .iui-grid-row:last-child .iui-grid-lines-vertical
    {
        border-bottom-color: #d5d5d5;
    }
    .iui-grid-lines-both
    {
        border-right-color: #d5d5d5;
        border-bottom-color: #d5d5d5;
    }
    .iui-grid-column-header .iui-grid-lines-both, .iui-grid-column-footer .iui-grid-lines-both
    {
        border-left-color: #d5d5d5;
        border-right-color: #d5d5d5;
        border-bottom-color: #d5d5d5;
    }

    /* Grouping */
    .iui-grid-grouping-panel
    {
        background-color: #f0f0f0;
        border-bottom: thin solid #d5d5d5;
        margin: 0;
        padding: 3px;
        position: absolute;
        top: 0;
        white-space: nowrap;
        width: 100%;
    }
    .iui-grid-grouping-panel-item
    {
        background-color: #dedede;
        display: inline-block;
        border: thin solid #bebebe;
        border-radius: 3px;
        margin: 2px 3px;
        /*overflow: hidden;*/
        padding: 2px 5px;
        position: relative;
    }
    .iui-grid-grouping-panel-item-disabled
    {
        color: gray;
    }
    .iui-grid-grouping-panel-item-label
    {
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 0 0 2px 0;
        vertical-align: middle;
    }
    .iui-grid-grouping-panel-toolbar
    {
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 0;
        vertical-align: middle;
    }
    .iui-grid-grouping-panel-toolbar-button-add
    {
        background: #dedede;
        border: thin solid #bebebe;
        border-radius: 3px;
        display: inline-block;
        opacity: 0.5;
        overflow: hidden;
        padding: 0;
        vertical-align: middle;
    }
    .iui-grid-grouping-panel-toolbar-button-add:hover
    {
        opacity: 1;
    }
    .iui-grid-grouping-panel-toolbar-button-add > span
    {
        background-image: url(../icons/plus-24.png);
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 0;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .iui-grid-grouping-panel-item-button
    {
        background-image: url(../icons/close-dark.ico);
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 0 0 2px 7px;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-grid-grouping-marker::before
    {
        content: "";
        border: 6px solid #dedede;
        border-color: transparent transparent transparent #ababab;
        position: absolute;
        top: 25%;
        right: -12px;
        width: 0;
        height: 0;
    }
    .iui-grid-grouping-marker::after
    {
        content: "";
        border: 6px solid #dedede;
        border-color: transparent transparent transparent #dedede;
        position: absolute;
        top: 25%;
        right: -11px;
        width: 0;
        height: 0;
    }
    .iui-grid-grouping-panel-dropdown-list
    {
        cursor: default;
        margin: 0;
        overflow: auto;
        padding: 0;
        list-style-type: none;
        white-space: nowrap;
        width: auto;
        height: auto;
    }
    .iui-grid-grouping-panel-dropdown-list li
    {
        padding: 5px;
    }
    .iui-grid-grouping-panel-dropdown-list li:hover
    {
        background: #e5e5e5;
    }
    .iui-grid-grouping-panel-dropdown-list-checkbox
    {
        /*background: url('') no-repeat 0 0;*/
        display: inline-block;
        padding: 0;
        margin: -2px 7px 0 3px;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-grid-grouping-panel-dropdown-list-checkbox-true
    {
        background-image: url(../icons/check-mark-dark.ico);
    }
    
    /* Disabled State */
    .iui-grid-disabled div
    {
        opacity: 0.75;
        pointer-events: none;
    }



    /* Animation */
    .iui-grid-column-animate
    {
        border: 0;
        background-color: transparent;
        box-shadow: none;
        overflow: hidden;
        position: relative;
    }
    .iui-grid-column-animate-enter
    {
        animation-name: grid-column-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.175s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-column-animate-enter
    {
        0% { 	   
            border: thin solid transparent;
            box-shadow: none;
        }
        100% { 
            border: thin solid #242424;
            box-shadow: 2px 3px 3px #cecece;
        }
    }
    .iui-grid-column-animate-select-block
    {
        display: block;
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
    }
    .iui-grid-column-animate-select
    {
        background: #d5d5d5;
        display: block;
        left: 0;
        position: absolute;
        opacity: 0;
        top: 0;
    }
    .iui-grid-column-animate-select-left
    {
        animation-name: grid-column-animate-select-left;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-column-animate-select-left
    {
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
    .iui-grid-column-animate-select-right
    {
        animation-name: grid-column-animate-select-right;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-column-animate-select-right
    {
        0% { 	   
            width: 0;
            opacity: 0.5;
        }
        100% { 
            width: 100%;
            opacity: 0;
        }
    }


    .iui-grid-row-animate
    {
        border: 0;
        background-color: transparent;
        box-shadow: none;
        display: block;
        overflow: hidden;
        position: relative;
    }
    .iui-grid-row-animate-enter
    {
        animation-name: grid-row-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.175s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-row-animate-enter
    {
        0% { 	   
            border: thin solid transparent;
            box-shadow: none;
        }
        100% { 
            border: thin solid #242424;
            box-shadow: 2px 3px 3px #cecece;
        }
    }
    .iui-grid-row-animate-select-block
    {
        display: block;
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
    }
    .iui-grid-row-animate-select
    {
        background: #f5f5f5;
        display: block;
        left: 0;
        position: absolute;
        opacity: 0;
        top: 0;
    }
    .iui-grid-row-animate-select-left
    {
        animation-name: grid-row-animate-select-left;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-row-animate-select-left
    {
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
    .iui-grid-row-animate-select-right
    {
        animation-name: grid-row-animate-select-right;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-row-animate-select-right
    {
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


   .iui-grid-handle {
        background-image: var(--grid-background-image, url(../icons/grab.ico));
        background-repeat: repeat;
        cursor: var(--grid-handle-cursor, grab);
        display: block;
        height: var(--grid-handle-height, 16px);
        margin: var(--grid-handle-margin, 2px 0);
        padding: 0;
        vertical-align: middle;
        width: var(--grid-handle-width, 16px);
    }
`;

export { iuiGridDefaultStyle };
