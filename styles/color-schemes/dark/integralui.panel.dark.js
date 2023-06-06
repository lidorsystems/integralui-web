import { c as css } from '../../../external/lit-element.js';

export const iuiPanelDarkStyle = css`
    .iui-panel {
        background: var(--iui-panel-background, #252526);
        border: var(--iui-panel-hovered-border, thin solid #252526);
        border-color: var(--iui-panel-border-color, #252526);
        color: var(--iui-panel-color, #cccccc);
        height: var(--iui-panel-height, calc(100% - 2px));
    }
`;