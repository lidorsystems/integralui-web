import { c as css } from '../../external/lit-element.js';

const iuiTreeListDefaultStyle = css`
    .iui-treelist {
        background: var(--iui-treelist-background, #efefef);
        border: var(--iui-treelist-border, thin solid #cecece);
        border-color:  var(--iui-treelist-border-color, #cecece);
        border-radius: var(--iui-treelist-border-radius, 1px);
        border-width: var(--iui-treelist-border-width, thin);
        color: var(--iui-treelist-color, #323232);
        cursor: var(--iui-treelist-cursor, default);
        display: var(--iui-treelist-display, block);
        float: var(--iui-treelist-float, none);
        height: var(--iui-treelist-height, auto);
        margin: var(--iui-treelist-margin, 0);
        opacity: var(--iui-treelist-opacity, 1);
        overflow: hidden;
        padding: var(--iui-treelist-padding, 1px);
        position: var(--iui-treelist-position, relative);
        width: var(--iui-treelist-width, auto);
        z-index: var(--iui-treelist-z-index, auto);

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-treelist-header {
        background: var(--iui-treelist-header-background, #cecece);
        border: var(--iui-treelist-header-border, thin solid transparent);
        color: var(--iui-treelist-header-color, black);
        margin: var(--iui-treelist-header-margin, -1px);
        padding: var(--iui-treelist-header-padding, 7px);
        position: relative;
        z-index: 2;
    }
    .iui-treelist-header-back-icon {
        background-image: var(--iui-treelist-header-back-icon, url(../../icons/expandbox-icons.png));
        background-repeat: no-repeat;
        background-position: var(--iui-treelist-header-back-icon-position, 0 -32px);
        display: inline-block;
        height: var(--iui-treelist-header-back-icon-height, 16px);
        overflow: hidden;
        padding: 0;
        margin: var(--iui-treelist-header-back-icon-margin, -3px 0 0 -4px);
        width: var(--iui-treelist-header-back-icon-width, 16px);
        vertical-align: middle;
    }
    .iui-treelist-header-title {
        margin: var(--iui-treelist-header-title-margin, 0 0 0 5px);
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
