import { c as css } from '../../../external/lit-element.js';

export const iuiListItemOfficeStyle = css`
    .iui-listitem {
        transition-duration: var(--iui-listitem-transition-duration, 0.15s);
        transition-property: var(--iui-listitem-transition-property, background, border-color, color);
        transition-timing-function: var(--iui-listitem-transition-timing-function, ease-in-out);
    }
    .iui-listitem-content-block {
        transform: var(--iui-listitem-content-transform, scale(0.96));
        transition-duration: var(--iui-listitem-content-transition-duration, 0.15s);
        transition-property: var(--iui-listitem-content-transition-property, all);
        transition-timing-function: var(--iui-listitem-content-transition-timing-function, ease-in-out);
    }
    .iui-listitem-hovered .iui-listitem-content-block {
        transform: var(--iui-listitem-content-hovered-transform, scale(0.98));
    }
    .iui-listitem-selected .iui-listitem-content-block {
        transform: var(--iui-listitem-content-selected-transform, scale(1));
    }
`;