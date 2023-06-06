import { c as css } from '../../external/lit-element.js';

const iuiLabelDefaultStyle = css`
    .iui-label {
        background: var(--iui-label-background, transparent);
        border: var(--iui-label-border, thin solid transparent);
        border-color:  var(--iui-label-border-color, transparent);
        border-radius: var(--iui-label-border-radius, 3px);
        border-width: var(--iui-label-border-width, thin);
        box-shadow: var(--iui-label-box-shadow, 0 0 0 1px transparent);
        color: var(--iui-label-color, black);
        cursor: var(--iui-label-cursor, default);
        display: var(--iui-label-display, inline-block);
        float: var(--iui-label-float, none);
        height: var(--iui-label-height, auto);
        opacity: var(--iui-label-opacity, 1);
        overflow: hidden;
        margin: var(--iui-label-margin, 5px);
        padding: var(--iui-label-padding, 0);
        position: var(--iui-label-position, relative);
        text-align: var(--iui-label-text-align, left);
        vertical-align: var(--iui-label-vertical-align, top);
        width: var(--iui-label-width, auto);
        z-index: var(--iui-label-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-label-focused {
        background: var(--iui-label-focused-background, transparent);
        color: var(--iui-label-focused-color, black);
        font-weight: var(--iui-label-focused-font-weight, bold);
    }
    .iui-label-inline {
        background: transparent;
        border: 0;
        padding: var(--iui-label-padding, 5px 0 0 0);
    }
    .iui-label-block {
        background: var(--iui-label-background, white);
        border: var(--iui-label-border, thin solid #cecece);
        border-color:  var(--iui-label-border-color, #cecece);
        border-radius: var(--iui-label-border-radius, 3px);
        border-width: var(--iui-label-border-width, thin);
        box-shadow: var(--iui-label-box-shadow, 0 0 0 1px transparent);
        margin: 1px;
        padding: var(--iui-label-block-padding, 10px 3px 3px 3px);
        position: relative;
    }
    .iui-label-block-focused {
        box-shadow: var(--iui-label-box-shadow, 0 0 0 1px #cecece);
    }


    .iui-label-content {
        display: block;
    }

    .iui-label-value {
        left: 0;
        overflow: hidden;
        padding: var(--iui-label-value-padding, 1px 3px);
        pointer-events: none;
        position: absolute;
        text-overflow: ellipsis;
        top: 0;
        white-space: nowrap;
    }
    .iui-label-value-inline {
        background: var(--iui-label-value-background, white);
    }

    /* Disabled State */
    .iui-label-disabled {
        opacity: var(--iui-label-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiLabelDefaultStyle };
