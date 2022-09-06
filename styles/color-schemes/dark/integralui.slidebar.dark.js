import { c as css } from '../../../external/lit-element.js';

export const iuiSlideBarDarkStyle = css`
    .iui-slidebar {
        background: var(--slidebar-background, #1e1e1e);
        border: var(--slidebar-border, thin solid #151515);
        border-color:  var(--slidebar-border-color, #151515);
    }
    .iui-slide {
        background: var(--slide-background, #252526);
        color: var(--slide-color, #cccccc);
    }
    .iui-slidebar-navigator {
        background: var(--slidebar-navigator-background, #282828);
    }
    .iui-slidebar-navigator-button {
        background: var(--slidebar-navigator-button-background, #363636);
    }
    .iui-slidebar-navigator-button:hover {
        background: var(--slidebar-navigator-button-hovered-background, #484848);
    }
    .iui-slidebar-navigator-button-selected {
        background: var(--slidebar-navigator-button-selected-background, #0e639c);
    }
    .iui-slidebar-navigator-button-selected:hover {
        background: var(--slidebar-navigator-button-selected-hovered-background, #1177bb);
    }
    .iui-slidebar-arrow-left span {
        background: var(--slidebar-arrow-left-button-background, url(../../../icons/prev-white-large-24.png));
    }
    .iui-slidebar-arrow-right span {
        background: var(--slidebar-arrow-right-button-background, url(../../../icons/next-white-large-24.png));
    }
`;
