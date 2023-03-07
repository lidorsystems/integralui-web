import { c as css } from '../../../external/lit-element.js';

export const iuiSidePanelDarkStyle = css`
    .iui-sidepanel {
        background: var(--sidepanel-background, #252526);
        border: var(--sidepanel-hovered-border, thin solid #252526);
        border-color: var(--sidepanel-border-color, #252526);
        color: var(--sidepanel-color, #cccccc);
        height: var(--sidepanel-height, calc(100% - 2px));
    }
`;