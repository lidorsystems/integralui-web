import { c as css } from '../../../external/lit-element.js';

export const iuiListItemOfficeStyle = css`
    .iui-listitem {
        transition-duration: var(--listitem-transition-duration, 0.15s);
        transition-property: var(--listitem-transition-property, background, border-color, color);
        transition-timing-function: var(--listitem-transition-timing-function, ease-in-out);
    }
    .iui-listitem-content-block {
        transform: var(--listitem-content-transform, scale(0.96));
        transition-duration: var(--listitem-content-transition-duration, 0.15s);
        transition-property: var(--listitem-content-transition-property, all);
        transition-timing-function: var(--listitem-content-transition-timing-function, ease-in-out);
    }
    .iui-listitem-hovered .iui-listitem-content-block {
        transform: var(--listitem-content-hovered-transform, scale(0.98));
    }
    .iui-listitem-selected .iui-listitem-content-block {
        transform: var(--listitem-content-selected-transform, scale(1));
    }
`;