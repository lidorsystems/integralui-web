import { c as css } from '../../../external/lit-element.js';

export const iuiCardDarkStyle = css`

    /* Card Front */
    .iui-card-front {
        border-color: var(--iui-card-front-border-color, #323233);
        color: var(--iui-card-front-color, #cccccc);
    }
    .iui-card-front-header {
        background: var(--iui-card-front-header-background, #323233);
        border-color: var(--iui-card-front-header-border-color, #323233);
        color: var(--iui-card-front-header-color, #cccccc);
    }
    .iui-card-hovered .iui-card-front-header {
        background: var(--iui-card-front-header-hovered-background, #113d5c);
        border-color: var(--iui-card-front-header-hovered-border-color, #113d5c);
        color: var(--iui-card-front-header-hovered-color, white);
    }
    .iui-card-selected .iui-card-front-header {
        background: var(--iui-card-front-header-selected-background, #0c293d);
        border-color: var(--iui-card-front-header-selected-border-color, #0c293d);
        color: var(--iui-card-front-header-selected-color, white);
    }
    
    .iui-card-front-content {
        background: var(--iui-card-front-content-background, #252526);
        color: var(--iui-card-front-content-color, #cccccc);
    }

    .iui-card-front-footer {
        background: var(--iui-card-front-header-background, #323233);
        border-color: var(--iui-card-front-header-border-color, #323233);
        color: var(--iui-card-front-footer-color, #cccccc);
    }

    /* Card Back */
    .iui-card-back {
        border-color: var(--iui-card-back-border, #323233);
        color: var(--iui-card-back-color, #cccccc);
    }
    .iui-card-back-header {
        background: var(--iui-card-back-header-background, #323233);
        border-color: var(--iui-card-back-header-border-color, #323233);
        color: var(--iui-card-back-header-color, #cccccc);
    }
    .iui-card-hovered .iui-card-back-header {
        background: var(--iui-card-back-header-hovered-background, #113d5c);
        border-color: var(--iui-card-back-header-hovered-border-color, #113d5c);
        color: var(--iui-card-back-header-hovered-color, white);
    }
    .iui-card-selected .iui-card-back-header {
        background: var(--iui-card-back-header-selected-background, #0c293d);
        border-color: var(--iui-card-back-header-selected-border-color, #0c293d);
        color: var(--iui-card-back-header-selected-color, white);
    }
    
    .iui-card-back-content {
        background: var(--iui-card-back-content-background, #252526);
        color: var(--iui-card-back-content-color, #cccccc);
    }

    .iui-card-back-footer {
        background: var(--iui-card-back-header-background, #323233);
        border-color: var(--iui-card-back-header-border-color, #323233);
        color: var(--iui-card-back-footer-color, #cccccc);
    }
`;