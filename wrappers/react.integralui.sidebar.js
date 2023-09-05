/*
  filename: react.integralui.sidebar.js
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

import '../components/integralui.sidebar.js';

class IntegralUISideBarComponent extends Component {
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
            if (this.props.afterCollapse)
                this.ctrlRef.current.addEventListener('afterCollapse', (e) => this.props.afterCollapse(e));
            if (this.props.afterExpand)
                this.ctrlRef.current.addEventListener('afterExpand', (e) => this.props.afterExpand(e));
            if (this.props.afterSelect)
                this.ctrlRef.current.addEventListener('afterSelect', (e) => this.props.afterSelect(e));
            if (this.props.beforeCollapse)
                this.ctrlRef.current.addEventListener('beforeCollapse', (e) => this.props.beforeCollapse(e));
            if (this.props.beforeExpand)
                this.ctrlRef.current.addEventListener('beforeExpand', (e) => this.props.beforeExpand(e));
            if (this.props.beforeSelect)
                this.ctrlRef.current.addEventListener('beforeSelect', (e) => this.props.beforeSelect(e));
            if (this.props.change)
                this.ctrlRef.current.addEventListener('change', (e) => this.props.change(e));
            if (this.props.clear)
                this.ctrlRef.current.addEventListener('clear', () => this.props.clear());
            if (this.props.enabledChanged)
                this.ctrlRef.current.addEventListener('enabledChanged', (e) => this.props.enabledChanged(e));
            if (this.props.selectionChanged)
                this.ctrlRef.current.addEventListener('selectionChanged', (e) => this.props.selectionChanged(e));
            if (this.props.sizeChanged)
                this.ctrlRef.current.addEventListener('sizeChanged', (e) => this.props.sizeChanged(e));
            if (this.props.stateChanged)
                this.ctrlRef.current.addEventListener('stateChanged', (e) => this.props.stateChanged(e));
        }
    }
     
    _isDefined(value){
        return value !== undefined ? true : false;
    }

    componentWillUnmount(){
        if (this._isCtrlDefined()){
            if (this.props.afterCollapse)
                this.ctrlRef.current.removeEventListener('afterCollapse', this.props.afterCollapse);
            if (this.props.afterExpand)
                this.ctrlRef.current.removeEventListener('afterExpand', this.props.afterExpand);
            if (this.props.afterSelect)
                this.ctrlRef.current.removeEventListener('afterSelect', this.props.afterSelect);
            if (this.props.beforeCollapse)
                this.ctrlRef.current.removeEventListener('beforeCollapse', this.props.beforeCollapse);
            if (this.props.beforeExpand)
                this.ctrlRef.current.removeEventListener('beforeExpand', this.props.beforeExpand);
            if (this.props.beforeSelect)
                this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
            if (this.props.change)
                this.ctrlRef.current.removeEventListener('change', this.props.change);
            if (this.props.clear)
                this.ctrlRef.current.removeEventListener('clear', this.props.clear);
            if (this.props.enabledChanged)
                this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
            if (this.props.selectionChanged)
                this.ctrlRef.current.removeEventListener('selectionChanged', this.props.selectionChanged);
            if (this.props.sizeChanged)
                this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
            if (this.props.stateChanged)
                this.ctrlRef.current.removeEventListener('stateChanged', this.props.stateChanged);
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
            if (this._isDefined(this.props.allowResize))
                this.ctrlRef.current.allowResize = this.props.allowResize;
            if (this._isDefined(this.props.allowUpdate))
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this._isDefined(this.props.animation))
                this.ctrlRef.current.animation = this.props.animation;
            if (this._isDefined(this.props.animationSpeed))
                this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
            if (this._isDefined(this.props.autoHide))
                this.ctrlRef.current.autoHide = this.props.autoHide;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.expanded))
                this.ctrlRef.current.expanded = this.props.expanded;
            if (this._isDefined(this.props.inbound))
                this.ctrlRef.current.inbound = this.props.inbound;
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
            if (this._isDefined(this.props.parentId))
                this.ctrlRef.current.parentId = this.props.parentId;
            if (this._isDefined(this.props.placement))
                this.ctrlRef.current.placement = this.props.placement;
            if (this._isDefined(this.props.resourcePath))
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this._isDefined(this.props.selectedIndex))
                this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
            if (this._isDefined(this.props.selectedTab))
                this.ctrlRef.current.selectedTab = this.props.selectedTab;
            if (this._isDefined(this.props.showHeader))
                this.ctrlRef.current.showHeader = this.props.showHeader;
            if (this._isDefined(this.props.size))
                this.ctrlRef.current.size = this.props.size;
            if (this._isDefined(this.props.state))
                this.ctrlRef.current.state = this.props.state;
            if (this._isDefined(this.props.tabAlignment))
                this.ctrlRef.current.tabAlignment = this.props.tabAlignment;
            if (this._isDefined(this.props.tabs))
                this.ctrlRef.current.tabs = this.props.tabs;
            if (this._isDefined(this.props.tabTemplate))
                this.ctrlRef.current.tabTemplate = this.props.tabTemplate;
            if (this._isDefined(this.props.theme))
                this.ctrlRef.current.theme = this.props.theme;
        }
    }

    _updateData(prevProps){
        if (this._isCtrlDefined()){
            if (this.props.allowAnimation !== prevProps.allowAnimation)
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this.props.allowResize !== prevProps.allowResize)
                this.ctrlRef.current.allowResize = this.props.allowResize;
            if (this.props.allowUpdate !== prevProps.allowUpdate)
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this.props.animation !== prevProps.animation)
                this.ctrlRef.current.animation = this.props.animation;
            if (this.props.animationSpeed !== prevProps.animationSpeed)
                this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
            if (this.props.autoHide !== prevProps.autoHide)
                this.ctrlRef.current.autoHide = this.props.autoHide;
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this.props.expanded !== prevProps.expanded)
                this.ctrlRef.current.expanded = this.props.expanded;
            if (this.props.inbound !== prevProps.inbound)
                this.ctrlRef.current.inbound = this.props.inbound;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.parentId !== prevProps.parentId)
                this.ctrlRef.current.parentId = this.props.parentId;
            if (this.props.placement !== prevProps.placement)
                this.ctrlRef.current.placement = this.props.placement;
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this.props.selectedIndex !== prevProps.selectedIndex)
                this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
            if (this.props.selectedTab !== prevProps.selectedTab)
                this.ctrlRef.current.selectedTab = this.props.selectedTab;
            if (this.props.showHeader !== prevProps.showHeader)
                this.ctrlRef.current.showHeader = this.props.showHeader;
            if (this.props.size !== prevProps.size)
                this.ctrlRef.current.size = this.props.size;
            if (this.props.state !== prevProps.state)
                this.ctrlRef.current.state = this.props.state;
            if (this.props.tabAlignment !== prevProps.tabAlignment)
                this.ctrlRef.current.tabAlignment = this.props.tabAlignment;
            if (this._isDefined(this.props.tabs))
                this.ctrlRef.current.tabs = this.props.tabs;
            if (this._isDefined(this.props.tabTemplate))
                this.ctrlRef.current.tabTemplate = this.props.tabTemplate;
            if (this.props.theme !== prevProps.theme)
                this.ctrlRef.current.theme = this.props.theme;
        }
    }
 
    //
    // Methods -----------------------------------------------------------------------------------
    //
 
    // Expand/Collapse ---------------------------------------------------------------------------

	collapse(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.collapse();
    }

	expand(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.expand();
    }

	toggle(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.toggle();
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
            <iui-sidebar id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-sidebar>
        );
    }
}


export default IntegralUISideBarComponent;
