import { c as css } from '../../../external/lit-element.js';

export const iuiSidePanelLightStyle = css`
    .iui-sidepanel {
        background: var(--sidepanel-background, #f5f5f5);
        border: var(--sidepanel-hovered-border, thin solid #f5f5f5);
        border-color: var(--sidepanel-border-color, #f5f5f5);
        height: var(--sidepanel-height, calc(100% - 2px));
    }
`;