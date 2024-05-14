import { c as css } from '../../../external/lit-element.js';

export const iuiMenuItemDarkStyle = css`
    .iui-menu {
        background: var(--iui-menu-background, #252526);
        color: var(--iui-menu-color, white);
    }
    .iui-menu-block {
        background: var(--iui-menu-block-background, #252526);
        border-color: var(--iui-menu-block-border-color, #151515);
    }
    .iui-menuitem-block {
        background: var(--iui-menuitem-block-background, #252526);
        border-color: var(--iui-menuitem-block-border-color, #151515);
        box-shadow: var(--iui-menuitem-block-box-shadow, 0 2px 5px #151515);
        color: var(--iui-menuitem-block-color, #cccccc);
    }
    .iui-menuitem-root {
        border-color: var(--iui-menuitem-root-border-color, #252526);
        color: var(--iui-menuitem-root-color, #cccccc);
    }
    .iui-contextmenuitem-root {
        border-color: var(--iui-menuitem-root-border-color, transparent);
        color: var(--iui-menuitem-root-color, #cccccc);
    }
    .iui-menuitem-root-vertical {
        background: var(--iui-menu-root-vertical-background, none);
        border-color: var(--iui-menuitem-root-vertical-border-color, #252526);
        color: var(--iui-menuitem-root-vertical-color, #cccccc);
    }
    .iui-menuitem-root-hovered, .iui-contextmenuitem-root-hovered {
        background: var(--iui-menuitem-root-hovered-background, #1177bb);
        border-color: var(--iui-menuitem-root-hovered-border-color, #1177bb);
        color: var(--iui-menuitem-root-hovered-color, white);
    }
    .iui-menuitem-root-selected {
        background: var(--iui-menuitem-root-selected-background, #153268);
        border-color: var(--iui-menuitem-root-selected-border-color, #0f244a);
        color: var(--iui-menuitem-root-selected-color, white);
    }
    .iui-contextmenuitem-root-selected {
        background: var(--iui-menuitem-root-selected-background, #1177bb);
        border-color: var(--iui-menuitem-root-selected-border-color, #1177bb);
        color: var(--iui-menuitem-root-selected-color, white);
    }

    .iui-menuitem, .iui-contextmenuitem {
        background: var(--iui-menuitem-background, #252526);
        color: var(--iui-menuitem-color, #cccccc);
    }
    .iui-menuitem-normal {
        background: var(--iui-menuitem-normal-background, transparent);
        border-color: var(--iui-menuitem-normal-border-color, transparent);
        color: var(--iui-menuitem-normal-color, #cccccc);
    }
    .iui-menuitem-hovered, .iui-contextmenuitem-hovered {
        background: var(--iui-menuitem-hovered-background, #1177bb);
        border-color: var(--iui-menuitem-hovered-border-color, #1177bb);
        color: var(--iui-menuitem-hovered-color, white);
    }
    .iui-menuitem-selected, .iui-contextmenuitem-selected {
        background: var(--iui-menuitem-selected-background, #1177bb);
        border-color: var(--iui-menuitem-selected-border-color, #1177bb);
        color: var(--iui-menuitem-selected-color, white);
    }
    .iui-menuitem-selected a {
        color: white;
    }
    .iui-menu li > ul {
        background: var(--iui-menuitem-block-background, #252526);
        border-color: var(--iui-menuitem-block-border-color, #151515);
        box-shadow: var(--iui-menuitem-block-box-shadow, 0 2px 5px #151515);
    }
    .iui-menu-expand-box {
        width: 16px;
        height: 16px;
    }
    .iui-menuitem-root-separator, .iui-menuitem-separator, .iui-contextmenuitem-root-separator, .iui-contextmenuitem-separator {
        background: var(--iui-menuitem-separator-background, #252526);
    }
    .iui-menuitem-root-separator > hr, .iui-menuitem-separator > hr, .iui-contextmenuitem-root-separator > hr, .iui-contextmenuitem-separator > hr {
        background: var(--iui-menuitem-separator-line-background, #151515);
    }
    .iui-menuitem-separator-content {
        background: var(--iui-menuitem-separator-content-background, #252526);
    }
    .iui-menu-marker-expand-down::before {
        border: 4px solid #0a4369;
        border-color: #0a4369 transparent transparent transparent;
    }
    .iui-menu-marker-expand-down-rtl::before {
        border: 4px solid #0a4369;
        border-color: #0a4369 transparent transparent transparent;
    }
    .iui-menu-marker-expand-right::before {
        border: 4px solid #0a4369;
        border-color: transparent transparent transparent #0a4369;
    }
    .iui-menu-marker-expand-left::before {
        border: 4px solid #0a4369;
        border-color: transparent #0a4369 transparent transparent;
    }
    .iui-menu-marker-top::before {
        border: 4px solid #484848;
        border-color: transparent transparent #1177bb transparent;
    }
    .iui-menu-marker-top::after {
        border: 4px solid #484848;
        border-color: transparent transparent #242424 transparent;
    }
    .iui-menu-marker-top-rtl::before {
        border: 4px solid #484848;
        border-color: transparent transparent #000000 transparent;
    }
    .iui-menu-marker-top-rtl::after {
        border: 4px solid #484848;
        border-color: transparent transparent #242424 transparent;
    }
    .iui-menu-marker-left::before {
        border: 4px solid #484848;
        border-color: transparent #000000 transparent transparent;
    }
    .iui-menu-marker-left::after {
        border: 4px solid #484848;
        border-color: transparent #242424 transparent transparent;
    }
    .iui-menu-marker-right::before {
        border: 4px solid #484848;
        border-color: transparent transparent transparent #000000;
    }
    .iui-menu-marker-right::after {
        border: 4px solid #484848;
        border-color: transparent transparent transparent #242424;
    }
    .iui-menu-disabled > ul {
        background: var(--iui-menu-block-disabled-background, #808080);
    }
    
    /* Header */
    .iui-menuitem-header {
        background: var(--iui-menuitem-header-background, #074269);
    }
`;