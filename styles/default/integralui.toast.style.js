import { c as css } from '../../external/lit-element.js';

const iuiToastDefaultStyle = css`
    .iui-toast {
        background: var(--toast-background, #e5e5e5);
        border: var(--toast-border, thin solid #cecece);
        border-color:  var(--toast-border-color, #cecece);
        border-radius: var(--toast-border-radius, 7px);
        border-width: var(--toast-border-width, thin);
        box-shadow: var(--toast-box-shadow, 2px 3px 3px #e5e5e5);
        color: var(--toast-color, black);
        cursor: var(--toast-cursor, default);
        display: var(--toast-display, block);
        float: var(--toast-float, none);
        height: var(--toast-height, auto);
        opacity: var(--toast-opacity, 1);
        overflow: hidden;
        margin: var(--toast-margin, 5px);
        padding: var(--toast-padding, 10px);
        position: var(--toast-position, absolute);
        text-align: var(--toast-text-align, left);
        vertical-align: var(--toast-vertical-align, initial);
        width: var(--toast-width, auto);
        z-index: var(--toast-z-index, 999999999);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-toast-header {
        color: var(--toast-header-color, black);
        display: block;
        font-weight: var(--toast-header-font-weight, bold);
        padding: var(--toast-header-padding, 5px 0 7px 0);
    }
    .iui-toast-content {
        color: var(--toast-content-color, black);
        display: block;
    }
`;

export { iuiToastDefaultStyle };
