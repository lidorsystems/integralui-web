export default IntegralUIBreadCrumb;
declare class IntegralUIBreadCrumb extends IntegralUIBase {
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
        dataFields: {
            type: ObjectConstructor;
            attribute: string;
        };
        dropDownSize: {
            type: ObjectConstructor;
            attribute: string;
        };
        items: {
            type: ArrayConstructor;
        };
        maxDropDownItems: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        selectedItem: {
            type: ObjectConstructor;
            attribute: string;
        };
    };
    _dataService: IntegralUIDataService | undefined;
    _visibleStartIndex: number | undefined;
    _dataItems: any;
    _currentDataFields: {
        allowFocus?: undefined;
        content?: undefined;
        enabled?: undefined;
        expanded?: undefined;
        hasChildren?: undefined;
        icon?: undefined;
        iconUrl?: undefined;
        id?: undefined;
        items?: undefined;
        pid?: undefined;
        selected?: undefined;
        style?: undefined;
        text?: undefined;
        tooltip?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        allowFocus: any;
        content: any;
        enabled: any;
        expanded: any;
        hasChildren: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        pid: any;
        selected: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        allowFocus: string;
        content: string;
        enabled: string;
        expanded: string;
        hasChildren: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        pid: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined;
    _currentList: any[] | undefined;
    _fullList: any[] | undefined;
    _isThereChildItems: boolean | undefined;
    _visibleList: any[] | undefined;
    _cmpRef: HTMLElement | HTMLSlotElement | HTMLTemplateElement | HTMLStyleElement | HTMLObjectElement | HTMLDataElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | null | undefined;
    _activeObj: any;
    _hoverItem: any;
    _isListOpened: boolean | undefined;
    _prevActiveObj: any;
    _isRootActive: boolean | null | undefined;
    _isRootHovered: boolean | null | undefined;
    _itemSize: {
        width: number;
        height: number;
    } | undefined;
    _currentDropDownSize: {
        width: number;
        height: number;
    } | undefined;
    _currentMaxDropDownItems: any;
    _showRootButton: boolean | undefined;
    _startIndex: number | undefined;
    _updateTimeout: any;
    _dropListRef: any;
    _dropList: any;
    _currentSelection: any;
    _itemClassName: string | undefined;
    _itemContentClassName: string | undefined;
    _expandBoxClassName: string | undefined;
    _rootButtonClassName: string | undefined;
    _isExpandBoxTouched: boolean | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _resizeObserver: ResizeObserver | null | undefined;
    set dataFields(arg: {
        allowFocus?: undefined;
        content?: undefined;
        enabled?: undefined;
        expanded?: undefined;
        hasChildren?: undefined;
        icon?: undefined;
        iconUrl?: undefined;
        id?: undefined;
        items?: undefined;
        pid?: undefined;
        selected?: undefined;
        style?: undefined;
        text?: undefined;
        tooltip?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        allowFocus: any;
        content: any;
        enabled: any;
        expanded: any;
        hasChildren: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        pid: any;
        selected: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        allowFocus: string;
        content: string;
        enabled: string;
        expanded: string;
        hasChildren: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        pid: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined);
    get dataFields(): {
        allowFocus?: undefined;
        content?: undefined;
        enabled?: undefined;
        expanded?: undefined;
        hasChildren?: undefined;
        icon?: undefined;
        iconUrl?: undefined;
        id?: undefined;
        items?: undefined;
        pid?: undefined;
        selected?: undefined;
        style?: undefined;
        text?: undefined;
        tooltip?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        allowFocus: any;
        content: any;
        enabled: any;
        expanded: any;
        hasChildren: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        pid: any;
        selected: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        allowFocus: string;
        content: string;
        enabled: string;
        expanded: string;
        hasChildren: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        pid: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined;
    set dropDownSize(arg: {
        width: number;
        height: number;
    } | undefined);
    get dropDownSize(): {
        width: number;
        height: number;
    } | undefined;
    set items(arg: any);
    get items(): any;
    set maxDropDownItems(arg: any);
    get maxDropDownItems(): any;
    set selectedItem(arg: any);
    get selectedItem(): any;
    _getItemObject(item: any, key: any): any;
    _updateCurrentList(): void;
    _updateData(): void;
    _updateDataFields(fields: any): void;
    exportToJSON(data: any, fields: any, spacing: any, flat: any): string;
    _addDropDown(obj: any, index: any): void;
    _removeCtrl(e: any): void;
    _closeDropDown(): void;
    _dropDownBlur(e: any): void;
    _itemSelected(e: any): void;
    _listSizeChanged(e: any): void;
    _removeDropDown(): void;
    _expandBoxMouseDown(e: any, obj: any, index: any): void;
    _expandBoxMouseUp(e: any): void;
    _expandBoxTouchStart(e: any, obj: any): void;
    toggle(obj: any, value: any): void;
    _itemMouseEnter(e: any, obj: any, index: any): void;
    _itemMouseLeave(e: any, obj: any): void;
    _itemMouseDown(e: any, obj: any): void;
    _itemMouseUp(e: any, obj: any): void;
    _itemTouchStart(e: any, obj: any): void;
    _itemTouchEnd(e: any, obj: any): void;
    _addChildItems(parentItem: any, pid: any): boolean;
    _addItemToList(item: any, pid: any): boolean;
    getFullList(): any[] | undefined;
    _getItemHeight(): string;
    getItemParent(item: any): any;
    _getRootButtonHeight(): string;
    _isItemAllowed(item: any): boolean;
    _isItemEnabled(item: any): any;
    _isItemHovered(item: any): boolean;
    _isItemLoading(item: any): boolean;
    _isItemSelected(obj: any): boolean;
    _isThereVisibleChildren(item: any): boolean;
    _updateActiveObj(obj: any): void;
    updateFullList(): any[] | undefined;
    _getButtonElemRect(index: any): any;
    _processUpdateLayout(): Promise<any>;
    _resetLayoutTimer(): void;
    _getRootList(): any[];
    _rootMouseEnter(e: any): void;
    _rootMouseLeave(e: any): void;
    _rootMouseDown(e: any): void;
    _rootTouchStart(e: any): void;
    findItemById(id: any): any;
    findItemByText(text: any): any;
    _getItemInlineStyle(obj: any): any;
    refresh(): void;
    _isThereNoItems(item: any): any;
    _itemHasChildren(obj: any): any;
    _updateItemStyle(obj: any): void;
    _updateRootButtonStyle(): void;
    _rootButtonStyle: {} | undefined;
    _getButtonClass(obj: any): {
        'iui-breadcrumb-item-button': boolean;
    };
    _getContentTemplate(): TemplateResult;
    _getItemTemplate(item: any): TemplateResult;
    _getListLayout(isHidden: any): TemplateResult;
    render(): TemplateResult;
    _topButtonElem: Element | null | undefined;
    _blockElem: Element | null | undefined;
    _buttonElems: NodeListOf<Element> | undefined;
    _hiddenBlockElem: Element | null | undefined;
    _itemElems: NodeListOf<Element> | undefined;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
