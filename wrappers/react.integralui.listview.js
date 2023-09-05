/*
  filename: react.integralui.listview.js
  version : 23.3.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import React, { Component } from "react";

import '../components/integralui.listview.js';

class IntegralUIListViewComponent extends Component {
    constructor(props){
        super(props);

        this.ctrlRef = React.createRef();
    }
   
    _isCtrlDefined(){
        return this.ctrlRef && this.ctrlRef.current ? true : false;
    }

    //
    // Events ------------------------------------------------------------------------------------
    //

    componentDidMount(){
        this._initProps();

        if (this._isCtrlDefined()){
            if (this.props.afterEdit)
                this.ctrlRef.current.addEventListener('afterEdit', (e) => this.props.afterEdit(e));
            if (this.props.afterSelect)
                this.ctrlRef.current.addEventListener('afterSelect', (e) => this.props.afterSelect(e));
            if (this.props.beforeEdit)
                this.ctrlRef.current.addEventListener('beforeEdit', (e) => this.props.beforeEdit(e));
            if (this.props.beforeSelect)
                this.ctrlRef.current.addEventListener('beforeSelect', (e) => this.props.beforeSelect(e));
            if (this.props.clear)
                this.ctrlRef.current.addEventListener('clear', () => this.props.clear());
            if (this.props.dragDrop)
                this.ctrlRef.current.addEventListener('dragDrop', (e) => this.props.dragDrop(e));
            if (this.props.dragDropComplete)
                this.ctrlRef.current.addEventListener('dragDropComplete', (e) => this.props.dragDropComplete(e));
            if (this.props.dragEnd)
                this.ctrlRef.current.addEventListener('dragEnd', (e) => this.props.dragEnd(e));
            if (this.props.dragEnter)
                this.ctrlRef.current.addEventListener('dragEnter', (e) => this.props.dragEnter(e));
            if (this.props.dragLeave)
                this.ctrlRef.current.addEventListener('dragLeave', (e) => this.props.dragLeave(e));
            if (this.props.dragOver)
                this.ctrlRef.current.addEventListener('dragOver', (e) => this.props.dragOver(e));
            if (this.props.dragStart)
                this.ctrlRef.current.addEventListener('dragStart', (e) => this.props.dragStart(e));
            if (this.props.enabledChanged)
                this.ctrlRef.current.addEventListener('enabledChanged', (e) => this.props.enabledChanged(e));
            if (this.props.filtered)
                this.ctrlRef.current.addEventListener('filtered', () => this.props.filtered());
            if (this.props.itemAdded)
                this.ctrlRef.current.addEventListener('itemAdded', (e) => this.props.itemAdded(e));
            if (this.props.itemAdding)
                this.ctrlRef.current.addEventListener('itemAdding', (e) => this.props.itemAdding(e));
            if (this.props.itemClick)
                this.ctrlRef.current.addEventListener('itemClick', (e) => this.props.itemClick(e));
            if (this.props.itemDblClick)
                this.ctrlRef.current.addEventListener('itemDblClick', (e) => this.props.itemDblClick(e));
            if (this.props.itemHover)
                this.ctrlRef.current.addEventListener('itemHover', (e) => this.props.itemHover(e));
            if (this.props.itemMoved)
                this.ctrlRef.current.addEventListener('itemMoved', (e) => this.props.itemMoved(e));
            if (this.props.itemRemoved)
                this.ctrlRef.current.addEventListener('itemRemoved', (e) => this.props.itemRemoved(e));
            if (this.props.itemRemoving)
                this.ctrlRef.current.addEventListener('itemRemoving', (e) => this.props.itemRemoving(e));
            if (this.props.itemRightClick)
                this.ctrlRef.current.addEventListener('itemRightClick', (e) => this.props.itemRightClick(e));
            if (this.props.keyDown)
                this.ctrlRef.current.addEventListener('keyDown', (e) => this.props.keyDown(e));
            if (this.props.keyPress)
                this.ctrlRef.current.addEventListener('keyPress', (e) => this.props.keyPress(e));
            if (this.props.keyUp)
                this.ctrlRef.current.addEventListener('keyUp', (e) => this.props.keyUp(e));
            if (this.props.loadComplete)
                this.ctrlRef.current.addEventListener('loadComplete', () => this.props.loadComplete());
            if (this.props.scrollPosChanged)
                this.ctrlRef.current.addEventListener('scrollPosChanged', (e) => this.props.scrollPosChanged(e));
            if (this.props.selectionChanged)
                this.ctrlRef.current.addEventListener('selectionChanged', (e) => this.props.selectionChanged(e));
            if (this.props.sizeChanged)
                this.ctrlRef.current.addEventListener('sizeChanged', (e) => this.props.sizeChanged(e));
            if (this.props.sorted)
                this.ctrlRef.current.addEventListener('sorted', () => this.props.sorted());
            if (this.props.stateChanged)
                this.ctrlRef.current.addEventListener('stateChanged', (e) => this.props.stateChanged(e));
            if (this.props.updateComplete)
                this.ctrlRef.current.addEventListener('updateComplete', () => this.props.updateComplete());
        }
    }

    componentWillUnmount(){
        if (this._isCtrlDefined()){
            if (this.props.afterEdit)
                this.ctrlRef.current.removeEventListener('afterEdit', this.props.afterEdit);
            if (this.props.afterSelect)
                this.ctrlRef.current.removeEventListener('afterSelect', this.props.afterSelect);
            if (this.props.beforeEdit)
                this.ctrlRef.current.removeEventListener('beforeEdit', this.props.beforeEdit);
            if (this.props.beforeSelect)
                this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
            if (this.props.clear)
                this.ctrlRef.current.removeEventListener('clear', this.props.clear);
            if (this.props.dragDrop)
                this.ctrlRef.current.removeEventListener('dragDrop', this.props.dragDrop);
            if (this.props.dragDropComplete)
                this.ctrlRef.current.removeEventListener('dragDropComplete', this.props.dragDropComplete);
            if (this.props.dragEnd)
                this.ctrlRef.current.removeEventListener('dragEnd', this.props.dragEnd);
            if (this.props.dragEnter)
                this.ctrlRef.current.removeEventListener('dragEnter', this.props.dragEnter);
            if (this.props.dragLeave)
                this.ctrlRef.current.removeEventListener('dragLeave', this.props.dragLeave);
            if (this.props.dragOver)
                this.ctrlRef.current.removeEventListener('dragOver', this.props.dragOver);
            if (this.props.dragStart)
                this.ctrlRef.current.removeEventListener('dragStart', this.props.dragStart);
            if (this.props.enabledChanged)
                this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
            if (this.props.filtered)
                this.ctrlRef.current.removeEventListener('filtered', this.props.filtered);
            if (this.props.itemAdded)
                this.ctrlRef.current.removeEventListener('itemAdded', this.props.itemAdded);
            if (this.props.itemAdding)
                this.ctrlRef.current.removeEventListener('itemAdding', this.props.itemAdding);
            if (this.props.itemClick)
                this.ctrlRef.current.removeEventListener('itemClick', this.props.itemClick);
            if (this.props.itemDblClick)
                this.ctrlRef.current.removeEventListener('itemDblClick', this.props.itemDblClick);
            if (this.props.itemHover)
                this.ctrlRef.current.removeEventListener('itemHover', this.props.itemHover);
            if (this.props.itemMoved)
                this.ctrlRef.current.removeEventListener('itemMoved', this.props.itemMoved);
            if (this.props.itemRemoved)
                this.ctrlRef.current.removeEventListener('itemRemoved', this.props.itemRemoved);
            if (this.props.itemRemoving)
                this.ctrlRef.current.removeEventListener('itemRemoving', this.props.itemRemoving);
            if (this.props.itemRightClick)
                this.ctrlRef.current.removeEventListener('itemRightClick', this.props.itemRightClick);
            if (this.props.keyDown)
                this.ctrlRef.current.removeEventListener('keyDown', this.props.keyDown);
            if (this.props.keyPress)
                this.ctrlRef.current.removeEventListener('keyPress', this.props.keyPress);
            if (this.props.keyUp)
                this.ctrlRef.current.removeEventListener('keyUp', this.props.keyUp);
            if (this.props.loadComplete)
                this.ctrlRef.current.removeEventListener('loadComplete', this.props.loadComplete);
            if (this.props.scrollPosChanged)
                this.ctrlRef.current.removeEventListener('scrollPosChanged', this.props.scrollPosChanged);
            if (this.props.selectionChanged)
                this.ctrlRef.current.removeEventListener('selectionChanged', this.props.selectionChanged);
            if (this.props.sizeChanged)
                this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
            if (this.props.sorted)
                this.ctrlRef.current.removeEventListener('sorted', this.props.sorted);
            if (this.props.stateChanged)
                this.ctrlRef.current.removeEventListener('stateChanged', this.props.stateChanged);
            if (this.props.updateComplete)
                this.ctrlRef.current.removeEventListener('updateComplete', this.props.updateComplete);
        }
    }
 
    //
    // Properties --------------------------------------------------------------------------------
    //

    componentDidUpdate(prevProps){
        this._updateData(prevProps);
    }

    _initProps(){
        if (this._isCtrlDefined()){
            if (this._isDefined(this.props.allowAnimation))
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this._isDefined(this.props.allowUpdate))
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this._isDefined(this.props.allowDrag))
                this.ctrlRef.current.allowDrag = this.props.allowDrag;
            if (this._isDefined(this.props.allowDrop))
                this.ctrlRef.current.allowDrop = this.props.allowDrop;
            if (this._isDefined(this.props.allowFilter))
                this.ctrlRef.current.allowFilter = this.props.allowFilter;
            if (this._isDefined(this.props.allowFocus))
                this.ctrlRef.current.allowFocus = this.props.allowFocus;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.contentVisibility))
                this.ctrlRef.current.contentVisibility = this.props.contentVisibility;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.dataFields))
                this.ctrlRef.current.dataFields = this.props.dataFields;
            if (this._isDefined(this.props.dragDropMode))
                this.ctrlRef.current.dragDropMode = this.props.dragDropMode;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.focusedItem))
                this.ctrlRef.current.focusedItem = this.props.focusedItem;
            if (this._isDefined(this.props.items))
                this.ctrlRef.current.items = this.props.items;
            if (this._isDefined(this.props.itemSpacing))
                this.ctrlRef.current.itemSpacing = this.props.itemSpacing;
            if (this._isDefined(this.props.itemSize))
                this.ctrlRef.current.itemSize = this.props.itemSize;
            if (this._isDefined(this.props.itemTemplate))
                this.ctrlRef.current.itemTemplate = this.props.itemTemplate;
            if (this._isDefined(this.props.mouseWheelSpeed))
                this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
            if (this._isDefined(this.props.resourcePath))
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this._isDefined(this.props.scrollAppearance))
                this.ctrlRef.current.scrollAppearance = this.props.scrollAppearance;
            if (this._isDefined(this.props.scrollMode))
                this.ctrlRef.current.scrollMode = this.props.scrollMode;
            if (this._isDefined(this.props.selectedItem))
                this.ctrlRef.current.selectedItem = this.props.selectedItem;
            if (this._isDefined(this.props.selectionMode))
                this.ctrlRef.current.selectionMode = this.props.selectionMode;
            if (this._isDefined(this.props.showScroll))
                this.ctrlRef.current.showScroll = this.props.showScroll;
            if (this._isDefined(this.props.size))
                this.ctrlRef.current.size = this.props.size;
            if (this._isDefined(this.props.sorting))
                this.ctrlRef.current.sorting = this.props.sorting;
            if (this._isDefined(this.props.state))
                this.ctrlRef.current.state = this.props.state;
            if (this._isDefined(this.props.theme))
                this.ctrlRef.current.theme = this.props.theme;
        }
    }
    
    _isDefined(value){
        return value !== undefined ? true : false;
    }

    _updateData(prevProps){
        if (this._isCtrlDefined()){
            if (this.props.allowAnimation !== prevProps.allowAnimation)
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this.props.allowUpdate !== prevProps.allowUpdate)
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this.props.allowDrag !== prevProps.allowDrag)
                this.ctrlRef.current.allowDrag = this.props.allowDrag;
            if (this.props.allowDrop !== prevProps.allowDrop)
                this.ctrlRef.current.allowDrop = this.props.allowDrop;
            if (this.props.allowFilter !== prevProps.allowFilter)
                this.ctrlRef.current.allowFilter = this.props.allowFilter;
            if (this.props.allowFocus !== prevProps.allowFocus)
                this.ctrlRef.current.allowFocus = this.props.allowFocus;
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this.props.dataFields !== prevProps.dataFields)
                this.ctrlRef.current.dataFields = this.props.dataFields;
            if (this.props.focusedItem !== prevProps.focusedItem)
                this.ctrlRef.current.focusedItem = this.props.focusedItem;
            if (this.props.contentVisibility !== prevProps.contentVisibility)
                this.ctrlRef.current.contentVisibility = this.props.contentVisibility;
            if (this.props.controlStyle !== prevProps.controlStyle)
                this.ctrlRef.current.controlStyle = this.props.controlStyle;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.dragDropMode !== prevProps.dragDropMode)
                this.ctrlRef.current.dragDropMode = this.props.dragDropMode;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.items))
                this.ctrlRef.current.items = this.props.items;
            if (this.props.itemSpacing !== prevProps.itemSpacing)
                this.ctrlRef.current.itemSpacing = this.props.itemSpacing;
            if (this.props.itemSize !== prevProps.itemSize)
                this.ctrlRef.current.itemSize = this.props.itemSize;
            if (this._isDefined(this.props.itemTemplate))
                this.ctrlRef.current.itemTemplate = this.props.itemTemplate;
            if (this.props.mouseWheelSpeed !== prevProps.mouseWheelSpeed)
                this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this.props.scrollAppearance !== prevProps.scrollAppearance)
                this.ctrlRef.current.scrollAppearance = this.props.scrollAppearance;
            if (this.props.scrollMode !== prevProps.scrollMode)
                this.ctrlRef.current.scrollMode = this.props.scrollMode;
            if (this.props.selectedItem !== prevProps.selectedItem)
                this.ctrlRef.current.selectedItem = this.props.selectedItem;
            if (this.props.selectionMode !== prevProps.selectionMode)
                this.ctrlRef.current.selectionMode = this.props.selectionMode;
            if (this.props.showScroll !== prevProps.showScroll)
                this.ctrlRef.current.showScroll = this.props.showScroll;
            if (this.props.size !== prevProps.size)
                this.ctrlRef.current.size = this.props.size;
            if (this.props.sorting !== prevProps.sorting)
                this.ctrlRef.current.sorting = this.props.sorting;
            if (this.props.state !== prevProps.state)
                this.ctrlRef.current.state = this.props.state;
            if (this.props.theme !== prevProps.theme)
                this.ctrlRef.current.theme = this.props.theme;
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //
 
    // Add Remove --------------------------------------------------------------------------------
   
	addItem(item){
        if (this._isCtrlDefined())
            this.ctrlRef.current.addItem(item);
	}

	clearItems(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.clearItems();
	}

	insertItemAt(item, index){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertItemAt(item, index);
	}

	insertItemBefore(item, refItem){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertItemBefore(item, refItem);
	}

	insertItemAfter(item, refItem){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertItemAfter(item, refItem);
	}

	removeItem(item){
		return this._isCtrlDefined() ? this.ctrlRef.current.removeItem(item) : false;
	}

	removeItemAt(index){
		return this._isCtrlDefined() ? this.ctrlRef.current.removeItemAt(index) : false;
	}
   
    // Data --------------------------------------------------------------------------------------
    
    loadData(data, fields){
        if (this._isCtrlDefined())
            this.ctrlRef.current.loadData(data, fields);
    }

    // Export ------------------------------------------------------------------------------------
        
    exportToJSON(data, fields, spacing){
        return this._isCtrlDefined() ? this.ctrlRef.current.exportToJSON(data, fields, spacing) : null;
    }

	// Filter  ---------------------------------------------------------------------
	
	filter(params){
        if (this._isCtrlDefined())
            this.ctrlRef.current.filter(params);
	}

	// General ---------------------------------------------------------------------------

    cloneItem(item){
        if (this._isCtrlDefined())
            this.ctrlRef.current.cloneItem(item);
	}
		
	getList(key){
        return this._isCtrlDefined() ? this.ctrlRef.current.getList(key) : null;
	}
		
	getFullList(){
        return this._isCtrlDefined() ? this.ctrlRef.current.getFullList() : null;
	}

	getTopItem(){
        return this._isCtrlDefined() ? this.ctrlRef.current.getTopItem() : null;
	}
			
	// Move operations -------------------------------------------------------------------

	getPrevItem(item){
        return this._isCtrlDefined() ? this.ctrlRef.current.getPrevItem(item) : null;
	}
		
	getNextItem(item){
        return this._isCtrlDefined() ? this.ctrlRef.current.getNextItem(item) : null;
	}

	moveItem(item, direction, targetItem, position){
        if (this._isCtrlDefined())
            this.ctrlRef.current.moveItem(item, direction, targetItem, position);
	}

	// Keyboard Navigation ---------------------------------------------------------------

	moveFocusFromItem(item, direction) {
        if (this._isCtrlDefined())
            this.ctrlRef.current.moveFocusFromItem(item, direction);
	}
 
    // Scrolling ---------------------------------------------------------------------------------

	isVerScrollVisible(){
        return this._isCtrlDefined() ? this.ctrlRef.current.isVerScrollVisible() : false;
    }

	isHorScrollVisible(){
        return this._isCtrlDefined() ? this.ctrlRef.current.isHorScrollVisible() : false;
    }

    isScrolling(){
        return this._isCtrlDefined() ? this.ctrlRef.current.isScrolling() : false;
    }

	scrollPos(value){
        return this._isCtrlDefined() ? this.ctrlRef.current.scrollPos(value) : { x: 0, y: 0 };
    }

	scrollTo(item){
        if (this._isCtrlDefined())
            this.ctrlRef.current.scrollTo(item);
    }

	// Search ----------------------------------------------------------------------------
		
    findItemById(id){
        return this._isCtrlDefined() ? this.ctrlRef.current.findItemById(id) : null;
    }
		
    findItemByText(text){
        return this._isCtrlDefined() ? this.ctrlRef.current.findItemByText(text) : null;
    }
 
    // Selection ---------------------------------------------------------------------------------

	clearSelection(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.clearSelection();
    }

	selectItems(items){
        if (this._isCtrlDefined())
            this.ctrlRef.current.selectItems(items);
    }
 
    // Sorting -----------------------------------------------------------------------------------

	sort(order, comparer){
        if (this._isCtrlDefined())
            this.ctrlRef.current.sort(order, comparer);
    }
 
    // Style -------------------------------------------------------------------------------------

    setClass(value){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.setClass(value);
    }

	setStyle(value){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.setStyle(value);
    }

    // Update ------------------------------------------------------------------------------------

    getItemTemplate(item){
        return this._isCtrlDefined() ? this.ctrlRef.current.getItemTemplate(item) : null;
    }

	refresh(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.refresh();
    }

    resumeLayout(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.resumeLayout();
    }

    suspendLayout(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.suspendLayout();
    }

	updateLayout(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.updateLayout();
    }

	updateView(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.updateView();
    }

    render(){
        return (
            <iui-listview id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-listview>
        );
    }
}


export default IntegralUIListViewComponent;
