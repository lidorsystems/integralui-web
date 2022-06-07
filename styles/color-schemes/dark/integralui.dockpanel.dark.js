import { c as css } from '../../../external/lit-element.js';

export const iuiDockPanelDarkStyle = css`
    .iui-dockpanel {
        background: var(--dockpanel-background, #303030);
        border: var(--dockpanel-hovered-border, thin solid #303030);
        border-color: var(--dockpanel-border-color, #303030);
        color: var(--dockpanel-color, #);
    }

    .iui-dockpanel-content {
        background: var(--dockpanel-content-background, #252526);
    }
`;