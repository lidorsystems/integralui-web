import { c as css } from '../../../external/lit-element.js';

export const iuiContextMenuLightStyle = css`
    .iui-contextmenu, .iui-contextmenu .iui-menuitem-block {
        background: var(--iui-contextmenu-background, #fefefe);
        border: var(--iui-contextmenu-border, thin solid #dedede);
    }
    .iui-contextmenuitem-root {
        border-color: var(--iui-contextmenuitem-root-border-color, transparent);
        color: var(--iui-contextmenuitem-root-color, black);
    }
    .iui-contextmenuitem-root-hovered, .iui-contextmenuitem-root-selected {
        background: var(--iui-contextmenuitem-root-hovered-background, #d9edfd);
        border-color: var(--iui-contextmenuitem-root-hovered-border-color, #d9edfd);
        color: var(--iui-contextmenuitem-root-hovered-color, black);

        animation-name: var(--iui-contextmenuitem-root-animation-name, iui-menuitem-animate-enter);
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-menuitem-animate-enter {
        0% { 
            background: var(--iui-contextmenu-animation-menuitem-enter-background-0, transparent); 
            border-color: var(--iui-contextmenu-animation-menuitem-enter-border-color-0, transparent);
        }
        100% { 
            background: var(--iui-contextmenu-animation-menuitem-enter-background-100, #d9edfd); 
            border-color: var(--iui-contextmenu-animation-menuitem-enter-border-color-100, #d9edfd);
        }
    }
`;
