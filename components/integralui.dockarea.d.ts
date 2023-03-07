export default IntegralUIDockArea;
declare class IntegralUIDockArea extends IntegralUIBase {
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
    };
    _dragDropService: any;
    _panelList: any[] | undefined;
    _checkDistance: number | undefined;
    _dropPos: number | undefined;
    _targetDock: string | undefined;
    _targetSize: {
        height?: undefined;
        width?: undefined;
    } | {
        height: any;
        width?: undefined;
    } | {
        height: any;
        width?: undefined;
    } | {
        width: any;
        height?: undefined;
    } | {
        width: any;
        height?: undefined;
    } | undefined;
    _dockArea: any[] | undefined;
    _dockStyle: {
        top: number;
        left: number;
        width: number;
        height: number;
    } | {
        top: any;
        left: any;
        width: any;
        height: any;
    } | {
        top: number;
        left: any;
        width: any;
        height: any;
    } | {
        top: any;
        left: any;
        width: any;
        height: any;
    } | {
        top: any;
        left: number;
        width: any;
        height: any;
    } | {
        top: any;
        left: any;
        width: any;
        height: any;
    } | undefined;
    _minTargetSize: number | undefined;
    _updateTimer: any;
    _isDockingActive: boolean | undefined;
    _dropAreaClassName: string | undefined;
    _currentDockOptions: {
        display: string;
    } | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _resizeObserver: ResizeObserver | null | undefined;
    _ctrlDragDrop(e: any): void;
    _ctrlDragLeave(e: any): void;
    _ctrlDragOver(e: any): void;
    _checkTopHit(index: any, mousePos: any, rect: any): boolean;
    _checkBottomHit(index: any, mousePos: any, rect: any): boolean;
    _checkLeftHit(index: any, mousePos: any, rect: any): boolean;
    _checkRightHit(index: any, mousePos: any, rect: any): boolean;
    _checkFillHit(mousePos: any, rect: any): boolean;
    _isDockAllowed(dockStyle: any, side: any): number;
    _processDragOver(e: any): void;
    dropPos: number | undefined;
    _processDragDrop(e: any): void;
    getFillArea(): any;
    _isAreaFilled(): boolean;
    _processUpdateLayout(): Promise<any>;
    _resetLayoutTimer(): void;
    _ctrlMouseDown(e: any): void;
    _getDockAreaStyle(): {
        display: string;
        left: string;
        opacity: number;
        pointerEvents: string;
        position: string;
        width: string;
        height: string;
        top: string;
        zIndex: string;
    };
    _refreshPanelList(): void;
    render(): import("../external/lit-element.js").TemplateResult;
    _slotChange(e: any): void;
}
import IntegralUIBase from "./integralui.base.js";
