import { c as css } from '../../external/lit-element.js';

const iuiPaginatorMidnightStyle = css`
    .iui-paginator {
        background: var(--paginator-background, #252526);
    }
    .iui-paginator-button {
        background-color: var(--paginator-button-background-color, #0e639c);
        border: var(--paginator-button-border, thin solid #0e639c);
    }
    .iui-paginator-button:hover {
        background-color: var(--paginator-button-hover-background-color, #1177bb);
    }
    .iui-paginator-input {
        background: var(--paginator-input-background, #3c3c3c);
        border: var(--paginator-input-border, thin solid #151515);
        color: var(--paginator-input-color, #cecece);
    }
    .iui-paginator-label {
        color: #cecece;
    }
`;

export { iuiPaginatorMidnightStyle };
