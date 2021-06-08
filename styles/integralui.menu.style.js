import { c as css } from '../external/lit-element.js';

const iuiMenuDefaultStyle = css`
    .iui-menu
    {
        background: #f5f5f5;
        border: 0;
        cursor: default;
        padding: 0;
        position: relative;
    }
    .iui-menu-block, .iui-menuitem-block
    {
        background: transparent;
        list-style-type: none;
        margin: 0;
        padding: 3px;
        position: relative;
    }

    /* Disabled State */
    .iui-menu-disabled div
    {
        opacity: 0.75;
        pointer-events: none;
    }
`;

export { iuiMenuDefaultStyle };
