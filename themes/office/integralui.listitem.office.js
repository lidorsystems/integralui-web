import { c as css } from '../../external/lit-element.js';

export const iuiListItemOfficeStyle = css`
	.iui-listitem {
        color: var(--listitem-color, #646464);
	}
	.iui-listitem-hovered {
        background: var(--listitem-hovered-background, transparent);
        border: var(--listitem-hovered-border, 2px solid transparent);
        color: var(--listitem-hovered-color, black);

		animation-name: iui-listitem-hovered-animate-enter;
		animation-delay: 0s;
		animation-direction: normal;
		animation-duration: 0.15s;
		animation-fill-mode: forwards;
		animation-iteration-count: 1;
		animation-play-state: running;
		animation-timing-function: linear; 
	}
	@keyframes iui-listitem-hovered-animate-enter {
		0% { 
			background: var(--listitem-hovered-animation-background-0, transparent); 
			border-color: var(--listitem-hovered-animation-border-color-0, transparent); 
		}
		100% { 
			background: var(--listitem-hovered-animation-background-100, #d9edfd); 
			border-color: var(--listitem-hovered-animation-border-color-100, #d9edfd); 
		}
	}
	.iui-listitem-selected {
        background: var(--listitem-selected-background, #d9edfd);
        border: var(--listitem-selected-border, 2px solid transparent);
        color: var(--listitem-selected-color, black);

		animation-name: iui-listitem-selected-animate-enter;
		animation-delay: 0s;
		animation-direction: normal;
		animation-duration: 0.25s;
		animation-fill-mode: forwards;
		animation-iteration-count: 1;
		animation-play-state: running;
		animation-timing-function: linear; 
	}
	@keyframes iui-listitem-selected-animate-enter {
		0% { 
			background: var(--listitem-selected-animation-background-0, #d9edfd); 
			border-color: var(--listitem-selected-animation-border-color-0, #d9edfd); 
		}
		100% { 
			background: var(--listitem-selected-animation-background-100, #a5d3fa); 
			border-color: var(--listitem-selected-animation-border-color-100, #a5d3fa); 
		}
	}
	.iui-listitem-animate-select {
        background: var(--listitem-animate-select-background, #d9edfd);
	}
`;