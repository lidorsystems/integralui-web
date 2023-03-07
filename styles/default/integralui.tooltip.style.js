
import { c as css } from '../../external/lit-element.js';

export const iuiTooltipStyle = css`
    .iui-tooltip {
        background: var(--tooltip-background, #232729);
        border: var(--tooltip-border, thin solid #232729);
        border-color:  var(--tooltip-border-color, #232729);
        border-radius: var(--tooltip-border-radius, 5px);
        border-width: var(--tooltip-border-width, thin);
        color: var(--tooltip-color, white);
        cursor: var(--tooltip-cursor, default);
        display: var(--tooltip-display, block);
        font-size: var(--tooltip-font-size, 1rem);
        height: var(--tooltip-height, auto);
        margin: var(--tooltip-margin, 0);
        opacity: var(--tooltip-opacity, 0);
        overflow: visible;
        padding: var(--tooltip-padding, 0);
        position: var(--tooltip-position, absolute);
        top: -9999999px;
        transform: scale(0);
        width: var(--tooltip-width, auto);
        z-index: var(--button-z-index, 9999999);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;

    }
    .iui-tooltip-open {
        opacity: var(--tooltip-open-opacity, 1);
        transform: scale(1);
    }
    .iui-tooltip div /*Compatibility with Bootstrap */
    {
        -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: content-box;    /* Firefox, other Gecko */
        box-sizing: content-box; 
    }
    .iui-tooltip > div {
        padding: var(--tooltip-padding, 5px);
        position: absolute;
        top: 0;
        left: 0;
        white-space: nowrap;
    }
    .iui-tooltip-marker-top::before
    {
        content: "";
        border: var(--tooltip-marker-top-before-border, 5px solid #232729);
        border-color: var(--tooltip-marker-top-before-border-color, transparent transparent #232729 transparent);
        position: absolute;
        top: -10px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-top::after
    {
        content: "";
        border: var(--tooltip-marker-top-after-border, 5px solid #232729);
        border-color: var(--tooltip-marker-top-after-border-color, transparent transparent #232729 transparent);
        position: absolute;
        top: -9px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-bottom::before
    {
        content: "";
        border: var(--tooltip-marker-bottom-before-border, 5px solid #232729);
        border-color: var(--tooltip-marker-bottom-before-border-color, #232729 transparent transparent transparent);
        position: absolute;
        bottom: -10px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-bottom::after
    {
        content: "";
        border: var(--tooltip-marker-bottom-after-border, 5px solid #232729);
        border-color: var(--tooltip-marker-bottom-after-border-color, #232729 transparent transparent transparent);
        position: absolute;
        bottom: -9px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-left::before
    {
        content: "";
        border: var(--tooltip-marker-left-before-border, 5px solid #232729);
        border-color: var(--tooltip-marker-left-before-border-color, transparent #232729 transparent transparent);
        position: absolute;
        top: 12px;
        left: -10px;
    }
    .iui-tooltip-marker-left::after
    {
        content: "";
        border: var(--tooltip-marker-left-after-border, 5px solid #232729);
        border-color: var(--tooltip-marker-left-after-border-color, transparent #232729 transparent transparent);
        position: absolute;
        top: 12px;
        left: -9px;
    }
    .iui-tooltip-marker-right::before
    {
        content: "";
        border: var(--tooltip-marker-right-before-border, 5px solid #232729);
        border-color: var(--tooltip-marker-right-before-border-color, transparent transparent transparent #232729);
        position: absolute;
        top: 12px;
        right: -10px;
    }
    .iui-tooltip-marker-right::after
    {
        content: "";
        border: var(--tooltip-marker-right-after-border, 5px solid #232729);
        border-color: var(--tooltip-marker-right-after-border-color, transparent transparent transparent #232729);
        position: absolute;
        top: 12px;
        right: -9px;
    }
`;
