import { c as css } from '../../external/lit-element.js';

const iuiTreeListItemOfficeStyle = css`
    .iui-treelistitem-hovered {
        background: var(--treelistitem-hovered-background, transparent);

        animation-name: iui-treelistitem-hovered-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treelistitem-hovered-animate-enter {
        0% { background: var(--treelistitem-hovered-animation-background-0, transparent); }
        100% { background: var(--treelistitem-hovered-animation-background-100, #d9edfd); }
    }
    .iui-treelistitem-selected {
        background: var(--treelistitem-selected-background, transparent);

        animation-name: iui-treelistitem-selected-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treelistitem-selected-animate-enter {
        0% { background: var(--treelistitem-selected-animation-background-0, #d9edfd); }
        100% { background: var(--treelistitem-selected-animation-background-100, #a5d3fa); }
    }
    .iui-treelistitem-animate-select {
        background: var(--treelistitem-animate-select-background, #d9edfd);
    }
`;

export { iuiTreeListItemOfficeStyle };
