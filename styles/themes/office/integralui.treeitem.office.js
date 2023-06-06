import { c as css } from '../../../external/lit-element.js';

const iuiTreeItemOfficeStyle = css`
    .iui-treeitem {
        transition-duration: var(--iui-treeitem-transition-duration, 0.15s);
        transition-property: var(--iui-treeitem-transition-property, background, border-color, color);
        transition-timing-function: var(--iui-treeitem-transition-timing-function, ease-in-out);
    }
`;

export { iuiTreeItemOfficeStyle };
