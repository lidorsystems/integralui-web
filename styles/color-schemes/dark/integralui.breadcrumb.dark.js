import { c as css } from '../../../external/lit-element.js';

export const iuiBreadCrumbDarkStyle = css`
    .iui-breadcrumb {
        background:  var(--breadcrumb-background, #252526);
        border-color:  var(--breadcrumb-border-color, #151515);
        color: var(--breadcrumb-color, #cccccc);
    }
    .iui-breadcrumb-root-button-box {
        background: url(../../../icons/menu-button-white.ico);
    }
    .iui-breadcrumb-item-content-hovered {
        background:  var(--breadcrumb-item-content-hovered-background, #113d5c);
        border-color:  var(--breadcrumb-item-content-hovered-border-color, #0c293d);
    }
    .iui-breadcrumb-item-content-selected, .iui-breadcrumb-item-content-selected {
        background:  var(--breadcrumb-item-content-selected-background, #113d5c);
        border-color:  var(--breadcrumb-item-content-selected-border-color, #0c293d);
    }
    .iui-breadcrumb-item-hovered .iui-breadcrumb-item-button-first, .iui-breadcrumb-item-selected .iui-breadcrumb-item-button-first {
        border-left: thin solid #0c293d;
    }
    .iui-breadcrumb-root-button-hovered, .iui-breadcrumb-item-hovered .iui-breadcrumb-item-button {
        background: #113d5c;
        border-top: thin solid #0c293d;
        border-right: thin solid #0c293d;
        border-bottom: thin solid #0c293d;
    }
    .iui-breadcrumb-root-button-selected, .iui-breadcrumb-item-selected .iui-breadcrumb-item-button {
        background: #113d5c;
        border-top: thin solid #0c293d;
        border-right: thin solid #0c293d;
        border-bottom: thin solid #0c293d;
    }
    .iui-breadcrumb-root-button-hovered {
        border:  var(--breadcrumb-root-button-hovered-border, thin solid #0c293d);
    }
    .iui-breadcrumb-root-button-selected {
        border:  var(--breadcrumb-root-button-selected-border, thin solid #0c293d);
    }
    .iui-breadcrumb-item-expand-box {
        opacity: 0.75;
    }
    .iui-breadcrumb-item-expand-box-open {
        background-position: var(--breadcrumb-item-expand-box-open-background-position, -48px -16px);
    }
    .iui-breadcrumb-item-expand-box-open-animate {
        background-position: var(--breadcrumb-item-expand-box-open-animate-background-position, -48px 0);
    }
    .iui-breadcrumb-item-expand-box-close {
        background-position: var(--breadcrumb-item-expand-box-close-background-position, -48px 0);
    }
    .iui-breadcrumb-item-expand-box-close-animate {
        background-position: var(--breadcrumb-item-expand-box-close-animate-background-position, -48px 0);
    }
`;