import { c as css } from '../../../external/lit-element.js';

const iuiSelectDarkStyle = css`
    .iui-select {
        background: var(--select-background, #252526);
        border: var(--select-header-border, thin solid #151515);
        border-radius: var(--select-border-radius, 3px);
        box-shadow: var(--select-box-shadow, 0 0 0 1px transparent);
        color: var(--select-color, #cccccc);
    }
    .iui-select:focus {
        border: var(--select-header-border, thin solid #646464);
        box-shadow: var(--select-box-shadow, 0 0 0 1px #646464);
    }

    /* Select Header */
    .iui-select-header-hovered {
        color: var(--select-header-hovered-color, white);
    }
    .iui-select-header-selected {
        color: var(--select-header-selected-color, white);
    }
    .iui-select-header-expand-box {
        background: var(--select-header-expand-box-background, #cccccc);
    }

    .iui-header-expand-box-arrow

    /* Select DropDown Window */
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

export { iuiSelectDarkStyle };
