import { c as css } from '../../../external/lit-element.js';

export const iuiListItemDarkStyle = css`
    .iui-listgroup {
        background: var(--iui-listgroup-background, #252526);
        border-color: var(--iui-listgroup-border-color, transparent transparent #151515 transparent);
        color: var(--iui-listgroup-color, #cccccc);
    }
    .iui-listgroup-expand-box {
        background: url(../../../icons/expandbox-icons.png) no-repeat -48px 0;
    }
    .iui-listgroup-expand-box-open {
        opacity: 0.25;
    }
    .iui-listgroup-expand-box-open:hover {
        opacity: 0.75;
    }
    .iui-listgroup-expand-box-close {
        opacity: 0.25;
    }
    .iui-listgroup-expand-box-close:hover {
        opacity: 0.75;
    }

    .iui-listitem {
        background: var(--iui-listitem-background, #252526);
        color: var(--iui-listitem-color, #cccccc);
    }
    .iui-listitem-hovered {
        animation-name: none;
        background: var(--iui-listitem-hovered-background, #2a2d2e);
        border-color: var(--iui-listitem-hovered-border-color, #2a2d2e);
        color: var(--iui-listitem-hovered-color, #eeeeee);
    }
    .iui-listitem-selected {
        animation-name: none;
        background: var(--iui-listitem-selected-background, #0a4369);
        border-color: var(--iui-listitem-selected-border-color, #0a4369);
        color: var(--iui-listitem-selected-color, white);
    }
    @keyframes listitem-animate-enter {
        0% {        
            border: thin solid transparent;
            box-shadow: none;
        }
        100% { 
            border: thin solid #151515;
            box-shadow: 2px 3px 3px #252526;
        }
    }
    .iui-listitem-animate-select {
        background: var(--iui-listitem-animate-select-background, #2d2d33);
    }
    .iui-listitem-separator {
        background: var(--iui-listitem-separator-background, #151515);
    }
`;