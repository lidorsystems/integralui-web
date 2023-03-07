export default IntegralUISplitImage;
declare class IntegralUISplitImage extends IntegralUIBase {
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
        orientation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Horizontal" | "Vertical";
            };
            reflect: boolean;
        };
        splitterDistance: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        splitterSize: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    _isHovered: boolean;
    _isSplitterActive: boolean;
    _contentSize: {
        width: number;
        height: number;
    };
    _ctrlPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    _ctrlPageRect: {
        top: number;
        right: number;
        bottom: number;
        left: number;
        height: number;
        width: number;
        x: number;
        y: number;
    };
    _currentOrientation: string;
    _currentSplitterDistance: number;
    _currentSplitterSize: number;
    _maxPos: {
        x: number;
        y: number;
    };
    _splitterStartPos: {
        x: number;
        y: number;
    };
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    };
    _generalClassName: string;
    _splitterClassName: string;
    _windowMouseUp(e: any): void;
    set orientation(arg: string);
    get orientation(): string;
    set splitterDistance(arg: number);
    get splitterDistance(): number;
    set splitterSize(arg: any);
    get splitterSize(): any;
    _ctrlMouseLeave(e: any): void;
    _ctrlMouseMove(e: any): void;
    _splitterMouseDown(e: any): void;
    _keepSplitterPosInRange(value: any): number;
    _processUpdateLayout(): Promise<any>;
    _updateContentPos(): void;
    _getBlockStyle(): {
        left: string;
        top: string;
    };
    _getSplitterClass(): {} | undefined;
    _getSplitterStyle(): {
        top: string;
        left: string;
        width: string;
        height: string;
    };
    _updateSplitterClass(): void;
    _splitterClass: {} | undefined;
    render(): import("../external/lit-element.js").TemplateResult;
    _slotChange(e: any): void;
    _blockElem1: Element | null | undefined;
    _contentElem1: Node | undefined;
    _blockElem2: Element | null | undefined;
    _contentElem2: Node | undefined;
}
import IntegralUIBase from "./integralui.base.js";
