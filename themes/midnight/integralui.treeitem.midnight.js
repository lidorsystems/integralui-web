import { c as css } from '../../external/lit-element.js';

const iuiTreeItemMidnightStyle = css`
    .iui-treeitem {
        color: var(--treeitem-color, #cccccc);
    }
    .iui-treeitem-hovered, .iui-treeitem-content-hovered {
        background: var(--treeitem-hovered-background, transparent);
        border: var(--treeitem-hovered-border, 2px solid transparent);
        color: var(--treeitem-hovered-color, white);

        animation-name: iui-treeitem-hovered-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treeitem-hovered-animate-enter {
        0% { 
            background: var(--treeitem-hovered-animation-background-0, transparent); 
            border-color: var(--treeitem-hovered-animation-border-color-0, transparent);
        }
        100% { 
            background: var(--treeitem-hovered-animation-background-100, #2a2d2e); 
            border-color: var(--treeitem-hovered-animation-border-color-100, #2a2d2e);
        }
    }
    .iui-treeitem-selected, .iui-treeitem-content-selected {
        background: var(--treeitem-selected-background, transparent);
        border: var(--treeitem-selected-border, 2px solid transparent);
        color: var(--treeitem-selected-color, white);

        animation-name: iui-treeitem-selected-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    .iui-treeitem-selected .iui-treeitem-expand-box, .iui-treeitem-content-selected .iui-treeitem-expand-box {
        opacity: 1;
    }
    @keyframes iui-treeitem-selected-animate-enter {
        0% { 
            background: var(--treeitem-selected-animation-background-0, #2a2d2e); 
            border-color: var(--treeitem-selected-animation-border-color-0, #2a2d2e);
            color: var(--treeitem-selected-animation-color-0, #cccccc);
        }
        100% { 
            background: var(--treeitem-selected-animation-background-100, #0a4369); 
            border-color: var(--treeitem-selected-animation-border-color-100, #0a4369);
            color: var(--treeitem-selected-animation-color-0, white);
        }
    }
    .iui-treeitem-expand-box {
        background: url(../../icons/expandbox-icons.png) no-repeat -48px -48px;
    }
    .iui-treeitem-expand-box-open {
        background-position: -48px -16px;
        opacity: 0.25;
    }
    .iui-treeitem-expand-box-open:hover {
        opacity: 0.75;
    }
    .iui-treeitem-expand-box-close {
        background-position: -48px 0;
        opacity: 0.25;
    }
    .iui-treeitem-expand-box-close:hover {
        opacity: 0.75;
    }
    .iui-treeitem-expand-box-open-animate {
        background-position: -48px 0;
    }
    .iui-treeitem-expand-box-close-animate {
        background-position: -48px 0;
    }
`;

export { iuiTreeItemMidnightStyle };
