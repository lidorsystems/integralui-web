export default IntegralUITabStrip;
declare class IntegralUITabStrip extends IntegralUIBase {
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
        allowDrag: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowDrop: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        animation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Fade" | "Slide";
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
        autoSize: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        displayMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "AutoSized" | "Justified";
            };
            reflect: boolean;
        };
        navigation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Normal" | "Multiline";
            };
            reflect: boolean;
        };
        scrollMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "InBound" | "OutBound";
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
        showTabLine: {
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
        tabOrientation: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Horizontal" | "Vertical";
            };
            reflect: boolean;
        };
        tabs: {
            type: ArrayConstructor;
        };
        tabSpacing: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        tabStripPlacement: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Top" | "Right" | "Bottom" | "Left";
            };
            reflect: boolean;
        };
    };
    _dataService: IntegralUIDataService | undefined;
    _animationTimer: null | undefined;
    _currentAnimation: any;
    _currentAnimationSpeed: any;
    _currentTabs: any;
    _dataTabs: any[] | undefined;
    _numTabs: number | undefined;
    _tabList: any[] | Node[] | undefined;
    _reorderTab: any;
    _tabReorderActive: boolean | undefined;
    _reorderTabPos: {
        top: number;
        left: number;
    } | {
        top: number;
        left: number;
    } | undefined;
    _reorderTabStartPos: {
        top: number;
        left: number;
    } | {
        top: any;
        left: any;
    } | {
        top: number;
        left: number;
    } | undefined;
    _reorderTabCurrentPos: {
        top: number;
        left: number;
    } | {
        top: any;
        left: any;
    } | {
        top: number;
        left: number;
    } | undefined;
    _reorderTabPrevPos: {
        top: number;
        left: number;
    } | {
        top: any;
        left: any;
    } | {
        top: number;
        left: number;
    } | {
        top: number;
        left: number;
    } | undefined;
    _startTabReorder: boolean | undefined;
    _reorderTabIndex: number | undefined;
    _reorderNewTabIndex: number | undefined;
    _orgHeaderList: any[] | undefined;
    _orgReorderTabIndex: number | undefined;
    _ctrlCursor: string | undefined;
    _currentTabSpacing: any;
    _isDragAllowed: any;
    _isDropAllowed: any;
    _autoSizeValue: any;
    _blockPos: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    } | undefined;
    _contentBlockPos: {
        top: number;
        left: number;
    } | undefined;
    _contentBlockSize: {
        width: number;
        height: number;
    } | undefined;
    _currentNavigation: any;
    _currentTabAlignment: any;
    _currentTabOrientation: any;
    _currentTabPlacement: any;
    _currentDisplayMode: any;
    _emptyTabSpace: number | undefined;
    _isTabLineAllowed: any;
    _orgTabHeaderSpace: any[] | undefined;
    _reorderTabRect: any;
    _scrollBlockSize: {
        width: number;
        height: number;
    } | undefined;
    _scrollButtonSize: {
        width: number;
        height: number;
    } | undefined;
    _selTabLinePos: {
        top: number;
        left: number;
    } | {
        top: number;
        left: number;
    } | {
        top: number;
        left: number;
    } | {
        top: number;
        left: number;
    } | {
        top: number;
        left: number;
    } | undefined;
    _selTabLineSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: any;
    } | {
        width: any;
        height: number;
    } | {
        width: number;
        height: any;
    } | {
        width: any;
        height: number;
    } | undefined;
    _sumTabSize: {
        width: number;
        height: number;
    } | undefined;
    _tabHeaderRect: any[] | undefined;
    _tabPos: {
        top: number;
        left: number;
    } | undefined;
    _tabSize: {
        width: number;
        height: number;
    } | undefined;
    _tabstripPos: {
        top: string;
        right: string;
        bottom: string;
        left: string;
    } | {
        top: string;
        right: string;
        bottom: string;
        left: string;
    } | {
        top: string;
        right: string;
        bottom: string;
        left: string;
    } | {
        top: string;
        right: string;
        bottom: string;
        left: string;
    } | {
        top: string;
        right: string;
        bottom: string;
        left: string;
    } | undefined;
    _tabStripSize: {
        width: number;
        height: number;
    } | undefined;
    _toolbarPos: {
        top: string;
        bottom: string;
    } | undefined;
    _leftToolbarSize: {
        width: number;
        height: number;
    } | undefined;
    _rightToolbarSize: {
        width: number;
        height: number;
    } | undefined;
    _updateTimer: any;
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
    _currentScrollMode: any;
    _isScrollActive: boolean | undefined;
    _isScrollAllowed: boolean | undefined;
    _scrollCount: number | undefined;
    _currentScrollPos: number | undefined;
    _scrollTimer: any;
    _stopScrolling: boolean | undefined;
    _maxScrollPos: number | undefined;
    _currentSelection: any;
    _currentSelectedIndex: any;
    _selectedComponent: any;
    _prevComponent: any;
    _removeIndex: any;
    _currentTabThemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _tabHeaderClassName: string | undefined;
    _resizeObserver: ResizeObserver | null | undefined;
    _windowMouseMove(e: any): void;
    _windowMouseUp(e: any): Promise<void>;
    set allowDrag(arg: any);
    get allowDrag(): any;
    set allowDrop(arg: any);
    get allowDrop(): any;
    set animation(arg: any);
    get animation(): any;
    set animationSpeed(arg: any);
    get animationSpeed(): any;
    set autoSize(arg: any);
    get autoSize(): any;
    set displayMode(arg: any);
    get displayMode(): any;
    set navigation(arg: any);
    get navigation(): any;
    set scrollMode(arg: any);
    get scrollMode(): any;
    set selectedIndex(arg: any);
    get selectedIndex(): any;
    set selectedTab(arg: any);
    get selectedTab(): any;
    set showTabLine(arg: any);
    get showTabLine(): any;
    set tabAlignment(arg: any);
    get tabAlignment(): any;
    set tabOrientation(arg: any);
    get tabOrientation(): any;
    get tabs(): any;
    set tabSpacing(arg: any);
    get tabSpacing(): any;
    set tabStripPlacement(arg: any);
    get tabStripPlacement(): any;
    addTab(tab: any): void;
    clearTabs(): void;
    insertTabAt(tab: any, index: any): void;
    insertTabBefore(tab: any, refTab: any): void;
    insertTabAfter(tab: any, refTab: any): void;
    removeTab(tab: any): boolean;
    removeTabAt(index: any): boolean;
    _callEventAdd(type: any, tab: any, index: any, refTab: any, flag: any): void;
    _callEventRemove(tab: any): boolean;
    _animate(): void;
    _fadeTabContent(): void;
    _getAnimationFactor(): number;
    _removeAnimationTimer(): void;
    _slideTabContentHorizontal(): void;
    _slideTabContentVertical(): void;
    _updateData(): void;
    _getComponentData(cmp: any): any;
    _getTabCurrentIndex(cmp: any): number;
    _getTabDataIndex(cmp: any): number;
    _getTabData(index: any): any;
    _getTabIndex(tab: any): any;
    _getTabHeaders(): any[];
    _calcEmptyTabSpace(list: any, line: any): number;
    _getAlignmentSpace(): number;
    _resetLayoutTimer(): void;
    updateLayout(optimal?: any): Promise<any>;
    _updateTabLine(index: any): void;
    _getLongestTabSize(): {
        width: number;
        height: number;
    };
    _getSumTabSize(): {
        width: number;
        height: number;
    };
    _isTabOrientationVertical(): boolean;
    _updateSelectedTab(flag: any): void;
    _updateTabLayout(): Promise<any>;
    _updateTabLayoutMultiline(): Promise<any>;
    _updateTabHeaders(): void;
    _updateTabHeaderSize(): void;
    _tabMouseDown(e: any, cmp: any): void;
    _tabMouseMove(e: any, cmp: any): void;
    _tabEnter(e: any, cmp: any): void;
    _tabLeave(e: any, cmp: any): void;
    _updateReorderTabPos(): void;
    _updateReorderDirection(): void;
    _reorderDirection: number | undefined;
    _resetReorderTabSettings(): void;
    _getTabOpacity(cmp: any): 0 | 1;
    _getLastTabIndex(): number;
    _getPrevTab(tab: any): any;
    _getNextTab(tab: any): any;
    _moveTab(tab: any, direction: any, targetTab: any, position: any): void;
    _moveTabAt(tab: any, targetTab: any, direction: any, position: any): void;
    scrollPos(value: any): number;
    _startScroll(flag: any): void;
    _stopScroll(): void;
    _processScroll(flag: any): void;
    _processDragScroll(e: any): void;
    _scrollTimerElapsed(flag: any): void;
    _scrollTabs(): void;
    _scrollButtonMouseDown(e: any, flag: any): void;
    _scrollButtonMouseUp(e: any): void;
    scrollTo(tab: any): void;
    _clearSelection(cmp: any): void;
    _selectComponent(cmp: any, skip: any): boolean;
    _selectComponentByIndex(index: any, skip: any): void;
    selectTab(tab: any, skip: any): void;
    _updateSelection(): void;
    _findTabIndexByID(id: any): any;
    _getScrollBlockClass(): {
        'iui-tabstrip-scroll-outbound': boolean;
        'iui-tabstrip-scroll-inbound': boolean;
        'iui-tabstrip-scroll-border-left': boolean;
        'iui-tabstrip-scroll-border-top': boolean;
        'iui-tabstrip-scroll-border-right': boolean;
        'iui-tabstrip-scroll-border-bottom': boolean;
    };
    _getScrollInBoundStyle(): {
        top: string;
        right: string;
        bottom: string;
        left: string;
        opacity: string;
        padding: string;
        width: string;
        height: string;
    };
    _getScrollInBoundButtonStyle(type: any): {
        'margin-left': string;
        'margin-top': string;
    };
    _getScrollOutBoundStyle(type: any): {
        top: string;
        right: string;
        bottom: string;
        left: string;
        marginLeft: string;
        marginTop: string;
        opacity: string;
        padding: string;
        width: string;
        height: string;
    };
    _getContentBlockStyle(): {
        top: string;
        left: string;
        width: string;
        height: string;
    };
    _getTabHeaderClass(cmp: any, flag: any): {
        'iui-tab-header-vertical': boolean;
        'iui-tab-selected-right': boolean;
        'iui-tab-selected-bottom': boolean;
        'iui-tab-selected-left': boolean;
        'iui-tab-selected-top': boolean;
    };
    _getTabHeaderStyle(cmp: any): any;
    _getReorderTabStyle(): {
        position: string;
        'pointer-events': string;
        'z-index': number;
    };
    _getTabTemplate(tab: any): TemplateResult;
    _tabTouchStart(e: any, cmp: any): void;
    _getMultilineLayout(): TemplateResult;
    _getNormalLayout(): TemplateResult;
    _getLayout(): TemplateResult;
    _getTabIcon(icon: any): {};
    _refreshTabParent(): void;
    render(): TemplateResult;
    _updateTabList(): void;
    _contentSlotElem: Node[] | undefined;
    _slotChange(e: any): void;
    _contentElem: Element | null | undefined;
    _scrollInBoundElem: Element | null | undefined;
    _scrollButtonElem: Element | null | undefined;
    _tabBlock: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
