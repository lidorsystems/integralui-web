import { c as css } from '../../../external/lit-element.js';

export const iuiSidePanelLightStyle = css`
    .iui-sidepanel {
        background: var(--iui-sidepanel-background, #f5f5f5);
        border: var(--iui-sidepanel-hovered-border, thin solid #f5f5f5);
        border-color: var(--iui-sidepanel-border-color, #f5f5f5);
        height: var(--iui-sidepanel-height, calc(100% - 2px));
    }
`;