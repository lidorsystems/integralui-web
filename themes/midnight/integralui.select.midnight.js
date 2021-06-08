import { c as css } from '../../external/lit-element.js';

const iuiSelectMidnightStyle = css`
    .iui-select {
        background-color: #252526;
        border-color: #151515;
        color: #cccccc;
    }

    /* ComboBox Header */
    .iui-select-header {
        border: thin solid #151515;
    }
    .iui-select-header-hovered, .iui-select-header-selected {
        background: transparent;
        border: thin solid #151515;
        color: white;
    }
    .iui-select-header-expand-box {
        background: #cccccc !important;
    }

    /* ComboBox DropDown Window */
    .iui-select-dropdown {
        background: #252526;
        border: thin solid #151515;
        color: #cccccc;
    }
    .iui-select-dropdown .iui-item-hovered {
        background-color: #2a2d2e;
        border: thin solid #2a2d2e;
    }
    .iui-select-dropdown .iui-item-selected {
        background-color: #37373d;
        border: thin solid #37373d;
    }
`;

export { iuiSelectMidnightStyle };
