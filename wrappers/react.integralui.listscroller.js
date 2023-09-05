/*
  filename: react.integralui.listscroller.js
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

import '../components/integralui.listscroller.js';

class IntegralUIListScrollerComponent extends Component {
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
            if (this.props.afterSelect)
                this.ctrlRef.current.addEventListener('afterSelect', (e) => this.props.afterSelect(e));
            if (this.props.beforeSelect)
                this.ctrlRef.current.addEventListener('beforeSelect', (e) => this.props.beforeSelect(e));
            if (this.props.change)
                this.ctrlRef.current.addEventListener('change', (e) => this.props.change(e));
            if (this.props.clear)
                this.ctrlRef.current.addEventListener('clear', () => this.props.clear());
            if (this.props.enabledChanged)
                this.ctrlRef.current.addEventListener('enabledChanged', (e) => this.props.enabledChanged(e));
            if (this.props.itemAdded)
                this.ctrlRef.current.addEventListener('itemAdded', (e) => this.props.itemAdded(e));
            if (this.props.itemAdding)
                this.ctrlRef.current.addEventListener('itemAdding', (e) => this.props.itemAdding(e));
            if (this.props.itemRemoved)
                this.ctrlRef.current.addEventListener('itemRemoved', (e) => this.props.itemRemoved(e));
            if (this.props.itemRemoving)
                this.ctrlRef.current.addEventListener('itemRemoving', (e) => this.props.itemRemoving(e));
            if (this.props.scrollPosChanged)
                this.ctrlRef.current.addEventListener('scrollPosChanged', (e) => this.props.scrollPosChanged(e));
            if (this.props.selectionChanged)
                this.ctrlRef.current.addEventListener('selectionChanged', (e) => this.props.selectionChanged(e));
            if (this.props.sizeChanged)
                this.ctrlRef.current.addEventListener('sizeChanged', (e) => this.props.sizeChanged(e));
            if (this.props.stateChanged)
                this.ctrlRef.current.addEventListener('stateChanged', (e) => this.props.stateChanged(e));
            if (this.props.updateComplete)
                this.ctrlRef.current.addEventListener('updateComplete', () => this.props.updateComplete());
        }
    }

    componentWillUnmount(){
        if (this._isCtrlDefined()){
            if (this.props.afterSelect)
                this.ctrlRef.current.removeEventListener('afterSelect', this.props.afterSelect);
            if (this.props.beforeSelect)
                this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
            if (this.props.change)
                this.ctrlRef.current.removeEventListener('change', this.props.change);
            if (this.props.clear)
                this.ctrlRef.current.removeEventListener('clear', this.props.clear);
            if (this.props.enabledChanged)
                this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
            if (this.props.itemAdded)
                this.ctrlRef.current.removeEventListener('itemAdded', this.props.itemAdded);
            if (this.props.itemAdding)
                this.ctrlRef.current.removeEventListener('itemAdding', this.props.itemAdding);
            if (this.props.itemRemoved)
                this.ctrlRef.current.removeEventListener('itemRemoved', this.props.itemRemoved);
            if (this.props.itemRemoving)
                this.ctrlRef.current.removeEventListener('itemRemoving', this.props.itemRemoving);
            if (this.props.scrollPosChanged)
                this.ctrlRef.current.removeEventListener('scrollPosChanged', this.props.scrollPosChanged);
            if (this.props.selectionChanged)
                this.ctrlRef.current.removeEventListener('selectionChanged', this.props.selectionChanged);
            if (this.props.sizeChanged)
                this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
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
            if (this._isDefined(this.props.allowFocus))
                this.ctrlRef.current.allowFocus = this.props.allowFocus;
            if (this._isDefined(this.props.dataFields))
                this.ctrlRef.current.dataFields = this.props.dataFields;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.items))
                this.ctrlRef.current.items = this.props.items;
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
            if (this._isDefined(this.props.selectedItem))
                this.ctrlRef.current.selectedItem = this.props.selectedItem;
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
            if (this.props.allowFocus !== prevProps.allowFocus)
                this.ctrlRef.current.allowFocus = this.props.allowFocus;
            if (this.props.dataFields !== prevProps.dataFields)
                this.ctrlRef.current.dataFields = this.props.dataFields;
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.items))
                this.ctrlRef.current.items = this.props.items;
            if (this._isDefined(this.props.itemSize))
                this.ctrlRef.current.itemSize = this.props.itemSize;
            if (this._isDefined(this.props.itemTemplate))
                this.ctrlRef.current.itemTemplate = this.props.itemTemplate;
            if (this.props.mouseWheelSpeed !== prevProps.mouseWheelSpeed)
                this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this.props.selectedItem !== prevProps.selectedItem)
                this.ctrlRef.current.selectedItem = this.props.selectedItem;
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
 
    // Scrolling ---------------------------------------------------------------------------------

	scrollPos(value){
        return this._isCtrlDefined() ? this.ctrlRef.current.scrollPos(value) : { x: 0, y: 0 };
    }

	// Search ----------------------------------------------------------------------------
		
    findItemById(id){
        return this._isCtrlDefined() ? this.ctrlRef.current.findItemById(id) : null;
    }
		
    findItemByText(text){
        return this._isCtrlDefined() ? this.ctrlRef.current.findItemByText(text) : null;
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
            <iui-listscroller id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-listscroller>
        );
    }
}


export default IntegralUIListScrollerComponent;
