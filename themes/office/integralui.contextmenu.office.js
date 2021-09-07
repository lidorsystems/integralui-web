import { c as css } from '../../external/lit-element.js';

const iuiContextMenuOfficeStyle = css`
    .iui-contextmenu, .iui-contextmenu .iui-menuitem-block {
        background: var(--contextmenu-background, #fefefe);
        border: var(--contextmenu-border, thin solid #dedede);
    }
    .iui-contextmenuitem-root {
        border-color: var(--contextmenuitem-root-border-color, transparent);
        color: var(--contextmenuitem-root-color, black);
    }
    .iui-contextmenuitem-root-hovered, .iui-contextmenuitem-root-selected {
        background: var(--contextmenuitem-root-hovered-background, transparent);
        border-color: var(--contextmenuitem-root-hovered-border-color, transparent);
        color: var(--contextmenuitem-root-hovered-color, black);

        animation-name: var(--contextmenuitem-root-animation-name, iui-menuitem-animate-enter);
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
            background: var(--contextmenu-animation-menuitem-enter-background-0, transparent); 
            border-color: var(--contextmenu-animation-menuitem-enter-border-color-0, transparent);
        }
        100% { 
            background: var(--contextmenu-animation-menuitem-enter-background-100, #d9edfd); 
            border-color: var(--contextmenu-animation-menuitem-enter-border-color-100, #d9edfd);
        }
    }
`;

export { iuiContextMenuOfficeStyle };
