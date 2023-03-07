export default IntegralUIListBar;
declare class IntegralUIListBar extends IntegralUIBase {
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
        groups: {
            type: ArrayConstructor;
        };
        mouseWheelSpeed: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "VerySlow" | "Slow" | "Normal" | "Fast" | "VeryFast";
            };
            reflect: boolean;
        };
        selectedGroup: {
            type: ObjectConstructor;
            attribute: string;
        };
        selectedIndex: {
            type: NumberConstructor;
            attribute: string;
        };
    };
    _dataService: IntegralUIDataService | undefined;
    _dataGroups: any;
    _numGroups: number | undefined;
    _currentMouseWheelSpeed: any;
    _blockMarginTop: number | undefined;
    _currentScrollPos: {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | undefined;
    _maxScrollPos: {
        x: number;
        y: number;
    } | undefined;
    _groupList: any[] | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _initScrollPos: number | undefined;
    _isScrollActive: boolean | undefined;
    _isScrollVisible: boolean | undefined;
    _scrollCount: number | undefined;
    _scrollTimer: null | undefined;
    _stopScrolling: boolean | undefined;
    _currentSelection: any;
    _currentSelectedIndex: any;
    _selectedComponent: any;
    _prevComponent: any;
    _removeIndex: number | undefined;
    set groups(arg: any);
    get groups(): any;
    set mouseWheelSpeed(arg: any);
    get mouseWheelSpeed(): any;
    set selectedGroup(arg: any);
    get selectedGroup(): any;
    set selectedIndex(arg: any);
    get selectedIndex(): any;
    clearGroups(): void;
    addGroup(group: any): void;
    insertGroupAt(group: any, index: any): void;
    insertGroupBefore(group: any, refGroup: any): void;
    insertGroupAfter(group: any, refGroup: any): void;
    removeGroup(group: any): void;
    removeGroupAt(index: any): void;
    _callEventAdd(type: any, group: any, index: any, refGroup: any, flag: any): void;
    _callEventRemove(group: any): void;
    removeIndex: any;
    _updateData(): void;
    _closeGroups(cmp: any): void;
    _toggleGroups(): void;
    _getGroupCurrentIndex(cmp: any): number;
    _getGroupDataIndex(cmp: any): number;
    _getGroupData(index: any): any;
    _getGroupIndex(group: any): any;
    _getComponentData(cmp: any): any;
    invokeCtrlEvent(key: any, cmp: any, skip: any): boolean;
    invokeCtrlMethod(key: any, cmp: any): boolean;
    _isIndexInRange(index: any): boolean;
    updateLayout(optimal?: any): Promise<any>;
    _scrollUpPressed(): void;
    _scrollUpReleased(): void;
    _scrollDownPressed(): void;
    _scrollDownReleased(): void;
    _startScroll(flag: any): void;
    _stopScroll(): void;
    _scrollTimerElapsed(flag: any): void;
    _processScroll(flag: any): void;
    _listMouseWheel(e: any): void;
    scrollPos(value: any): void;
    clearSelection(): void;
    _clearCmpSelection(cmp: any): void;
    _selectComponent(cmp: any): boolean;
    _selectComponentByIndex(index: any): void;
    selectGroup(group: any): void;
    _refreshGroupParent(): void;
    render(): import("../external/lit-element.js").TemplateResult;
    _slotChange(e: any): void;
    _buttonUpElem: Element | null | undefined;
    _buttonDownElem: Element | null | undefined;
    _contentElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
