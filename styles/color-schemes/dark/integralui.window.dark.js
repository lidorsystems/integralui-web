import { c as css } from '../../../external/lit-element.js';

export const iuiWindowDarkStyle = css`
    .iui-window {
        background: var(--iui-window-background, #252526);
        border: var(--iui-window-border, 3px solid #151515);
        border-color:  var(--iui-window-border-color, #151515);
        color: var(--iui-window-color, #cccccc);
    }
    .iui-window-header {
        background: var(--iui-window-header-background, #151515);
        border: var(--iui-window-header-border, thin solid #151515);
        border-color:  var(--iui-window-header-border-color, #151515);
        color: var(--iui-window-header-color, #cccccc);
    }
    .iui-window-header-buttons {
        background: var(--iui-window-header-background, #151515);
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