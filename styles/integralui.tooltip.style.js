
import { c as css } from '../external/lit-element.js';

export const iuiTooltipStyle = css`
    .iui-tooltip
    {
        background: var(--tooltip-background, #e5e5e5);
        border: var(--tooltip-border, thin solid #888888);
        color: var(--tooltip-color, #323232);
        cursor: var(--tooltip-cursor, default);
        font-size: var(--tooltip-font-size, 1em);
        overflow: hidden;
        padding: 0;
        position: absolute;
        top: -999999px;
        z-index: 999;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
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
        border: var(--tooltip-marker-top-before-border, 4px solid #fefefe);
        border-color: var(--tooltip-marker-top-before-border-color, transparent transparent #1e4691 transparent);
        position: absolute;
        top: -9px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-top::after
    {
        content: "";
        border: var(--tooltip-marker-top-after-border, 4px solid #fefefe);
        border-color: var(--tooltip-marker-top-after-border-color, transparent transparent #fefefe transparent);
        position: absolute;
        top: -8px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-bottom::before
    {
        content: "";
        border: var(--tooltip-marker-bottom-before-border, 4px solid #fefefe);
        border-color: var(--tooltip-marker-bottom-before-border-color, #1e4691 transparent transparent transparent);
        position: absolute;
        bottom: -9px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-bottom::after
    {
        content: "";
        border: var(--tooltip-marker-bottom-after-border, 4px solid #fefefe);
        border-color: var(--tooltip-marker-bottom-after-border-color, #fefefe transparent transparent transparent);
        position: absolute;
        bottom: -8px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-left::before
    {
        content: "";
        border: var(--tooltip-marker-left-before-border, 4px solid #fefefe);
        border-color: var(--tooltip-marker-left-before-border-color, transparent #1e4691 transparent transparent);
        position: absolute;
        top: 12px;
        left: -9px;
    }
    .iui-tooltip-marker-left::after
    {
        content: "";
        border: var(--tooltip-marker-left-after-border, 4px solid #fefefe);
        border-color: var(--tooltip-marker-left-after-border-color, transparent #fefefe transparent transparent);
        position: absolute;
        top: 12px;
        left: -8px;
    }
    .iui-tooltip-marker-right::before
    {
        content: "";
        border: var(--tooltip-marker-right-before-border, 4px solid #fefefe);
        border-color: var(--tooltip-marker-right-before-border-color, transparent transparent transparent #1e4691);
        position: absolute;
        top: 12px;
        right: -9px;
    }
    .iui-tooltip-marker-right::after
    {
        content: "";
        border: var(--tooltip-marker-right-after-border, 4px solid #fefefe);
        border-color: var(--tooltip-marker-right-after-border-color, transparent transparent transparent #fefefe);
        position: absolute;
        top: 12px;
        right: -8px;
    }
`;
