import { c as css } from '../../../external/lit-element.js';

const iuiTreeItemLightStyle = css`
    .iui-treeitem {
        color: var(--treeitem-color, #646464);
    }
    .iui-treeitem-hovered, .iui-treeitem-content-hovered {
        background: var(--treeitem-hovered-background, #d9edfd);
        border: var(--treeitem-hovered-border, 2px solid #d9edfd);
        color: var(--treeitem-hovered-color, black);

        animation-name: none; /*iui-treeitem-hovered-animate-enter;*/
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
            background: var(--treeitem-hovered-animation-background-100, #d9edfd); 
            border-color: var(--treeitem-hovered-animation-border-color-100, #d9edfd);
        }
    }
    .iui-treeitem-selected, .iui-treeitem-content-selected {
        background: var(--treeitem-selected-background, #a5d3fa);
        border: var(--treeitem-selected-border, 2px solid #a5d3fa);
        color: var(--treeitem-selected-color, black);

        animation-name: none; /*iui-treeitem-selected-animate-enter;*/
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-treeitem-selected-animate-enter {
        0% { 
            background: var(--treeitem-selected-animation-background-0, #d9edfd); 
            border-color: var(--treeitem-selected-animation-border-color-0, #d9edfd);
        }
        100% { 
            background: var(--treeitem-selected-animation-background-100, #a5d3fa); 
            border-color: var(--treeitem-selected-animation-border-color-100, #a5d3fa);
        }
    }
    .iui-treeitem-expand-box {
        background: url(../../../icons/expandbox-icons.png) no-repeat -80px -48px;
    }
    .iui-treeitem-expand-box-open {
        background-position: -80px -16px;
    }
    .iui-treeitem-expand-box-open:hover {
        background-position: -64px -16px;
    }
    .iui-treeitem-expand-box-close {
        background-position: -80px 0;
    }
    .iui-treeitem-expand-box-close:hover {
        background-position: -64px 0;
    }
    .iui-treeitem-expand-box-open-animate {
        background-position: -64px 0;
    }
    .iui-treeitem-expand-box-close-animate {
        background-position: -64px 0;
    }
`;

export { iuiTreeItemLightStyle };
