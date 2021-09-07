import { c as css } from '../../external/lit-element.js';

const iuiDialogMidnightStyle = css`
    .iui-dialog {
        background: var(--dialog-background, #252526);
        box-shadow: var(--dialog-box-shadow, 0 5px 20px #151515);
    }
    .iui-dialog-overlay {
        background: var(--dialog-overlay-background, #808080);
    }
    .iui-dialog-button-close {
        background-image: url(../../icons/close-white-24.png);
    }
`;

export { iuiDialogMidnightStyle };
