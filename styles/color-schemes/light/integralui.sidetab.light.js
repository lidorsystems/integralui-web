import { c as css } from '../../../external/lit-element.js';

export const iuiTabLightStyle = css`
    .iui-tab-header
    {
        background: var(--iui-tab-header-background, transparent);
        border: var(--iui-tab-header-border, thin solid transparent);
        color: var(--iui-tab-header-color, black);
    }
    .iui-tab-header-hovered
    {
        background: var(--iui-tab-header-hovered-background, #a5d3fa);
        border: var(--iui-tab-header-hovered-border, thin solid #a5d3fa);
        color: var(--iui-tab-header-hovered-color, black);
    }
    .iui-tab-header-selected
    {
        background: var(--iui-tab-header-selected-background, white);
        border: var(--iui-tab-header-selected-border, thin solid white);
        color: var(--iui-tab-header-selected-color, #266499);
        font-weight: var(--iui-tab-header-selected-font-weight, bold);
    }
    .iui-tab-content
    {
        background: var(--iui-tab-content-background, white);
        border: var(--iui-tab-content-border, 0);
    }
`;