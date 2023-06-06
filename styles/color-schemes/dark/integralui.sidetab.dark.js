import { c as css } from '../../../external/lit-element.js';

export const iuiTabDarkStyle = css`
    .iui-tab-header {
        background: var(--iui-tab-header-background, transparent);
        border: var(--iui-tab-header-border, thin solid transparent);
        color: var(--iui-tab-header-color, #cccccc);
    }
    .iui-tab-header-hovered {
        background: var(--iui-tab-header-hovered-background, #0a4369);
        border: var(--iui-tab-header-hovered-border, thin solid #0a4369);
        color: var(--iui-tab-header-hovered-color, #cccccc);
    }
    .iui-tab-header-selected {
        background: var(--iui-tab-header-selected-background, #252526);
        border: var(--iui-tab-header-selected-border, thin solid #252526);
        color: var(--iui-tab-header-selected-color, #266499);
        font-weight: var(--iui-tab-header-selected-font-weight, bold);
    }
    .iui-tab-content {
        background: var(--iui-tab-content-background, #252526);
        border: var(--iui-tab-content-border, 0);
        color: var(--iui-tab-content-color, #cccccc);
    }
`;