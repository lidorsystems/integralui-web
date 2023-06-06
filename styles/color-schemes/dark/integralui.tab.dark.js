import { c as css } from '../../../external/lit-element.js';

export const iuiTabDarkStyle = css`
    .iui-tab-header {
        background: var(--iui-groupbox-header-background, #323233);
        border-color: var(--iui-groupbox-header-border-color, #323233);
        color: var(--iui-groupbox-header-color, #cccccc);
    }
    .iui-tab-header-hovered {
        background: var(--iui-tab-header-hovered-background, #113d5c);
        border-color: var(--iui-tab-header-hovered-border-color, #113d5c);
        color: var(--iui-tab-header-hovered-color, white);
    }
    .iui-tab-header-selected {
        background: var(--iui-tab-header-selected-background, #252526);
        border-color: var(--iui-tab-header-selected-border-color, #0f344d);
        color: var(--iui-tab-header-selected-color, #266499);
    }
    .iui-tab-content {
        background: var(--iui-tab-content-background, #252526);
        color: var(--iui-tab-content-color, #cccccc);
    }
`;