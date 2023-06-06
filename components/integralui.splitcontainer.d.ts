export default IntegralUISplitContainer;
declare class IntegralUISplitContainer extends IntegralUIBase {
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
            type: any;
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
        orientation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Horizontal" | "Vertical";
            };
            reflect: boolean;
        };
        panel1: {
            type: ObjectConstructor;
        };
        panel2: {
            type: ObjectConstructor;
        };
        showButtons: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        splitterDistance: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    set orientation(arg: string | undefined);
    get orientation(): string | undefined;
    set panel1(arg: any);
    get panel1(): any;
    set panel2(arg: any);
    get panel2(): any;
    set showButtons(arg: boolean | undefined);
    get showButtons(): boolean | undefined;
    set splitterDistance(arg: any);
    get splitterDistance(): any;
    firstUpdated(props: any): void;
    refresh(): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
