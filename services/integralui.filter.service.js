class IntegralUIFilterService {
    isString(value){
        return value ? typeof value === 'string' || value instanceof String : false;
    }

    _isFilterCondition(symbol){
        if (symbol === 'a' || symbol === 'b' || symbol === 'c' || symbol === 'd' || symbol === 'e' || symbol === 'f' || symbol === 'g' || symbol === 'h' || symbol === 'i' || symbol === 'j' || symbol === 'k' || symbol === 'l' || symbol === 'm' ||
            symbol === 'n' || symbol === 'o' || symbol === 'p' || symbol === 'q' || symbol === 'r' || symbol === 's' || symbol === 't' || symbol === 'u' || symbol === 'v' || symbol === 'w' || symbol === 'x' || symbol === 'y' || symbol === 'z')
                return true;

        return false;
    }


    beginsWith(value, match, caseSensitive){
        if (value !== undefined && match !== undefined && this.isString(value) && this.isString(match)){
            if (value.length >= match.length){
                if (caseSensitive !== false)
                    return value.substring(0, match.length) === match ? true : false;
                else
                    return value.toLowerCase().substring(0, match.length) === match.toLowerCase() ? true : false;
            }
        }

        return false;
    }

    endsWith(value, match, caseSensitive){
        if (value !== undefined && match !== undefined && this.isString(value) && this.isString(match)){
            if (value.length >= match.length){
                if (caseSensitive !== false)
                    return value.substring(value.length - match.length, value.length) === match ? true : false;
                else
                    return value.toLowerCase().substring(value.length - match.length, value.length) === match.toLowerCase() ? true : false;
            }
        }

        return false;
    }

    _getFilterCondition(conditionList, symbol){
        let symbolList = 'abcdefghijklmnopqrstuvwxyz';
        let index = symbolList.indexOf(symbol);

        return conditionList && index >= 0 && index < conditionList.length ? conditionList[index] : null;
    }

    _createFilterNode(){
        let node = {
            result: false
        }

        return node;
    }

    _setFilterNode(node, conditionList, symbol, negative){
        let conditionNode = this._createFilterNode();
        conditionNode.condition = this._getFilterCondition(conditionList, symbol);
        conditionNode.negative = negative;

        if (!node.left)
            node.left = conditionNode;
        else if (!node.right)
            node.right = conditionNode;
    }

    _getMatchResult(value, operation, match, negative, caseSensitive){
        let result = false;

        if (value !== undefined && match !== undefined){
            switch (operation){
                case '>':
                    result = value > match;
                    break;

                case '>=':
                    result = value >= match;
                    break;

                case '<':
                    result = value < match;
                    break;

                case '<=':
                    result = value <= match;
                    break;

                case '=':
                    if (this.isString(value) && this.isString(match))
                        result = caseSensitive !== false ?  value === match : value.toLowerCase() === match.toLowerCase();
                    else
                        result = value === match;
                    break;

                case '!=':
                    if (this.isString(value) && this.isString(match))
                        result = caseSensitive !== false ?  value !== match : value.toLowerCase() !== match.toLowerCase();
                    else
                        result = value !== match;
                    break;

                case '<>':
                    if (this.isString(value) && this.isString(match))
                        result = caseSensitive !== false ?  value !== match : value.toLowerCase() !== match.toLowerCase();
                    else
                        result = value !== match;
                    break;

                case '->':
                    result = this.beginsWith(value, match, caseSensitive);
                    break;

                case '<-':
                    result = this.endsWith(value, match, caseSensitive);
                    break;

                case '><':
                    result = this.isString(value) && this.isString(match) ? (caseSensitive !== false ? value.indexOf(match) > -1 : value.toLowerCase().indexOf(match.toLowerCase()) > -1) : false;
                    break;

                case '[]':
                    result = this.isString(value) && this.isString(match) ? (caseSensitive !== false ? value.indexOf(match) > -1 : value.toLowerCase().indexOf(match.toLowerCase()) > -1) : false;
                    break;

                case '][':
                    result = this.isString(value) && this.isString(match) ? (caseSensitive !== false ? value.indexOf(match) > -1 : value.toLowerCase().indexOf(match.toLowerCase()) > -1) : false;
                    result = !result;
                    break;
    
                default:
                    result = false;
                     break;
            }

            if (negative === true)
                result = !result;
        }

        return result;
    }

    _getFilterResult(value, condition, negative, caseSensitive){
        if (condition){
            if (Array.isArray(condition.value)){
                let resultList = [];
                for (let k = 0; k < condition.value.length; k++){
                    resultList.push(this._getMatchResult(value, condition.operation, condition.value[k], negative, caseSensitive));
                }

                let res = true;
                if (condition.join === '&'){
                    for (let k = 0; k < resultList.length; k++)
                        res = res && resultList[k];
                }
                else {
                    res = false;
                    for (let k = 0; k < resultList.length; k++)
                        res = res || resultList[k];
                }

                return res;
            }

            return this._getMatchResult(value, condition.operation, condition.value, negative, caseSensitive);
        }

        return true;
    }

    _applyFilter(value, tree, caseSensitive){
        if (tree){
            let rootNode = tree;
            let currentNode = rootNode;

            if (currentNode.left){
                if (currentNode.left.condition)
                    currentNode.left.result = this._getFilterResult(value, currentNode.left.condition, currentNode.left.negative, caseSensitive);
                else {
                    currentNode = currentNode.left;
                    this._applyFilter(value, currentNode, caseSensitive);
                }
            }

            currentNode = rootNode;
            if (currentNode.right){
                if (currentNode.right.condition)
                    currentNode.right.result = this._getFilterResult(value, currentNode.right.condition, currentNode.right.negative, caseSensitive);
                else {
                    currentNode = currentNode.right;
                    this._applyFilter(value, currentNode, caseSensitive);
                }
            }

            if (rootNode.operator === '&'){
                rootNode.result = true;
                if (rootNode.left)
                    rootNode.result = rootNode.result && rootNode.left.result;
                if (rootNode.right)
                    rootNode.result = rootNode.result && rootNode.right.result;
            }
            else{
                rootNode.result = false;
                if (rootNode.left)
                    rootNode.result = rootNode.result || rootNode.left.result;
                if (rootNode.right)
                    rootNode.result = rootNode.result || rootNode.right.result;
            }

            return rootNode.result;
        }

        return true;
    }

    createTree(conditionList, formula){
        if (formula){
            let rootNode = this._createFilterNode();
            let currentNode = rootNode;
            let childNode = null;
            let negativeActive = false;

            for (let i = 0; i < formula.length; i++){
                if (this._isFilterCondition(formula[i])){
                    this._setFilterNode(currentNode, conditionList, formula[i], negativeActive);
                }
                else if (formula[i] === '&' || formula[i] === '|'){
                    negativeActive = false;
                    currentNode.operator = formula[i];
                }
                else if (formula[i] === '!')
                    negativeActive = true;
                else if (formula[i] === '('){
                    negativeActive = false;
                    childNode = this._createFilterNode();
                    childNode.parent = currentNode;
                    currentNode = childNode;
                }
                else if (formula[i] === ')'){
                    negativeActive = false;
                    if (currentNode.parent){
                        if (!currentNode.parent.left)
                            currentNode.parent.left = currentNode;
                        else if (!currentNode.parent.right)
                            currentNode.parent.right = currentNode;
                    }

                    currentNode = currentNode.parent;
                }
            }

            return rootNode;
        }

        return null;
    }

    match(value, conditions, caseSensitive, formula, tree){
        if (Array.isArray(conditions)){
            if (!tree)
                tree = this.createTree(conditions, formula);

            return this._applyFilter(value, tree, caseSensitive);
        }

        let negative = conditions ? conditions.negative : false;

        return this._getFilterResult(value, conditions, negative, caseSensitive);
    }

    filter(list, field, conditions, formula, tree, caseSensitive){
        let result = [];

        if (list && Array.isArray(list)){
            for (let i = 0; i < list.length; i++){
                let currentObj = field ? list[i][field] : list[i];

                if (this.match(currentObj, conditions, caseSensitive, formula, tree))
                    result.push(list[i]);
            }
        }

        return result;
    }
}

export default IntegralUIFilterService;