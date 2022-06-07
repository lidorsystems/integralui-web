import { c as css } from '../../external/lit-element.js';

const iuiLabelDefaultStyle = css`
    .iui-label {
        background: var(--label-background, transparent);
        border: var(--label-border, thin solid transparent);
        border-color:  var(--label-border-color, transparent);
        border-radius: var(--label-border-radius, 3px);
        border-width: var(--label-border-width, thin);
        box-shadow: var(--label-box-shadow, 0 0 0 1px transparent);
        color: var(--label-color, black);
        cursor: var(--label-cursor, default);
        display: var(--label-display, inline-block);
        float: var(--label-float, none);
        height: var(--label-height, auto);
        opacity: var(--label-opacity, 1);
        overflow: hidden;
        margin: var(--label-margin, 5px);
        padding: var(--label-padding, 0);
        position: var(--label-position, relative);
        text-align: var(--label-text-align, left);
        vertical-align: var(--label-vertical-align, top);
        width: var(--label-width, auto);
        z-index: var(--label-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-label-focused {
        background: var(--label-focused-background, transparent);
        color: var(--label-focused-color, black);
        font-weight: var(--label-focused-font-weight, bold);
    }
    .iui-label-inline {
        background: transparent;
        border: 0;
        padding: var(--label-padding, 5px 0 0 0);
    }
    .iui-label-block {
        background: var(--label-background, white);
        border: var(--label-border, thin solid #cecece);
        border-color:  var(--label-border-color, #cecece);
        border-radius: var(--label-border-radius, 3px);
        border-width: var(--label-border-width, thin);
        box-shadow: var(--label-box-shadow, 0 0 0 1px transparent);
        margin: 1px;
        padding: var(--label-block-padding, 10px 3px 3px 3px);
        position: relative;
    }
    .iui-label-block-focused {
        box-shadow: var(--label-box-shadow, 0 0 0 1px #cecece);
    }


    .iui-label-content {
        display: block;
    }

    .iui-label-value {
        left: 0;
        overflow: hidden;
        padding: var(--label-value-padding, 1px 3px);
        pointer-events: none;
        position: absolute;
        text-overflow: ellipsis;
        top: 0;
        white-space: nowrap;
    }
    .iui-label-value-inline {
        background: var(--label-value-background, white);
    }

    /* Disabled State */
    .iui-label-disabled {
        opacity: var(--label-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiLabelDefaultStyle };
