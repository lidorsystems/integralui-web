import { c as css } from '../../../external/lit-element.js';

export const iuiTabDarkStyle = css`
    .iui-tab-header {
        background: var(--groupbox-header-background, #323233);
        border-color: var(--groupbox-header-border-color, #323233);
        color: var(--groupbox-header-color, #cccccc);
    }
    .iui-tab-header-hovered {
        background: var(--tab-header-hovered-background, #113d5c);
        border-color: var(--tab-header-hovered-border-color, #113d5c);
        color: var(--tab-header-hovered-color, white);
    }
    .iui-tab-header-selected {
        background: var(--tab-header-selected-background, #252526);
        border-color: var(--tab-header-selected-border-color, #0f344d);
        color: var(--tab-header-selected-color, #266499);
    }
    .iui-tab-content {
        background: var(--tab-content-background, #252526);
        color: var(--tab-content-color, #cccccc);
    }
`;