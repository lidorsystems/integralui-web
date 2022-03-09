import { c as css } from '../../external/lit-element.js';

const iuiListViewDefaultStyle = css`
    .iui-listview {
        background: var(--listview-background, white);
        border: var(--listview-border, thin solid #cecece);
        border-color:  var(--listview-border-color, #cecece);
        border-radius: var(--listview-border-radius, 1px);
        border-width: var(--listview-border-width, thin);
        color: var(--listview-color, black);
        cursor: var(--listview-cursor, default);
        display: var(--listview-display, block);
        float: var(--listview-float, none);
        height: var(--listview-height, auto);
        margin: var(--listview-margin, 0);
        opacity: var(--listview-opacity, 1);
        overflow: hidden;
        padding: var(--listview-padding, 1px);
        position: var(--listview-position, relative);
        width: var(--listview-width, auto);

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
