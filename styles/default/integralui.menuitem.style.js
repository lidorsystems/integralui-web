
import { c as css } from '../../external/lit-element.js';

export const iuiMenuItemDefaultStyle = css`
    .iui-menu {
        background: var(--iui-menu-background, #f5f5f5);
        border: var(--iui-menu-border, 0);
        border-color:  var(--iui-menu-border-color, transparent);
        border-radius: var(--iui-menu-border-radius, 1px);
        border-width: var(--iui-menu-border-width, thin);
        color: var(--iui-menu-color, black);
        cursor: var(--iui-menu-cursor, default);
        display: var(--iui-menu-display, block);
        float: var(--iui-menu-float, none);
        font-size: var(--iui-menu-font-size, 1rem);
        font-style: var(--iui-menu-font-style, normal);
        height: var(--iui-menu-height, auto);
        margin: var(--iui-menu-margin, 0);
        opacity: var(--iui-menu-opacity, 1);
        overflow: hidden;
        padding: var(--iui-menu-padding, 0);
        position: var(--iui-menu-position, relative);
        text-align: var(--iui-menu-text-align, left);
        width: var(--iui-menu-width, auto);
        z-index: var(--iui-menu-z-index, auto);
        
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-menu-block {
        background: var(--iui-menu-block-background, transparent);
        list-style-type: none;
        margin: 0;
        padding: var(--iui-menu-block-padding, 3px);
        position: relative;
    }
    .iui-menuitem-block, .iui-contextmenuitem-block {
        background: var(--iui-menuitem-block-background, #f5f5f5);
        border: var(--iui-menuitem-block-border, thin solid #dedede);
        border-color: var(--iui-menuitem-block-border-color, #dedede);
        padding: var(--iui-menuitem-block-padding, 1px);
        list-style-type: none;
        margin: 0;
        position: absolute;
        z-index: 99999;
    }
    .iui-menuitem-root, .iui-contextmenuitem-root {
        background: var(--iui-menuitem-root-background, none);
        border: var(--iui-menuitem-root-border, thin solid transparent);
        border-color: var(--iui-menuitem-root-border-color, transparent);
        color: var(--iui-menuitem-root-color, black);
        display: inline-block;
        list-style-type: none;
        margin: var(--iui-menuitem-root-margin, 0 3px);
        padding: var(--iui-menuitem-root-padding, 5px 6px 5px 4px);
        position: relative;
        white-space: nowrap;
        width: var(--iui-menuitem-root-width, auto);
    }
    .iui-menuitem-root-vertical, .iui-contextmenuitem-root-vertical {
        border: var(--iui-menuitem-root-vertical-border, thin solid transparent);
        border-color: var(--iui-menuitem-root-vertical-border-color, transparent);
        display: block;
        margin: var(--iui-menuitem-root-vertical-margin, 3px 0);
        padding: var(--iui-menuitem-root-vertical-padding, 5px 6px);
        position: relative;
        list-style-type: none;
        margin: 3px 0;
        padding: 5px 6px;
        white-space: nowrap;
    }
    .iui-menuitem-root-disabled, .iui-menuitem-disabled, .iui-contextmenuitem-root-disabled, .iui-contextmenuitem-disabled {
        background: var(--iui-menuitem-disabled-background, transparent);
        opacity: 0.5;
    }
    .iui-menuitem-root-hovered, .iui-contextmenuitem-root-hovered {
        background: var(--iui-menuitem-root-hovered-background, #e5e5e5);
        border-color: var(--iui-menuitem-root-hovered-border-color, #e5e5e5);
        color: var(--iui-menuitem-root-hovered-color, black);
    }
    .iui-menuitem-root-selected, .iui-contextmenuitem-root-selected {
        background: var(--iui-menuitem-root-selected-background, #e5e5e5);
        border-color: var(--iui-menuitem-root-selected-border-color, #e5e5e5);
        color: var(--iui-menuitem-root-selected-color, black);
    }
    .iui-menuitem-root-content, .iui-contextmenuitem-root-content {
        display: inline-block;
        padding: var(--iui-menuitem-root-content-background, 0 2px);
        vertical-align: middle;
    }
    .iui-menuitem-root:first-of-type, .iui-contextmenuitem-root:first-of-type {
        margin: auto 0;
    }

    .iui-menuitem-root:last-of-type, .iui-contextmenuitem-root:last-of-type {
        margin-right: 0;
    }
    .iui-menu-marker-expand-space {
        padding-right: 20px;
    }
    .iui-menu-marker-expand-space-rtl {
        padding-left: 20px;
    }
    .iui-menu-marker-expand-down::before {
        content: "";
        border: 4px solid #ababab;
        border-color: #ababab transparent transparent transparent;
        position: absolute;
        top: 45%;
        right: 5px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-down::after {
        content: "";
        border: 4px solid transparent;
        border-color: transparent transparent transparent transparent;
        position: absolute;
        top: 45%;
        right: 5px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-down-rtl::before {
        content: "";
        border: 4px solid #ababab;
        border-color: #ababab transparent transparent transparent;
        position: absolute;
        top: 45%;
        left: 5px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-down-rtl::after {
        content: "";
        border: 4px solid transparent;
        border-color: transparent transparent transparent transparent;
        position: absolute;
        top: 45%;
        left: 5px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-right::before {
        content: "";
        border: 4px solid #ababab;
        border-color: transparent transparent transparent #ababab;
        position: absolute;
        top: 35%;
        left: 92%;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-right::after {
        content: "";
        border: 4px solid transparent;
        border-color: transparent transparent transparent transparent;
        position: absolute;
        top: 35%;
        left: 92%;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-left::before {
        content: "";
        border: 4px solid #ababab;
        border-color: transparent #ababab transparent transparent;
        position: absolute;
        top: 35%;
        left: 2%;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-expand-left::after {
        content: "";
        border: 4px solid transparent;
        border-color: transparent transparent transparent transparent;
        position: absolute;
        top: 35%;
        left: 2%;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-top::before {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent #1e4691 transparent;
        position: absolute;
        top: -9px;
        left: 10px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-top::after {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent #fefefe transparent;
        position: absolute;
        top: -8px;
        left: 10px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-top-rtl::before {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent #1e4691 transparent;
        position: absolute;
        top: -9px;
        right: 10px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-top-rtl::after {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent #fefefe transparent;
        position: absolute;
        top: -8px;
        right: 10px;
        width: 0;
        height: 0;
    }
    .iui-menu-marker-left::before {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent #1e4691 transparent transparent;
        position: absolute;
        top: 12px;
        left: -9px;
    }
    .iui-menu-marker-left::after {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent #fefefe transparent transparent;
        position: absolute;
        top: 12px;
        left: -8px;
    }
    .iui-menu-marker-right::before {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent transparent #1e4691;
        position: absolute;
        top: 12px;
        right: -9px;
    }
    .iui-menu-marker-right::after {
        content: "";
        border: 4px solid #fefefe;
        border-color: transparent transparent transparent #fefefe;
        position: absolute;
        top: 12px;
        right: -8px;
    }


    .iui-menuitem, .iui-contextmenuitem {
        background: var(--iui-menuitem-background, transparent);
        border: var(--iui-menuitem-border, thin solid transparent);
        border-color: var(--iui-menuitem-border-color, transparent);
        color: var(--iui-menuitem-color, black);
        display: block;
        font-size: var(--iui-menuitem-font-size, 1rem);
        font-style: var(--iui-menuitem-font-style, normal);
        list-style-type: none;
        margin: var(--iui-menuitem-margin, 1px 0);
        padding: var(--iui-menuitem-padding, 3px 4px 3px 2px);
        position: relative;
        text-align: var(--iui-menuitem-text-align, left);
        white-space: nowrap;
        width: var(--iui-menuitem-width, auto);
    }
    .iui-menuitem-hovered, .iui-contextmenuitem-hovered {
        background: var(--iui-menuitem-hovered-background, #ededed);
        border-color: var(--iui-menuitem-hovered-border-color, #e5e5e5);
    }
    .iui-menuitem-selected, .iui-contextmenuitem-root-selected {
        background: var(--iui-menuitem-selected-background, #ededed);
        border-color: var(--iui-menuitem-selected-border-color, #e5e5e5);
    }
    .iui-menuitem-content, .iui-contextmenuitem-content {
        display: inline-block;
        vertical-align: middle;
    }
    .iui-menuitem:first-of-type, .iui-contextmenuitem:first-of-type {
        margin-top: 0;
    }
    .iui-menuitem:last-of-type, .iui-contextmenuitem:last-of-type {
        margin-bottom: 0;
    }
    .iui-menuitem-expand, .iui-contextmenuitem-expand {
        background-position: -14px 0px;
    }
    .iui-menuitem-root-separator, .iui-menuitem-separator, .iui-contextmenuitem-root-separator, .iui-contextmenuitem-separator {
        background: var(--iui-menuitem-separator-background, transparent);
        border: 0;
        margin: 0;
        padding: var(--iui-menuitem-separator-padding, 3px);
    }
    .iui-menuitem-root-separator > hr, .iui-menuitem-separator > hr, .iui-contextmenuitem-root-separator > hr, .iui-contextmenuitem-separator > hr {
        background: var(--iui-menuitem-separator-line-background, #e5e5e5);
        border: 0;
        margin: var(--iui-menuitem-separator-line-margin, 0);
        padding: var(--iui-menuitem-separator-line-padding, 0);
        height: var(--iui-menuitem-separator-line-height, 1px);
    }
    .iui-menuitem-separator-content {
        background: var(--iui-menuitem-separator-content-background, transparent);
        border: var(--iui-menuitem-separator-content-border, thin solid transparent);
        border-color: var(--iui-menuitem-separator-content-border-color, transparent);
        border-radius: var(--iui-menuitem-separator-content-border-radius, 3);
        display: inline-block;
        font-style: var(--iui-menuitem-separator-content-font-style, normal);
        font-weight: var(--iui-menuitem-separator-content-font-weight, normal);
        margin: var(--iui-menuitem-separator-content-margin, 0);
        padding: var(--iui-menuitem-separator-content-padding, 5px 4px 5px 0);
        position: relative;
        text-align: var(--iui-menuitem-separator-content-text-align, left);
        width: var(--iui-menuitem-separator-content-width, auto);
        z-index: 1;
    }
    .iui-menuitem-inline-separator {
        position: absolute;
        top: 50%;
        width: calc(100% - 6px);
        z-index: 0;
    }
    .iui-menu-load {
        background: transparent;
        display: inline-block;
        width: 16px;
        height: 16px;
        position: absolute;
        top: 0;
        right: 2px;
        vertical-align: middle;
    }
    .iui-menu-load-rtl {
        background: transparent;
        display: inline-block;
        width: 16px;
        height: 16px;
        position: absolute;
        top: 0;
        left: 2px;
        vertical-align: middle;
    }
    .iui-menuitem-content-template {
        display: var(--iui-menuitem-content-template-display, inline-block);
        overflow: hidden;
        vertical-align: var(--iui-menuitem-content-template-vertical-align, middle);
        width: var(--iui-menuitem-content-template-width, 100%);
    }

    /* Header */
    .iui-menuitem-header {
        background: var(--iui-menuitem-header-background, #bfbfbf);
        border-radius: var(--iui-menuitem-header-border-radius, 3px);
        color: var(--iui-menuitem-header-color, white);
        display: block;
        font-weight: var(--iui-menuitem-header-font-weight, bold);
        list-style-type: none;
        margin: var(--iui-menuitem-header-margin, 0 0 2px 0);
        padding: var(--iui-menuitem-header-padding, 5px 7px);
        text-align: var(--iui-menuitem-header-text-align, center);
        white-space: nowrap;
    }
    
    /* Shortcuts */
    .iui-menuitem-label-main {
        display: inline-block;
        width: var(--iui-menuitem-label-width, calc(100% - 104px));
    }
    .iui-menuitem-shortcut {
        display: inline-block;
        font-size: var(--iui-menuitem-shortcut-font-size, 0.875rem);
        text-align: var(--iui-menuitem-shortcut-text-align, right);
        width: var(--iui-menuitem-shortcut-width, 100px);
    }

    /* Disabled State */
    .iui-menu-disabled div {
        opacity: 0.75;
        pointer-events: none;
    }

    /* CheckBox */
    .iui-menuitem-checkbox {
        background-image: var(--iui-menuitem-checkbox-background-image, url(../../icons/checkbox-unchecked.ico));
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: var(--iui-menuitem-checkbox-padding, 0);
        margin: var(--iui-menuitem-checkbox-margin, 0 3px);
        width: 16px;
        height: 16px;
        vertical-align: var(--iui-menuitem-checkbox-vertical-align, middle);
    }
    .iui-menuitem-checkbox-checked {
        background-image: var(--iui-menuitem-checkbox-checked-background-image, url(../../icons/checkbox-checked.ico));
    }
`;
