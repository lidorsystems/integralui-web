import { c as css } from '../../external/lit-element.js';

const iuiDropDownFilterMidnightStyle = css`
    .iui-dropdownfilter {
        border-color: #151515;
        color: #cccccc;
    }

    /* DropDown Window */
    .iui-dropdownfilter-dropdown {
        background: #252526;
        border: thin solid #151515;
        color: #cccccc;
    }
    .iui-dropdownfilter-dropdown .iui-item-hovered {
        background-color: #2a2d2e;
        border: thin solid #2a2d2e;
    }
    .iui-dropdownfilter-dropdown .iui-item-dropdownfiltered {
        background-color: #37373d;
        border: thin solid #37373d;
    }
    .iui-filter-input {
        color: #cccccc;
    }

    .iui-filter-equal {
        background-image: url(../icons/equal-white.ico);
    }
    .iui-filter-not-equal {
        background-image: url(../icons/not-equal-white.ico);
    }
    .iui-filter-begins-with {
        background-image: url(../icons/begins-with-white.ico);
    }
    .iui-filter-ends-with {
        background-image: url(../icons/ends-with-white.ico);
    }
    .iui-filter-contains {
        background-image: url(../icons/contains-white.ico);
    }
    .iui-filter-not-contain {
        background-image: url(../icons/not-contain-white.ico);
    }
    .iui-filter-greater-than {
        background-image: url(../icons/greater-than-white.ico);
    }
    .iui-filter-greater-than-equal {
        background-image: url(../icons/greater-than-equal-white.ico);
    }
    .iui-filter-less-than {
        background-image: url(../icons/less-than-white.ico);
    }
    .iui-filter-less-than-equal {
        background-image: url(../icons/less-than-equal-white.ico);
    }
    .iui-filter-between {
        background-image: url(../icons/between-white.ico);
    }
    .iui-filter-search {
        background-image: url(../icons/search-white.ico);
    }
`;

export { iuiDropDownFilterMidnightStyle };
