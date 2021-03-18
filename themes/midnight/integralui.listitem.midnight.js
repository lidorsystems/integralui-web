import { c as css } from '../../external/lit-element.js';

export const iuiListItemMidnightStyle = css`
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