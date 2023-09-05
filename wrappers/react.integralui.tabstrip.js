/*
  filename: react.integralui.tabstrip.js
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

import '../components/integralui.tabstrip.js';

class IntegralUITabStripComponent extends Component {
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
            if (this.props.tabAdded)
                this.ctrlRef.current.addEventListener('tabAdded', (e) => this.props.tabAdded(e));
            if (this.props.tabAdding)
                this.ctrlRef.current.addEventListener('tabAdding', (e) => this.props.tabAdding(e));
            if (this.props.tabOrderChanged)
                this.ctrlRef.current.addEventListener('tabOrderChanged', (e) => this.props.tabOrderChanged(e));
            if (this.props.tabRemoved)
                this.ctrlRef.current.addEventListener('tabRemoved', (e) => this.props.tabRemoved(e));
            if (this.props.tabRemoving)
                this.ctrlRef.current.addEventListener('tabRemoving', (e) => this.props.tabRemoving(e));
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
     
    _isDefined(value){
        return value !== undefined ? true : false;
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
            if (this.props.tabAdded)
                this.ctrlRef.current.removeEventListener('tabAdded', this.props.tabAdded);
            if (this.props.tabAdding)
                this.ctrlRef.current.removeEventListener('tabAdding', this.props.tabAdding);
            if (this.props.tabOrderChanged)
                this.ctrlRef.current.removeEventListener('tabOrderChanged', this.props.tabOrderChanged);
            if (this.props.tabRemoved)
                this.ctrlRef.current.removeEventListener('tabRemoved', this.props.tabRemoved);
            if (this.props.tabRemoving)
                this.ctrlRef.current.removeEventListener('tabRemoving', this.props.tabRemoving);
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
            if (this._isDefined(this.props.resourcePath))
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this._isDefined(this.props.allowAnimation))
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this._isDefined(this.props.allowUpdate))
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this._isDefined(this.props.allowDrag))
                this.ctrlRef.current.allowDrag = this.props.allowDrag;
            if (this._isDefined(this.props.allowDrop))
                this.ctrlRef.current.allowDrop = this.props.allowDrop;
            if (this._isDefined(this.props.animationSpeed))
                this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
            if (this._isDefined(this.props.autoSize))
                this.ctrlRef.current.autoSize = this.props.autoSize;
            if (this._isDefined(this.props.contentAnimation))
                this.ctrlRef.current.contentAnimation = this.props.contentAnimation;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.displayMode))
                this.ctrlRef.current.displayMode = this.props.displayMode;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
            if (this._isDefined(this.props.navigation))
                this.ctrlRef.current.navigation = this.props.navigation;
            if (this._isDefined(this.props.scrollMode))
                this.ctrlRef.current.scrollMode = this.props.scrollMode;
            if (this._isDefined(this.props.selectedIndex))
                this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
            if (this._isDefined(this.props.selectedTab))
                this.ctrlRef.current.selectedTab = this.props.selectedTab;
            if (this._isDefined(this.props.showTabLine))
                this.ctrlRef.current.showTabLine = this.props.showTabLine;
            if (this._isDefined(this.props.size))
                this.ctrlRef.current.size = this.props.size;
            if (this._isDefined(this.props.state))
                this.ctrlRef.current.state = this.props.state;
            if (this._isDefined(this.props.tabs))
                this.ctrlRef.current.tabs = this.props.tabs;
            if (this._isDefined(this.props.tabAlignment))
                this.ctrlRef.current.tabAlignment = this.props.tabAlignment;
           if (this._isDefined(this.props.tabOrientation))
                this.ctrlRef.current.tabOrientation = this.props.tabOrientation;
            if (this._isDefined(this.props.tabSpacing))
                this.ctrlRef.current.tabSpacing = this.props.tabSpacing;
            if (this._isDefined(this.props.tabStripPlacement))
                this.ctrlRef.current.tabStripPlacement = this.props.tabStripPlacement;
            if (this._isDefined(this.props.tabTemplate))
                this.ctrlRef.current.tabTemplate = this.props.tabTemplate;
            if (this._isDefined(this.props.theme))
                this.ctrlRef.current.theme = this.props.theme;
        }
    }

    _updateData(prevProps){
        if (this._isCtrlDefined()){
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this.props.allowAnimation !== prevProps.allowAnimation)
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this.props.allowUpdate !== prevProps.allowUpdate)
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this.props.allowDrag !== prevProps.allowDrag)
                this.ctrlRef.current.allowDrag = this.props.allowDrag;
            if (this.props.allowDrop !== prevProps.allowDrop)
                this.ctrlRef.current.allowDrop = this.props.allowDrop;
            if (this.props.animationSpeed !== prevProps.animationSpeed)
                this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
            if (this.props.autoSize !== prevProps.autoSize)
                this.ctrlRef.current.autoSize = this.props.autoSize;
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this.props.contentAnimation !== prevProps.contentAnimation)
                this.ctrlRef.current.contentAnimation = this.props.contentAnimation;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.displayMode !== prevProps.displayMode)
                this.ctrlRef.current.displayMode = this.props.displayMode;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.navigation !== prevProps.navigation)
                this.ctrlRef.current.navigation = this.props.navigation;
            if (this.props.scrollMode !== prevProps.scrollMode)
                this.ctrlRef.current.scrollMode = this.props.scrollMode;
            if (this.props.selectedIndex !== prevProps.selectedIndex)
                this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
            if (this.props.selectedTab !== prevProps.selectedTab)
                this.ctrlRef.current.selectedTab = this.props.selectedTab;
            if (this.props.showTabLine !== prevProps.showTabLine)
                this.ctrlRef.current.showTabLine = this.props.showTabLine;
            if (this.props.size !== prevProps.size)
                this.ctrlRef.current.size = this.props.size;
            if (this.props.state !== prevProps.state)
                this.ctrlRef.current.state = this.props.state;
            if (this._isDefined(this.props.tabs))
                this.ctrlRef.current.tabs = this.props.tabs;
            if (this.props.tabAlignment !== prevProps.tabAlignment)
                this.ctrlRef.current.tabAlignment = this.props.tabAlignment;
            if (this.props.tabOrientation !== prevProps.tabOrientation)
                this.ctrlRef.current.tabOrientation = this.props.tabOrientation;
            if (this.props.tabSpacing !== prevProps.tabSpacing)
                this.ctrlRef.current.tabSpacing = this.props.tabSpacing;
            if (this.props.tabStripPlacement !== prevProps.tabStripPlacement)
                this.ctrlRef.current.tabStripPlacement = this.props.tabStripPlacement;
            if (this._isDefined(this.props.tabTemplate))
                this.ctrlRef.current.tabTemplate = this.props.tabTemplate;
            if (this.props.theme !== prevProps.theme)
                this.ctrlRef.current.theme = this.props.theme;
        }
    }
 
    //
    // Methods -----------------------------------------------------------------------------------
    //
 
    // Add Remove --------------------------------------------------------------------------------
    
	addTab(tab){
        if (this._isCtrlDefined())
            this.ctrlRef.current.addTab(tab);
	}

	clearTabs(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.clearTabs();
	}

	insertTabAt(tab, index){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertTabAt(tab, index);
	}

	insertTabBefore(tab, refTab){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertTabBefore(tab, refTab);
	}

	insertTabAfter(tab, refTab){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertTabAfter(tab, refTab);
	}

	removeTab(tab){
		return this._isCtrlDefined() ? this.ctrlRef.current.removeTab(tab) : false;
	}

	removeTabAt(index){
		return this._isCtrlDefined() ? this.ctrlRef.current.removeTabAt(index) : false;
	}
 
    // Scrolling ---------------------------------------------------------------------------------

	scrollPos(value){
        if (this._isCtrlDefined())
            this.ctrlRef.current.scrollPos(value);
    }

	scrollTo(tab){
        if (this._isCtrlDefined())
            this.ctrlRef.current.scrollTo(tab);
    }
 
    // Selection ---------------------------------------------------------------------------------

	selectTab(tab){
        if (this._isCtrlDefined())
            this.ctrlRef.current.selectTab(tab);
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

	updateLayout(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.updateLayout();
    }

    render() {
        return (
            <iui-tabstrip id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-tabstrip>
        );
    }
}


export default IntegralUITabStripComponent;
