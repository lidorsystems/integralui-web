import { c as css } from '../../external/lit-element.js';

export const iuiEditorsDefaultStyle = css`
    .iui-editor-checkbox {
        background-position: 0 0;
        background-repeat: no-repeat;
        display: inline-block;
        padding: 0;
        margin: 0;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-editor-checkbox-checked {
        background-image: url(../../icons/checkbox-checked.ico);
    }
    .iui-editor-checkbox-indeterminate {
        background-image: url(../../icons/checkbox-indeterminate.ico);
    }
    .iui-editor-checkbox-unchecked {
        background-image: url(../../icons/checkbox-unchecked.ico);
    }
    .iui-editor-checkbox-disabled {
        opacity: 0.5;
        pointer-events: none;
    }
    .iui-editor-color-background {
        display: inline-block;
        height: 16px;
        position: absolute;
        top: 0;
        left: 0;
        width: 16px;
    }
    .iui-editor-color-value {
        margin: 0 0 0 22px;
    }

    .iui-editor-dropdown-button {
        display: inline-block;
        float: right;
        opacity: 0.4;
    }
    .iui-editor-dropdown-button-hover {
        opacity: 1;
    }
    .iui-editor-dropdown-button span {
        background-image: url(../../icons/down.ico);
        display: block;
        padding: 0;
        margin: 2px 0 0 0;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-editor-image {
        text-align: center;
    }
    .iui-editor-image img {
        padding: 3px;
    }
    .iui-editor-label {
        display: inline-block;
        margin: var(--iui-editor-label-margin, 0);
        padding: var(--iui-editor-label-padding, 2px 0 0 0);
    }
    .iui-editor-numeric {
        background: transparent;
        border: 0;
        font-size: 1.01em;
        height: 100%;
        padding: 1px;
        text-align: right;
        width: calc(100% - 2px);
    }
    .iui-editor-numeric[type=number]::-webkit-inner-spin-button, .iui-editor-numeric[type=number]::-webkit-outer-spin-button {
        margin-left: 5px;
        opacity: 1;
    }
    .iui-editor-numeric:focus {
        outline: none !important;
    }
    .iui-editor-progress-block {
        position: relative;
    }
    .iui-editor-progress {
        background: var(--iui-editor-progress-background, white);
        border: var(--iui-editor-progress-border, thin solid #cecece);
        border-radius: var(--iui-editor-progress-border-radius, 3px);
        color: black;
        cursor: default;
        margin: var(--iui-editor-progress-margin, 2px 0 0 0);
        overflow: hidden;
        padding: var(--iui-editor-progress-padding, 2px);
        position: relative;
        width: var(--iui-editor-progress-width, calc(100% - 45px));
    }
    .iui-editor-progress-full {
        width: auto;
    }
    .iui-editor-progress-content {
        background: var(--iui-editor-progress-content-background, #bebebe);
        border-radius: var(--iui-editor-progress-content-border-radius, 3px);
        height: var(--iui-editor-progress-content-height, 12px);
    }
    .iui-editor-progress-label {
        background: var(--iui-editor-progress-label-background, transparent);
        display: block;
        position: absolute;
        right: var(--iui-editor-progress-label-right, 2px);
        text-align: right;
        top: var(--iui-editor-progress-label-top, 2px);
        width: var(--iui-editor-progress-label, 36px);
        z-index: 3;
    }
    .iui-editor-rating {
        padding: 0;
    }
    .iui-editor-text {
        background: var(--iui-editor-text-background, white);
        border: 0;
        font: inherit;
        font-family: inherit;
        height: var(--iui-editor-text-height, calc(100% - 2px));
        margin: var(--iui-editor-text-margin, -2px 0 0 -2px);
        padding: var(--iui-editor-text-padding, 3px);
        width: var(--iui-editor-text-width, calc(100% - 2px));
    }
    /*.iui-editor-text::-webkit-search-cancel-button {
        position: relative;
        right: 0; 
    }*/
    .iui-editor-text:focus {
        outline: none !important;
    }
    .iui-editor-disabled {
        opacity: 0.5;
        pointer-events: none;
    }
    .iui-editor-disabled img {
        opacity: 0.5;
    }
    .iui-editor-disabled .iui-editor-progress-content {
        opacity: 0.5;
    }
    .iui-editor-disabled .iui-editor-dropdown-button-hover {
        opacity: 0.4;
    }
`;
