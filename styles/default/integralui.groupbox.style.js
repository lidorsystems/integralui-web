import { c as css } from '../../external/lit-element.js';

export const iuiGroupBoxDefaultStyle = css`
    .iui-groupbox {
        background: var(--iui-groupbox-background, transparent);
        border: var(--iui-groupbox-border, 0);
        border-color:  var(--iui-groupbox-border-color, transparent);
        border-radius: var(--iui-groupbox-border-radius, 1px);
        border-width: var(--iui-groupbox-border-width, thin);
        color: var(--iui-groupbox-color, black);
        cursor: var(--iui-groupbox-cursor, default);
        display: var(--iui-groupbox-display, block);
        float: var(--iui-groupbox-float, none);
        font-size: var(--iui-groupbox-font-size, 1rem);
        font-style: var(--iui-groupbox-font-style, normal);
        height: var(--iui-groupbox-height, auto);
        margin: var(--iui-groupbox-margin, 2px 0);
        opacity: var(--iui-groupbox-opacity, 1);
        overflow: hidden;
        padding: var(--iui-groupbox-padding, 0);
        position: var(--iui-groupbox-position, relative);
        text-align: var(--iui-groupbox-text-align, left);
        width: var(--iui-groupbox-width, auto);
        z-index: var(--iui-groupbox-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-groupbox-header-block
    {
        margin: 0;
        padding: 0;
        position: relative;
    }
    /* Normal State */
    .iui-groupbox-header
    {
        background: var(--iui-groupbox-header-background, #e5e5e5);
        border: var(--iui-groupbox-header-border, thin solid #cecece);
        color: var(--iui-groupbox-header-color, black);
        margin: 0;
        padding: var(--iui-groupbox-header-padding, 3px);
        position: relative;
    }
    /* Hover State */
    .iui-groupbox-header-hovered
    {
        background: var(--iui-groupbox-header-hovered-background, #f5f5f5);
        border: var(--iui-groupbox-header-hovered-border, thin solid #e5e5e5);
        margin: 0;
        padding: var(--iui-groupbox-header-hovered-padding, 3px);
        position: relative;
    }
    /* Selected State */
    .iui-groupbox-header-selected
    {
        background: var(--iui-groupbox-header-selected-background, #bfbfbf);
        border: var(--iui-groupbox-header-selected-border, thin solid #a1a1a1);
        color: var(--iui-groupbox-header-selected-color, white);
        padding: var(--iui-groupbox-header-selected-padding, 3px);
        margin: 0;
        position: relative;
    }
    .iui-groupbox-content
    {
        background: var(--iui-groupbox-content-background, white);
        border: var(--iui-groupbox-content-border, thin solid #cecece);
        margin: 0;
    }
    /* Disabled State */
    .iui-groupbox-content-disabled
    {
        border-color: var(--iui-groupbox-content-disabled-border-color, gray);
        color: var(--iui-groupbox-content-disabled-color, gray);
    }
    .iui-groupbox-header-marker-down::before
    {
        content: "";
        border: var(--iui-groupbox-header-marker-down-before-border, 5px solid white);
        border-color: var(--iui-groupbox-header-marker-down-before-border-color, transparent transparent #ffffff transparent);
        position: absolute;
        bottom: var(--iui-groupbox-header-marker-down-before-bottom, -1px);
        left: var(--iui-groupbox-header-marker-down-before-left, 5px);
        width: 0;
        height: 0;
        z-index: 2;

        animation-name: marker;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.75s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    .iui-groupbox-header-marker-down::after
    {
        content: "";
        border: var(--iui-groupbox-header-marker-down-after-border, 5px solid transparent);
        border-color: var(--iui-groupbox-header-marker-down-after-border-color, transparent transparent transparent transparent);
        position: absolute;
        bottom: var(--iui-groupbox-header-marker-down-after-bottom, -1px);
        left: var(--iui-groupbox-header-marker-down-after-left, 5px);
        width: 0;
        height: 0;
    }
    @keyframes marker
    {
        0% { bottom: var(--iui-groupbox-header-marker-animation-bottom-0, -10px); }
        50% { bottom: var(--iui-groupbox-header-marker-animation-bottom-50, -5px); }
        100% { bottom: var(--iui-groupbox-header-marker-animation-bottom-100, -1px); }
    }

    /* Animations */
    .iui-groupbox-header-expand-box
    {
        background: var(--iui-groupbox-header-expand-box-background, #484848);
    }


    /* Disabled State */
    .iui-groupbox-disabled div
    {
        opacity: var(--iui-groupbox-disabled-opacity, 0.75);
        pointer-events: none;
    }

    /* Animation */
    .iui-groupbox-header-animate-select-block
    {
        display: block;
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
    }
    .iui-groupbox-header-animate-select
    {
        background: var(--iui-groupbox-header-animate-select-background, #f5f5f5);
        display: block;
        left: 0;
        position: absolute;
        opacity: 0;
        top: 0;
    }
    .iui-groupbox-header-animate-select-left
    {
        animation-name: groupbox-header-animate-select-left;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes groupbox-header-animate-select-left
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
    .iui-groupbox-header-animate-select-right
    {
        animation-name: groupbox-header-animate-select-right;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes groupbox-header-animate-select-right
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
`;