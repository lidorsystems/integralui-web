import { c as css } from '../../../external/lit-element.js';

export const iuiScrollBarDarkStyle = css`
    .iui-scrollbar {
        background: var(--iui-scrollbar-background, #1e1e1e);
        border-color: var(--iui-scrollbar-border-color, #151515);
    } 
    .iui-scrollbar-thumb {
        background: var(--iui-scrollbar-thumb-background, #404040);
        border-color: var(--iui-scrollbar-thumb-border-color, #404040);
    }
    .iui-scrollbar-thumb-hovered {
        background: var(--iui-scrollbar-thumb-hovered-background, #515151);
        border-color: var(--iui-scrollbar-thumb-hovered-border-color, #515151);
    }
    .iui-scrollbar-thumb-selected {
        background: var(--iui-scrollbar-thumb-selected-background, #626262);
        border-color: var(--iui-scrollbar-thumb-selected-border-color, #626262);
    }
    .iui-scrollbar-dynamic .iui-scrollbar-thumb {
        border-color: var(--iui-scrollbar-thumb-border-color, #484848);
    }
    .iui-scrollbar-dynamic .iui-scrollbar-thumb-hovered {
        border-color: var(--iui-scrollbar-thumb-hovered-border-color, #646464);
    }
    .iui-scrollbar-dynamic .iui-scrollbar-thumb-selected {
        border-color: var(--iui-scrollbar-thumb-selected-border-color, #808080);
    }
    .iui-scrollbar-dynamic .iui-scrollbar-thumb {
        background: var(--iui-scrollbar-thumb-background, #484848);
        border-color: var(--iui-scrollbar-thumb-border-color, #484848);
    }
    .iui-scrollbar-dynamic .iui-scrollbar-thumb-hovered {
        background: var(--iui-scrollbar-thumb-hovered-background, #646464);
        border-color: var(--iui-scrollbar-thumb-hovered-border-color, #646464);
    }
    .iui-scrollbar-dynamic .iui-scrollbar-thumb-selected {
        background: var(--iui-scrollbar-thumb-selected-background, #808080);
        border-color: var(--iui-scrollbar-thumb-selected-border-color, #808080);
    }

    .iui-scrollbar-corner {
        background: var(--iui-scrollbar-corner-background, #1e1e1e);
    }
`;