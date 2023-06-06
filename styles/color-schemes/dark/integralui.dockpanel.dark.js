import { c as css } from '../../../external/lit-element.js';

export const iuiDockPanelDarkStyle = css`
    .iui-dockpanel {
        background: var(--iui-dockpanel-background, #303030);
        border: var(--iui-dockpanel-hovered-border, thin solid #303030);
        border-color: var(--iui-dockpanel-border-color, #303030);
        color: var(--iui-dockpanel-color, #);
    }

    .iui-dockpanel-content {
        background: var(--iui-dockpanel-content-background, #252526);
    }
`;