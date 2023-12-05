
import { c as css } from '../../external/lit-element.js';

export const iuiAutoCompleteDefaultStyle = css`
    .iui-autocomplete {
        background: var(--iui-autocomplete-background, white);
        border: var(--iui-autocomplete-border, thin solid #cecece);
        border-radius: var(--iui-autocomplete-border-radius, 1px);
        border-width: var(--iui-autocomplete-border-width, thin);
        color: var(--iui-autocomplete-color, black);
        cursor: var(--iui-autocomplete-cursor, default);
        display: var(--iui-autocomplete-display, block);
        float: var(--iui-autocomplete-float, none);
        font-size: var(--iui-autocomplete-font-size, 1rem);
        font-style: var(--iui-autocomplete-font-style, normal);
        height: var(--iui-autocomplete-height, auto);
        opacity: var(--iui-autocomplete-opacity, 1);
        overflow: hidden;
        margin: var(--iui-autocomplete-margin, 0);
        padding: var(--iui-autocomplete-padding, 1px);
        position: var(--iui-autocomplete-position, relative);
        text-align: var(--iui-autocomplete-text-align, left);
        width: var(--iui-autocomplete-width, auto);
        z-index: var(--iui-autocomplete-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;


        background: white;
        border: thin solid #cecece;
        cursor: default;
        overflow: hidden;
        padding: 1px;
        position: relative;
    }
    .iui-autocomplete input {
        background: var(--iui-autocomplete-input-background, white);
        border: var(--iui-autocomplete-input-border, 0);
        color: var(--iui-autocomplete-input-color, black);
        font-size: var(--iui-autocomplete-input-font-size, 1rem);
        padding: var(--iui-autocomplete-input-padding, 3px);
        width: calc(100% - 4px);
    }
    .iui-autocomplete input::-webkit-search-cancel-button {
        position: relative;
        right: 0; 
    }
    .iui-autocomplete input:focus {
        outline: none !important;
    }

    /* Disabled State */
    .iui-autocomplete-disabled {
        opacity: var(--iui-autocomplete-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
