export default IntegralUILabel;
declare class IntegralUILabel extends IntegralUIBaseValue {
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
        alignment: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Right" | "Left" | "Inline" | "BottomCenter" | "BottomLeft" | "BottomRight" | "TopCenter" | "TopLeft" | "TopRight";
            };
            reflect: boolean;
        };
        contentSize: {
            type: ObjectConstructor;
        };
        value: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    _positionInterval: any;
    _currentLabel: string | undefined;
    _isFocused: boolean | undefined;
    _currentAlignment: any;
    _blockBorder: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _blockMargin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _blockPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _blockSize: {
        width: number;
        height: number;
    } | undefined;
    _contentBorder: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _contentMargin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _contentPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _contentSize: {
        width: number;
        height: number;
    } | undefined;
    _ctrlBorder: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _ctrlPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _labelFontSize: number | undefined;
    _labelPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _labelPos: {
        top: number;
        left: number;
    } | undefined;
    _labelSize: {
        width: number;
        height: number;
    } | undefined;
    _slotBounds: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _slotSize: {
        width: number;
        height: number;
    } | undefined;
    _isComponentInline: boolean | undefined;
    _isUpdateInProcess: boolean | undefined;
    _blockElemRef: Element | null | undefined;
    _contentElem: Node | null | undefined;
    _contentElemRef: Element | null | undefined;
    _labelElemRef: Element | null | undefined;
    _labelClass: {} | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    set alignment(arg: any);
    get alignment(): any;
    set contentSize(arg: {
        width: number;
        height: number;
    } | undefined);
    get contentSize(): {
        width: number;
        height: number;
    } | undefined;
    _animateLabel(newPos: any, newFontSize: any): Promise<any>;
    _isContentEmpty(): boolean | null | undefined;
    _removePositionInterval(): void;
    _updateLabelPos(flag: any): void;
    _addContentEvents(): void;
    _contentGotFocus(e: any): void;
    _contentLostFocus(e: any): void;
    _removeContentEvents(): void;
    _processUpdateLayout(): Promise<any>;
    _setInitialLabelPos(): void;
    _getContentStyle(): {
        width: string;
        height: string;
        marginBottom: string;
        marginTop: string;
        marginRight: string;
        marginLeft: string;
    };
    _getLabelClass(): {} | undefined;
    _getLabelStyle(): {
        top: string;
        left: string;
        fontSize: string;
    };
    _getLabelWidth(): number;
    _updateLabelClass(): void;
    render(): import("../external/lit-element.js").TemplateResult;
    _slotChange(e: any): void;
}
import IntegralUIBaseValue from "./integralui.base.value.js";
