import { c as css } from '../../external/lit-element.js';

const iuiListBoxDefaultStyle = css`
    .iui-listbox {
        background: var(--listbox-background, white);
        border: var(--listbox-border, thin solid #cecece);
        border-color:  var(--listbox-border-color, #cecece);
        border-radius: var(--listbox-border-radius, 1px);
        border-width: var(--listbox-border-width, thin);
        color: var(--listbox-color, black);
        cursor: var(--listbox-cursor, default);
        display: var(--listbox-display, block);
        float: var(--listbox-float, none);
        height: var(--listbox-height, auto);
        margin: var(--listbox-margin, 0);
        opacity: var(--listbox-opacity, 1);
        overflow: hidden;
        padding: var(--listbox-padding, 1px);
        position: var(--listbox-position, relative);
        width: var(--listbox-width, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .iui-listbox li {
        display: block;
    }

    .iui-listbox-block-hover, .iui-listbox-block-select {
        background: var(--listbox-block-background, transparent);
        border: var(--listbox-block-border, thin solid #cecece);
        box-shadow: var(--listbox-block-box-shadow, 2px 3px 3px #e5e5e5);
        pointer-events: none;
        position: absolute;
        z-index: 6;
    }
    .iui-listbox-block-hover > div, .iui-listbox-block-select > div {
        background: var(--listbox-block-panel-background, #f5f5f5);
        pointer-events: auto;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
    }

    /* Disabled State */
    .iui-listbox-disabled div, .iui-listbox-disabled ul
    {
        opacity: var(--listbox-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiListBoxDefaultStyle };
