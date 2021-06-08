import { c as css } from '../external/lit-element.js';

const iuiSplitContainerDefaultStyle = css`
    .iui-splitcontainer
    {
        background: var(--splitcontainer-background, transparent);
        color: var(--splitcontainer-color, black);
        cursor: var(--splitcontainer-cursor, default);
        margin: var(--splitcontainer-margin, 0);
        overflow: hidden;
        padding: 0;
        position: relative;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-splitcontainer-splitter
    {
        background: var(--splitcontainer-splitter-background, #efefef);
        border: var(--splitcontainer-splitter-border, thin solid gray);
        margin: 0;
        padding: 0;
        position: absolute;
        overflow: visible;
        z-index: 3;
    }
    .iui-splitcontainer-splitter-horizontal
    {
        border-left-color: var(--splitcontainer-splitter-border-left-color, transparent);
        border-right-color: var(--splitcontainer-splitter-border-right-color, transparent);
    }
    .iui-splitcontainer-splitter-vertical
    {
        border-top-color: var(--splitcontainer-splitter-border-top-color, transparent);
        border-bottom-color: var(--splitcontainer-splitter-border-bottom-color, transparent);
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
        background-image: var(--splitcontainer-splitter-background-image, url(../icons/handle.png));
        background-repeat: repeat;
        display: block;
        margin: 0;
        padding: 0;
        vertical-align: middle;
    }
    .iui-splitcontainer-handle-horizontal span
    {
        height: var(--splitcontainer-handle-height, 9px);
        width: var(--splitcontainer-handle-width, 50px);
    }
    .iui-splitcontainer-handle-vertical span
    {
        height: var(--splitcontainer-handle-height, 50px);
        width: var(--splitcontainer-handle-width, 9px);
    }
    .iui-splitcontainer-swap-button
    {
        background: var(--splitcontainer-swap-button-background, transparent);
        border: var(--splitcontainer-swap-button-border, thin solid transparent);
        border-radius: var(--splitcontainer-swap-button-border-radius, 2px);
        display: inline-block;
        opacity: var(--splitcontainer-swap-button-opacity, 0.75);
        padding: var(--splitcontainer-swap-button-padding, 2px);
        position: absolute;
    }
    .iui-splitcontainer-swap-button:hover
    {
        background: var(--splitcontainer-swap-button-hover-background, #fefefe);
        border-color: var(--splitcontainer-swap-button-hover-border-color, #808080);
        opacity: var(--splitcontainer-swap-button-hover-opacity, 1);
    }
    .iui-splitcontainer-swap-button span
    {
        background-image: var(--splitcontainer-swap-button-background-image, url(../icons/swap.ico));
        display: block;
        height: var(--splitcontainer-swap-button-background-image-height, 16px);
        width: var(--splitcontainer-swap-button-background-image-width, 16px);
    }
    .iui-splitcontainer-swap-button-vertical span
    {
        -ms-transform: rotate(90deg); /* IE 9 */
        -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
        transform: rotate(90deg);
    }
    .iui-splitcontainer-tab
    {
        background: var(--splitcontainer-tab-background, transparent);
        border: var(--splitcontainer-tab-border, thin solid gray);
        color: var(--splitcontainer-tab-color, black);
        margin: var(--splitcontainer-tab-margin, 0);
        padding: var(--splitcontainer-tab-padding, 0);
        position: absolute;
    }
    .iui-splitcontainer-tab > div
    {
        padding: var(--splitcontainer-tab-block-padding, 3px 7px 3px 3px);
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
        background: var(--splitcontainer-tab-selected-background, white);
    }
    .iui-splitcontainer-panel
    {
        background: var(--splitcontainer-panel-background, white);
        border: var(--splitcontainer-panel-border, thin solid gray);
        color: var(--splitcontainer-panel-color, black);
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
        background: var(--splitcontainer-button-background, transparent);
        border: var(--splitcontainer-button-border, thin solid #808080);
        border-radius: var(--splitcontainer-button-border-radius, 2px);
        display: inline-block;
        margin: var(--splitcontainer-button-margin, 2px);
        opacity: var(--splitcontainer-button-opacity, 0.75);
        padding: var(--splitcontainer-button-padding, 0);
    }
    .iui-splitcontainer-button:hover
    {
        background: var(--splitcontainer-button-hover-background, #fefefe);
        opacity: var(--splitcontainer-button-hover-opacity, 1);
    }
    .iui-splitcontainer-button-selected
    {
        background: var(--splitcontainer-button-selected-background, #ffffff);
        opacity: var(--splitcontainer-button-selected-opacity, 1);
    }
    .iui-splitcontainer-button span
    {
        display: block;
        margin: 0;
        padding: 0;
        height: var(--splitcontainer-button-height, 16px);
        width: var(--splitcontainer-button-width, 16px);
    }

    .iui-splitcontainer-button-vertical span
    {
        background-image: var(--splitcontainer-button-vertical-background-image, url(../icons/line-vertical.ico));
    }
    .iui-splitcontainer-button-horizontal span
    {
        background-image: var(--splitcontainer-button-horizontal-background-image, url(../icons/line-horizontal.ico));
    }

    /* Disabled State */
    .iui-splitcontainer-disabled div
    {
        opacity: var(--splitcontainer-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiSplitContainerDefaultStyle };
