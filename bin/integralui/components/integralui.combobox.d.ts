import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIHeaderItem, IntegralUIItem } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUIComboBox extends IntegralUIBaseComponent {
    protected commonService?: IntegralUICommonService;
    protected cmpResolver?: ComponentFactoryResolver;
    protected itemList: Array<IntegralUIItem>;
    private eventList;
    protected expandState: string;
    private initStatus;
    protected isExpanded: boolean;
    protected isSelected: boolean;
    protected supressCallback: boolean;
    private comboWidth;
    contentBorder: string;
    contentHeight: string;
    contentDisplay: string;
    contentOpacity: number;
    contentOverflowY: string;
    private listSize;
    protected maxBlockHeight: number;
    private itemSizeList;
    controlElem: ElementRef;
    header: IntegralUIHeaderItem;
    headerElem: ElementRef;
    headerRef: ViewContainerRef;
    dropDownElem: ElementRef;
    contentList: QueryList<IntegralUIItem>;
    private currentSelection;
    private currentIndex;
    protected contentClassName: string;
    protected headerClassName: string;
    protected headerExpandBoxClassName: string;
    protected itemGeneralClassName: string;
    protected itemContentClassName: string;
    protected contentClass: Array<any>;
    private tRef;
    dropDownHeight: number;
    integralHeight: boolean;
    items: Array<any>;
    maxDropDownItems: number;
    set dropDownWidth(value: number);
    get dropDownWidth(): number;
    set expanded(value: boolean);
    get expanded(): boolean;
    set selectedIndex(value: number);
    get selectedIndex(): number;
    set selectedItem(value: any);
    get selectedItem(): any;
    click: EventEmitter<any>;
    dropDownClosed: EventEmitter<any>;
    dropDownClosing: EventEmitter<any>;
    dropDownOpened: EventEmitter<any>;
    dropDownOpening: EventEmitter<any>;
    selectedItemChanged: EventEmitter<any>;
    selectedIndexChanged: EventEmitter<any>;
    constructor(commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private attachItemEvents;
    comboClick(e: any): void;
    dropDownBlurEvent(e: any): void;
    private callBeforeEvent;
    private callAfterEvent;
    closeDropDown(): void;
    openDropDown(): void;
    getComboIcon(): any;
    getComboIconUrl(): any;
    getComboText(): any;
    protected isIndexInRange(index: number): boolean;
    getDropDownWidth(): number;
    private calcBlockHeight;
    getDropDownHeight(): number;
    protected toggleContent(): void;
    processMouseWheel(e: any, flag?: boolean): void;
    protected clearSelection(cmp?: IntegralUIItem): void;
    private updateSelectedIndex;
    private updateSelection;
    getControlStyle(): any;
    protected updateContentClass(): void;
    getContentClass(): any[];
    protected getContentStyle(value: any): any;
    protected getHeaderClass(): string;
    protected getHeaderGeneralStyle(value?: any): any;
    protected getHeaderStyle(value: any): {
        general: any;
        expandBox: any;
    };
    getCurrentHeaderStyle(): any;
    protected getItemStyle(value: any): {
        general: any;
        content: any;
    };
    protected getItemGeneralStyle(value?: any): any;
    protected getItemContentStyle(value?: any): any;
    protected updateStyle(value: any): void;
    static ??fac: i0.????FactoryDef<IntegralUIComboBox, never>;
    static ??cmp: i0.????ComponentDefWithMeta<IntegralUIComboBox, "iui-combobox", never, { "controlStyle": "controlStyle"; "data": "data"; "enabled": "enabled"; "name": "name"; "size": "size"; "state": "state"; "dropDownHeight": "dropDownHeight"; "integralHeight": "integralHeight"; "items": "items"; "maxDropDownItems": "maxDropDownItems"; "dropDownWidth": "dropDownWidth"; "expanded": "expanded"; "selectedIndex": "selectedIndex"; "selectedItem": "selectedItem"; }, { "click": "click"; "dropDownClosed": "dropDownClosed"; "dropDownClosing": "dropDownClosing"; "dropDownOpened": "dropDownOpened"; "dropDownOpening": "dropDownOpening"; "selectedItemChanged": "selectedItemChanged"; "selectedIndexChanged": "selectedIndexChanged"; }, ["contentList"], ["*"]>;
}
