/*
  filename: react.integralui.tab.js
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

import '../components/integralui.tab.js';

class IntegralUITabComponent extends Component {
    constructor(props){
        super(props);

        this.ctrlRef = React.createRef();
    }
   
    _isCtrlDefined(){
        return this.ctrlRef && this.ctrlRef.current ? true : false;
    }

    //
    // Properties --------------------------------------------------------------------------------
    //

    componentDidMount(){
        this._initProps();
    }

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
            if (this._isDefined(this.props.contentAnimation))
                this.ctrlRef.current.contentAnimation = this.props.contentAnimation;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.icon))
                this.ctrlRef.current.icon = this.props.icon;
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
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
            if (this.props.allowDrag !== prevProps.allowDrag)
                this.ctrlRef.current.allowDrag = this.props.allowDrag;
            if (this.props.allowDrop !== prevProps.allowDrop)
                this.ctrlRef.current.allowDrop = this.props.allowDrop;
            if (this.props.contentAnimation !== prevProps.contentAnimation)
                this.ctrlRef.current.contentAnimation = this.props.contentAnimation;
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this.props.icon !== prevProps.icon)
                this.ctrlRef.current.icon = this.props.icon;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
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

    render() {
        return (
            <iui-tab id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-tab>
        );
    }
}


export default IntegralUITabComponent;
