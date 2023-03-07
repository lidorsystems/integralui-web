import { c as css } from '../../../external/lit-element.js';

export const iuiTabLightStyle = css`
    .iui-tab-header
    {
        background: var(--tab-header-background, transparent);
        border: var(--tab-header-border, thin solid transparent);
        color: var(--tab-header-color, black);
    }
    .iui-tab-header-hovered
    {
        background: var(--tab-header-hovered-background, #a5d3fa);
        border: var(--tab-header-hovered-border, thin solid #a5d3fa);
        color: var(--tab-header-hovered-color, black);
    }
    .iui-tab-header-selected
    {
        background: var(--tab-header-selected-background, white);
        border: var(--tab-header-selected-border, thin solid white);
        color: var(--tab-header-selected-color, #266499);
        font-weight: var(--tab-header-selected-font-weight, bold);
    }
    .iui-tab-content
    {
        background: var(--tab-content-background, white);
        border: var(--tab-content-border, 0);
    }
`;