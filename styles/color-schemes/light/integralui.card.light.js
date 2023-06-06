import { c as css } from '../../../external/lit-element.js';

export const iuiCardLightStyle = css`

    /* Card Front */
    .iui-card-front {
        border-color: var(--iui-card-front-border-color, #e2e2e2);
    }
    .iui-card-front-header {
        background: var(--iui-card-front-header-background, #e2e2e2);
        border-color: var(--iui-card-front-header-border-color, #e2e2e2);
    }
    .iui-card-hovered .iui-card-front-header {
        background: var(--iui-card-front-header-hovered-background, #a5d3fa);
        border-color: var(--iui-card-front-header-hovered-border-color, #a5d3fa);
    }
    .iui-card-selected .iui-card-front-header {
        background: var(--iui-card-front-header-selected-background, #0a64ad);
        border-color: var(--iui-card-front-header-selected-border-color, #0a64ad);
        color: var(--iui-card-front-header-selected-color, white);
    }
    .iui-card-front-footer {
        background: var(--iui-card-front-header-background, #e2e2e2);
        border-color: var(--iui-card-front-header-border-color, #e2e2e2);
    }

    /* Card Back */
    .iui-card-back {
        border-color: var(--iui-card-back-border, #e2e2e2);
    }
    .iui-card-back-header {
        background: var(--iui-card-back-header-background, #e2e2e2);
        border-color: var(--iui-card-back-header-border-color, #e2e2e2);
    }
    .iui-card-hovered .iui-card-back-header {
        background: var(--iui-card-back-header-hovered-background, #a5d3fa);
        border-color: var(--iui-card-back-header-hovered-border-color, #a5d3fa);
    }
    .iui-card-selected .iui-card-back-header {
        background: var(--iui-card-back-header-selected-background, #0a64ad);
        border-color: var(--iui-card-back-header-selected-border-color, #0a64ad);
        color: var(--iui-card-back-header-selected-color, white);
   }
   .iui-card-back-footer {
        background: var(--iui-card-back-header-background, #e2e2e2);
        border-color: var(--iui-card-back-header-border-color, #e2e2e2);
    }
`;