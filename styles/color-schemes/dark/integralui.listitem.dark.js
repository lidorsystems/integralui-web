import { c as css } from '../../../external/lit-element.js';

export const iuiListItemDarkStyle = css`
    .iui-listgroup {
        border-color: var(--listgroup-border-color, transparent transparent #151515 transparent);
        color: var(--listgroup-color, #cccccc);
    }
    .iui-listgroup-expand-box {
        background: url(../../../icons/expandbox-icons.png) no-repeat -48px -48px;
    }
    .iui-listgroup-expand-box-open {
        background-position: -48px -16px;
        opacity: 0.25;
    }
    .iui-listgroup-expand-box-open:hover {
        opacity: 0.75;
    }
    .iui-listgroup-expand-box-close {
        background-position: -48px 0;
        opacity: 0.25;
    }
    .iui-listgroup-expand-box-close:hover {
        opacity: 0.75;
    }
    .iui-listgroup-expand-box-open-animate {
        background-position: -48px 0;
    }
    .iui-listgroup-expand-box-close-animate {
        background-position: -48px 0;
    }

    .iui-listitem {
        color: var(--listitem-color, #cccccc);
    }
    .iui-listitem-hovered {
        animation-name: none;
        background: var(--listitem-hovered-background, #2a2d2e);
        border-color: var(--listitem-hovered-border-color, #2a2d2e);
        color: var(--listitem-hovered-color, #eeeeee);
    }
    .iui-listitem-selected {
        animation-name: none;
        background: var(--listitem-selected-background, #0a4369);
        border-color: var(--listitem-selected-border-color, #0a4369);
        color: var(--listitem-selected-color, white);
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
        background: var(--listitem-animate-select-background, #2d2d33);
    }
    .iui-listitem-separator {
        background: var(--listitem-separator-background, #151515);
    }
`;