
import { c as css } from '../../external/lit-element.js';

export const iuiSplitImageDefaultStyle = css`
    .iui-splitimage {
        overflow: hidden;
        position: relative;
        z-index: var(--splitimage-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-splitimage-block {
        overflow: hidden;
        position: absolute;
    }
    .iui-splitimage-splitter {
        background: var(--splitimage-splitter-background, #808080);
        opacity: var(--splitimage-splitter-opacity, 0);
        position: absolute;
        z-index: var(--splitimage-splitter-z-index, 3);
    }
    .iui-splitimage-splitter-active {
        background: var(--splitimage-splitter-background, #808080);
        opacity: var(--splitimage-splitter-active-opacity, 0.75);
    }

    /* Disabled State */
    .iui-splitimage-disabled div {
        opacity: var(--splitimage-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;
