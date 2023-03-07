export default IntegralUIWindow;
declare class IntegralUIWindow extends IntegralUIBase {
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
        theme: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Office";
            };
            reflect: boolean;
        };
        allowResize: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        closeButton: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        icon: {
            type: StringConstructor;
            reflect: boolean;
        };
        iconUrl: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        maximizeButton: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        minimizeButton: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        maxSize: {
            type: ObjectConstructor;
        };
        minSize: {
            type: ObjectConstructor;
        };
        parentId: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        position: {
            type: ObjectConstructor;
        };
        selected: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        state: {
            type: any,
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Normal" | "Maximized" | "Minimized";
            };
            reflect: boolean;
        };
        text: {
            type: StringConstructor;
            reflect: boolean;
        };
        visible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    _resizeInterval: null | undefined;
    _ctrlCursor: string;
    _currentIcon: string;
    _currentIconUrl: string;
    _currentParent: string;
    _currentState: string;
    _currentText: string;
    _isResizeAllowed: boolean;
    _isSelected: boolean;
    _isVisible: boolean;
    _newState: string;
    _parentRef: Element | null;
    _contentHeight: number;
    _ctrlMinSize: {
        width: number;
        height: number;
    };
    _currentBorder: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    _currentMaxSize: {
        width: number;
        height: number;
    };
    _currentMinSize: {
        width: number;
        height: number;
    };
    _currentPosition: {
        top: number;
        left: number;
    };
    _headerHeight: number;
    _isCloseButtonVisible: boolean;
    _isMaximizeButtonVisible: boolean;
    _isMinimizeButtonVisible: boolean;
    _originalBounds: {
        top: number;
        left: number;
        width: number;
        height: number;
    };
    _moveStartPos: {
        x: number;
        y: number;
    };
    _moveEndPos: {
        x: number;
        y: number;
    };
    _isHeaderClicked: boolean;
    _isMovingActive: boolean;
    _currentResize: string;
    _isResizing: boolean;
    _generalClassName: string;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    };
    _defaultCursor: string;
    _windowMouseMove(e: any): void;
    _windowMouseUp(e: any): void;
    set allowResize(arg: boolean);
    get allowResize(): boolean;
    set closeButton(arg: boolean);
    get closeButton(): boolean;
    set icon(arg: string);
    get icon(): string;
    set iconUrl(arg: string);
    get iconUrl(): string;
    set maximizeButton(arg: boolean);
    get maximizeButton(): boolean;
    set minimizeButton(arg: boolean);
    get minimizeButton(): boolean;
    set maxSize(arg: {
        width: number;
        height: number;
    });
    get maxSize(): {
        width: number;
        height: number;
    };
    set minSize(arg: {
        width: number;
        height: number;
    });
    get minSize(): {
        width: number;
        height: number;
    };
    set parentId(arg: string);
    get parentId(): string;
    set position(arg: {
        top: number;
        left: number;
    });
    get position(): {
        top: number;
        left: number;
    };
    set selected(arg: boolean);
    get selected(): boolean;
    set state(arg: string);
    get state(): string;
    set text(arg: string);
    get text(): string;
    set visible(arg: boolean);
    get visible(): boolean;
    _animateResize(newBounds: any, state: any): void;
    _clearOtherWindowSelection(): void;
    _getParent(): Element;
    _getParentBounds(): any;
    _getParentSize(): {
        width: number;
        height: number;
    };
    _setParent(): void;
    _callSizeChanged(): void;
    _processUpdateLayout(): Promise<any>;
    _changeCursor(type: any): void;
    _checkTopBorder(): boolean;
    _checkLeftBorder(): boolean;
    _checkBottomBorder(): boolean;
    _checkRightBorder(): boolean;
    _ctrlClick(e: any): void;
    _ctrlMouseDown(e: any): void;
    _ctrlMouseUp(e: any): void;
    _ctrlMouseEnter(e: any): void;
    _ctrlMouseMove(e: any): void;
    _ctrlMouseLeave(e: any): void;
    _headerMouseDown(e: any): void;
    _headerMouseMove(e: any): void;
    _resetMoveEndPos(): void;
    close(flag: any): void;
    open(): void;
    _applyOriginalBounds(): void;
    _callStateChanged(): void;
    _keepBounds(): void;
    maximize(): void;
    minimize(): void;
    _resetWindowState(): void;
    _removeResizeInterval(): void;
    _updateMinPos(): void;
    render(): import("../external/lit-element.js").TemplateResult;
    _headerElem: Element | null | undefined;
    _contentElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
