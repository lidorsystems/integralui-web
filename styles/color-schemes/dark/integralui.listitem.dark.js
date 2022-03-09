import { c as css } from '../../../external/lit-element.js';

const iuiListItemDarkStyle = css`
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
        border: var(--listitem-hovered-border, 2px solid #2a2d2e);
    }
    .iui-listitem-selected {
        animation-name: none;
        background: var(--listitem-selected-background, #0a4369);
        border: var(--listitem-selected-border, 2px solid #0a4369);
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
`;

export { iuiListItemDarkStyle };
