export default IntegralUISplitter;
declare class IntegralUISplitter extends IntegralUIBase {
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
    };
    _isSplitterActive: boolean | undefined;
    _maxPos: {
        x: number;
        y: number;
    } | undefined;
    _currentOrientation: string | undefined;
    _currentSplitterDistance: any;
    _isSplitterDistanceDefined: boolean | undefined;
    _panel1Border: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _panel2Border: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _panel1Size: {
        width: number;
        height: number;
    } | undefined;
    _panel2Size: {
        width: number;
        height: number;
    } | undefined;
    _splitterSize: {
        width: number;
        height: number;
    } | undefined;
    _splitterHandleSize: {
        width: number;
        height: number;
    } | undefined;
    _splitterStartPos: {
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
    _handleClass: {} | undefined;
    _panelClass: {} | undefined;
    _splitterClass: {} | undefined;
    _windowMouseUp(event: any): void;
    _handleClassName: string | undefined;
    _panelClassName: string | undefined;
    _splitterClassName: string | undefined;
    set orientation(arg: string | undefined);
    get orientation(): string | undefined;
    set splitterDistance(arg: any);
    get splitterDistance(): any;
    _keepSplitterPosInRange(value: any): number;
    _updateControlLayout(): Promise<any>;
    _ctrlMouseMove(e: any): void;
    _splitterMouseDown(e: any): void;
    _changeOrientation(vertical: any): void;
    _getInlinePanel1Style(): {
        top: string;
        left: string;
        width: string;
        height: string;
    };
    _getInlinePanel2Style(): {
        top: string;
        left: string;
        width: string;
        height: string;
    };
    _getInlineSplitterStyle(): {
        top: string;
        left: string;
        width: string;
        height: string;
    };
    _getInlineHandleStyle(): {
        'margin-top': string;
        'margin-left': string;
    };
    _updateSplitterClass(): void;
    _getSplitterClass(): {} | undefined;
    _updateHandleClass(): void;
    _getHandleClass(): {} | undefined;
    _updatePanelClass(): void;
    _getPanelClass(): {} | undefined;
    _getPanelStyle(value: any): any;
    _getSplitterGeneralStyle(value: any): any;
    _getHandleStyle(value: any): any;
    _getSplitterStyle(value: any): any;
    _getDefaultStyle(): {
        general: {
            disabled: string;
            focused: string;
            hovered: string;
            normal: string | undefined;
            selected: string;
        } | {
            disabled?: undefined;
            focused?: undefined;
            hovered?: undefined;
            normal?: undefined;
            selected?: undefined;
        };
        panel: {
            disabled: any;
            normal: any;
        };
        splitter: {
            general: {
                normal: any;
                horizontal: any;
                vertical: any;
            };
            handle: {
                general: any;
                horizontal: any;
                vertical: any;
            };
        };
    };
    _getDefaultPanelStyle(): {
        disabled: any;
        normal: any;
    };
    _getDefaultSplitterStyle(): {
        general: {
            normal: any;
            horizontal: any;
            vertical: any;
        };
        handle: {
            general: any;
            horizontal: any;
            vertical: any;
        };
    };
    render(): import("../external/lit-element.js").TemplateResult;
    _handleElem: Element | null | undefined;
    _panel1Elem: Element | null | undefined;
    _panel2Elem: Element | null | undefined;
    _splitterElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
