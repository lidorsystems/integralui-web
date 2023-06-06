import { c as css } from '../../external/lit-element.js';

export const iuiSplitContainerDefaultStyle = css`
    .iui-splitcontainer {
        background: var(--iui-splitcontainer-background, transparent);
        border: var(--iui-splitcontainer-border, 0);
        border-color:  var(--iui-splitcontainer-border-color, transparent);
        border-radius: var(--iui-splitcontainer-border-radius, 1px);
        border-width: var(--iui-splitcontainer-border-width, thin);
        color: var(--iui-splitcontainer-color, black);
        cursor: var(--iui-splitcontainer-cursor, default);
        display: var(--iui-splitcontainer-display, block);
        float: var(--iui-splitcontainer-float, none);
        height: var(--iui-splitcontainer-height, auto);
        margin: var(--iui-splitcontainer-margin, 0);
        opacity: var(--iui-splitcontainer-opacity, 1);
        overflow: hidden;
        padding: var(--iui-splitcontainer-padding, 0);
        position: var(--iui-splitcontainer-position, relative);
        width: var(--iui-splitcontainer-width, auto);
        z-index: var(--iui-splitcontainer-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-splitcontainer-splitter
    {
        background: var(--iui-splitcontainer-splitter-background, #efefef);
        border: var(--iui-splitcontainer-splitter-border, thin solid gray);
        margin: 0;
        padding: 0;
        position: absolute;
        overflow: visible;
        z-index: 3;
    }
    .iui-splitcontainer-splitter-horizontal
    {
        border-left-color: var(--iui-splitcontainer-splitter-border-left-color, transparent);
        border-right-color: var(--iui-splitcontainer-splitter-border-right-color, transparent);
    }
    .iui-splitcontainer-splitter-vertical
    {
        border-top-color: var(--iui-splitcontainer-splitter-border-top-color, transparent);
        border-bottom-color: var(--iui-splitcontainer-splitter-border-bottom-color, transparent);
    }
    .iui-splitcontainer-handle
    {
        margin: 0;
        padding: 0;
        position: absolute;
        overflow: hidden;
    }
    .iui-splitcontainer-handle span
    {
        background-image: var(--iui-splitcontainer-splitter-background-image, url(../../icons/handle.png));
        background-repeat: repeat;
        display: block;
        margin: 0;
        padding: 0;
        vertical-align: middle;
    }
    .iui-splitcontainer-handle-horizontal span
    {
        height: var(--iui-splitcontainer-handle-height, 9px);
        width: var(--iui-splitcontainer-handle-width, 50px);
    }
    .iui-splitcontainer-handle-vertical span
    {
        height: var(--iui-splitcontainer-handle-height, 50px);
        width: var(--iui-splitcontainer-handle-width, 9px);
    }
    .iui-splitcontainer-swap-button
    {
        background: var(--iui-splitcontainer-swap-button-background, transparent);
        border: var(--iui-splitcontainer-swap-button-border, thin solid transparent);
        border-radius: var(--iui-splitcontainer-swap-button-border-radius, 2px);
        display: inline-block;
        opacity: var(--iui-splitcontainer-swap-button-opacity, 0.75);
        padding: var(--iui-splitcontainer-swap-button-padding, 2px);
        position: absolute;
    }
    .iui-splitcontainer-swap-button:hover
    {
        background: var(--iui-splitcontainer-swap-button-hover-background, #fefefe);
        border-color: var(--iui-splitcontainer-swap-button-hover-border-color, #808080);
        opacity: var(--iui-splitcontainer-swap-button-hover-opacity, 1);
    }
    .iui-splitcontainer-swap-button span
    {
        background-image: var(--iui-splitcontainer-swap-button-background-image, url(../../icons/swap.ico));
        display: block;
        height: var(--iui-splitcontainer-swap-button-background-image-height, 16px);
        width: var(--iui-splitcontainer-swap-button-background-image-width, 16px);
    }
    .iui-splitcontainer-swap-button-vertical span
    {
        -ms-transform: rotate(90deg); /* IE 9 */
        -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
        transform: rotate(90deg);
    }
    .iui-splitcontainer-tab
    {
        background: var(--iui-splitcontainer-tab-background, transparent);
        border: var(--iui-splitcontainer-tab-border, thin solid gray);
        color: var(--iui-splitcontainer-tab-color, black);
        margin: var(--iui-splitcontainer-tab-margin, 0);
        padding: var(--iui-splitcontainer-tab-padding, 0);
        position: absolute;
    }
    .iui-splitcontainer-tab > div
    {
        padding: var(--iui-splitcontainer-tab-block-padding, 3px 7px 3px 3px);
        position: absolute;
        white-space: nowrap;
    }
    .iui-splitcontainer-tab-vertical > div
    {
        -ms-transform: rotate(90deg); /* IE 9 */
        -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
        transform: rotate(90deg);
    }
    .iui-splitcontainer-tab-selected
    {
        background: var(--iui-splitcontainer-tab-selected-background, white);
    }
    .iui-splitcontainer-panel
    {
        background: var(--iui-splitcontainer-panel-background, white);
        border: var(--iui-splitcontainer-panel-border, thin solid gray);
        color: var(--iui-splitcontainer-panel-color, black);
        overflow: hidden;
        position: absolute;
    }
    .iui-splitcontainer-button-block
    {
        cursor: default;
        display: inline-block;
        margin: 0;
        padding: 2px;
        position: absolute;
        overflow: hidden;
    }
    .iui-splitcontainer-button
    {
        background: var(--iui-splitcontainer-button-background, transparent);
        border: var(--iui-splitcontainer-button-border, thin solid #808080);
        border-radius: var(--iui-splitcontainer-button-border-radius, 2px);
        display: inline-block;
        margin: var(--iui-splitcontainer-button-margin, 2px);
        opacity: var(--iui-splitcontainer-button-opacity, 0.75);
        padding: var(--iui-splitcontainer-button-padding, 0);
    }
    .iui-splitcontainer-button:hover
    {
        background: var(--iui-splitcontainer-button-hover-background, #fefefe);
        opacity: var(--iui-splitcontainer-button-hover-opacity, 1);
    }
    .iui-splitcontainer-button-selected
    {
        background: var(--iui-splitcontainer-button-selected-background, #ffffff);
        opacity: var(--iui-splitcontainer-button-selected-opacity, 1);
    }
    .iui-splitcontainer-button span
    {
        display: block;
        margin: 0;
        padding: 0;
        height: var(--iui-splitcontainer-button-height, 16px);
        width: var(--iui-splitcontainer-button-width, 16px);
    }

    .iui-splitcontainer-button-vertical span
    {
        background-image: var(--iui-splitcontainer-button-vertical-background-image, url(../../icons/line-vertical.ico));
    }
    .iui-splitcontainer-button-horizontal span
    {
        background-image: var(--iui-splitcontainer-button-horizontal-background-image, url(../../icons/line-horizontal.ico));
    }

    /* Disabled State */
    .iui-splitcontainer-disabled div
    {
        opacity: var(--iui-splitcontainer-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
