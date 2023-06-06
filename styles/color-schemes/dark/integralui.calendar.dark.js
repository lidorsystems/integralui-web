import { c as css } from '../../../external/lit-element.js';

export const iuiCalendarDarkStyle = css`
    .iui-calendar {
        background: var(--iui-calendar-background, #252526);
        border: var(--iui-calendar-border, thin solid #151515);
        border-color:  var(--iui-calendar-border-color, #151515);
        color: var(--iui-calendar-color, #cccccc);
    }
    .iui-calendar-cell {
        color: var(--iui-calendar-cell-color, #cccccc);
    }
    .iui-calendar-cell-hovered, .iui-calendar-cell-grayed:hover {
        background: var(--iui-calendar-cell-hovered-background, #1177bb);
        border-color: var(--iui-calendar-cell-hovered-border-color, #1177bb);
    }
    .iui-calendar-cell-selected {
        background: var(--iui-calendar-cell-selected-background, #0e639c);
        border-color: var(--iui-calendar-cell-selected-border-color, #0e639c);
        color: var(--iui-calendar-cell-selected-color, white);
    }
    .iui-calendar-cell-today {
        border-color: var(--iui-calendar-cell-today-border-color, #0a4369);
    }
    .iui-calendar-header-button-prev span {
        background-image: url(../../../icons/prev-white-24.png);
    }
    .iui-calendar-header-button-next span {
        background-image: url(../../../icons/next-white-24.png);
    }
    @keyframes calendar-cell-enter {
        0% { 
            background: var(--iui-calendar-animation-cell-enter-background-0, transparent); 
            border-color: var(--iui-calendar-animation-cell-enter-border-color-0, transparent);
        }
        100% { 
            background: var(--iui-calendar-animation-cell-enter-background-100, #1177bb); 
            border-color: var(--iui-calendar-animation-cell-enter-border-color-100, #1177bb);
        }
    }
    @keyframes calendar-cell-leave {
        0% { 
            background: var(--iui-calendar-animation-cell-leave-background-0, #1177bb); 
            border-color: var(--iui-calendar-animation-cell-leave-border-color-0, #1177bb);
        }
        100% { 
            background: var(--iui-calendar-animation-cell-leave-background-100, transparent); 
            border-color: var(--iui-calendar-animation-cell-leave-border-color-100, transparent);
        }
    }
`;