export default IntegralUISideBar;
declare class IntegralUISideBar extends IntegralUIBase {
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
        allowResize: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        animation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Fade";
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
        autoHide: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        expanded: {
            type: BooleanConstructor;
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
        selectedIndex: {
            type: NumberConstructor;
            attribute: string;
        };
        selectedTab: {
            type: ObjectConstructor;
            attribute: string;
        };
        showHeader: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        tabAlignment: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "BottomRight" | "TopLeft" | "Middle";
            };
            reflect: boolean;
        };
        tabs: {
            type: ArrayConstructor;
        };
    };
    _animationTimer: null | undefined;
    _currentAnimation: any;
    _currentAnimationSpeed: any;
    _currentAnimationSpeedValue: number | undefined;
    _currentTabs: any[] | undefined;
    _dataTabs: any[] | undefined;
    _numTabs: number | undefined;
    _tabList: any[] | Node[] | undefined;
    _ctrlCursor: string | undefined;
    _currentParent: any;
    _isExpanded: boolean | undefined;
    _isResizeAllowed: any;
    _parentRef: Element | null | undefined;
    _blockPos: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    } | undefined;
    _contentBlockOpacity: any;
    _contentBlockPos: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
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
    _contentBorder: {
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
    } | undefined;
    _ctrlMaxSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _currentAutoHide: any;
    _currentContentBlockOpacity: any;
    _currentContentBlockSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _currentPlacement: any;
    _currentTabAlignment: any;
    _currentTabSpacing: number | undefined;
    _headerDisplay: string | undefined;
    _headerPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _headerSize: {
        width: number;
        height: number;
    } | undefined;
    _isHeaderVisible: any;
    _isInbound: any;
    _isParentSizeChanging: boolean | undefined;
    _parentBounds: any;
    _parentPadding: {
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
    _pinButtonPos: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _pinButtonSize: {
        width: number;
        height: number;
    } | undefined;
    _sidebarPos: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    } | undefined;
    _sumTabSize: {
        width: number;
        height: number;
    } | undefined;
    _tabSize: {
        width: number;
        height: number;
    } | undefined;
    _tabStripSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _updateTimer: any;
    _isResizing: boolean | undefined;
    _startPos: {
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
    _currentTabColorSchemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentTabStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentScrollPos: number | undefined;
    _currentSelection: any;
    _currentSelectedIndex: any;
    _selectedComponent: any;
    _prevComponent: any;
    _removeIndex: number | undefined;
    _contentClass: {} | undefined;
    _currentTabThemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _contentClassName: string | undefined;
    _tabHeaderClassName: string | undefined;
    _windowMouseMove(e: any): void;
    _windowMouseUp(e: any): void;
    set allowResize(arg: any);
    get allowResize(): any;
    set animation(arg: any);
    get animation(): any;
    set animationSpeed(arg: any);
    get animationSpeed(): any;
    set autoHide(arg: any);
    get autoHide(): any;
    set expanded(arg: boolean | undefined);
    get expanded(): boolean | undefined;
    set inbound(arg: any);
    get inbound(): any;
    set parentId(arg: any);
    get parentId(): any;
    set placement(arg: any);
    get placement(): any;
    set selectedIndex(arg: any);
    get selectedIndex(): any;
    set selectedTab(arg: any);
    get selectedTab(): any;
    set showHeader(arg: any);
    get showHeader(): any;
    set tabAlignment(arg: any);
    get tabAlignment(): any;
    get tabs(): any[] | undefined;
    _animate(): void;
    _fadeTabContent(): void;
    _getAnimationFactor(): number;
    _removeAnimationTimer(): void;
    _setAnimationSpeedValue(): void;
    collapse(): void;
    expand(): void;
    toggle(): void;
    _toggleContent(): void;
    _toggleContentOuter(): void;
    _animationCallbackOuter(state: any, finished: any, reversed: any): void;
    _cancelExpand(): void;
    _toggleContentInner(): void;
    _animationCallbackInner(state: any, finished: any, reversed: any): void;
    _resetParent(includePadding: any): void;
    _updateParent(): void;
    _callSizeChanged(): void;
    _getComponentData(cmp: any): any;
    _getParent(): Element | null | undefined;
    _getParentBounds(): {
        bounds: any;
        padding: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    };
    _getParentSize(): {
        width: number;
        height: number;
    };
    _getTabCurrentIndex(cmp: any): number;
    _getTabDataIndex(cmp: any): number;
    _getTabData(index: any): any;
    _getTabIndex(tab: any): number;
    _getTabHeaders(): NodeListOf<Element>;
    _tabHeaders: NodeListOf<Element> | undefined;
    _setParent(): void;
    _isVertical(): boolean;
    _getHeaderLayout(): TemplateResult;
    _getSumTabSize(): {
        width: number;
        height: number;
    };
    _resetLayout(): void;
    _updateContentLayout(): void;
    _updateContentSize(): void;
    _updateContentVisibility(): void;
    _updateCtrlSize(): void;
    _updateCurrentLayout(): void;
    _updateParentBounds(): void;
    _updateSideBarSize(): void;
    _updateTabLayout(): Promise<any>;
    _tabMouseDown(e: any, cmp: any): void;
    _tabEnter(e: any, cmp: any): void;
    _tabLeave(e: any, cmp: any): void;
    _getTabOpacity(cmp: any): 0 | 1;
    _clearResizeObserver(): void;
    _resizeObserver: ResizeObserver | null | undefined;
    _ctrlMouseDown(e: any): void;
    _updateResizeObserver(): void;
    _clearSelection(cmp: any): void;
    _selectComponent(cmp: any, skip: any): boolean;
    _selectComponentByIndex(index: any, skip: any): void;
    selectTab(tab: any, skip?: any): void;
    _findTabIndexByID(id: any): number;
    _getContentClass(): {} | undefined;
    _getContentStyle(): {
        pointerEvents: string;
    };
    _getHeaderStyle(): {
        display: string | undefined;
    };
    _getPinButtonStyle(): {
        right: string;
        top: string;
    };
    _getTabHeaderClass(cmp: any, flag: any): {
        'iui-tab-selected-right': boolean;
        'iui-tab-selected-bottom': boolean;
        'iui-tab-selected-left': boolean;
        'iui-tab-selected-top': boolean;
    };
    _updateContentClass(): void;
    _autoHideClicked(): void;
    _getHeaderTemplate(): TemplateResult | undefined;
    _getTabTemplate(tab: any): TemplateResult;
    _tabTouchStart(e: any, cmp: any): void;
    _getPinIcon(): {
        'iui-sidebar-button': boolean;
        'iui-sidebar-button-pin': boolean;
    };
    _getTabIcon(icon: any): {};
    render(): TemplateResult;
    _updateTabList(): void;
    _contentSlotElem: Node[] | undefined;
    _slotChange(e: any): void;
    _contentElem: Element | null | undefined;
    _contentBlockElem: Element | null | undefined;
    _headerElem: Element | null | undefined;
    _pinButtonElem: Element | null | undefined;
    _tabBlock: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
import { T as TemplateResult } from "../external/lit-element.js";
