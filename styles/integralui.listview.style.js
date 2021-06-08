import { c as css } from '../external/lit-element.js';

const iuiListViewDefaultStyle = css`
    .iui-listview
    {
        background: var(--listview-background, white);
        border: var(--listview-border, thin solid #cecece);
        color: var(--listview-color, black);
        cursor: var(--listview-cursor, default);
        margin: var(--listview-margin, 0);
        overflow: hidden;
        padding: var(--listview-padding, 1px);
        position: relative;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Disabled State */
    .iui-listview-disabled div, .iui-listview-disabled ul
    {
        opacity: var(--listview-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiListViewDefaultStyle };
