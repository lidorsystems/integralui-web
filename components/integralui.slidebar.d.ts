export default IntegralUISlideBar;
declare class IntegralUISlideBar extends IntegralUIBase {
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
        animationPause: {
            type: NumberConstructor;
            attribute: string;
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
        displayMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Carousel" | "Stream";
            };
            reflect: boolean;
        };
        navigationButtons: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        selectedIndex: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    _currentList: any[] | undefined;
    _slideList: any[] | Node[] | undefined;
    _animationTimeout: any;
    _animationTimer: any;
    _currentAnimationCounter: number | undefined;
    _currentAnimationPause: any;
    _currentAnimationSpeed: any;
    _arrowTopPos: number | undefined;
    _arrowOpacity: number | undefined;
    _buttons: any[] | undefined;
    _currentDisplayMode: any;
    _elemSize: {
        width: number;
        height: number;
    } | undefined;
    _navigatorSize: {
        width: number;
        height: number;
    } | undefined;
    _isNavigationBarVisible: boolean | undefined;
    _showNavigationButtons: any;
    _slideSize: {
        width: number;
        height: number;
    } | undefined;
    _firstSlide: any;
    _prevSlide: any;
    _currentSlide: any;
    _nextSlide: any;
    _lastSlide: any;
    _currentSelection: any;
    _currentSelectedIndex: number | undefined;
    _removeIndex: any;
    _selectedSlideComponent: any;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _resizeObserver: ResizeObserver | null | undefined;
    set animationPause(arg: any);
    get animationPause(): any;
    set animationSpeed(arg: any);
    get animationSpeed(): any;
    set displayMode(arg: any);
    get displayMode(): any;
    set navigationButtons(arg: any);
    get navigationButtons(): any;
    set selectedIndex(arg: number | undefined);
    get selectedIndex(): number | undefined;
    _getButtonClass(btn: any): {
        'iui-slidebar-navigator-button': boolean;
    };
    _cancelAnimation(): void;
    _getSpeedFactor(): 10 | 2 | 5 | 15 | 25;
    startAnimation(): void;
    stopAnimation(): void;
    _updateCurrentList(): void;
    _getNextSlide(slide: any): any;
    _getPrevSlide(slide: any): any;
    _getSlideCurrentIndex(cmp: any): number;
    _getSlideIndex(cmp: any): number;
    _getSlideData(index: any): any;
    invokeCtrlMethod(key: any, slide: any): boolean;
    _ctrlMouseEnter(e: any): void;
    _ctrlMouseLeave(e: any): void;
    prevSlide(): void;
    nextSlide(): void;
    _updateSlideReferences(): void;
    _processUpdateLayout(optimal: any): Promise<any>;
    _updateSlides(flag: any): Promise<void>;
    selectSlide(slide: any): void;
    selectSlideByIndex(index: any): Promise<void>;
    render(): import("../external/lit-element.js").TemplateResult;
    _refreshSlides(): void;
    _numSlides: any;
    _slotChange(e: any): void;
    _updateControlReferences(): void;
    _blockElem: Element | null | undefined;
    _arrowElem: Element | null | undefined;
    _navigatorElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
