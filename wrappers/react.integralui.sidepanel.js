/*
  filename: react.integralui.sidepanel.js
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

import '../components/integralui.sidepanel.js';

class IntegralUISidePanelComponent extends Component {
    constructor(props){
        super(props);

        this.ctrlRef = React.createRef();
    }
 
    //
    // Events ------------------------------------------------------------------------------------
    //

    componentDidMount(){
        this._initProps();

        if (this.ctrlRef && this.ctrlRef.current){
            // Component Events
            if (this.props.enabledChanged)
                this.ctrlRef.current.addEventListener('enabledChanged', (e) => this.props.enabledChanged(e));
            if (this.props.sizeChanged)
                this.ctrlRef.current.addEventListener('sizeChanged', (e) => this.props.sizeChanged(e));
            if (this.props.stateChanged)
                this.ctrlRef.current.addEventListener('stateChanged', (e) => this.props.stateChanged(e));
            if (this.props.visibleChanged)
                this.ctrlRef.current.addEventListener('visibleChanged', (e) => this.props.visibleChanged(e));
        }
    }

    componentWillUnmount(){
        if (this.ctrlRef && this.ctrlRef.current){
            // Component Events
            if (this.props.enabledChanged)
                this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
            if (this.props.sizeChanged)
                this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
            if (this.props.stateChanged)
                this.ctrlRef.current.removeEventListener('stateChanged', this.props.stateChanged);
            if (this.props.visibleChanged)
                this.ctrlRef.current.removeEventListener('visibleChanged', this.props.visibleChanged);
        }
    }
 
    //
    // Properties --------------------------------------------------------------------------------
    //

    componentDidUpdate(prevProps){
        this._updateData(prevProps);
    }

    _initProps(){
        if (this.ctrlRef && this.ctrlRef.current){
            if (this._isDefined(this.props.allowAnimation))
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this._isDefined(this.props.allowUpdate))
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this._isDefined(this.props.animationSpeed))
                this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
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
            if (this._isDefined(this.props.showOverlay))
                this.ctrlRef.current.showOverlay = this.props.showOverlay;
            if (this._isDefined(this.props.size))
                this.ctrlRef.current.size = this.props.size;
            if (this._isDefined(this.props.state))
                this.ctrlRef.current.state = this.props.state;
            if (this._isDefined(this.props.theme))
                this.ctrlRef.current.theme = this.props.theme;
            if (this._isDefined(this.props.visible))
                this.ctrlRef.current.visible = this.props.visible;
        }
    }
    
    _isDefined(value){
        return value !== undefined ? true : false;
    }

    _updateData(prevProps){
        if (this.ctrlRef && this.ctrlRef.current){
            if (this.props.allowAnimation !== prevProps.allowAnimation)
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this.props.allowUpdate !== prevProps.allowUpdate)
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this.props.animationSpeed !== prevProps.animationSpeed)
                this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
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
            if (this.props.showOverlay !== prevProps.showOverlay)
                this.ctrlRef.current.showOverlay = this.props.showOverlay;
            if (this.props.size !== prevProps.size)
                this.ctrlRef.current.size = this.props.size;
            if (this.props.state !== prevProps.state)
                this.ctrlRef.current.state = this.props.state;
            if (this.props.theme !== prevProps.theme)
                this.ctrlRef.current.theme = this.props.theme;
            if (this.props.visible !== prevProps.visible)
                this.ctrlRef.current.visible = this.props.visible;
        }
    }
 
    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Open/Close --------------------------------------------------------------------------------

	close(){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.close();
    }

	open(){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.open();
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
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.refresh();
    }

	updateLayout(){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.updateLayout();
    }

    render(){
        return (
            <iui-sidepanel id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-sidepanel>
        );
    }
}


export default IntegralUISidePanelComponent;
