import { c as css } from '../../../external/lit-element.js';

export const iuiListBarDarkStyle = css`
    .iui-listbar {
        background: var(--iui-listbar-background, #252526);
        border: var(--iui-listbar-border, thin solid #151515);
        color: var(--iui-listbar-color, #cccccc);
    }
    .iui-listbar-button-up, .iui-listbar-button-down {
        background: var(--iui-listbar-button-background, #191919);
        border: var(--iui-listbar-button-border, thin solid #171717);
    }
    .iui-listbar-button-up:hover, .iui-listbar-button-down:hover {
        background: var(--iui-listbar-button-hover-background, #212121);
        border-color: var(--iui-listbar-button-hover-border-color, #191919);
    }
    .iui-listbar-button-up-icon, .iui-listbar-button-down-icon {
        background-position: var(--iui-listbar-button-icon-background-position, -48px 0);
    }
`;