import { c as css } from '../../../external/lit-element.js';

export const iuiPanelDarkStyle = css`
    .iui-panel {
        background: var(--panel-background, #252526);
        border: var(--panel-hovered-border, thin solid #252526);
        border-color: var(--panel-border-color, #252526);
        color: var(--panel-color, #cccccc);
        height: var(--panel-height, calc(100% - 2px));
    }
`;