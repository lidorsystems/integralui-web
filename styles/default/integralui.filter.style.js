import { c as css } from '../../external/lit-element.js';

export const iuiFilterDefaultStyle = css`
    .iui-filter-window {
        background: #efefef;
        border: thin solid gray;
        box-shadow: 1px 1px 2px #888888;
        padding: 0;
        position: absolute;
        top: -9999px;
        z-index: 999;
    }
    .iui-filtering {
        background-image: url(../../icons/filter.ico);
        margin: 0;
        position: absolute;
        right: 0;
        padding: 0;
        width: 16px;
        height: 16px;
    }
    .iui-filtering-hovered {
    }
    .iui-filtering-selected {
        background-image: url(../../icons/filter-white.ico);
    }
    .iui-filter-cell {
        position: relative;

    }
`;
