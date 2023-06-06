import { c as css } from '../../../external/lit-element.js';

export const iuiMenuItemOfficeStyle = css`
    .iui-menuitem-root, .iui-menuitem, .iui-contextmenuitem-root, .iui-contextmenuitem {
        transition-duration: var(--iui-menuitem-transition-duration, 0.15s);
        transition-property: var(--iui-menuitem-transition-property, background, border-color, color);
        transition-timing-function: var(--iui-menuitem-transition-timing-function, ease-in-out);
    }
`;