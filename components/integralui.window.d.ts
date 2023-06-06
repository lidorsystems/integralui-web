export default IntegralUIWindow;
declare class IntegralUIWindow extends IntegralUIBase {
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
        theme: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Office";
            };
            reflect: boolean;
        };
        allowResize: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        closeButton: {
            type: BooleanConstructor;
            attribute: string;
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
        maximizeButton: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        minimizeButton: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        maxSize: {
            type: ObjectConstructor;
        };
        minSize: {
            type: ObjectConstructor;
        };
        parentId: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        position: {
            type: ObjectConstructor;
        };
        selected: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        state: {
            type: any,
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Normal" | "Maximized" | "Minimized";
            };
            reflect: boolean;
        };
        text: {
            type: StringConstructor;
            reflect: boolean;
        };
        visible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    set allowResize(arg: boolean);
    get allowResize(): boolean;
    set closeButton(arg: boolean);
    get closeButton(): boolean;
    set icon(arg: string);
    get icon(): string;
    set iconUrl(arg: string);
    get iconUrl(): string;
    set maximizeButton(arg: boolean);
    get maximizeButton(): boolean;
    set minimizeButton(arg: boolean);
    get minimizeButton(): boolean;
    set maxSize(arg: {
        width: number;
        height: number;
    });
    get maxSize(): {
        width: number;
        height: number;
    };
    set minSize(arg: {
        width: number;
        height: number;
    });
    get minSize(): {
        width: number;
        height: number;
    };
    set parentId(arg: string);
    get parentId(): string;
    set position(arg: {
        top: number;
        left: number;
    });
    get position(): {
        top: number;
        left: number;
    };
    set selected(arg: boolean);
    get selected(): boolean;
    set state(arg: string);
    get state(): string;
    set text(arg: string);
    get text(): string;
    set visible(arg: boolean);
    get visible(): boolean;
    close(flag: any): void;
    open(): void;
    maximize(): void;
    minimize(): void;
    refresh(): void;
    firstUpdated(props: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
