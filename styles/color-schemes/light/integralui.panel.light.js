import { c as css } from '../../../external/lit-element.js';

export const iuiPanelLightStyle = css`
    .iui-panel {
        background: var(--iui-panel-background, #f5f5f5);
        border: var(--iui-panel-hovered-border, thin solid #f5f5f5);
        border-color: var(--iui-panel-border-color, #f5f5f5);
        height: var(--iui-panel-height, calc(100% - 2px));
    }
`;