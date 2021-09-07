import { c as css } from '../external/lit-element.js';

const iuiAutoCompleteDefaultStyle = css`
    .iui-autocomplete {
        background: var(--autocomplete-background, white);
        border: var(--autocomplete-border, thin solid #cecece);
        border-radius: var(--autocomplete-border-radius, 1px);
        border-width: var(--autocomplete-border-width, thin);
        color: var(--autocomplete-color, black);
        cursor: var(--autocomplete-cursor, default);
        display: var(--autocomplete-display, block);
        float: var(--autocomplete-float, none);
        height: var(--autocomplete-height, auto);
        opacity: var(--autocomplete-opacity, 1);
        overflow: hidden;
        margin: var(--autocomplete-margin, 0);
        padding: var(--autocomplete-padding, 1px);
        position: var(--autocomplete-position, relative);
        width: var(--autocomplete-width, auto);

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
        background: var(--autocomplete-input-background, white);
        border: var(--autocomplete-input-border, 0);
        color: var(--autocomplete-input-color, black);
        font-size: var(--autocomplete-input-font-size, 1rem);
        padding: var(--autocomplete-input-padding, 3px);
        width: calc(100% - 4px);
    }
    .iui-autocomplete input:focus {
        outline: none !important;
    }

    /* Disabled State */
    .iui-autocomplete-disabled {
        opacity: var(--autocomplete-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiAutoCompleteDefaultStyle };
