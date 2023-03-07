export default IntegralUITab;
declare class IntegralUITab extends IntegralUIBase {
    static get properties(): {
        allowAnimation: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowFocus: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowUpdate: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        colorScheme: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Dark" | "Light";
            };
            reflect: boolean;
        };
        customStyle: {
            type: ObjectConstructor;
            attribute: string;
        };
        data: {
            type: ObjectConstructor;
        };
        enabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        name: {
            type: StringConstructor;
            reflect: boolean;
        };
        readOnly: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        resourcePath: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        size: {
            type: ObjectConstructor;
        };
        state: {
            type: NumberConstructor;
            reflect: boolean;
        };
        theme: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Office";
            };
            reflect: boolean;
        };
        allowDrag: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowDrop: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        animation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Fade" | "Slide";
            };
            reflect: boolean;
        };
        icon: {
            type: StringConstructor;
            reflect: boolean;
        };
        selected: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        text: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    _currentAnimation: any;
    _isDragAllowed: any;
    _isDropAllowed: any;
    _contentOverflow: any;
    _currentIcon: any;
    _currentText: any;
    _currentZIndex: any;
    _isContentHidden: any;
    _parentCtrl: any;
    _isSelected: any;
    _topPos: any;
    _leftPos: any;
    _elemWidth: string | undefined;
    _elemHeight: string | undefined;
    _elemOrder: number | undefined;
    _elemBorderColor: string | undefined;
    _contentOpacity: any;
    _contentClass: {} | undefined;
    _contentClassName: string | undefined;
    _headerClassName: string | undefined;
    _initContent(): void;
    setParent(cmp: any): void;
    set allowDrag(arg: any);
    get allowDrag(): any;
    set allowDrop(arg: any);
    get allowDrop(): any;
    set animation(arg: any);
    get animation(): any;
    set icon(arg: any);
    get icon(): any;
    set selected(arg: any);
    get selected(): any;
    set text(arg: any);
    get text(): any;
    getContent(): Element | null | undefined;
    processStateChanged(): void;
    getSize(elem: any): {
        width: number;
        height: number;
    };
    updateLayoutPos(pos: any, size: any, visible: any): void;
    updateOpacity(value: any): void;
    updatePos(pos: any): void;
    updateSize(size: any): void;
    updateVisibility(value: any): void;
    updateContentOverflow(value: any): void;
    getLayoutParams(): {
        size: {
            width: number;
            height: number;
        };
        padding: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    };
    updateZIndex(value: any): void;
    _updateContentClass(): void;
    _getContentClass(): {} | undefined;
    _getContentStyle(value: any): any;
    _getHeaderStyle(value: any): any;
    _getCurrentTabStyle(): null;
    render(): import("../external/lit-element.js").TemplateResult;
    _contentElem: Element | null | undefined;
    _contentSlotElem: Node | undefined;
}
import IntegralUIBase from "./integralui.base.js";
