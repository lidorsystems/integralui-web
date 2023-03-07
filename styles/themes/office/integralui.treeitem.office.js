import { c as css } from '../../../external/lit-element.js';

const iuiTreeItemOfficeStyle = css`
    .iui-treeitem {
        transition-duration: var(--treeitem-transition-duration, 0.15s);
        transition-property: var(--treeitem-transition-property, background, border-color, color);
        transition-timing-function: var(--treeitem-transition-timing-function, ease-in-out);
    }
`;

export { iuiTreeItemOfficeStyle };
