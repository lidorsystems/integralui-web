import { c as css } from '../../external/lit-element.js';

export const iuiListBarDefaultStyle = css`
    .iui-listbar {
        background: var(--iui-listbar-background, transparent);
        border: var(--iui-listbar-border, thin solid #cecece);
        border-color:  var(--iui-listbar-border-color, #cecece);
        border-radius: var(--iui-listbar-border-radius, 1px);
        border-width: var(--iui-listbar-border-width, thin);
        color: var(--iui-listbar-color, black);
        cursor: var(--iui-listbar-cursor, default);
        display: var(--iui-listbar-display, block);
        float: var(--iui-listbar-float, none);
        font-size: var(--iui-listbar-font-size, 1rem);
        font-style: var(--iui-listbar-font-style, normal);
        height: var(--iui-listbar-height, auto);
        margin: var(--iui-listbar-margin, 0);
        opacity: var(--iui-listbar-opacity, 1);
        overflow: hidden;
        padding: var(--iui-listbar-padding, 0);
        position: var(--iui-listbar-position, relative);
        text-align: var(--iui-listbar-text-align, left);
        width: var(--iui-listbar-width, auto);
        z-index: var(--iui-listbar-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-listbar-content
    {
        position: relative;
        z-index: 0;
    }
    .iui-listbar-button-up
    {
        background: var(--iui-listbar-button-background, #e5e5e5);
        border: var(--iui-listbar-button-border, thin solid #d5d5d5);
        height: var(--iui-listbar-button-height, 20px);
        position: absolute;
        top: var(--iui-listbar-button-up-top, 0);
        left: var(--iui-listbar-button-up-left, 0);
        width: 100%;
        z-index: 2;
    }
    .iui-listbar-button-up-icon
    {
        background: var(--iui-listbar-button-up-icon-url, url(../../icons/expandbox-icons.png)) no-repeat 0 0;
        display: inline-block;
        margin: var(--iui-listbar-button-up-icon-margin, 2px 45%);
        opacity: var(--iui-listbar-button-up-icon-opacity, 0.5);
        width: var(--iui-listbar-button-up-icon-width, 16px);
        height: var(--iui-listbar-button-up-icon-height, 16px);

        -ms-transform: rotate(-90deg); /* IE 9 */
        -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
        transform: rotate(-90deg);
    }
    .iui-listbar-button-up:hover .iui-listbar-button-up-icon
    {
        opacity: 1;
    }
    .iui-listbar-button-down
    {
        background: var(--iui-listbar-button-background, #e5e5e5);
        border: var(--iui-listbar-button-border, thin solid #d5d5d5);
        bottom: var(--iui-listbar-button-down-bottom, 0);
        height: var(--iui-listbar-button-height, 20px);
        left: var(--iui-listbar-button-down-left, 0);
        position: absolute;
        width: 100%;
        z-index: 1;
    }
    .iui-listbar-button-down-icon
    {
        background: var(--iui-listbar-button-down-icon-url, url(../../icons/expandbox-icons.png)) no-repeat 0 0;
        display: inline-block;
        margin: var(--iui-listbar-button-down-icon-margin, 2px 45%);
        opacity: var(--iui-listbar-button-down-icon-opacity, 0.5);
        width: var(--iui-listbar-button-down-icon-width, 16px);
        height: var(--iui-listbar-button-down-icon-height, 16px);

        -ms-transform: rotate(90deg); /* IE 9 */
        -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
        transform: rotate(90deg);
    }
    .iui-listbar-button-down:hover .iui-listbar-button-down-icon
    {
        opacity: 1;
    }
    .iui-listbar-button-up:hover, .iui-listbar-button-down:hover
    {
        background: var(--iui-listbar-button-hover-background, #efefef);
        border-color: var(--iui-listbar-button-hover-border-color, #dfdfdf);
    }

    /* Disabled State */
    .iui-listbar-disabled div
    {
        opacity: var(--iui-listbar-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;