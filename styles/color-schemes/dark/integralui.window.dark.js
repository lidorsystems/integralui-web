import { c as css } from '../../../external/lit-element.js';

const iuiWindowDarkStyle = css`
    .iui-window {
        background: var(--window-background, #252526);
        border: var(--window-border, 3px solid #151515);
        border-color:  var(--window-border-color, #151515);
        color: var(--window-color, #cccccc);
    }
    .iui-window-header {
        background: var(--window-header-background, #151515);
        border: var(--window-header-border, thin solid #151515);
        border-color:  var(--window-header-border-color, #151515);
        color: var(--window-header-color, #cccccc);
    }
    .iui-window-header-buttons {
        background: var(--window-header-background, #151515);
    }
    .iui-window-button-close {
        background-image: url(../../../icons/close-white.ico);
    }
    .iui-window-button-maximize {
        background-image: url(../../../icons/window-maximized-white.ico);
    }
    .iui-window-button-minimize {
        background-image: url(../../../icons/window-minimized-white.ico);
    }
    .iui-window-button-window {
        background-image: url(../../../icons/window-white.ico);
    }
`;

export { iuiWindowDarkStyle };
