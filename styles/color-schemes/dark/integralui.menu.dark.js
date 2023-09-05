import { c as css } from '../../../external/lit-element.js';

export const iuiMenuDarkStyle = css`
    .iui-menu {
        background: var(--iui-menu-background, #252526);
        color: var(--iui-menu-color, white);
        color: white;
    }
    .iui-menu-block {
        background: var(--iui-menu-block-background, #252526);
        border-color:  var(--iui-menu-block-border-color, #151515);
    }
    .iui-menu-disabled > ul {
        background: var(--iui-menu-block-disabled-background, #808080);
    }
`;