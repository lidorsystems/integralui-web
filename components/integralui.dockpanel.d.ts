export default IntegralUIDockPanel;
declare class IntegralUIDockPanel extends IntegralUIBase {
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
        allowDock: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowDrag: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowResize: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        dock: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Top" | "Right" | "Fill" | "Bottom" | "Left";
            };
            reflect: boolean;
        };
    };
    _dragDropService: any;
    _currentDockPermission: any;
    _currentDockStyle: any;
    _isDragAllowed: any;
    _isResizeAllowed: any;
    _parentCtrl: any;
    _currentDockOptions: any;
    _isResizing: boolean | undefined;
    _startPos: {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _resizeObserver: ResizeObserver | null | undefined;
    _windowMouseMove(e: any): void;
    _windowMouseUp(e: any): void;
    setParent(cmp: any): void;
    set allowDock(arg: any);
    get allowDock(): any;
    set allowDrag(arg: any);
    get allowDrag(): any;
    set allowResize(arg: any);
    get allowResize(): any;
    set dock(arg: any);
    get dock(): any;
    _ctrlDragStart(e: any): void;
    _processUpdateLayout(): Promise<any>;
    _ctrlMouseDown(e: any): void;
    _updateDockOptions(params: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
    _updateParent(): void;
}
import IntegralUIBase from "./integralui.base.js";
