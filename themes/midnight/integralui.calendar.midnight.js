import { c as css } from '../../external/lit-element.js';

const iuiCalendarMidnightStyle = css`
    .iui-calendar {
        background: var(--calendar-background, #252526);
        border: var(--calendar-border, thin solid #151515);
        border-color:  var(--calendar-border-color, #151515);
        color: var(--calendar-color, #cccccc);
    }
    .iui-calendar-cell {
        color: var(--calendar-cell-color, #cccccc);
    }
    .iui-calendar-cell-hovered, .iui-calendar-cell-grayed:hover {
        background: var(--calendar-cell-hovered-background, #1177bb);
        border-color: var(--calendar-cell-hovered-border-color, #1177bb);
    }
    .iui-calendar-cell-selected {
        background: var(--calendar-cell-selected-background, #0e639c);
        border-color: var(--calendar-cell-selected-border-color, #0e639c);
        color: var(--calendar-cell-selected-color, white);
    }
    .iui-calendar-cell-today {
        border-color: var(--calendar-cell-today-border-color, #0a4369);
    }
    .iui-calendar-header-button-prev span {
        background-image: url(../../icons/prev-white-24.png);
    }
    .iui-calendar-header-button-next span {
        background-image: url(../../icons/next-white-24.png);
    }
    @keyframes calendar-cell-enter {
        0% { 
            background: var(--calendar-animation-cell-enter-background-0, transparent); 
            border-color: var(--calendar-animation-cell-enter-border-color-0, transparent);
        }
        100% { 
            background: var(--calendar-animation-cell-enter-background-100, #1177bb); 
            border-color: var(--calendar-animation-cell-enter-border-color-100, #1177bb);
        }
    }
    @keyframes calendar-cell-leave {
        0% { 
            background: var(--calendar-animation-cell-leave-background-0, #1177bb); 
            border-color: var(--calendar-animation-cell-leave-border-color-0, #1177bb);
        }
        100% { 
            background: var(--calendar-animation-cell-leave-background-100, transparent); 
            border-color: var(--calendar-animation-cell-leave-border-color-100, transparent);
        }
    }
`;

export { iuiCalendarMidnightStyle };
