export default IntegralUISplitContainer;
declare class IntegralUISplitContainer extends IntegralUIBase {
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
        panel1: {
            type: ObjectConstructor;
        };
        panel2: {
            type: ObjectConstructor;
        };
        showButtons: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        splitterDistance: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    _panel1Data: any;
    _panel2Data: any;
    _isSplitterActive: boolean | undefined;
    _blockPos: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    } | undefined;
    _cmdButtonsAllowed: boolean | undefined;
    _isContentSwapped: any;
    _maxPos: {
        x: number;
        y: number;
    } | undefined;
    _tabSize: {
        width: number;
        height: number;
    } | undefined;
    _currentOrientation: string | undefined;
    _currentSplitterDistance: any;
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
    _splitterBlockSize: {
        width: number;
        height: number;
    } | undefined;
    _splitterButtonBlockSize: {
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
    _swapButtonSize: {
        width: number;
        height: number;
    } | undefined;
    _tab1Size: {
        width: number;
        height: number;
    } | undefined;
    _tab1ContentSize: {
        width: number;
        height: number;
    } | undefined;
    _tab2Size: {
        width: number;
        height: number;
    } | undefined;
    _tab2ContentSize: {
        width: number;
        height: number;
    } | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _buttonClass: {} | undefined;
    _handleClass: {} | undefined;
    _panelClass: {} | undefined;
    _splitterClass: {} | undefined;
    _swapButtonClass: {} | undefined;
    _tabClass: {} | undefined;
    _windowMouseUp(event: any): void;
    _buttonClassName: string | undefined;
    _handleClassName: string | undefined;
    _panelClassName: string | undefined;
    _splitterClassName: string | undefined;
    _swapButtonClassName: string | undefined;
    _tabClassName: string | undefined;
    set orientation(arg: string | undefined);
    get orientation(): string | undefined;
    set panel1(arg: any);
    get panel1(): any;
    set panel2(arg: any);
    get panel2(): any;
    set showButtons(arg: boolean | undefined);
    get showButtons(): boolean | undefined;
    set splitterDistance(arg: any);
    get splitterDistance(): any;
    _swapButtonClicked(): void;
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
    _getInlineTab1Style(): {
        top: string;
        left: string;
        width: string;
        height: string;
    };
    _getInlineTab1ContentStyle(): {
        top: string;
        left: string;
    };
    _getInlineTab2Style(): {
        top: string;
        right: string;
        bottom: string;
        left: string;
        width: string;
        height: string;
    };
    _getInlineTab2ContentStyle(): {
        top: string;
        right: string;
    };
    _getInlineHandleBlockStyle(): {
        cursor: string;
        width: string;
        height: string;
        top: string;
        left: string;
    };
    _getInlineHandleStyle(): {
        'margin-top': string;
        'margin-left': string;
    };
    _getInlineSwapButtonStyle(): {
        top: string;
        left: string;
    };
    _getInlineButtonBlockStyle(): {
        top: string;
        right: string;
        bottom: string;
        left: string;
    };
    _updateButtonClass(): void;
    _getButtonClass(): {} | undefined;
    _updateSplitterClass(): void;
    _getSplitterClass(): {} | undefined;
    _updateHandleClass(): void;
    _getHandleClass(): {} | undefined;
    _updatePanelClass(): void;
    _getPanelClass(): {} | undefined;
    _updateSwapButtonClass(): void;
    _getSwapButtonClass(): {} | undefined;
    _updateTabClass(): void;
    _getTabClass(): {} | undefined;
    _getPanelStyle(value: any): any;
    _getSplitterGeneralStyle(value: any): any;
    _getHandleStyle(value: any): any;
    _getSwapButtonStyle(value: any): any;
    _getTabStyle(value: any): any;
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
            swapButton: {
                disabled: any;
                hovered: any;
                normal: any;
                selected: any;
            };
            tab: {
                disabled: any;
                focused: any;
                hovered: any;
                normal: any;
                selected: any;
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
        swapButton: {
            disabled: any;
            hovered: any;
            normal: any;
            selected: any;
        };
        tab: {
            disabled: any;
            focused: any;
            hovered: any;
            normal: any;
            selected: any;
        };
    };
    render(): import("../external/lit-element.js").TemplateResult;
    _buttonBlockElem: Element | null | undefined;
    _handleElem: Element | null | undefined;
    _panel1Elem: Element | null | undefined;
    _panel2Elem: Element | null | undefined;
    _splitterElem: Element | null | undefined;
    _tab1ContentElem: Element | null | undefined;
    _tab2ContentElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
