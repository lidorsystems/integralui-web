export default IntegralUIHeaderItem;
declare class IntegralUIHeaderItem extends IntegralUIItem {
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
        icon: {
            type: StringConstructor;
            reflect: boolean;
        };
        iconUrl: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        iconSize: {
            type: ObjectConstructor;
        };
        text: {
            type: StringConstructor;
            reflect: boolean;
        };
        visible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        animationType: {
            type: StringConstructor;
        };
        animationState: {
            type: StringConstructor;
        };
    };
    _currentAnimationState: any;
    _currentAnimationType: any;
    _expandHorizontalClass: {} | undefined;
    _expandVerticalClass: {} | undefined;
    _expandArrowBottomLeftClass: {} | undefined;
    _expandArrowBottomRightClass: {} | undefined;
    _expandArrowVerticalClass: {} | undefined;
    _expandArrowTopLeftClass: {} | undefined;
    _expandArrowTopRightClass: {} | undefined;
    _expandBoxClassName: string | undefined;
    set animationState(arg: any);
    get animationState(): any;
    set animationType(arg: any);
    get animationType(): any;
    _getExpandVerticalClass(): {};
    _getExpandHorizontalClass(): {};
    _getExpandArrowBottomLeftClass(): {};
    _getExpandArrowBottomRightClass(): {};
    _getExpandArrowVerticalClass(): {};
    _getExpandArrowTopLeftClass(): {};
    _getExpandArrowTopRightClass(): {};
    _expandBoxClicked(e: any): void;
    _getHeaderTemplate(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIItem from "./integralui.item.js";
