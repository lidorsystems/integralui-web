import { c as css } from '../../external/lit-element.js';

export const iuiCardDefaultStyle = css`
    .iui-card {
        color: var(--iui-card-color, black);
        cursor: var(--iui-card-cursor, default);
        display: var(--iui-card-display, block);
        float: var(--iui-card-float, none);
        height: var(--iui-card-height, auto);
        margin: var(--iui-card-margin, 0);
        perspective: 999px;
        position: var(--iui-card-position, relative);
        white-space: var(--iui-card-white-space, normal);
        width: var(--iui-card-width, auto);
        z-index: var(--iui-card-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    .iui-card-inner-flip {
        transform: rotateY(180deg);
    }

    .iui-card-label {
        border: var(--iui-card-label-border, thin solid transparent);
        display: inline-block;
        padding: var(--iui-card-label-padding, 2px);
    }

    .iui-card-front, .iui-card-back {
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        height: 100%;
        overflow: hidden;
        position: absolute;
        width: 100%;
    }
    .iui-card-front {
        background: var(--iui-card-front-background, transparent);
        border: var(--iui-card-front-border, thin solid #cecece);
        border-color:  var(--iui-card-front-border-color, #cecece);
        border-radius: var(--iui-card-front-border-radius, 1px);
        border-width: var(--iui-card-front-border-width, thin);
        box-shadow: var(--iui-card-front-box-shadow, 0 4px 8px 0 rgba(0,0,0,0.2));
        opacity: 1;
        padding: var(--iui-card-front-padding, 0);
    }
    .iui-card-back {
        background: var(--iui-card-back-background, transparent);
        border: var(--iui-card-back-border, thin solid #cecece);
        border-color:  var(--iui-card-back-border-color, #cecece);
        border-radius: var(--iui-card-back-border-radius, 1px);
        border-width: var(--iui-card-back-border-width, thin);
        box-shadow: var(--iui-card-back-box-shadow, 0 4px 8px 0 rgba(0,0,0,0.2));
        opacity: 1;
        padding: var(--iui-card-back-padding, 0);
        transform: rotateY(180deg);
    }

    /* Card Front */
    .iui-card-front-header {
        background: var(--iui-card-front-back-headerground, #e5e5e5);
        border: var(--iui-card-front-header-border, thin solid #cecece);
        border-color:  var(--iui-card-front-header-border-color, #cecece);
        border-width: var(--iui-card-front-header-border-width, 0 0 thin 0);
        color: var(--iui-card-front-header-color, black);
        margin: 0;
        padding: var(--iui-card-front-header-padding, 3px);
        position: relative;
    }

    .iui-card-front-content {
        background: var(--iui-card-front-back-contentground, white);
        color: var(--iui-card-front-content-color, black);
        overflow: auto;
        position: relative;
    }

    .iui-card-front-footer {
        background: var(--iui-card-front-back-footerground, #e5e5e5);
        border: var(--iui-card-front-footer-border, thin solid #cecece);
        border-color:  var(--iui-card-front-footer-border-color, #cecece);
        border-width: var(--iui-card-front-footer-border-width, thin 0 0 0);
        color: var(--iui-card-front-footer-color, black);
        margin: 0;
        padding: var(--iui-card-front-footer-padding, 3px);
        position: relative;
    }

    /* Card Back */
    .iui-card-back-header {
        background: var(--iui-card-back-header-background, #e5e5e5);
        border: var(--iui-card-back-header-border, thin solid #cecece);
        border-color:  var(--iui-card-back-header-border-color, #cecece);
        border-width: var(--iui-card-back-header-border-width, 0 0 thin 0);
        color: var(--iui-card-back-header-color, black);
        margin: 0;
        padding: var(--iui-card-back-header-padding, 3px);
        position: relative;
    }

    .iui-card-back-content {
        background: var(--iui-card-back-content-background, white);
        color: var(--iui-card-back-content-color, black);
        overflow: auto;
        position: relative;
    }

    .iui-card-back-footer {
        background: var(--iui-card-back-footer-background, #e5e5e5);
        border: var(--iui-card-back-footer-border, thin solid #cecece);
        border-color:  var(--iui-card-back-footer-border-color, #cecece);
        border-width: var(--iui-card-back-footer-border-width, thin 0 0 0);
        color: var(--iui-card-back-footer-color, black);
        margin: 0;
        padding: var(--iui-card-back-footer-padding, 3px);
        position: relative;
    }


    /* Disabled State */
    .iui-card-disabled div {
        opacity: var(--iui-card-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;