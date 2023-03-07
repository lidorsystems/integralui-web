import { c as css } from '../../../external/lit-element.js';

export const iuiTabLightStyle = css`
    .iui-tab-header {
    }
    .iui-tab-header-hovered {
        background: var(--tab-header-hovered-background, #d9edfd);
        border-color: var(--tab-header-hovered-border-color, #8cb1d1);
        color: var(--tab-header-hovered-color, #3376b0);
    }
    .iui-tab-header-selected {
        background: var(--tab-header-selected-background, white);
        border-color: var(--tab-header-hovered-border-color, #8cb1d1);
        color: var(--tab-header-selected-color, #266499);
    }
    .iui-tab-content {
        background: var(--tab-content-background, white);
    }
`;