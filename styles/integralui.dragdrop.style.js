import { c as css } from '../external/lit-element.js';

const iuiDragWinDefaultStyle = css`
    .iui-dragwin
    {
        background: -webkit-linear-gradient(white, #F1EFEC);
        background:    -moz-linear-gradient(white, #F1EFEC);
        background:     -ms-linear-gradient(white, #F1EFEC);
        background:      -o-linear-gradient(white, #F1EFEC);
        background :         linear-gradient(white, #F1EFEC);

        background-color: #F1EFEC;
        border: thin solid black;
        border-radius: 3px;
        font-size: var(--dragwin-font-size, 1em);
        margin:0;
        padding: 2px;
        position: absolute;
        box-shadow: 0 0 3px #888888;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 200px;
        z-index: 9999999;
    }
    .iui-dragwin-title
    {
        border-left: thin solid #c5c5c5;
        padding: 3px 3px 3px 5px;
        margin: 0 2px 0 0;
        vertical-align: middle;
    }
    .iui-dragwin-icon
    {
        display: inline-block;
        padding: 0;
        margin: 2px 0 3px 2px;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .iui-dragwin-move-left
    {
        background-image: url(../icons/move-left.ico);
    }
    .iui-dragwin-move-up
    {
        background-image: url(../icons/move-up.ico);
    }
    .iui-dragwin-move-in
    {
        background-image: url(../icons/move-in.ico);
    }
    .iui-dragwin-move-right
    {
        background-image: url(../icons/move-right.ico);
    }
    .iui-dragwin-move-down
    {
        background-image: url(../icons/move-down.ico);
    }
    .iui-dragwin-move-end
    {
        background-image: url(../icons/move-end.ico);
    }
    .iui-dragwin-move-left-copy
    {
        background-image: url(../icons/move-left-copy.ico);
    }
    .iui-dragwin-move-up-copy
    {
        background-image: url(../icons/move-up-copy.ico);
    }
    .iui-dragwin-move-in-copy
    {
        background-image: url(../icons/move-in-copy.ico);
    }
    .iui-dragwin-move-right-copy
    {
        background-image: url(../icons/move-right-copy.ico);
    }
    .iui-dragwin-move-down-copy
    {
        background-image: url(../icons/move-down-copy.ico);
    }
    .iui-dragwin-move-end-copy
    {
        background-image: url(../icons/move-end-copy.ico);
    }
    .hidden-drag-ghost {
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
    }
`;

export { iuiDragWinDefaultStyle };
