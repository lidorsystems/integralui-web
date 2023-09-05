import { c as css } from '../../../external/lit-element.js';

export const iuiContextMenuLightStyle = css`
    .iui-contextmenu {
        background: var(--iui-contextmenu-background, #fefefe);
        border: var(--iui-contextmenu-border, thin solid #dedede);
    }
    .iui-menuitem-block {
        background: var(--iui-menuitem-block-background, #f5f5f5);
        border: var(--iui-menuitem-block-border, thin solid #dedede);
        border-color: var(--iui-menuitem-block-border-color, #dedede);
    }
    .iui-contextmenuitem-root {
        border-color: var(--iui-menuitem-root-border-color, transparent);
        color: var(--iui-menuitem-root-color, black);
    }
    .iui-contextmenuitem-root-hovered {
        background: var(--iui-menuitem-root-hovered-background, #d9edfd);
        border-color: var(--iui-menuitem-root-hovered-border-color, #d9edfd);
        color: var(--iui-menuitem-root-hovered-color, black);
    }
    .iui-contextmenuitem-root-selected {
        background: var(--iui-menuitem-root-selected-background, #d9edfd);
        border-color: var(--iui-menuitem-root-selected-border-color, #d9edfd);
        color: var(--iui-menuitem-root-selected-color, black);
    }
`;
