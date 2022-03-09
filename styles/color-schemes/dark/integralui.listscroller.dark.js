import { c as css } from '../../../external/lit-element.js';

const iuiListScrollerDarkStyle = css`
    /* DisplayMode - LeftRight */
    .iui-listscroller-leftright-buttons, .iui-listscroller-updown-buttons {
        background: transparent;
        border-color: transparent;
        opacity: 0.25;
    }
    .iui-listscroller-leftright-buttons:hover, .iui-listscroller-updown-buttons:hover {
        background: transparent;
        border-color: transparent;
        opacity: 0.75;
    }
    .iui-listscroller-leftright-decrease {
        background: url(../../../icons/expandbox-icons.png) no-repeat -48px -32px;
    }
    .iui-listscroller-leftright-increase {
        background: url(../../../icons/expandbox-icons.png) no-repeat -48px 0;
    }
    .iui-listscroller-item {
        color: var(--listscroller-item-color, #cccccc);
    }
    .iui-listscroller-item-hovered {
        background: var(--lislistscroller-itemtitem-hovered-background, #2a2d2e);
        border: var(--listscroller-item-hovered-border, thin solid #2a2d2e);
    }
    .iui-listscroller-item-selected {
        background: var(--listscroller-item-selected-background, #0a4369);
        border: var(--listscroller-item-selected-border, thin solid #0a4369);
        color: var(--listscroller-item-selected-color, white);
    }

`;

export { iuiListScrollerDarkStyle };
