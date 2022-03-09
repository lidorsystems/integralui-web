import { c as css } from '../../../external/lit-element.js';

const iuiBreadCrumbLightStyle = css`
    .iui-breadcrumb-item-content-hovered, .iui-breadcrumb-item-content-selected,
    .iui-breadcrumb-root-button-hovered, .iui-breadcrumb-item-hovered .iui-breadcrumb-item-button,
    .iui-breadcrumb-root-button-selected, .iui-breadcrumb-item-selected .iui-breadcrumb-item-button {
        background: var(--breadcrumb-item-content-hovered-background, #d9edfd); 
        border-color: var(--breadcrumb-item-content-hovered-border-color, #a5d3fa);
    }  
`;

export { iuiBreadCrumbLightStyle };
