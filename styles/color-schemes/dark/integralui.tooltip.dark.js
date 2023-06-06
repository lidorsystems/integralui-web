import { c as css } from '../../../external/lit-element.js';

export const iuiTooltipDarkStyle = css`
    .iui-tooltip {
        background: var(--iui-tooltip-background, #dcd8d6);
        border-color: var(--iui-tooltip-border-color, #dcd8d6);
        color: var(--iui-tooltip-color, black);
    }
    .iui-tooltip-marker-top::before {
        content: "";
        border: var(--iui-tooltip-marker-top-before-border, 5px solid #dcd8d6);
        border-color: var(--iui-tooltip-marker-top-before-border-color, transparent transparent #dcd8d6 transparent);
        position: absolute;
        top: -10px;
        left: 49%;
        width: 0;
        height: 0;
    }
    .iui-tooltip-marker-top::after {
        border: var(--iui-tooltip-marker-top-after-border, 5px solid #dcd8d6);
        border-color: var(--iui-tooltip-marker-top-after-border-color, transparent transparent #dcd8d6 transparent);
    }
    .iui-tooltip-marker-bottom::before {
        border: var(--iui-tooltip-marker-bottom-before-border, 5px solid #dcd8d6);
        border-color: var(--iui-tooltip-marker-bottom-before-border-color, #dcd8d6 transparent transparent transparent);
    }
    .iui-tooltip-marker-bottom::after {
        border: var(--iui-tooltip-marker-bottom-after-border, 5px solid #dcd8d6);
        border-color: var(--iui-tooltip-marker-bottom-after-border-color, #dcd8d6 transparent transparent transparent);
    }
    .iui-tooltip-marker-left::before {
        border: var(--iui-tooltip-marker-left-before-border, 5px solid #dcd8d6);
        border-color: var(--iui-tooltip-marker-left-before-border-color, transparent #dcd8d6 transparent transparent);
    }
    .iui-tooltip-marker-left::after {
        border: var(--iui-tooltip-marker-left-after-border, 5px solid #dcd8d6);
        border-color: var(--iui-tooltip-marker-left-after-border-color, transparent #dcd8d6 transparent transparent);
    }
    .iui-tooltip-marker-right::before {
        border: var(--iui-tooltip-marker-right-before-border, 5px solid #dcd8d6);
        border-color: var(--iui-tooltip-marker-right-before-border-color, transparent transparent transparent #dcd8d6);
    }
    .iui-tooltip-marker-right::after {
        border: var(--iui-tooltip-marker-right-after-border, 5px solid #dcd8d6);
        border-color: var(--iui-tooltip-marker-right-after-border-color, transparent transparent transparent #dcd8d6);
    }
`;