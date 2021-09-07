import { c as css } from '../../external/lit-element.js';

const iuiCalendarOfficeStyle = css`
    .iui-calendar-cell-hovered, .iui-calendar-cell-grayed:hover {
        background: var(--calendar-cell-hovered-background, #e5f3fe);
        border-color: var(--calendar-cell-hovered-border-color, #e5f3fe);
    }
    .iui-calendar-cell-selected {
        background: var(--calendar-cell-selected-background, #cce8ff);
        border-color: var(--calendar-cell-selected-border-color, #cce8ff);
    }
    .iui-calendar-cell-today {
        border-color: var(--calendar-cell-today-border-color, #b4dbfc);
    }
    @keyframes calendar-cell-enter {
        0% { 
            background: var(--calendar-animation-cell-enter-background-0, transparent); 
            border-color: var(--calendar-animation-cell-enter-border-color-0, transparent);
        }
        100% { 
            background: var(--calendar-animation-cell-enter-background-100, #e5f3fe); 
            border-color: var(--calendar-animation-cell-enter-border-color-100, #e5f3fe);
        }
    }
    @keyframes calendar-cell-leave {
        0% { 
            background: var(--calendar-animation-cell-leave-background-0, #e5f3fe); 
            border-color: var(--calendar-animation-cell-leave-border-color-0, #e5f3fe);
        }
        100% { 
            background: var(--calendar-animation-cell-leave-background-100, transparent); 
            border-color: var(--calendar-animation-cell-leave-border-color-100, transparent);
        }
    }
`;

export { iuiCalendarOfficeStyle };
