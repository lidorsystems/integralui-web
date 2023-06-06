import { c as css } from '../../../external/lit-element.js';

export const iuiItemLightStyle = css`
	.iui-item {
        color: var(--iui-item-color, #646464);
	}
	.iui-item-hovered {
        background: var(--iui-item-hovered-background, transparent);
        border: var(--iui-item-hovered-border, thin solid transparent);
        color: var(--iui-item-hovered-color, black);

		animation-name: iui-item-hovered-animate-enter;
		animation-delay: 0s;
		animation-direction: normal;
		animation-duration: 0.15s;
		animation-fill-mode: forwards;
		animation-iteration-count: 1;
		animation-play-state: running;
		animation-timing-function: linear; 
	}
	@keyframes iui-item-hovered-animate-enter {
		0% { 
			background: var(--iui-item-hovered-animation-background-0, transparent); 
			border-color: var(--iui-item-hovered-animation-border-color-0, transparent); 
		}
		100% { 
			background: var(--iui-item-hovered-animation-background-100, #d9edfd); 
			border-color: var(--iui-item-hovered-animation-border-color-100, #d9edfd); 
		}
	}
	.iui-item-selected {
        background: var(--iui-item-selected-background, #d9edfd);
        border: var(--iui-item-selected-border, thin solid transparent);
        color: var(--iui-item-selected-color, black);

		animation-name: iui-item-selected-animate-enter;
		animation-delay: 0s;
		animation-direction: normal;
		animation-duration: 0.25s;
		animation-fill-mode: forwards;
		animation-iteration-count: 1;
		animation-play-state: running;
		animation-timing-function: linear; 
	}
	@keyframes iui-item-selected-animate-enter {
		0% { 
			background: var(--iui-item-selected-animation-background-0, #d9edfd); 
			border-color: var(--iui-item-selected-animation-border-color-0, #d9edfd); 
		}
		100% { 
			background: var(--iui-item-selected-animation-background-100, #a5d3fa); 
			border-color: var(--iui-item-selected-animation-border-color-100, #a5d3fa); 
		}
	}
`;