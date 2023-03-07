export default IntegralUIDataService;
declare class IntegralUIDataService {
    data: any[];
    init(list: any): void;
    clear(parent: any, key: any): void;
    insertAt(obj: any, index: any, parent: any, key: any): void;
    insert(obj: any, index: any, parent: any, refObject: any, flag: any, key: any): void;
    insertByRef(obj: any, refObject: any, flag: any, key: any): any;
    removeAt(obj: any, index: any, parent: any, key: any): {
        obj: any;
        result: boolean;
    };
    getData(key: any): any;
    getDataFields(value: any): {
        content: any;
        icon: any;
        id: any;
        pid: any;
        objects: any;
        statusIcon: any;
        subobjects: any;
        text: any;
    };
    getKey(key: any): any;
    getList(obj: any, key: any): any;
    updateDataFields(value: any, key: any): void;
    update(list: any): void;
    clone(obj: any, key: any, keepId: any): any;
    createCloneIds(obj: any, newPid: any, fields: any): void;
    findObjectById(id: any, key: any): any;
    findObjectByText(text: any, key: any): any;
    findParent(obj: any, list: any, fields: any): any;
    getParent(obj: any, key: any): any;
    getUniqueId(separator: any): string;
    searchObj(value: any, list: any, fields: any, type: any): any;
}
