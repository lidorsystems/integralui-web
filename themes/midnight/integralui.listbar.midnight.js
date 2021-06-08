import { c as css } from '../../external/lit-element.js';

const iuiListBarMidnightStyle = css`
    .iui-listbar {
        background: var(--listbar-background, #252526);
        border: var(--listbar-border, thin solid #151515);
        color: var(--listbar-color, #cccccc);
    }
    .iui-listbar-button-up, .iui-listbar-button-down {
        background: var(--listbar-button-background, #191919);
        border: var(--listbar-button-border, thin solid #171717);
    }
    .iui-listbar-button-up:hover, .iui-listbar-button-down:hover {
        background: var(--listbar-button-hover-background, #212121);
        border-color: var(--listbar-button-hover-border-color, #191919);
    }
    .iui-listbar-button-up-icon, .iui-listbar-button-down-icon {
        background-position: var(--listbar-button-icon-background-position, -48px 0);
    }
`;

export { iuiListBarMidnightStyle };
