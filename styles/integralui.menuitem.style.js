import { c as css } from '../external/lit-element.js';

const iuiMenuItemDefaultStyle = css`
    .iui-menu {
        background: var(--menu-background, #f5f5f5);
        border: var(--menu-border, 0);
        border-color:  var(--menu-border-color, transparent);
        border-radius: var(--menu-border-radius, 1px);
        border-width: var(--menu-border-width, thin);
        color: var(--menu-color, black);
        cursor: var(--menu-cursor, default);
        display: var(--menu-display, block);
        float: var(--menu-float, none);
        height: var(--menu-height, auto);
        margin: var(--menu-margin, 0);
        opacity: var(--menu-opacity, 1);
        overflow: hidden;
        padding: var(--menu-padding, 0);
        position: var(--menu-position, relative);
        width: var(--menu-width, auto);
    }
    .iui-menu-block, .iui-menuitem-block, .iui-contextmenuitem-block
    {
        background: transparent;
        list-style-type: none;
        margin: 0;
        padding: 3px;
        position: relative;
    }
    .iui-menuitem-block, .iui-contextmenuitem-block
    {
        background: #f5f5f5;
        border: solid thin #dedede;
        margin: 0;
        padding: 1px;
        position: absolute;
        z-index: 999;
    }
    .iui-menuitem-root, .iui-contextmenuitem-root
    {
        background: none;
        border: thin solid transparent;
        color: black;
        display: inline-block;
        position: relative;
        list-style-type: none;
        width: var(--menuitem-root-margin, 0 3px);
        padding: 5px 6px 5px 4px;
        white-space: nowrap;
        width: var(--menuitem-root-width, auto);
    }
    .iui-menuitem-root-vertical, .iui-contextmenuitem-root-vertical
    {
        border: thin solid transparent;
        display: block;
        position: relative;
        list-style-type: none;
        margin: 3px 0;
        padding: 5px 6px;
        white-space: nowrap;
    }
    .iui-menuitem-root-disabled, .iui-menuitem-disabled, , .iui-contextmenuitem-root-disabled, .iui-contextmenuitem-disabled
    {
        opacity: 0.6;
        pointer-events: none;
    }
    .iui-menuitem-root-hovered, .iui-menuitem-root-selected, .iui-contextmenuitem-root-hovered, .iui-contextmenuitem-root-selected
    {
        background: #e5e5e5;
        border-color: #dedede;
    }
    .iui-menuitem-hovered, .iui-menuitem-selected, .iui-contextmenuitem-hovered, .iui-contextmenuitem-root-selected
    {
        background: #ededed;
        border-color: #e5e5e5;
    }
    .iui-menuitem-root-content, .iui-contextmenuitem-root-content
    {
        display: inline-block;
        padding: 0 2px;
        vertical-align: middle;
    }
    .iui-menuitem-content, .iui-contextmenuitem-content
    {
        display: inline-block;
        vertical-align: middle;
    }
    .iui-menuitem-root:first-of-type, .iui-contextmenuitem-root:first-of-type
    {
        margin: auto 0;
    }

    .iui-menuitem-root:last-of-type, .iui-contextmenuitem-root:last-of-type
    {
        margin-right: 0;
    }
    .iui-menu-marker-expand-space
    {
        padding-right: 20px;
    }
    .iui-menu-marker-expand-space-rtl
    {
        padding-left: 20px;
    }
    .iui-menu-marker-expand-down::before
    {
        content: "";
        border: 4px solid #ababab;
        border-color: #ababab transparent transparent transparent;
        position: absolute;
        top: 45%;
        right: 5px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-down::after
    {
        content: "";
        border: 4px solid transparent;
        border-color: transparent transparent transparent transparent;
        position: absolute;
        top: 45%;
        right: 5px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-down-rtl::before
    {
        content: "";
        border: 4px solid #ababab;
        border-color: #ababab transparent transparent transparent;
        position: absolute;
        top: 45%;
        left: 5px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-down-rtl::after
    {
        content: "";
        border: 4px solid transparent;
        border-color: transparent transparent transparent transparent;
        position: absolute;
        top: 45%;
        left: 5px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-right::before
    {
        content: "";
        border: 4px solid #ababab;
        border-color: transparent transparent transparent #ababab;
        position: absolute;
        top: 35%;
        left: 92%;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-right::after
    {
        content: "";
        border: 4px solid transparent;
        border-color: transparent transparent transparent transparent;
        position: absolute;
        top: 35%;
        left: 92%;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-left::before
    {
        content: "";
        border: 4px solid #ababab;
        border-color: transparent #ababab transparent transparent;
        position: absolute;
        top: 35%;
        left: 2%;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-left::after
    {
        content: "";
        border: 4px solid transparent;
        border-color: transparent transparent transparent transparent;
        position: absolute;
        top: 35%;
        left: 2%;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-top::before
    {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent #1e4691 transparent;
        position: absolute;
        top: -9px;
        left: 10px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-top::after
    {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent #fefefe transparent;
        position: absolute;
        top: -8px;
        left: 10px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-top-rtl::before
    {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent #1e4691 transparent;
        position: absolute;
        top: -9px;
        right: 10px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-top-rtl::after
    {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent #fefefe transparent;
        position: absolute;
        top: -8px;
        right: 10px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-left::before
    {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent #1e4691 transparent transparent;
        position: absolute;
        top: 12px;
        left: -9px;
    }
    .iui-menu-marker-left::after
    {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent #fefefe transparent transparent;
        position: absolute;
        top: 12px;
        left: -8px;
    }
    .iui-menu-marker-right::before
    {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent transparent #1e4691;
        position: absolute;
        top: 12px;
        right: -9px;
    }
    .iui-menu-marker-right::after
    {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent transparent #fefefe;
        position: absolute;
        top: 12px;
        right: -8px;
    }


    .iui-menuitem, .iui-contextmenuitem
    {
        border: thin solid transparent;
        display: block;
        list-style-type: none;
        margin: 1px 0;
        padding: 3px 4px 3px 2px;
        position: relative;
        white-space: nowrap;
        width: var(--menuitem-width, auto);
    }
    .iui-contextmenuitem {
        padding: 5px 6px 5px 4px;
    }
    .iui-menuitem:first-of-type, .iui-contextmenuitem:first-of-type
    {
        margin-top: 0;
    }
    .iui-menuitem:last-of-type, .iui-contextmenuitem:last-of-type
    {
        margin-bottom: 0;
    }
    .iui-menuitem-expand, .iui-contextmenuitem-expand
    {
        background-position: -14px 0px;
    }
    .iui-menuitem-root-separator, .iui-menuitem-separator, .iui-contextmenuitem-root-separator, .iui-contextmenuitem-separator
    {
        background: transparent;
        border: 0;
        margin: 0;
        padding: 3px;
    }
    .iui-menuitem-root-separator > hr, .iui-menuitem-separator > hr, .iui-contextmenuitem-root-separator > hr, .iui-contextmenuitem-separator > hr
    {
        background: #e5e5e5;
        border: 0;
        margin: 0;
        padding: 0;
        height: 1px;
    }
    .iui-menu-load
    {
        background: transparent;
        display: inline-block;
        width: 16px;
        height: 16px;
        position: absolute;
        top: 0;
        right: 2px;
        vertical-align: middle;
    }
    .iui-menu-load-rtl
    {
        background: transparent;
        display: inline-block;
        width: 16px;
        height: 16px;
        position: absolute;
        top: 0;
        left: 2px;
        vertical-align: middle;
    }

    /* Disabled State */
    .iui-menu-disabled div
    {
        opacity: 0.75;
        pointer-events: none;
    }
`;

export { iuiMenuItemDefaultStyle };
