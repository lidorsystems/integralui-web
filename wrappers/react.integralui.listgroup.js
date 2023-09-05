/*
  filename: react.integralui.listgroup.js
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

import '../components/integralui.listgroup.js';

class IntegralUIListGroupComponent extends Component {
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
            if (this.props.beforeCollapse)
                this.ctrlRef.current.addEventListener('beforeCollapse', (e) => this.props.beforeCollapse(e));
            if (this.props.beforeExpand)
                this.ctrlRef.current.addEventListener('beforeExpand', (e) => this.props.beforeExpand(e));
            if (this.props.enabledChanged)
                this.ctrlRef.current.addEventListener('enabledChanged', (e) => this.props.enabledChanged(e));
            if (this.props.selectedChanged)
                this.ctrlRef.current.addEventListener('selectedChanged', (e) => this.props.selectedChanged(e));
            if (this.props.sizeChanged)
                this.ctrlRef.current.addEventListener('sizeChanged', (e) => this.props.sizeChanged(e));
            if (this.props.stateChanged)
                this.ctrlRef.current.addEventListener('stateChanged', (e) => this.props.stateChanged(e));
        }
    }

    componentWillUnmount(){
        if (this._isCtrlDefined()){
            if (this.props.afterSelect)
                this.ctrlRef.current.removeEventListener('afterSelect', this.props.afterSelect);
            if (this.props.beforeSelect)
                this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
            if (this.props.beforeCollapse)
                this.ctrlRef.current.removeEventListener('beforeCollapse', this.props.beforeCollapse);
            if (this.props.beforeExpand)
                this.ctrlRef.current.removeEventListener('beforeExpand', this.props.beforeExpand);
            if (this.props.enabledChanged)
                this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
            if (this.props.selectedChanged)
                this.ctrlRef.current.removeEventListener('selectedChanged', this.props.selectedChanged);
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
            if (this._isDefined(this.props.allowUpdate))
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.expandBoxType))
                this.ctrlRef.current.expandBoxType = this.props.expandBoxType;
            if (this._isDefined(this.props.expanded))
                this.ctrlRef.current.expanded = this.props.expanded;
            if (this._isDefined(this.props.icon))
                this.ctrlRef.current.icon = this.props.icon;
            if (this._isDefined(this.props.items))
                this.ctrlRef.current.items = this.props.items;
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
            if (this._isDefined(this.props.resourcePath))
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this._isDefined(this.props.selected))
                this.ctrlRef.current.selected = this.props.selected;
            if (this._isDefined(this.props.size))
                this.ctrlRef.current.size = this.props.size;
            if (this._isDefined(this.props.state))
                this.ctrlRef.current.state = this.props.state;
            if (this._isDefined(this.props.text))
                this.ctrlRef.current.text = this.props.text;
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
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this.props.expandBoxType !== prevProps.expandBoxType)
                this.ctrlRef.current.expandBoxType = this.props.expandBoxType;
            if (this.props.expanded !== prevProps.expanded)
                this.ctrlRef.current.expanded = this.props.expanded;
            if (this.props.icon !== prevProps.icon)
                this.ctrlRef.current.icon = this.props.icon;
            if (this._isDefined(this.props.items))
                this.ctrlRef.current.items = this.props.items;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this.props.selected !== prevProps.selected)
                this.ctrlRef.current.selected = this.props.selected;
            if (this.props.size !== prevProps.size)
                this.ctrlRef.current.size = this.props.size;
            if (this.props.state !== prevProps.state)
                this.ctrlRef.current.state = this.props.state;
            if (this.props.text !== prevProps.text)
                this.ctrlRef.current.text = this.props.text;
            if (this.props.theme !== prevProps.theme)
                this.ctrlRef.current.theme = this.props.theme;
        }
    }
 
    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Expand Collapse ---------------------------------------------------------------------------

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

    render(){
        return (
            <iui-listgroup id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-listgroup>
        );
    }
}


export default IntegralUIListGroupComponent;
