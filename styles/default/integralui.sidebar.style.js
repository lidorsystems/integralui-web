
import { c as css } from '../../external/lit-element.js';

export const iuiSideBarDefaultStyle = css`
    .iui-sidebar {
        background: var(--sidebar-background, transparent);
        border: var(--sidebar-border, 0);
        border-color:  var(--sidebar-border-color, transparent);
        border-radius: var(--sidebar-border-radius, 1px);
        border-width: var(--sidebar-border-width, thin);
        color: var(--sidebar-color, black);
        cursor: var(--sidebar-cursor, default);
        display: var(--sidebar-display, block);
        float: var(--sidebar-float, none);
        height: var(--sidebar-height, auto);
        margin: var(--sidebar-margin, 0);
        opacity: var(--sidebar-opacity, 1);
        overflow: hidden;
        padding: var(--sidebar-padding, 0);
        position: var(--sidebar-position, relative);
        width: var(--sidebar-width, auto);
        z-index: var(--sidebar-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-sidebar-block {
        background: #ededed;
        border: thin solid #d5d5d5;
        display: inline-block;
        overflow: hidden;
        position: absolute;
        vertical-align: top;
    }
    .iui-sidebar-block > ul {
        position: absolute;
        list-style: none;
        list-style-type: none;
        margin: 0;
        padding: 0;
        white-space: nowrap;
    }
    .iui-sidebar-content {
        background: var(--sidebar-content-background, white);
        border: var(--sidebar-content-border, thin solid #d5d5d5);
        border-color: var(--sidebar-content-border-color, #d5d5d5);
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    .iui-sidebar-line {
        background: var(--sidebar-line-background, #808080);
        display: var(--sidebar-line-display, none);
        left: 0;
        position: absolute;
        top: 0;
        z-index: 5;
    }

    /* Disabled State */
    .iui-sidebar-disabled div {
        opacity: var(--sidebar-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
