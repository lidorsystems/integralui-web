import { c as css } from '../external/lit-element.js';

const iuiListBarDefaultStyle = css`
    .iui-listbar
    {
        background: var(--listbar-background, transparent);
        border: var(--listbar-border, thin solid #ababab);
        color: var(--listbar-color, black);
        cursor: var(--listbar-cursor, default);
        margin: var(--listbar-margin, 0);
        overflow: hidden;
        padding: var(--listbar-padding, 0);
        position: relative;

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
        background: var(--listbar-button-background, #e5e5e5);
        border: var(--listbar-button-border, thin solid #d5d5d5);
        height: var(--listbar-button-height, 20px);
        position: absolute;
        top: var(--listbar-button-up-top, 0);
        left: var(--listbar-button-up-left, 0);
        width: 100%;
        z-index: 2;
    }
    .iui-listbar-button-up-icon
    {
        background: var(--listbar-button-up-icon-url, url(../icons/expandbox-icons.png)) no-repeat 0 0;
        display: inline-block;
        margin: var(--listbar-button-up-icon-margin, 2px 45%);
        opacity: var(--listbar-button-up-icon-opacity, 0.5);
        width: var(--listbar-button-up-icon-width, 16px);
        height: var(--listbar-button-up-icon-height, 16px);

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
        background: var(--listbar-button-background, #e5e5e5);
        border: var(--listbar-button-border, thin solid #d5d5d5);
        bottom: var(--listbar-button-down-bottom, 0);
        height: var(--listbar-button-height, 20px);
        left: var(--listbar-button-down-left, 0);
        position: absolute;
        width: 100%;
        z-index: 1;
    }
    .iui-listbar-button-down-icon
    {
        background: var(--listbar-button-down-icon-url, url(../icons/expandbox-icons.png)) no-repeat 0 0;
        display: inline-block;
        margin: var(--listbar-button-down-icon-margin, 2px 45%);
        opacity: var(--listbar-button-down-icon-opacity, 0.5);
        width: var(--listbar-button-down-icon-width, 16px);
        height: var(--listbar-button-down-icon-height, 16px);

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
        background: var(--listbar-button-hover-background, #efefef);
        border-color: var(--listbar-button-hover-border-color, #dfdfdf);
    }

    /* Disabled State */
    .iui-listbar-disabled div
    {
        opacity: var(--listbar-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiListBarDefaultStyle };
