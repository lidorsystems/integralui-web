import { c as css } from '../../external/lit-element.js';

const iuiScrollBarMidnightStyle = css`
    .iui-scrollbar-vertical {
        background: var(--scrollbar-vertical-background, #1e1e1e);
        border-left: var(--scrollbar-vertical-border-left, thin solid #151515);
    } 
    .iui-scrollbar-vertical-thumb, .iui-scrollbar-horizontal-thumb {
        background: var(--scrollbar-thumb-background, #303030);
        border: var(--scrollbar-thumb-border, thin solid #303030);
    }
    .iui-scrollbar-vertical-thumb:hover, .iui-scrollbar-horizontal-thumb:hover {
        background: var(--scrollbar-thumb-hover-background, #363636);
        border: var(--scrollbar-thumb-hover-border, thin solid #363636);
    }
    .iui-scrollbar-horizontal {
        background: var(--scrollbar-horizontal-background, #1e1e1e);
        border-top: var(--scrollbar-horizontal-border-top, thin solid #151515);
    }
    .iui-scrollbar-corner {
        background: var(--scrollbar-corner-background, #1e1e1e);
    }
`;

export { iuiScrollBarMidnightStyle };
