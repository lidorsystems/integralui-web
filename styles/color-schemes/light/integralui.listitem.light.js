import { c as css } from '../../../external/lit-element.js';

export const iuiListItemLightStyle = css`
    .iui-listgroup {
        color: var(--listgroup-color, #2f78a8);
    }

    .iui-listitem {
        color: var(--listitem-color, #646464);
    }
    .iui-listitem-hovered {
        background: var(--listitem-hovered-background, #d9edfd);
        border-color: var(--listitem-hovered-border-color, #d9edfd);
        color: var(--listitem-hovered-color, #323232);
    }
    .iui-listitem-selected {
        background: var(--listitem-selected-background, #a5d3fa);
        border-color: var(--listitem-selected-border-color, #a5d3fa);
        color: var(--listitem-selected-color, black);
    }
    .iui-listitem-animate-select {
        background: var(--listitem-animate-select-background, #d9edfd);
    }
`;