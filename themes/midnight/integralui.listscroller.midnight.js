import { c as css } from '../../external/lit-element.js';

const iuiListScrollerMidnightStyle = css`
    /* DisplayMode - LeftRight */
    .iui-listscroller-leftright-buttons, .iui-listscroller-updown-buttons {
        background: transparent;
        border-color: transparent;
        opacity: 0.25;
    }
    .iui-listscroller-leftright-buttons:hover, .iui-listscroller-updown-buttons:hover {
        background: transparent;
        border-color: transparent;
        opacity: 0.75;
    }
    .iui-listscroller-leftright-decrease {
        background: url(../../icons/expandbox-icons.png) no-repeat -48px -32px;
    }
    .iui-listscroller-leftright-increase {
        background: url(../../icons/expandbox-icons.png) no-repeat -48px 0;
    }
`;

export { iuiListScrollerMidnightStyle };
