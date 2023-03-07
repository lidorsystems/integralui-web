export default IntegralUIFilterService;
declare class IntegralUIFilterService {
    isString(value: any): boolean;
    _isFilterCondition(symbol: any): boolean;
    beginsWith(value: any, match: any, caseSensitive: any): boolean;
    endsWith(value: any, match: any, caseSensitive: any): boolean;
    _getFilterCondition(conditionList: any, symbol: any): any;
    _createFilterNode(): {
        result: boolean;
    };
    _setFilterNode(node: any, conditionList: any, symbol: any, negative: any): void;
    _getMatchResult(value: any, operation: any, match: any, negative: any, caseSensitive: any): boolean;
    _getFilterResult(value: any, condition: any, negative: any, caseSensitive: any): boolean;
    _applyFilter(value: any, tree: any, caseSensitive: any): any;
    createTree(conditionList: any, formula: any): {
        result: boolean;
    } | null;
    match(value: any, conditions: any, formula: any, tree: any, caseSensitive: any): any;
    filter(list: any, field: any, conditions: any, formula: any, tree: any, caseSensitive: any): any[];
}
