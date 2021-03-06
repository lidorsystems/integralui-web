import { ComponentFactoryResolver, ElementRef, QueryList, Renderer2, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseService, IntegralUIScrollMode } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIDragDropService } from '../services/integralui.dragdrop.service';
import { IntegralUIFilterService } from '../services/integralui.filter.service';
import { IntegralUIBaseList } from './integralui.base.list';
import { IntegralUIListItem } from './integralui.listitem';
import * as i0 from "@angular/core";
export declare class IntegralUIListView extends IntegralUIBaseList {
    protected dataService: IntegralUIDataService;
    protected dragDropService: IntegralUIDragDropService;
    protected elemRef: ElementRef;
    protected elemRenderer: Renderer2;
    protected commonService?: IntegralUICommonService;
    protected filterService?: IntegralUIFilterService;
    protected cmpResolver?: ComponentFactoryResolver;
    protected baseService?: IntegralUIBaseService;
    protected clientSpace: any;
    contentPos: any;
    protected currentItemSize: any;
    private itemsPerColumn;
    private itemsPerRow;
    private numColumns;
    private numRows;
    contentList: QueryList<IntegralUIListItem>;
    contentRef: ViewContainerRef;
    contentElem: ElementRef;
    itemElems: QueryList<ElementRef>;
    itemTemplate: any;
    private currentScrollMode;
    overflowSettings: any;
    private tRef;
    set itemSize(value: any);
    get itemSize(): any;
    set scrollMode(value: IntegralUIScrollMode);
    get scrollMode(): IntegralUIScrollMode;
    protected updateOverflowSettings(): void;
    constructor(dataService: IntegralUIDataService, dragDropService: IntegralUIDragDropService, elemRef: ElementRef, elemRenderer: Renderer2, commonService?: IntegralUICommonService, filterService?: IntegralUIFilterService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    protected updateData(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    addItem(item: any): void;
    clearItems(): void;
    insertItemAt(item: any, index: number): void;
    removeItemAt(index: number): boolean;
    itemDragOver(e: any, obj: any, index: number, flag?: boolean): void;
    private addItemToCurrentList;
    loadData(data: Array<any>, fields?: any): void;
    protected updateCurrentList(): void;
    protected updateScrollItemList(): void;
    getItem(cmp: IntegralUIListItem): any;
    getItemFromComponent(cmp: IntegralUIListItem): any;
    getItemIndex(cmp: IntegralUIListItem): number;
    protected updateItemList(): void;
    invokeEvent(key: string, item: any): boolean;
    isDropPosHorizontal(): boolean;
    processDownArrowKey(item: any, e?: any): any;
    processEndKey(item: any, e?: any): any;
    processHomeKey(item: any, e?: any): any;
    processLeftArrowKey(item: any, e?: any): any;
    processPageDownKey(item: any, e?: any): any;
    processPageUpKey(item: any, e?: any): any;
    processRightArrowKey(item: any, e?: any): any;
    processUpArrowKey(item: any, e?: any): any;
    protected getDownItem(item: any): any;
    protected getLeftItem(item: any): any;
    protected getRightItem(item: any): any;
    protected getUpItem(item: any): any;
    itemMouseDown(e: any, obj: any): void;
    protected getContentSize(): {
        width: any;
        height: any;
    };
    updateLayout(): void;
    updateLayoutNormal(): void;
    updateLayoutVirtual(): void;
    protected updateScrollSize(): void;
    protected updateVisibleRange(): void;
    protected getItemElemList(): ElementRef<any>[];
    protected changeHorizontalScrollPos(value: number): void;
    isVerScrollVisible(): boolean;
    isHorScrollVisible(): boolean;
    onHorizontalScrollChanged(e: any): void;
    updateView(): void;
    listViewMouseWheel(e: any): void;
    scrollTo(item: any): void;
    clearSelection(): void;
    selectItem(cmp: IntegralUIListItem): void;
    private updateSelectedItemFromElem;
    private updateSelectedItem;
    getControlStyle(): any;
    protected getItemInlineStyle(itemObj: any): any;
    private resetRefresh;
    refresh(obj?: any): void;
    static ??fac: i0.????FactoryDef<IntegralUIListView, never>;
    static ??cmp: i0.????ComponentDefWithMeta<IntegralUIListView, "iui-listview", never, { "allowDrag": "allowDrag"; "allowDrop": "allowDrop"; "allowFilter": "allowFilter"; "allowFocus": "allowFocus"; "appRef": "appRef"; "controlStyle": "controlStyle"; "data": "data"; "enabled": "enabled"; "items": "items"; "name": "name"; "selectedItem": "selectedItem"; "sorting": "sorting"; "state": "state"; "virtualMode": "virtualMode"; "itemSize": "itemSize"; "scrollMode": "scrollMode"; }, { "afterSelect": "afterSelect"; "beforeEdit": "beforeEdit"; "beforeSelect": "beforeSelect"; "change": "change"; "clear": "clear"; "dragEnter": "dragEnter"; "dragDrop": "dragDrop"; "dragDropComplete": "dragDropComplete"; "dragLeave": "dragLeave"; "dragOver": "dragOver"; "itemAdding": "itemAdding"; "itemAdded": "itemAdded"; "itemHover": "itemHover"; "itemRemoving": "itemRemoving"; "itemRemoved": "itemRemoved"; "keyDown": "keyDown"; "keyPress": "keyPress"; "keyUp": "keyUp"; "loadComplete": "loadComplete"; "scrollPosChanged": "scrollPosChanged"; "selectionChanged": "selectionChanged"; "updateComplete": "updateComplete"; }, ["itemTemplate", "contentList"], ["*"]>;
}
