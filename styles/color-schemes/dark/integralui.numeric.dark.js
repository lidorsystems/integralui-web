import { c as css } from '../../../external/lit-element.js';

export const iuiNumericDarkStyle = css`
    .iui-numeric {
        background: transparent;
    }
    .iui-numeric-inbound-btn {
        background: #0a4369;
        border: thin solid #0a4369;
    }
    .iui-numeric-inbound-btn:hover {
        background: #0e639c;
        border: thin solid #0e639c;
    }

    .iui-numeric-leftright-buttons span, .iui-numeric-updown-buttons span {
        background: url(../../../icons/expandbox-icons.png) no-repeat -48px 0;
    }

    /* DisplayMode - LeftRight */
    .iui-numeric-leftright-buttons {
        background: #0a4369;
        border: thin solid #0a4369;
    }
    .iui-numeric-leftright-buttons:hover {
        background: #0e639c;
        border: thin solid #0e639c;
    }

    /* DisplayMode - UpDown */
    .iui-numeric-updown-buttons {
        background: #0a4369;
        border: thin solid #0a4369;
    }
    .iui-numeric-updown-buttons:hover {
        background: #0e639c;
        border: thin solid #0e639c;
    }

    .iui-numeric-leftright-decrease {
        background-position: -48px -32px !important;
    }
    .iui-numeric-leftright-increase {
        background-position: -48px 0;
    }


    .iui-numeric-updown-decrease {
        background-position: -48px -16px !important;
    }
    .iui-numeric-updown-increase {
        -ms-transform: rotate(-90deg); /* IE 9 */
        -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
        transform: rotate(-90deg);
    }

    .iui-numeric-inbound-value, .iui-numeric-leftright-value, .iui-numeric-updown-value {
        background: #252526;
        border: thin solid #151515;
        color: #cecece;
    }

    
    .iui-numeric-inbound-value input, .iui-numeric-leftright-value input, .iui-numeric-updown-value input {
        color: #cecece;
    }
`;
