export default IntegralUIScrollBar;
declare class IntegralUIScrollBar extends IntegralUIBase {
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
        appearance: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Static" | "Dynamic";
            };
            reflect: boolean;
        };
        height: {
            type: NumberConstructor;
        };
        largeChange: {
            type: NumberConstructor;
            attribute: string;
        };
        max: {
            type: NumberConstructor;
            reflect: boolean;
        };
        min: {
            type: NumberConstructor;
            reflect: boolean;
        };
        orientation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Horizontal" | "Vertical";
            };
            reflect: boolean;
        };
        position: {
            type: ObjectConstructor;
        };
        value: {
            type: NumberConstructor;
            reflect: boolean;
        };
        width: {
            type: NumberConstructor;
        };
    };
    _currentMaxValue: any;
    _currentMinValue: any;
    _currentValue: any;
    _currentAppearance: any;
    _isVisible: any;
    _currentSplitterDistance: {
        x: number;
        y: number;
    } | undefined;
    _emptySpace: number | undefined;
    _maxPos: {
        x: number;
        y: number;
    } | undefined;
    _currentOrientation: any;
    _scrollPos: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | {
        top: any;
        right: any;
        bottom: any;
        left: any;
    } | {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _scrollSize: {
        width: number;
        height: number;
    } | undefined;
    _thumbSize: {
        width: number;
        height: number;
    } | undefined;
    _thumbPos: {
        x: number;
        y: number;
    } | undefined;
    _isThumbActive: boolean | undefined;
    _prevPos: {
        x: number;
        y: number;
    } | undefined;
    _smallChange: number | undefined;
    _largeChangeValue: any;
    _scrollInterval: any;
    _scrollTimeout: null | undefined;
    _thumbStartPos: {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | undefined;
    _isThumbHovered: boolean | undefined;
    _thumbClass: {} | undefined;
    _thumbClassName: string | undefined;
    _windowMouseMove(event: any): void;
    _windowMouseUp(event: any): void;
    set appearance(arg: any);
    get appearance(): any;
    set visible(arg: any);
    get visible(): any;
    set height(arg: any);
    set largeChange(arg: any);
    set max(arg: any);
    get max(): any;
    set min(arg: any);
    get min(): any;
    set orientation(arg: any);
    get orientation(): any;
    set position(arg: any);
    set value(arg: any);
    get value(): any;
    set width(arg: any);
    _thumbMouseEnter(e: any): void;
    _thumbMouseLeave(e: any): void;
    _thumbMouseDown(e: any): void;
    prevPos: {
        x: any;
        y: any;
    } | undefined;
    isVertical(): boolean;
    _updateVisibility(): void;
    _changeScrollPos(e: any): void;
    _clearScrollTimers(): void;
    _processLargeChange(e: any): void;
    _getThumbClass(): {} | undefined;
    _updateThumbClass(): void;
    _processUpdateLayout(): Promise<any>;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
