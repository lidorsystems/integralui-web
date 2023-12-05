import { c as css } from '../../external/lit-element.js';

const iuiDropDownFilterDefaultStyle = css`
    .iui-dropdownfilter {
        background: var(--iui-dropdownfilter-background, transparent);
        border: var(--iui-dropdownfilter-border, thin solid #cecece);
        border-color: var(--iui-dropdownfilter-border-color, #cecece);
        border-radius: var(--iui-dropdownfilter-border-radius, 1px);
        border-width: var(--iui-dropdownfilter-border-width, thin);
        color: var(--iui-dropdownfilter-color, black);
        cursor: var(--iui-dropdownfilter-cursor, default);
        display: var(--iui-dropdownfilter-display, block);
        float: var(--iui-dropdownfilter-float, none);
        font-size: 0;
        font-style: var(--iui-dropdownfilter-font-style, normal);
        height: var(--iui-dropdownfilter-height, auto);
        margin: var(--iui-dropdownfilter-margin, 0);
        opacity: var(--iui-dropdownfilter-opacity, 1);
        overflow: hidden;
        padding: var(--iui-dropdownfilter-padding, 0);
        position: var(--iui-dropdownfilter-position, relative);
        text-align: var(--iui-dropdownfilter-text-align, left);
        vertical-align: var(--iui-dropdownfilter-vertical-align, middle);
        width: var(--iui-dropdownfilter-width, auto);
        z-index: var(--iui-dropdownfilter-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
         user-select: none;
    }
    .iui-dropdownfilter:focus {
        outline: none !important;
    }

    /* Header */
    .iui-dropdownfilter-header {
        border: thin solid #cecece;
        padding: var(--iui-dropdownfilter-header-padding, 3px);
        dark-space: nowrap;
    }
    .iui-dropdownfilter-header:focus {
        outline: none !important;
    }
    .iui-dropdownfilter-header-hovered {
        background: transparent;
        border: thin solid #cecece;
        color: black;
        padding: var(--iui-dropdownfilter-header-hovered-padding, 3px);
    }
    .iui-dropdownfilter-header-dropdownfiltered {
        background: transparent;
        border: thin solid #cecece;
        color: black;
        padding: var(--iui-dropdownfilter-header-dropdownfiltered-padding, 3px);
    }
    .iui-dropdownfilter-header-expand-box {
        background: #484848 !important;
    }

    /* DropDown Window */
    .iui-dropdownfilter-dropdown {
        background: dark;
        border: thin solid #cecece;
        margin: 0;
        overflow-y: auto;
        overflow-x: hidden;
        position: absolute;
        z-index: 999;
    }
    .iui-dropdownfilter-dropdown:focus {
        outline: none !important;
    }
    .iui-dropdownfilter-dropdown .iui-item {
        margin: 1px;
        padding: 1px;
    }
    .iui-dropdownfilter-dropdown .iui-item-hovered {
        background-color: #f5f5f5;
        border: thin solid #efefef;
        margin: 1px;
        padding: 1px;
    }
    .iui-dropdownfilter-dropdown .iui-item-dropdownfiltered {
        background-color: #e5e5e5;
        border: thin solid #dedede;
        margin: 1px;
        padding: 1px;
    }

    /* Disabled State */
    .iui-dropdownfilter-disabled div {
        opacity: 0.75;
        pointer-events: none;
    }



    .iui-filter-operation {
        position: absolute;
        top: var(--iui-dropdownfilter-operation-top, 2px);
    }
    .iui-filter-icon {
        display: block;
        height: 16px;
        vertical-align: top;
        width: 16px;
    }
    .iui-filter-equal {
        background-image: url(../../icons/equal-dark.ico);
    }
    .iui-filter-not-equal {
        background-image: url(../../icons/not-equal-dark.ico);
    }
    .iui-filter-begins-with {
        background-image: url(../../icons/begins-with-dark.ico);
    }
    .iui-filter-ends-with {
        background-image: url(../../icons/ends-with-dark.ico);
    }
    .iui-filter-contains {
        background-image: url(../../icons/contains-dark.ico);
    }
    .iui-filter-not-contain {
        background-image: url(../../icons/not-contain-dark.ico);
    }
    .iui-filter-greater-than {
        background-image: url(../../icons/greater-than-dark.ico);
    }
    .iui-filter-greater-than-equal {
        background-image: url(../../icons/greater-than-equal-dark.ico);
    }
    .iui-filter-less-than {
        background-image: url(../../icons/less-than-dark.ico);
    }
    .iui-filter-less-than-equal {
        background-image: url(../../icons/less-than-equal-dark.ico);
    }
    .iui-filter-between {
        background-image: url(../../icons/between-dark.ico);
    }
    .iui-filter-search {
        background-image: url(../../icons/search-dark.ico);
    }
    .iui-filter-value {
        display: inline-block;
        margin: 0 0 0 20px;
        height: 100%;
        width: calc(100% - 22px);

        background2: red;
    }
    .iui-filter-input {
        background: transparent;
        border: 0;
        display: inline-block;
        font: inherit;
        font-family: inherit;
        font-size: 1rem;
        padding: 1px;
        height: 100%;
        width: 100%;
    }
    /*.iui-filter-input::-webkit-search-cancel-button {
        position: relative;
        right: 0; 
    }*/
    .iui-filter-value, .iui-filter-input:focus {
        outline: none !important;
    }
    .iui-filter-separator {
        background: #cecece;
        display: inline-block;
        height: 16px;
        margin: 2px 5px;
        vertical-align: top;
        width: 2px;
    }
`;

export { iuiDropDownFilterDefaultStyle };
