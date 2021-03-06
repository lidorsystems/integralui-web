import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IntegralUIPaginator {
    inputLabelElem: ElementRef;
    currentPageNumber: number;
    protected isEnabled: boolean;
    maxPageNumber: number;
    minPageNumber: number;
    private numPages;
    inputWidth: number;
    private prevValue;
    set currentPage(value: number);
    get currentPage(): number;
    set enabled(value: boolean);
    get enabled(): boolean;
    set maxPages(value: number);
    get maxPages(): number;
    enabledChanged: EventEmitter<any>;
    pageChanged: EventEmitter<any>;
    ngAfterViewInit(): void;
    firstPage(): void;
    lastPage(): void;
    nextPage(): void;
    prevPage(): void;
    onCurrentPageChange(value: any): void;
    private updateCurrentPage;
    protected updateLayout(): void;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIPaginator, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUIPaginator, "iui-paginator", never, { "currentPage": "currentPage"; "enabled": "enabled"; "maxPages": "maxPages"; }, { "enabledChanged": "enabledChanged"; "pageChanged": "pageChanged"; }, never, never>;
}
