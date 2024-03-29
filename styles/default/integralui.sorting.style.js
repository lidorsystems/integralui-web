import { c as css } from '../../external/lit-element.js';

export const iuiSortingDefaultStyle = css`
    .iui-sort-ascending
    {
        margin: 0;
        position: absolute;
        right: 0;
        padding: 0;
        width: 16px;
        height: 16px;
    }
    .iui-sort-ascending-hovered
    {
    }
    .iui-sort-ascending-selected
    {
        background-image: url(../../icons/sort-ascending-white.ico);
    }
    .iui-sort-descending
    {
        margin: 0;
        position: absolute;
        right: 2px;
        padding: 0;
        width: 16px;
        height: 16px;
    }
    .iui-sort-descending-hovered
    {
    }
    .iui-sort-descending-selected
    {
        background-image: url(../../icons/sort-descending-white.ico);
    }
`;
