import { c as css } from '../external/lit-element.js';

const iuiAutoCompleteDefaultStyle = css`
    .iui-autocomplete {
        background: white;
        border: thin solid #cecece;
        cursor: default;
        overflow: hidden;
        padding: 1px;
        position: relative;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-autocomplete input {
        border: 0;
        font-size: 1rem;
        padding: 3px;
        width: calc(100% - 4px);
    }
    .iui-autocomplete input:focus {
        outline: none !important;
    }

    /* Disabled State */
    .iui-autocomplete-disabled {
        opacity: 0.75;
        pointer-events: none;
    }
`;

export { iuiAutoCompleteDefaultStyle };
