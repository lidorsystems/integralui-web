import { c as css } from '../../../external/lit-element.js';

export const iuiListItemLightStyle = css`
    .iui-listgroup {
        color: var(--iui-listgroup-color, #2f78a8);
    }

    .iui-listitem {
        color: var(--iui-listitem-color, #646464);
    }
    .iui-listitem-hovered {
        background: var(--iui-listitem-hovered-background, #d9edfd);
        border-color: var(--iui-listitem-hovered-border-color, #d9edfd);
        color: var(--iui-listitem-hovered-color, #323232);
    }
    .iui-listitem-selected {
        background: var(--iui-listitem-selected-background, #a5d3fa);
        border-color: var(--iui-listitem-selected-border-color, #a5d3fa);
        color: var(--iui-listitem-selected-color, black);
    }
    .iui-listitem-animate-select {
        background: var(--iui-listitem-animate-select-background, #d9edfd);
    }
`;