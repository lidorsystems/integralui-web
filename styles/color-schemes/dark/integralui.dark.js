import { c as css } from '../../../external/lit-element.js';

export const iuiDarkStyle = css`
    .iui-header-expand-box {
        opacity: 0.75;
    }
    .iui-item {
        color: #cccccc;
    }
    /* Item Hover State */
    .iui-item-hovered {
        background-color: #2a2d2e;
        border: thin solid #2a2d2e;
    }
    /* Item Selected State */
    .iui-item-selected {
        background-color: #37373d;
        border: thin solid #37373d;
        color: white;
    } 

    .iui-list {
        background: #252526;
        border: thin solid #151515;
        color: #cccccc;
    }
    .iui-list li {
        color: #cccccc;
    }
    .iui-list li:hover {
        background-color: #2a2d2e;
        border: 2px solid #2a2d2e;
    }
    .iui-list-item-selected {
        background-color: #37373d;
        color: white;
    }

    .iui-draglist {
        background: var(--draglist-background, #303030);
    }
    .iui-draglist-active {
        border-color: var(--draglist-active-border-color, #151515);
        box-shadow: var(--draglist-active-box-shadow, 0 0 3px #252525);
    }
    .iui-draglist-copy {
        background: url(../../../icons/copy-white.ico);
    }
    .iui-draglist-corner-block {
        background: var(--draglist-corner-background, #151515);
        border-color: var(--draglist-corner-border-color, #050505);
    }
    .iui-draglist-num {
        color: var(--draglist-num-color, #cccccc);
    }
`;