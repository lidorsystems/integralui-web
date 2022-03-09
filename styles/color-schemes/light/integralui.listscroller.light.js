import { c as css } from '../../../external/lit-element.js';

const iuiListScrollerLightStyle = css`
    /* DisplayMode - LeftRight */
    .iui-listscroller-leftright-buttons
    {
        background: #e2e2e2;
        border: thin solid #e2e2e2;
    }
    .iui-listscroller-leftright-buttons:hover
    {
        background: #91c1e7;
        border: thin solid #91c1e7;
    }

    /* DisplayMode - UpDown */
    .iui-listscroller-updown-buttons
    {
        background: #e2e2e2;
        border: thin solid #e2e2e2;
    }
    .iui-listscroller-updown-buttons:hover
    {
        background: #91c1e7;
        border: thin solid #91c1e7;
    }

    .iui-listscroller-item-hovered {
        background: var(--listscroller-item-hovered-background, #d9edfd);
        border: var(--listscroller-item-hovered-border, thin solid #d9edfd);
        color: var(--listscroller-item-hovered-color, black);
	}
	.iui-listscroller-item-selected {
        background: var(--listscroller-item-selected-background, #a5d3fa);
        border: var(--listscroller-item-selected-border, thin solid #a5d3fa);
        color: var(--listscroller-item-selected-color, black);
	}
`;

export { iuiListScrollerLightStyle };
