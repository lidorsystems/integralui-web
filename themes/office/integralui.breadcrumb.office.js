import { c as css } from '../../external/lit-element.js';

const iuiBreadCrumbOfficeStyle = css`
    @keyframes animate-breadcrumb-item-enter {
        0% { 
            background: var(--breadcrumb-animation-item-enter-background-0, transparent); 
            border-color: var(--breadcrumb-animation-item-enter-border-color-0, transparent);
        }
        100% { 
            background: var(--breadcrumb-animation-item-enter-background-100, #d9edfd); 
            border-color: var(--breadcrumb-animation-item-enter-border-color-100, #a5d3fa);
        }
    }
`;

export { iuiBreadCrumbOfficeStyle };
