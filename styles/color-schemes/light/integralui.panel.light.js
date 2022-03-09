import { c as css } from '../../../external/lit-element.js';

const iuiPanelLightStyle = css`
    .iui-panel {
        background: var(--panel-background, #f5f5f5);
        border: var(--panel-hovered-border, thin solid #f5f5f5);
        border-color: var(--panel-border-color, #f5f5f5);
        height: var(--panel-height, calc(100% - 2px));
    }
`;

export { iuiPanelLightStyle };
