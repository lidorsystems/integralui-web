import { c as css } from '../external/lit-element.js';

const iuiCalendarDefaultStyle = css`
    .iui-calendar {
        background: var(--calendar-background, white);
        border: var(--calendar-border, thin solid #cecece);
        border-color:  var(--calendar-border-color, #cecece);
        border-radius: var(--calendar-border-radius, 1px);
        border-width: var(--calendar-border-width, thin);
        color: var(--calendar-color, black);
        cursor: var(--calendar-cursor, default);
        display: var(--calendar-display, block);
        float: var(--calendar-float, none);
        height: var(--calendar-height, auto);
        opacity: var(--calendar-opacity, 1);
        overflow: hidden;
        margin: var(--calendar-margin, 0);
        padding: var(--calendar-padding, 0);
        position: var(--calendar-position, relative);
        width: var(--calendar-width, auto);
        
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-calendar:focus {
        outline: none !important;
    }

    .iui-calendar-header-button {
        display: inline-block;
        opacity: 0.6;
    }
    .iui-calendar-header-button:hover {
        opacity: 1;
    }
    .iui-calendar-header-button span {
        display: block;
        padding: 0;
        margin: 0;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .iui-calendar-header-button-prev {
        float: left;
    }
    .iui-calendar-header-button-prev span {
        background-image: url(../icons/prev-24.png);
    }
    .iui-calendar-header-button-next {
        float: right;
    }
    .iui-calendar-header-button-next span {
        background-image: url(../icons/next-24.png);
    }
    .iui-calendar-header-title {
        display: inline-block;
        text-align:center;
        white-space: nowrap;
    }
    .iui-calendar-cell-header {
        border: thin solid transparent;
        text-align: center;
        white-space: nowrap;
    }
    .iui-calendar-cell {
        border: thin solid transparent;
        border-radius: 3px;
        color: var(--calendar-cell-color, black);
        padding: 0 3px;
        text-align: right;
    }
    .iui-calendar-normal {
    }
    .iui-calendar-cell-hovered, .iui-calendar-cell-grayed:hover {
        background: var(--calendar-cell-hovered-background, #f5f5f5);
        border-color: var(--calendar-cell-hovered-border-color, #efefef);
    }
    .iui-calendar-cell-selected {
        background: var(--calendar-cell-selected-background, #e5e5e5);
        border-color: var(--calendar-cell-selected-border-color, #dedede);
        color: var(--calendar-cell-selected-color, black);
    }
    .iui-calendar-cell-grayed {
        opacity: 0.5;
    }
    .iui-calendar-cell-today {
        border-color: var(--calendar-cell-today-border-color, #bebebe);
        font-weight: bold;
    }

    /* Disabled State */
    .iui-calendar-disabled {
        opacity: var(--calendar-disabled-opacity, 0.75);
        pointer-events: none;
    }

    .iui-calendar-cell-enter {
        animation-name: calendar-cell-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes calendar-cell-enter {
        0% { 
            background: var(--calendar-animation-cell-enter-background-0, transparent); 
            border-color: var(--calendar-animation-cell-enter-border-color-0, transparent);
        }
        100% { 
            background: var(--calendar-animation-cell-enter-background-100, #f5f5f5); 
            border-color: var(--calendar-animation-cell-enter-border-color-100, #efefef);
        }
    }
    .iui-calendar-cell-leave {
        animation-name: calendar-cell-leave;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.15s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes calendar-cell-leave {
        0% { 
            background: var(--calendar-animation-cell-leave-background-0, #f5f5f5); 
            border-color: var(--calendar-animation-cell-leave-border-color-0, #efefef);
        }
        100% { 
            background: var(--calendar-animation-cell-leave-background-100, transparent); 
            border-color: var(--calendar-animation-cell-leave-border-color-100, transparent);
        }
    }
`;

export { iuiCalendarDefaultStyle };
