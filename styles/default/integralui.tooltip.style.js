
import { c as css } from '../../external/lit-element.js';

export const iuiTooltipStyle = css`
    .iui-tooltip {
        background: var(--iui-tooltip-background, #232729);
        border: var(--iui-tooltip-border, thin solid #232729);
        border-color:  var(--iui-tooltip-border-color, #232729);
        border-radius: var(--iui-tooltip-border-radius, 5px);
        border-width: var(--iui-tooltip-border-width, thin);
        color: var(--iui-tooltip-color, white);
        cursor: var(--iui-tooltip-cursor, default);
        display: var(--iui-tooltip-display, block);
        font-size: var(--iui-tooltip-font-size, 1rem);
        font-style: var(--iui-tooltip-font-style, normal);
        height: var(--iui-tooltip-height, auto);
        margin: var(--iui-tooltip-margin, 0);
        opacity: var(--iui-tooltip-opacity, 0);
        overflow: visible;
        padding: var(--iui-tooltip-padding, 0);
        position: var(--iui-tooltip-position, absolute);
        text-align: var(--iui-tooltip-text-align, left);
        top: -9999999px;
        transform: scale(0);
        width: var(--iui-tooltip-width, auto);
        z-index: var(--iui-button-z-index, 9999999);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;

    }
    .iui-tooltip-open {
        opacity: var(--iui-tooltip-open-opacity, 1);
        transform: scale(1);
    }
    .iui-tooltip div /*Compatibility with Bootstrap */
    {
        -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: content-box;    /* Firefox, other Gecko */
        box-sizing: content-box; 
    }
    .iui-tooltip > div {
        padding: var(--iui-tooltip-padding, 5px);
        position: absolute;
        top: 0;
        left: 0;
        white-space: nowrap;
    }
    .iui-tooltip-marker-top::before
    {
        content: "";
        border: var(--iui-tooltip-marker-top-before-border, 5px solid #232729);
        border-color: var(--iui-tooltip-marker-top-before-border-color, transparent transparent #232729 transparent);
        position: absolute;
        top: -10px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-top::after
    {
        content: "";
        border: var(--iui-tooltip-marker-top-after-border, 5px solid #232729);
        border-color: var(--iui-tooltip-marker-top-after-border-color, transparent transparent #232729 transparent);
        position: absolute;
        top: -9px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-bottom::before
    {
        content: "";
        border: var(--iui-tooltip-marker-bottom-before-border, 5px solid #232729);
        border-color: var(--iui-tooltip-marker-bottom-before-border-color, #232729 transparent transparent transparent);
        position: absolute;
        bottom: -10px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-bottom::after
    {
        content: "";
        border: var(--iui-tooltip-marker-bottom-after-border, 5px solid #232729);
        border-color: var(--iui-tooltip-marker-bottom-after-border-color, #232729 transparent transparent transparent);
        position: absolute;
        bottom: -9px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-left::before
    {
        content: "";
        border: var(--iui-tooltip-marker-left-before-border, 5px solid #232729);
        border-color: var(--iui-tooltip-marker-left-before-border-color, transparent #232729 transparent transparent);
        position: absolute;
        top: 12px;
        left: -10px;
    }
    .iui-tooltip-marker-left::after
    {
        content: "";
        border: var(--iui-tooltip-marker-left-after-border, 5px solid #232729);
        border-color: var(--iui-tooltip-marker-left-after-border-color, transparent #232729 transparent transparent);
        position: absolute;
        top: 12px;
        left: -9px;
    }
    .iui-tooltip-marker-right::before
    {
        content: "";
        border: var(--iui-tooltip-marker-right-before-border, 5px solid #232729);
        border-color: var(--iui-tooltip-marker-right-before-border-color, transparent transparent transparent #232729);
        position: absolute;
        top: 12px;
        right: -10px;
    }
    .iui-tooltip-marker-right::after
    {
        content: "";
        border: var(--iui-tooltip-marker-right-after-border, 5px solid #232729);
        border-color: var(--iui-tooltip-marker-right-after-border-color, transparent transparent transparent #232729);
        position: absolute;
        top: 12px;
        right: -9px;
    }
`;
