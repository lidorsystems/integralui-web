import { c as css } from '../../external/lit-element.js';

const iuiItemOfficeStyle = css`
	.iui-item {
        color: var(--item-color, #646464);
	}
	.iui-item-hovered {
        background: var(--item-hovered-background, transparent);
        border: var(--item-hovered-border, thin solid transparent);
        color: var(--item-hovered-color, black);

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
			background: var(--item-hovered-animation-background-0, transparent); 
			border-color: var(--item-hovered-animation-border-color-0, transparent); 
		}
		100% { 
			background: var(--item-hovered-animation-background-100, #d9edfd); 
			border-color: var(--item-hovered-animation-border-color-100, #d9edfd); 
		}
	}
	.iui-item-selected {
        background: var(--item-selected-background, #d9edfd);
        border: var(--item-selected-border, thin solid transparent);
        color: var(--item-selected-color, black);

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
			background: var(--item-selected-animation-background-0, #d9edfd); 
			border-color: var(--item-selected-animation-border-color-0, #d9edfd); 
		}
		100% { 
			background: var(--item-selected-animation-background-100, #a5d3fa); 
			border-color: var(--item-selected-animation-border-color-100, #a5d3fa); 
		}
	}
`;

export { iuiItemOfficeStyle };
