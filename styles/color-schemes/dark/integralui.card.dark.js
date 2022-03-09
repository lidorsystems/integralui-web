import { c as css } from '../../../external/lit-element.js';

const iuiCardDarkStyle = css`

    /* Card Front */
    .iui-card-front {
        border-color: var(--card-front-border-color, #323233);
        color: var(--card-front-color, #cccccc);
    }
    .iui-card-front-header {
        background: var(--card-front-header-background, #323233);
        border-color: var(--card-front-header-border-color, #323233);
        color: var(--card-front-header-color, #cccccc);
    }
    .iui-card-hovered .iui-card-front-header {
        background: var(--card-front-header-hovered-background, #113d5c);
        border-color: var(--card-front-header-hovered-border-color, #113d5c);
        color: var(--card-front-header-hovered-color, white);
    }
    .iui-card-selected .iui-card-front-header {
        background: var(--card-front-header-selected-background, #0c293d);
        border-color: var(--card-front-header-selected-border-color, #0c293d);
        color: var(--card-front-header-selected-color, white);
    }
    
    .iui-card-front-content {
        background: var(--card-front-content-background, #252526);
        color: var(--card-front-content-color, #cccccc);
    }

    .iui-card-front-footer {
        background: var(--card-front-header-background, #323233);
        border-color: var(--card-front-header-border-color, #323233);
        color: var(--card-front-footer-color, #cccccc);
    }

    /* Card Back */
    .iui-card-back {
        border-color: var(--card-back-border, #323233);
        color: var(--card-back-color, #cccccc);
    }
    .iui-card-back-header {
        background: var(--card-back-header-background, #323233);
        border-color: var(--card-back-header-border-color, #323233);
        color: var(--card-back-header-color, #cccccc);
    }
    .iui-card-hovered .iui-card-back-header {
        background: var(--card-back-header-hovered-background, #113d5c);
        border-color: var(--card-back-header-hovered-border-color, #113d5c);
        color: var(--card-back-header-hovered-color, white);
    }
    .iui-card-selected .iui-card-back-header {
        background: var(--card-back-header-selected-background, #0c293d);
        border-color: var(--card-back-header-selected-border-color, #0c293d);
        color: var(--card-back-header-selected-color, white);
    }
    
    .iui-card-back-content {
        background: var(--card-back-content-background, #252526);
        color: var(--card-back-content-color, #cccccc);
    }

    .iui-card-back-footer {
        background: var(--card-back-header-background, #323233);
        border-color: var(--card-back-header-border-color, #323233);
        color: var(--card-back-footer-color, #cccccc);
    }
`;

export { iuiCardDarkStyle };
