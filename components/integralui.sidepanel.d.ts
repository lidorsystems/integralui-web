export default IntegralUISidePanel;
declare class IntegralUISidePanel extends IntegralUIBase {
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
        animationSpeed: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "VerySlow" | "Slow" | "Normal" | "Fast" | "VeryFast";
            };
            reflect: boolean;
        };
        inbound: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        parentId: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        placement: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Top" | "Right" | "Bottom" | "Left";
            };
            reflect: boolean;
        };
        showOverlay: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        visible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    _currentAnimationSpeed: any;
    _currentAnimationSpeedValue: number | undefined;
    _currentParent: any;
    _isVisible: any;
    _overlayRef: HTMLDivElement | null | undefined;
    _parentRef: Element | null | undefined;
    _contentBlockSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _contentPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _ctrlBorder: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _ctrlCurrentSize: {
        width: number;
        height: number;
    } | undefined;
    _ctrlMaxSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _currentPlacement: any;
    _isInbound: any;
    _isOverlayVisible: any;
    _parentBounds: {
        x: number;
        y: number;
        top: number;
        right: number;
        bottom: number;
        left: number;
        width: number;
        height: number;
    } | undefined;
    _parentPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _ctrlOpacity: any;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    set animationSpeed(arg: any);
    get animationSpeed(): any;
    set inbound(arg: any);
    get inbound(): any;
    set parentId(arg: any);
    get parentId(): any;
    set placement(arg: any);
    get placement(): any;
    set showOverlay(arg: any);
    get showOverlay(): any;
    set visible(arg: any);
    get visible(): any;
    _animationCallback(state: any, finished: any): void;
    _setAnimationSpeedValue(): void;
    _getParent(): Element | null | undefined;
    _getParentBounds(): any;
    _getParentSize(): {
        width: number;
        height: number;
    };
    _setParent(): void;
    close(): void;
    open(): void;
    _overlayClick(): void;
    _removeBlockElement(): void;
    _isVertical(): boolean;
    _processUpdateLayout(): Promise<any>;
    _updateContentSize(): void;
    _updateOverlayLayout(): void;
    _clearResizeObserver(): void;
    _resizeObserver: ResizeObserver | null | undefined;
    _updateResizeObserver(): void;
    _getContentStyle(): {
        width: string;
        height: string;
    };
    render(): import("../external/lit-element.js").TemplateResult;
    _contentElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
