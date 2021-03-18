import { c as css } from '../external/lit-element.js';

const iuiTreeListDefaultStyle = css`
    .iui-treelist {
        background: var(--treelist-background, #efefef);
        border: var(--treelist-border, thin solid #cecece);
        border-width: var(--treelist-border-width, thin);
        color: var(--treelist-color, #323232);
        cursor: var(--treelist-cursor, default);
        overflow: hidden;
        margin: var(--treelist-margin, 0);
        padding: var(--treelist-padding, 1px);
        position: relative;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-treelist-header {
        background: var(--treelist-header-background, #cecece);
        border: var(--treelist-header-border, thin solid transparent);
        color: var(--treelist-header-color, black);
        margin: var(--treelist-header-margin, -1px);
        padding: var(--treelist-header-padding, 7px);
        position: relative;
        z-index: 2;
    }
    .iui-treelist-header-back-icon {
        background-image: var(--treelist-header-back-icon, url(../icons/expandbox-icons.png));
        background-repeat: no-repeat;
        background-position: var(--treelist-header-back-icon-position, 0 -32px);
        display: inline-block;
        height: var(--treelist-header-back-icon-height, 16px);
        overflow: hidden;
        padding: 0;
        margin: var(--treelist-header-back-icon-margin, -3px 0 0 -4px);
        width: var(--treelist-header-back-icon-width, 16px);
        vertical-align: middle;
    }
    .iui-treelist-header-title {
        margin: var(--treelist-header-title-margin, 0 0 0 5px);
    }
    .iui-treelist-block {
    }
    .iui-treelist-block ul {
        list-style-type: none;
        margin: 0;
        padding: 1px 0;
        position: absolute;
    }
`;

export { iuiTreeListDefaultStyle };
