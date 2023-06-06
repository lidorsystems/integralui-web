import { c as css } from '../../../external/lit-element.js';

export const iuiPopOverDarkStyle = css`
    .iui-popover {
        background: var(--iui-popover-background, #252526);
        border: var(--iui-popover-border, thin solid #151515);
        border-color:  var(--iui-popover-border-color, #151515);
        color: var(--iui-popover-color, #cccccc);
    }
    .iui-popover-marker-top::before {
        border: var(--iui-popover-marker-before-border, 8px solid #151515);
        border-color: var(--iui-popover-marker-border-top-before-color, transparent transparent #151515 transparent);
    }
    .iui-popover-marker-top::after {
        border: var(--iui-popover-marker-after-border, 8px solid #252526);
        border-color: var(--iui-popover-marker-border-top-after-color, transparent transparent #252526 transparent);
    }
    .iui-popover-marker-bottom::before {
        border: var(--iui-popover-marker-before-border, 8px solid #151515);
        border-color: var(--iui-popover-marker-border-bottom-before-color, #151515 transparent transparent transparent);
    }
    .iui-popover-marker-bottom::after {
        border: var(--iui-popover-marker-after-border, 8px solid #252526);
        border-color: var(--iui-popover-marker-border-bottom-after-color, #252526 transparent transparent transparent);
    }
    .iui-popover-marker-left::before {
        border: var(--iui-popover-marker-before-border, 8px solid #151515);
        border-color: var(--iui-popover-marker-border-left-before-color, transparent #151515 transparent transparent);
    }
    .iui-popover-marker-left::after {
        border: var(--iui-popover-marker-after-border, 8px solid #252526);
        border-color: var(--iui-popover-marker-border-left-after-color, transparent #252526 transparent transparent);
    }
    .iui-popover-marker-right::before {
        border: var(--iui-popover-marker-before-border, 8px solid #151515);
        border-color: var(--iui-popover-marker-border-right-before-color, transparent transparent transparent #151515);
    }
    .iui-popover-marker-right::after {
        border: var(--iui-popover-marker-after-border, 8px solid #252526);
        border-color: var(--iui-popover-marker-border-right-after-color, transparent transparent transparent #252526);
    }

    .iui-popover-header {
        background: var(--iui-popover-header-background, #323233);
        border-bottom: var(--iui-popover-header-border-bottom, thin solid #323233);
    }
    .iui-popover-header:hover {
        background: var(--iui-popover-header-hovered-background, #113d5c);
    }
    .iui-popover-close-button span {
        background-image: url(../../../icons/close-white.ico);
    }
`;