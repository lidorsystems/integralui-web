import { c as css } from '../../external/lit-element.js';

const iuiCardDefaultStyle = css`
    .iui-card {
        color: var(--card-color, black);
        cursor: var(--card-cursor, default);
        display: var(--card-display, block);
        float: var(--card-float, none);
        height: var(--card-height, auto);
        margin: var(--card-margin, 0);
        perspective: 999px;
        position: var(--card-position, relative);
        white-space: var(--card-white-space, normal);
        width: var(--card-width, auto);

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
        border: var(--card-label-border, thin solid transparent);
        display: inline-block;
        padding: var(--card-label-padding, 2px);
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
        background: var(--card-front-background, transparent);
        border: var(--card-front-border, thin solid #cecece);
        border-color:  var(--card-front-border-color, #cecece);
        border-radius: var(--card-front-border-radius, 1px);
        border-width: var(--card-front-border-width, thin);
        box-shadow: var(--card-front-box-shadow, 0 4px 8px 0 rgba(0,0,0,0.2));
        opacity: 1;
        padding: var(--card-front-padding, 0);
    }
    .iui-card-back {
        background: var(--card-back-background, transparent);
        border: var(--card-back-border, thin solid #cecece);
        border-color:  var(--card-back-border-color, #cecece);
        border-radius: var(--card-back-border-radius, 1px);
        border-width: var(--card-back-border-width, thin);
        box-shadow: var(--card-back-box-shadow, 0 4px 8px 0 rgba(0,0,0,0.2));
        opacity: 1;
        padding: var(--card-back-padding, 0);
        transform: rotateY(180deg);
    }

    /* Card Front */
    .iui-card-front-header {
        background: var(--card-front-back-headerground, #e5e5e5);
        border: var(--card-front-header-border, thin solid #cecece);
        border-color:  var(--card-front-header-border-color, #cecece);
        border-width: var(--card-front-header-border-width, 0 0 thin 0);
        color: var(--card-front-header-color, black);
        margin: 0;
        padding: var(--card-front-header-padding, 3px);
        position: relative;
    }

    .iui-card-front-content {
        background: var(--card-front-back-contentground, white);
        color: var(--card-front-content-color, black);
        overflow: auto;
        position: relative;
    }

    .iui-card-front-footer {
        background: var(--card-front-back-footerground, #e5e5e5);
        border: var(--card-front-footer-border, thin solid #cecece);
        border-color:  var(--card-front-footer-border-color, #cecece);
        border-width: var(--card-front-footer-border-width, thin 0 0 0);
        color: var(--card-front-footer-color, black);
        margin: 0;
        padding: var(--card-front-footer-padding, 3px);
        position: relative;
    }

    /* Card Back */
    .iui-card-back-header {
        background: var(--card-back-header-background, #e5e5e5);
        border: var(--card-back-header-border, thin solid #cecece);
        border-color:  var(--card-back-header-border-color, #cecece);
        border-width: var(--card-back-header-border-width, 0 0 thin 0);
        color: var(--card-back-header-color, black);
        margin: 0;
        padding: var(--card-back-header-padding, 3px);
        position: relative;
    }

    .iui-card-back-content {
        background: var(--card-back-content-background, white);
        color: var(--card-back-content-color, black);
        overflow: auto;
        position: relative;
    }

    .iui-card-back-footer {
        background: var(--card-back-footer-background, #e5e5e5);
        border: var(--card-back-footer-border, thin solid #cecece);
        border-color:  var(--card-back-footer-border-color, #cecece);
        border-width: var(--card-back-footer-border-width, thin 0 0 0);
        color: var(--card-back-footer-color, black);
        margin: 0;
        padding: var(--card-back-footer-padding, 3px);
        position: relative;
    }


    /* Disabled State */
    .iui-card-disabled div {
        opacity: var(--card-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiCardDefaultStyle };
