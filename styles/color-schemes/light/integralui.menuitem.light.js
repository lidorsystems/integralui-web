import { c as css } from '../../../external/lit-element.js';

export const iuiMenuItemLightStyle = css`
    .iui-menu
    {
        background-color: #2455b0;
    }
    .iui-menu > ul
    {
        background-color: #2455b0;
    }
    .iui-menuitem-root, .iui-menuitem-root-vertical
    {
        background: none;
        border: solid thin #2455b0;
        color: white;
    }
    .iui-menuitem-root-hovered, .iui-menuitem-root-selected
    {
        background-color: #153268 !important;
        border: solid thin #0f244a !important;
        color: white;
    }
    .iui-menuitem-root-hovered a
    {
        color: black;
    }
    .iui-menuitem
    {
        color: black;
    }
    .iui-menuitem-hovered, .iui-menuitem-selected, .iui-contextmenuitem-hovered, .iui-contextmenuitem-selected
    {
        background-color: #d9edfd !important;
        border: solid thin #d9edfd !important;
        color: black;
    }
    .iui-menuitem-selected a
    {
        color: black;
    }
    .iui-menu li > ul
    {
        background-color: #fefefe;
        border: solid thin #1e4691;
    }
    .iui-menu-expand-box
    {
        width: 16px;
        height: 16px;
    }
    .iui-menuitem, .iui-contextmenuitem
    {
        background-color: #fefefe;
        border: solid thin #fefefe;
        color: black;
    }
    .iui-menu-marker-expand-down::before
    {
        border: 4px solid #6791e1;
        border-color: #6791e1 transparent transparent transparent;
    }
    .iui-menu-marker-expand-down-rtl::before
    {
        border: 4px solid #6791e1;
        border-color: #6791e1 transparent transparent transparent;
    }
    .iui-menu-marker-expand-right::before
    {
        border: 4px solid #6791e1;
        border-color: transparent transparent transparent #6791e1;
    }
    .iui-menu-marker-expand-left::before
    {
        border: 4px solid #6791e1;
        border-color: transparent #6791e1 transparent transparent;
    }
    .iui-menu-marker-top::before
    {
        border: 4px solid #fefefe;
        border-color: transparent transparent #1e4691 transparent;
    }
    .iui-menu-marker-top::after
    {
        border: 4px solid #fefefe;
        border-color: transparent transparent #fefefe transparent;
    }
    .iui-menu-marker-top-rtl::before
    {
        border: 4px solid #fefefe;
        border-color: transparent transparent #1e4691 transparent;
    }
    .iui-menu-marker-top-rtl::after
    {
        border: 4px solid #fefefe;
        border-color: transparent transparent #fefefe transparent;
    }
    .iui-menu-marker-left::before
    {
        border: 4px solid #fefefe;
        border-color: transparent #1e4691 transparent transparent;
    }
    .iui-menu-marker-left::after
    {
        border: 4px solid #fefefe;
        border-color: transparent #fefefe transparent transparent;
    }
    .iui-menu-marker-right::before
    {
        border: 4px solid #fefefe;
        border-color: transparent transparent transparent #1e4691;
    }
    .iui-menu-marker-right::after
    {
        border: 4px solid #fefefe;
        border-color: transparent transparent transparent #fefefe;
    }
    .iui-menu-disabled > ul
    {
        background: #808080;
    }
    .iui-menuitem-root-disabled, .iui-menuitem-disabled
    {
        border: solid thin transparent;
        color: #cecece;
    }

    .iui-contextmenuitem-root-hovered, .iui-contextmenuitem-root-selected {
        background: var(--iui-contextmenuitem-hovered-background, #d9edfd);
        border: var(--iui-contextmenuitem-hovered-border, thin solid #d9edfd);
        color: var(--iui-contextmenuitem-hovered-color, black);
    }
`;