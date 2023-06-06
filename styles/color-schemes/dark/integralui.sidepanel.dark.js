import { c as css } from '../../../external/lit-element.js';

export const iuiSidePanelDarkStyle = css`
    .iui-sidepanel {
        background: var(--iui-sidepanel-background, #252526);
        border: var(--iui-sidepanel-hovered-border, thin solid #252526);
        border-color: var(--iui-sidepanel-border-color, #252526);
        color: var(--iui-sidepanel-color, #cccccc);
        height: var(--iui-sidepanel-height, calc(100% - 2px));
    }
`;