import { c as css } from '../../external/lit-element.js';

const iuiDragWinMidnightStyle = css`
    .iui-dragwin {
        background: -webkit-linear-gradient(#363636, #303030);
        background:    -moz-linear-gradient(#363636, #303030);
        background:     -ms-linear-gradient(#363636, #303030);
        background:      -o-linear-gradient(#363636, #303030);
        background :         linear-gradient(#363636, #303030);

        background-color: #303030;
        border: thin solid #151515;
        box-shadow: 0 0 3px #151515;
        color: #cccccc;
    }
    .iui-dragwin-title {
        border-left: thin solid #151515;
    }
`;

export { iuiDragWinMidnightStyle };
