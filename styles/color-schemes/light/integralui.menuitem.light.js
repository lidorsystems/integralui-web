import { c as css } from '../../../external/lit-element.js';

export const iuiMenuItemLightStyle = css`
    .iui-menu {
        background: var(--iui-menu-background, #2455b0);
    }
    .iui-menu > ul {
        background: var(--iui-menu-block-background, #2455b0);
    }
    .iui-menuitem-root, .iui-menuitem-root-vertical {
        border-color: var(--iui-menuitem-root-border-color, #2455b0);
        color: var(--iui-menuitem-root-color, white);
    }
    .iui-menuitem-root-hovered {
        background: var(--iui-menuitem-root-hovered-background, #153268);
        border-color: var(--iui-menuitem-root-hovered-border-color, #0f244a);
        color: var(--iui-menuitem-root-hovered-color, white);
    }
    .iui-contextmenuitem-root-hovered {
        background: var(--iui-menuitem-root-hovered-background, #d9edfd);
        border: var(--iui-menuitem-root-hovered-border, thin solid #d9edfd);
        color: var(--iui-menuitem-root-hovered-color, black);
    }
    .iui-menuitem-root-hovered a {
        color: black;
    }
    .iui-menuitem-root-selected {
        background: var(--iui-menuitem-root-selected-background, #153268);
        border-color: var(--iui-menuitem-root-selected-border-color, #0f244a);
        color: var(--iui-menuitem-root-selected-color, white);
    }
    .iui-contextmenuitem-root-selected {
        background: var(--iui-menuitem-root-selected-background, #d9edfd);
        border: var(--iui-menuitem-root-selected-border, thin solid #d9edfd);
        color: var(--iui-menuitem-root-selected-color, black);
    }
    
    .iui-menuitem, .iui-contextmenuitem {
        background: var(--iui-menuitem-background, #fefefe);
        border-color: var(--iui-menuitem-border-color, #fefefe);
    }
    .iui-menuitem-hovered, .iui-contextmenuitem-hovered {
        background: var(--iui-menuitem-hovered-background, #d9edfd);
        border-color: var(--iui-menuitem-hovered-border-color, #d9edfd);
        color: var(--iui-menuitem-hovered-color, black);
    }
    .iui-menuitem-selected, .iui-contextmenuitem-selected {
        background: var(--iui-menuitem-selected-background, #d9edfd);
        border-color: var(--iui-menuitem-selected-border-color, #d9edfd);
        color: var(--iui-menuitem-selected-color, black);
    }
    .iui-menuitem-selected a {
        color: black;
    }
    .iui-menu li > ul {
        background: var(--iui-menuitem-block-background, #fefefe);
        border-color: var(--iui-menuitem-block-border-color, #1e4691);
    }
    .iui-menu-expand-box {
        width: 16px;
        height: 16px;
    }
    .iui-menu-marker-expand-down::before {
        border: 4px solid #6791e1;
        border-color: #6791e1 transparent transparent transparent;
    }
    .iui-menu-marker-expand-down-rtl::before {
        border: 4px solid #6791e1;
        border-color: #6791e1 transparent transparent transparent;
    }
    .iui-menu-marker-expand-right::before {
        border: 4px solid #6791e1;
        border-color: transparent transparent transparent #6791e1;
    }
    .iui-menu-marker-expand-left::before {
        border: 4px solid #6791e1;
        border-color: transparent #6791e1 transparent transparent;
    }
    .iui-menu-marker-top::before {
        border: 4px solid #fefefe;
        border-color: transparent transparent #1e4691 transparent;
    }
    .iui-menu-marker-top::after {
        border: 4px solid #fefefe;
        border-color: transparent transparent #fefefe transparent;
    }
    .iui-menu-marker-top-rtl::before {
        border: 4px solid #fefefe;
        border-color: transparent transparent #1e4691 transparent;
    }
    .iui-menu-marker-top-rtl::after {
        border: 4px solid #fefefe;
        border-color: transparent transparent #fefefe transparent;
    }
    .iui-menu-marker-left::before {
        border: 4px solid #fefefe;
        border-color: transparent #1e4691 transparent transparent;
    }
    .iui-menu-marker-left::after {
        border: 4px solid #fefefe;
        border-color: transparent #fefefe transparent transparent;
    }
    .iui-menu-marker-right::before {
        border: 4px solid #fefefe;
        border-color: transparent transparent transparent #1e4691;
    }
    .iui-menu-marker-right::after {
        border: 4px solid #fefefe;
        border-color: transparent transparent transparent #fefefe;
    }
    .iui-menu-disabled > ul {
        background: var(--iui-menu-block-disabled-background, #808080);
    }
    
    /* Header */
    .iui-menuitem-header {
        background: var(--iui-menuitem-header-background, #1e4691);
    }
`;