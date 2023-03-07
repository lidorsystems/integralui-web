export default IntegralUICalendar;
declare class IntegralUICalendar extends IntegralUIBase {
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
        firstDayOfWeek: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
            };
            reflect: boolean;
        };
        locales: {
            type: StringConstructor;
            reflect: boolean;
        };
        selectedDate: {
            type: ObjectConstructor;
            attribute: string;
        };
        showToday: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        todayDate: {
            type: ObjectConstructor;
            attribute: string;
        };
    };
    _animateCurrentPos: number | undefined;
    _animateNextPos: number | undefined;
    _animatePrevPos: number | undefined;
    _animateCurrentOpacity: number | undefined;
    _animateNextOpacity: number | undefined;
    _animatePrevOpacity: number | undefined;
    _decadeOpacity: number | undefined;
    _monthOpacity: number | undefined;
    _yearOpacity: number | undefined;
    _isDecadeAnimated: boolean | undefined;
    _isMonthAnimated: boolean | undefined;
    _isYearAnimated: boolean | undefined;
    _currentDate: any;
    _currentFirstDayOfWeek: any;
    _currentLocales: any;
    _currentSelectedDate: any;
    _currentTodayDate: any;
    _listDayWeek: any[] | undefined;
    _title: any;
    _listYears: any[] | undefined;
    _nextListYears: any[] | undefined;
    _prevListYears: any[] | undefined;
    _listMonths: any[] | undefined;
    _nextListMonths: any[] | undefined;
    _prevListMonths: any[] | undefined;
    _listDaysInMonth: any[] | undefined;
    _nextListDaysInMonth: any[] | undefined;
    _prevListDaysInMonth: any[] | undefined;
    _hoverDate: Date | null | undefined;
    _prevHoverDate: Date | null | undefined;
    _buttonMargin: {
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
    _ctrlOpacity: number | undefined;
    _contentSize: {
        width: number;
        height: number;
    } | undefined;
    _displayMode: any;
    _headerSize: {
        width: number;
        height: number;
    } | undefined;
    _isTodayVisible: any;
    _prevDisplayMode: any;
    _titleMargin: {
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
    _titleSize: {
        width: number;
        height: number;
    } | {
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
    _cellClassName: string | undefined;
    _isNavigationActive: boolean | undefined;
    _navTimer: null | undefined;
    _windowMouseUp(e: any): void;
    set firstDayOfWeek(arg: any);
    get firstDayOfWeek(): any;
    set locales(arg: any);
    get locales(): any;
    set selectedDate(arg: any);
    get selectedDate(): any;
    set showToday(arg: any);
    get showToday(): any;
    set todayDate(arg: any);
    get todayDate(): any;
    _clearDisplayAnimation(): void;
    _animateDisplayChanges(flag: any): void;
    _getCorrectDayInMonth(year: any, month: any, day: any): any;
    _getDayofWeekOrder(): 0 | 1 | 6 | 2 | 3 | 4 | 5;
    _getLastDayFromMonth(month: any, year: any): 30 | 29 | 28 | 31;
    _getPrevMonth(value: any): number;
    _getPrevYear(value: any): any;
    _getNextMonth(value: any): any;
    _getNextYear(value: any): any;
    _getWeekNames(): string[];
    _isDateEqual(first: any, second: any): boolean;
    _isMonthEqual(first: any, second: any): boolean;
    _isYearEqual(first: any, second: any): boolean;
    _reset(): void;
    _processUpdateLayout(): Promise<any>;
    _updateHeaderLayout(): void;
    _updateHeaderTitle(value: any): void;
    _updateDecadeLayout(list: any, value: any): void;
    _updateMonthLayout(list: any, value: any): void;
    _updateYearLayout(list: any, value: any): void;
    _updateCurrentDate(value: any, flag: any): void;
    _btnNextClicked(e: any): void;
    _btnPrevClicked(e: any): void;
    _ctrlClick(e: any): void;
    _ctrlMouseDown(e: any): void;
    _ctrlMouseEnter(e: any): void;
    _ctrlMouseLeave(e: any): void;
    _ctrlMouseUp(e: any): void;
    _ctrlTouchEnd(e: any): void;
    _dayClicked(e: any, day: any): void;
    _dayTouchEnd(e: any, day: any): void;
    _dayEnter(e: any, day: any): void;
    _dayLeave(e: any, day: any): void;
    _headerClicked(e: any, flag: any): void;
    _monthClicked(e: any, month: any): void;
    _monthTouchEnd(e: any, month: any): void;
    _monthEnter(e: any, month: any): void;
    _monthLeave(e: any, month: any): void;
    _yearClicked(e: any, year: any): void;
    _yearTouchEnd(e: any, year: any): void;
    _yearEnter(e: any, year: any): void;
    _yearLeave(e: any, year: any): void;
    _next(e: any, value: any): void;
    _prev(e: any, value: any): void;
    _removeNavigationTimer(): void;
    _processDayClicked(e: any, day: any): void;
    _processMonthClicked(month: any): void;
    _processYearClicked(year: any): void;
    _getDayObjectStyle(objDate: any, day: any, isGrayed: any): {};
    _getMonthObjectStyle(objDate: any, month: any, isGrayed: any): {};
    _getYearObjectStyle(objDate: any, year: any, isGrayed: any): {};
    _getCellObjectStyle(objDate: any, valueDate: any, isGrayed: any): {};
    _getButtonLayout(): import("../external/lit-element.js").TemplateResult;
    _getDecadeLayout(): import("../external/lit-element.js").TemplateResult;
    _getMonthLayout(): import("../external/lit-element.js").TemplateResult;
    _getYearLayout(): import("../external/lit-element.js").TemplateResult;
    render(): import("../external/lit-element.js").TemplateResult;
    _headerElem: Element | null | undefined;
    _headerButtonElem: Element | null | undefined;
    _headerTitleElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
