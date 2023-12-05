import { c as css } from '../../external/lit-element.js';

const iuiButtonDefaultStyle = css`
    .iui-button {
        background: var(--iui-button-background, #e5e5e5);
        border: var(--iui-button-border, thin solid #cecece);
        border-color:  var(--iui-button-border-color, #cecece);
        border-radius: var(--iui-button-border-radius, 3px);
        border-width: var(--iui-button-border-width, thin);
        color: var(--iui-button-color, black);
        cursor: var(--iui-button-cursor, default);
        display: var(--iui-button-display, inline-block);
        float: var(--iui-button-float, none);
        font-size: var(--iui-button-font-size, 1rem);
        font-style: var(--iui-button-font-style, normal);
        height: var(--iui-button-height, auto);
        opacity: var(--iui-button-opacity, 1);
        overflow: hidden;
        margin: var(--iui-button-margin, 0);
        padding: var(--iui-button-padding, 5px);
        position: var(--iui-button-position, relative);
        text-align: var(--iui-button-text-align, center);
        vertical-align: var(--iui-button-vertical-align, initial);
        width: var(--iui-button-width, auto);
        z-index: var(--iui-button-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-button-hovered {
        background: var(--iui-button-hovered-background, #efefef);
        border: var(--iui-button-hovered-border, thin solid #cecece);
        border-color: var(--iui-button-hovered-border-color, #cecece);
        color: var(--iui-button-hovered-color, black);
    }
    .iui-button-selected {
        background: var(--iui-button-selected-background, #d5d5d5);
        border: var(--iui-button-selected-border, thin solid #bebebe);
        border-color: var(--iui-button-selected-border-color, #bebebe);
        color: var(--iui-button-selected-color, black);
    }
    .iui-button:focus {
        border-color:  var(--iui-button-focus-border-color, #d5d5d5);
        outline: none !important;
    }

    /* Disabled State */
    .iui-button-disabled {
        opacity: var(--iui-button-disabled-opacity, 0.75);
        pointer-events: none;
    }




    /* Alerted State - Experimental
    .iui-button {
        animation-duration: 2.5s;
        animation-name: alerted;
        animation-iteration-count: infinite;
        animation-direction: normal;
    }
    .iui-button-content {
        font-weight: 1rem;
        transition: font-size 0.4s ease-in-out;
    }
    .iui-button-content:hover {
        font-size: 1.1rem;
    }
    @keyframes alerted {
        0% { box-shadow: 0 0 0 0 #cecece }
        100% { box-shadow: 0 0 0 10px transparent }
    } */
`;

export { iuiButtonDefaultStyle };
