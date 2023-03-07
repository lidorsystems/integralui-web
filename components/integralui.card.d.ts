export default IntegralUICard;
declare class IntegralUICard extends IntegralUIBase {
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
        flipped: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        footer: {
            type: ObjectConstructor;
        };
        header: {
            type: ObjectConstructor;
        };
        selected: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    _isFlipped: boolean;
    _parentCtrl: any;
    _isSelected: boolean;
    _autoCtrlHeight: number;
    _contentElem: {
        front: null;
        back: null;
    };
    _contentHeight: {
        front: number;
        back: number;
    };
    _contentSlotElemHeight: {
        front: number;
        back: number;
    };
    _footerElem: {
        front: null;
        back: null;
    };
    _footerHeight: {
        front: number;
        back: number;
    };
    _isFooterVisible: {
        front: boolean;
        back: boolean;
    };
    _headerElem: {
        front: null;
        back: null;
    };
    _headerHeight: {
        front: number;
        back: number;
    };
    _isHeaderVisible: {
        front: boolean;
        back: boolean;
    };
    _updateTimer: any;
    _ctrlInnerClass: {};
    _generalClassName: string;
    _generalInnerClassName: string;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    };
    setParent(cmp: any): void;
    set flipped(arg: boolean);
    get flipped(): boolean;
    set footer(arg: {
        front: boolean;
        back: boolean;
    });
    get footer(): {
        front: boolean;
        back: boolean;
    };
    set header(arg: {
        front: boolean;
        back: boolean;
    });
    get header(): {
        front: boolean;
        back: boolean;
    };
    set selected(arg: boolean);
    get selected(): boolean;
    flip(): void;
    _getContentHeight(back: any): number;
    _processUpdateLayout(): Promise<any>;
    _resetLayoutTimer(): void;
    _updateLayoutSize(): void;
    _onClick(e: any): void;
    _onMouseDown(e: any): void;
    _onMouseUp(e: any): void;
    _onMouseEnter(e: any): void;
    _onMouseMove(e: any): void;
    _onMouseLeave(e: any): void;
    _getControlInnerClass(): {};
    _updateControlInnerClass(): void;
    _ctrlTouchStart(e: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
    _elemFront: Element | null | undefined;
    _elemBack: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
