import { c as css } from '../../../external/lit-element.js';

const iuiDockPanelLightStyle = css`
    .iui-dockpanel {
        background: var(--dockpanel-background, #e2e2e2);
        border: var(--dockpanel-hovered-border, 0);
        border-color: var(--dockpanel-border-color, #646464);
    }

    .iui-dockpanel-content {
        background: var(--dockpanel-content-background, #f5f5f5);
    }
`;

export { iuiDockPanelLightStyle };
