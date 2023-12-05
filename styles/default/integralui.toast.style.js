import { c as css } from '../../external/lit-element.js';

const iuiToastDefaultStyle = css`
    .iui-toast {
        background: var(--iui-toast-background, #e5e5e5);
        border: var(--iui-toast-border, thin solid #cecece);
        border-color:  var(--iui-toast-border-color, #cecece);
        border-radius: var(--iui-toast-border-radius, 7px);
        border-width: var(--iui-toast-border-width, thin);
        box-shadow: var(--iui-toast-box-shadow, 2px 3px 3px #e5e5e5);
        color: var(--iui-toast-color, black);
        cursor: var(--iui-toast-cursor, default);
        display: var(--iui-toast-display, block);
        float: var(--iui-toast-float, none);
        font-size: var(--iui-toast-font-size, 1rem);
        font-style: var(--iui-toast-font-style, normal);
        height: var(--iui-toast-height, auto);
        opacity: var(--iui-toast-opacity, 1);
        overflow: hidden;
        margin: var(--iui-toast-margin, 5px);
        padding: var(--iui-toast-padding, 10px);
        position: var(--iui-toast-position, absolute);
        text-align: var(--iui-toast-text-align, left);
        vertical-align: var(--iui-toast-vertical-align, initial);
        width: var(--iui-toast-width, auto);
        z-index: var(--iui-toast-z-index, 999999999);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-toast-header {
        color: var(--iui-toast-header-color, black);
        display: block;
        font-weight: var(--iui-toast-header-font-weight, bold);
        padding: var(--iui-toast-header-padding, 5px 0 7px 0);
    }
    .iui-toast-content {
        color: var(--iui-toast-content-color, black);
        display: block;
    }
`;

export { iuiToastDefaultStyle };
