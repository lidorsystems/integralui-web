import { c as css } from '../../../external/lit-element.js';

export const iuiSlideBarDarkStyle = css`
    .iui-slidebar {
        background: var(--iui-slidebar-background, #1e1e1e);
        border: var(--iui-slidebar-border, thin solid #151515);
        border-color:  var(--iui-slidebar-border-color, #151515);
    }
    .iui-slide {
        background: var(--iui-slide-background, #252526);
        color: var(--iui-slide-color, #cccccc);
    }
    .iui-slidebar-navigator {
        background: var(--iui-slidebar-navigator-background, #282828);
    }
    .iui-slidebar-navigator-button {
        background: var(--iui-slidebar-navigator-button-background, #363636);
    }
    .iui-slidebar-navigator-button:hover {
        background: var(--iui-slidebar-navigator-button-hovered-background, #484848);
    }
    .iui-slidebar-navigator-button-selected {
        background: var(--iui-slidebar-navigator-button-selected-background, #0e639c);
    }
    .iui-slidebar-navigator-button-selected:hover {
        background: var(--iui-slidebar-navigator-button-selected-hovered-background, #1177bb);
    }
    .iui-slidebar-arrow-left span {
        background: var(--iui-slidebar-arrow-left-button-background, url(../../../icons/prev-white-large-24.png));
    }
    .iui-slidebar-arrow-right span {
        background: var(--iui-slidebar-arrow-right-button-background, url(../../../icons/next-white-large-24.png));
    }
`;
