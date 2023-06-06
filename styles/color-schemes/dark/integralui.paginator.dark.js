import { c as css } from '../../../external/lit-element.js';

export const iuiPaginatorDarkStyle = css`
    .iui-paginator {
        background: var(--iui-paginator-background, #252526);
    }
    .iui-paginator-button {
        background-color: var(--iui-paginator-button-background-color, #0e639c);
        border: var(--iui-paginator-button-border, thin solid #0e639c);
    }
    .iui-paginator-button:hover {
        background-color: var(--iui-paginator-button-hover-background-color, #1177bb);
    }
    .iui-paginator-input {
        background: var(--iui-paginator-input-background, #3c3c3c);
        border: var(--iui-paginator-input-border, thin solid #151515);
        color: var(--iui-paginator-input-color, #cecece);
    }
    .iui-paginator-label {
        color: #cecece;
    }
`;