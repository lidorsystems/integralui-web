/*
  filename: react.integralui.grid.js
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

import '../components/integralui.grid.js';

class IntegralUIGridComponent extends Component {
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
            if (this.props.beforeEdit)
                this.ctrlRef.current.addEventListener('beforeEdit', (e) => this.props.beforeEdit(e));
            if (this.props.beforeExpand)
                this.ctrlRef.current.addEventListener('beforeExpand', (e) => this.props.beforeExpand(e));
            if (this.props.beforeSelect)
                this.ctrlRef.current.addEventListener('beforeSelect', (e) => this.props.beforeSelect(e));
            if (this.props.cellClick)
                this.ctrlRef.current.addEventListener('cellClick', (e) => this.props.cellClick(e));
            if (this.props.cellDblClick)
                this.ctrlRef.current.addEventListener('cellDblClick', (e) => this.props.cellDblClick(e));
            if (this.props.cellHover)
                this.ctrlRef.current.addEventListener('cellHover', () => this.props.cellHover());
            if (this.props.cellTouched)
                this.ctrlRef.current.addEventListener('cellTouched', () => this.props.cellTouched());
            if (this.props.columnHover)
                this.ctrlRef.current.addEventListener('columnHover', (e) => this.props.columnHover(e));
            if (this.props.change)
                this.ctrlRef.current.addEventListener('change', (e) => this.props.change(e));
            if (this.props.columnAdding)
                this.ctrlRef.current.addEventListener('columnAdding', (e) => this.props.columnAdding(e));
            if (this.props.columnClick)
                this.ctrlRef.current.addEventListener('columnClick', (e) => this.props.columnClick(e));
            if (this.props.columnDblClick)
                this.ctrlRef.current.addEventListener('columnDblClick', (e) => this.props.columnDblClick(e));
            if (this.props.columnHover)
                this.ctrlRef.current.addEventListener('columnHover', (e) => this.props.columnHover(e));
            if (this.props.columnOrderChanged)
                this.ctrlRef.current.addEventListener('columnOrderChanged', (e) => this.props.columnOrderChanged(e));
            if (this.props.columnRemoved)
                this.ctrlRef.current.addEventListener('columnRemoved', (e) => this.props.columnRemoved(e));
            if (this.props.columnRemoving)
                this.ctrlRef.current.addEventListener('columnRemoving', (e) => this.props.columnRemoving(e));
            if (this.props.columnRightClick)
                this.ctrlRef.current.addEventListener('columnRightClick', (e) => this.props.columnRightClick(e));
            if (this.props.columnSizeChanged)
                this.ctrlRef.current.addEventListener('columnSizeChanged', (e) => this.props.columnSizeChanged(e));
            if (this.props.columnSortClick)
                this.ctrlRef.current.addEventListener('columnSortClick', (e) => this.props.columnSortClick(e));
            if (this.props.dataChanging)
                this.ctrlRef.current.addEventListener('dataChanging', (e) => this.props.dataChanging(e));
            if (this.props.dataChanged)
                this.ctrlRef.current.addEventListener('dataChanged', (e) => this.props.dataChanged(e));
            if (this.props.dataInvalid)
                this.ctrlRef.current.addEventListener('dataInvalid', (e) => this.props.dataInvalid(e));
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
            if (this.props.filterChanged)
                this.ctrlRef.current.addEventListener('filterChanged', (e) => this.props.filterChanged(e));
            if (this.props.gotFocus)
                this.ctrlRef.current.addEventListener('gotFocus', (e) => this.props.gotFocus(e));
            if (this.props.groupAdded)
                this.ctrlRef.current.removeEventListener('groupAdded', (e) => this.props.groupAdded(e));
            if (this.props.groupAdding)
                this.ctrlRef.current.removeEventListener('groupAdding', (e) => this.props.groupAdding(e));
            if (this.props.groupOrderChanged)
                this.ctrlRef.current.addEventListener('groupOrderChanged', (e) => this.props.groupOrderChanged(e));
            if (this.props.groupRemoved)
                this.ctrlRef.current.removeEventListener('groupRemoved', (e) => this.props.groupRemoved(e));
            if (this.props.groupRemoving)
                this.ctrlRef.current.removeEventListener('groupRemoving', (e) => this.props.groupRemoving(e));
            if (this.props.keyDown)
                this.ctrlRef.current.addEventListener('keyDown', (e) => this.props.keyDown(e));
            if (this.props.keyPress)
                this.ctrlRef.current.addEventListener('keyPress', (e) => this.props.keyPress(e));
            if (this.props.keyUp)
                this.ctrlRef.current.addEventListener('keyUp', (e) => this.props.keyUp(e));
            if (this.props.lostFocus)
                this.ctrlRef.current.addEventListener('lostFocus', (e) => this.props.lostFocus(e));
            if (this.props.loadComplete)
                this.ctrlRef.current.addEventListener('loadComplete', () => this.props.loadComplete());
            if (this.props.pageChanged)
                this.ctrlRef.current.addEventListener('pageChanged', (e) => this.props.pageChanged(e));
            if (this.props.rowAdded)
                this.ctrlRef.current.addEventListener('rowAdded', (e) => this.props.rowAdded(e));
            if (this.props.rowAdding)
                this.ctrlRef.current.addEventListener('rowAdding', (e) => this.props.rowAdding(e));
            if (this.props.rowClick)
                this.ctrlRef.current.addEventListener('rowClick', (e) => this.props.rowClick(e));
            if (this.props.rowDblClick)
                this.ctrlRef.current.addEventListener('rowDblClick', (e) => this.props.rowDblClick(e));
            if (this.props.rowHover)
                this.ctrlRef.current.addEventListener('rowHover', (e) => this.props.rowHover(e));
            if (this.props.rowRemoved)
                this.ctrlRef.current.addEventListener('rowRemoved', (e) => this.props.rowRemoved(e));
            if (this.props.rowRemoving)
                this.ctrlRef.current.addEventListener('rowRemoving', (e) => this.props.rowRemoving(e));
            if (this.props.rowRightClick)
                this.ctrlRef.current.addEventListener('rowRightClick', (e) => this.props.rowRightClick(e));
            if (this.props.rowsCleared)
                this.ctrlRef.current.addEventListener('rowsCleared', (e) => this.props.rowsCleared(e));
            if (this.props.scrollPosChanged)
                this.ctrlRef.current.addEventListener('scrollPosChanged', (e) => this.props.scrollPosChanged(e));
            if (this.props.selectionChanged)
                this.ctrlRef.current.addEventListener('selectionChanged', (e) => this.props.selectionChanged(e));
            if (this.props.sizeChanged)
                this.ctrlRef.current.addEventListener('sizeChanged', (e) => this.props.sizeChanged(e));
            if (this.props.stateChanged)
                this.ctrlRef.current.addEventListener('stateChanged', (e) => this.props.stateChanged(e));
            if (this.props.updateComplete)
                this.ctrlRef.current.addEventListener('updateComplete', (e) => this.props.updateComplete(e));
            if (this.props.valueChanged)
                this.ctrlRef.current.addEventListener('valueChanged', (e) => this.props.valueChanged(e));
            if (this.props.valueChanging)
                this.ctrlRef.current.addEventListener('valueChanging', (e) => this.props.valueChanging(e));
        }
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
            if (this.props.beforeEdit)
                this.ctrlRef.current.removeEventListener('beforeEdit    ', this.props.beforeEdit);
            if (this.props.beforeExpand)
                this.ctrlRef.current.removeEventListener('beforeExpand', this.props.beforeExpand);
            if (this.props.beforeSelect)
                this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
            if (this.props.cellClick)
                this.ctrlRef.current.removeEventListener('cellClick', this.props.cellClick);
            if (this.props.cellDblClick)
                this.ctrlRef.current.removeEventListener('cellDblClick', this.props.cellDblClick);
            if (this.props.cellHover)
                this.ctrlRef.current.removeEventListener('cellHover', this.props.cellHover);
            if (this.props.cellTouched)
                this.ctrlRef.current.removeEventListener('cellTouched', this.props.cellTouched);
            if (this.props.columnHover)
                this.ctrlRef.current.removeEventListener('columnHover', this.props.columnHover);
            if (this.props.change)
                this.ctrlRef.current.removeEventListener('change', this.props.change);
            if (this.props.columnAdded)
                this.ctrlRef.current.removeEventListener('columnAdded', this.props.columnAdded);
            if (this.props.columnAdding)
                this.ctrlRef.current.removeEventListener('columnAdding', this.props.columnAdding);
            if (this.props.columnClick)
                this.ctrlRef.current.removeEventListener('columnClick', this.props.columnClick);
            if (this.props.columnDblClick)
                this.ctrlRef.current.removeEventListener('columnDblClick', this.props.columnDblClick);
            if (this.props.columnHover)
                this.ctrlRef.current.removeEventListener('columnHover', this.props.columnHover);
            if (this.props.columnOrderChanged)
                this.ctrlRef.current.removeEventListener('columnOrderChanged', this.props.columnOrderChanged);
            if (this.props.columnRemoved)
                this.ctrlRef.current.removeEventListener('columnRemoved', this.props.columnRemoved);
            if (this.props.columnRemoving)
                this.ctrlRef.current.removeEventListener('columnRemoving', this.props.columnRemoving);
            if (this.props.columnRightClick)
                this.ctrlRef.current.removeEventListener('columnRightClick', this.props.columnRightClick);
            if (this.props.columnSizeChanged)
                this.ctrlRef.current.removeEventListener('columnSizeChanged', this.props.columnSizeChanged);
            if (this.props.columnSortClick)
                this.ctrlRef.current.removeEventListener('columnSortClick', this.props.columnSortClick);
            if (this.props.dataChanging)
                this.ctrlRef.current.removeEventListener('dataChanging', this.props.dataChanging);
            if (this.props.dataChanged)
                this.ctrlRef.current.removeEventListener('dataChanged', this.props.dataChanged);
            if (this.props.dataInvalid)
                this.ctrlRef.current.removeEventListener('dataInvalid', this.props.dataInvalid);
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
            if (this.props.filterChanged)
                this.ctrlRef.current.removeEventListener('filterChanged', this.props.filterChanged);
            if (this.props.gotFocus)
                this.ctrlRef.current.removeEventListener('gotFocus', this.props.gotFocus);
            if (this.props.groupAdded)
                this.ctrlRef.current.removeEventListener('groupAdded', this.props.groupAdded);
            if (this.props.groupAdding)
                this.ctrlRef.current.removeEventListener('groupAdding', this.props.groupAdding);
            if (this.props.groupOrderChanged)
                this.ctrlRef.current.removeEventListener('groupOrderChanged', this.props.groupOrderChanged);
            if (this.props.groupRemoved)
                this.ctrlRef.current.removeEventListener('groupRemoved', this.props.groupRemoved);
            if (this.props.groupRemoving)
                this.ctrlRef.current.removeEventListener('groupRemoving', this.props.groupRemoving);
            if (this.props.keyDown)
                this.ctrlRef.current.removeEventListener('keyDown', this.props.keyDown);
            if (this.props.keyPress)
                this.ctrlRef.current.removeEventListener('keyPress', this.props.keyPress);
            if (this.props.keyUp)
                this.ctrlRef.current.removeEventListener('keyUp', this.props.keyUp);
            if (this.props.lostFocus)
                this.ctrlRef.current.removeEventListener('lostFocus', this.props.lostFocus);
            if (this.props.loadComplete)
                this.ctrlRef.current.removeEventListener('loadComplete', this.props.loadComplete);
            if (this.props.pageChanged)
                this.ctrlRef.current.removeEventListener('pageChanged', this.props.pageChanged);
            if (this.props.rowAdded)
                this.ctrlRef.current.removeEventListener('rowAdded', this.props.rowAdded);
            if (this.props.rowAdding)
                this.ctrlRef.current.removeEventListener('rowAdding', this.props.rowAdding);
            if (this.props.rowClick)
                this.ctrlRef.current.removeEventListener('rowClick', this.props.rowClick);
            if (this.props.rowDblClick)
                this.ctrlRef.current.removeEventListener('rowDblClick', this.props.rowDblClick);
            if (this.props.rowHover)
                this.ctrlRef.current.removeEventListener('rowHover', this.props.rowHover);
            if (this.props.rowRemoved)
                this.ctrlRef.current.removeEventListener('rowRemoved', this.props.rowRemoved);
            if (this.props.rowRemoving)
                this.ctrlRef.current.removeEventListener('rowRemoving', this.props.rowRemoving);
            if (this.props.rowRightClick)
                this.ctrlRef.current.removeEventListener('rowRightClick', this.props.rowRightClick);
            if (this.props.rowsCleared)
                this.ctrlRef.current.removeEventListener('rowsCleared', this.props.rowsCleared);
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
            if (this.props.valueChanged)
                this.ctrlRef.current.removeEventListener('valueChanged', this.props.valueChanged);
            if (this.props.valueChanging)
                this.ctrlRef.current.removeEventListener('valueChanging', this.props.valueChanging);
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
            if (this._isDefined(this.props.allowColumnReorder))
                this.ctrlRef.current.allowColumnReorder = this.props.allowColumnReorder;
            if (this._isDefined(this.props.allowDrag))
                this.ctrlRef.current.allowDrag = this.props.allowDrag;
            if (this._isDefined(this.props.allowDrop))
                this.ctrlRef.current.allowDrop = this.props.allowDrop;
            if (this._isDefined(this.props.allowFilter))
                this.ctrlRef.current.allowFilter = this.props.allowFilter;
            if (this._isDefined(this.props.allowFocus))
                this.ctrlRef.current.allowFocus = this.props.allowFocus;
            if (this._isDefined(this.props.autoExpand))
                this.ctrlRef.current.autoExpand = this.props.autoExpand;
            if (this._isDefined(this.props.autoSizeColumns))
                this.ctrlRef.current.autoSizeColumns = this.props.autoSizeColumns;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.columns))
                this.ctrlRef.current.columns = this.props.columns;
            if (this._isDefined(this.props.contentVisibility))
                this.ctrlRef.current.contentVisibility = this.props.contentVisibility;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.dataFields))
                this.ctrlRef.current.dataFields = this.props.dataFields;
            if (this._isDefined(this.props.editMode))
                this.ctrlRef.current.editMode = this.props.editMode;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.expandColumnIndex))
                this.ctrlRef.current.expandColumnIndex = this.props.expandColumnIndex;
            if (this._isDefined(this.props.footerHeight))
                this.ctrlRef.current.footerHeight = this.props.footerHeight;
            if (this._isDefined(this.props.footerTemplate))
                this.ctrlRef.current.footerTemplate = this.props.footerTemplate;
            if (this._isDefined(this.props.gridLines))
                this.ctrlRef.current.gridLines = this.props.gridLines;
            if (this._isDefined(this.props.grouping))
                this.ctrlRef.current.grouping = this.props.grouping;
            if (this._isDefined(this.props.groups))
                this.ctrlRef.current.groups = this.props.groups;
            if (this._isDefined(this.props.headerHeight))
                this.ctrlRef.current.headerHeight = this.props.headerHeight;
            if (this._isDefined(this.props.headerTemplate))
                this.ctrlRef.current.headerTemplate = this.props.headerTemplate;
            if (this._isDefined(this.props.inlineEditor))
                this.ctrlRef.current.inlineEditor = this.props.inlineEditor;
            if (this._isDefined(this.props.inlineFilter))
                this.ctrlRef.current.inlineFilter = this.props.inlineFilter;
            if (this._isDefined(this.props.mouseWheelSpeed))
                this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
            if (this._isDefined(this.props.paging))
                this.ctrlRef.current.paging = this.props.paging;
            if (this._isDefined(this.props.resourcePath))
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this._isDefined(this.props.rowHeight))
                this.ctrlRef.current.rowHeight = this.props.rowHeight;
            if (this._isDefined(this.props.rows))
                this.ctrlRef.current.rows = this.props.rows;
            if (this._isDefined(this.props.rowHoverTemplate))
                this.ctrlRef.current.rowHoverTemplate = this.props.rowHoverTemplate;
            if (this._isDefined(this.props.rowSelectTemplate))
                this.ctrlRef.current.rowSelectTemplate = this.props.rowSelectTemplate;
            if (this._isDefined(this.props.rowTemplate))
                this.ctrlRef.current.rowTemplate = this.props.rowTemplate;
            if (this._isDefined(this.props.selectedColumn))
                this.ctrlRef.current.selectedColumn = this.props.selectedColumn;
            if (this._isDefined(this.props.selectedRow))
                this.ctrlRef.current.selectedRow = this.props.selectedRow;
            if (this._isDefined(this.props.selectionMode))
                this.ctrlRef.current.selectionMode = this.props.selectionMode;
            if (this._isDefined(this.props.showExpandBox))
                this.ctrlRef.current.showExpandBox = this.props.showExpandBox;
            if (this._isDefined(this.props.showFooter))
                this.ctrlRef.current.showFooter = this.props.showFooter;
            if (this._isDefined(this.props.showHeader))
                this.ctrlRef.current.showHeader = this.props.showHeader;
            if (this._isDefined(this.props.showScroll))
                this.ctrlRef.current.showScroll = this.props.showScroll;
            if (this._isDefined(this.props.size))
                this.ctrlRef.current.size = this.props.size;
            if (this._isDefined(this.props.sorting))
                this.ctrlRef.current.sorting = this.props.sorting;
            if (this._isDefined(this.props.sortMode))
                this.ctrlRef.current.sortMode = this.props.sortMode;
            if (this._isDefined(this.props.state))
                this.ctrlRef.current.state = this.props.state;
            if (this._isDefined(this.props.theme))
                this.ctrlRef.current.theme = this.props.theme;
            if (this._isDefined(this.props.useValidation))
                this.ctrlRef.current.useValidation = this.props.useValidation;
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
            if (this.props.allowColumnReorder !== prevProps.allowColumnReorder)
                this.ctrlRef.current.allowColumnReorder = this.props.allowColumnReorder;
            if (this.props.allowDrag !== prevProps.allowDrag)
                this.ctrlRef.current.allowDrag = this.props.allowDrag;
            if (this.props.allowDrop !== prevProps.allowDrop)
                this.ctrlRef.current.allowDrop = this.props.allowDrop;
            if (this.props.allowFilter !== prevProps.allowFilter)
                this.ctrlRef.current.allowFilter = this.props.allowFilter;
            if (this.props.allowFocus !== prevProps.allowFocus)
                this.ctrlRef.current.allowFocus = this.props.allowFocus;
            if (this.props.autoExpand !== prevProps.autoExpand)
                this.ctrlRef.current.autoExpand = this.props.autoExpand;
            if (this.props.autoSizeColumns !== prevProps.autoSizeColumns)
                this.ctrlRef.current.autoSizeColumns = this.props.autoSizeColumns;
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.columns))
                this.ctrlRef.current.columns = this.props.columns;
            if (this.props.contentVisibility !== prevProps.contentVisibility)
                this.ctrlRef.current.contentVisibility = this.props.contentVisibility;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.dataFields !== prevProps.dataFields)
                this.ctrlRef.current.dataFields = this.props.dataFields;
            if (this.props.editMode !== prevProps.editMode)
                this.ctrlRef.current.editMode = this.props.editMode;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this.props.expandColumnIndex !== prevProps.expandColumnIndex)
                this.ctrlRef.current.expandColumnIndex = this.props.expandColumnIndex;
            if (this.props.gridLines !== prevProps.gridLines)
                this.ctrlRef.current.gridLines = this.props.gridLines;
            if (this._isDefined(this.props.groups))
                this.ctrlRef.current.groups = this.props.groups;
            if (this.props.footerHeight !== prevProps.footerHeight)
                this.ctrlRef.current.footerHeight = this.props.footerHeight;
            if (this._isDefined(this.props.footerTemplate))
                this.ctrlRef.current.footerTemplate = this.props.footerTemplate;
            if (this.props.grouping !== prevProps.grouping)
                this.ctrlRef.current.grouping = this.props.grouping;
            if (this.props.headerHeight !== prevProps.headerHeight)
                this.ctrlRef.current.headerHeight = this.props.headerHeight;
            if (this._isDefined(this.props.headerTemplate))
                this.ctrlRef.current.headerTemplate = this.props.headerTemplate;
            if (this.props.inlineEditor !== prevProps.inlineEditor)
                this.ctrlRef.current.inlineEditor = this.props.inlineEditor;
            if (this.props.inlineFilter !== prevProps.inlineFilter)
                this.ctrlRef.current.inlineFilter = this.props.inlineFilter;
            if (this.props.paging !== prevProps.paging)
                this.ctrlRef.current.paging = this.props.paging;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this.props.rowHeight !== prevProps.rowHeight)
                this.ctrlRef.current.rowHeight = this.props.rowHeight;
            if (this._isDefined(this.props.rows))
                this.ctrlRef.current.rows = this.props.rows;
            if (this._isDefined(this.props.rowHoverTemplate))
                this.ctrlRef.current.rowHoverTemplate = this.props.rowHoverTemplate;
            if (this._isDefined(this.props.rowSelectTemplate))
                this.ctrlRef.current.rowSelectTemplate = this.props.rowSelectTemplate;
            if (this._isDefined(this.props.rowTemplate))
                this.ctrlRef.current.rowTemplate = this.props.rowTemplate;
            if (this.props.selectedColumn !== prevProps.selectedColumn)
                this.ctrlRef.current.selectedColumn = this.props.selectedColumn;
            if (this.props.selectedRow !== prevProps.selectedRow)
                this.ctrlRef.current.selectedRow = this.props.selectedRow;
            if (this.props.selectionMode !== prevProps.selectionMode)
                this.ctrlRef.current.selectionMode = this.props.selectionMode;
            if (this.props.showExpandBox !== prevProps.showExpandBox)
                this.ctrlRef.current.showExpandBox = this.props.showExpandBox;
            if (this.props.showFooter !== prevProps.showFooter)
                this.ctrlRef.current.showFooter = this.props.showFooter;
            if (this.props.showHeader !== prevProps.showHeader)
                this.ctrlRef.current.showHeader = this.props.showHeader;
            if (this.props.showScroll !== prevProps.showScroll)
                this.ctrlRef.current.showScroll = this.props.showScroll;
            if (this.props.size !== prevProps.size)
                this.ctrlRef.current.size = this.props.size;
            if (this.props.sorting !== prevProps.sorting)
                this.ctrlRef.current.sorting = this.props.sorting;
            if (this.props.sortMode !== prevProps.sortMode)
                this.ctrlRef.current.sortMode = this.props.sortMode;
            if (this.props.state !== prevProps.state)
                this.ctrlRef.current.state = this.props.state;
            if (this.props.theme !== prevProps.theme)
                this.ctrlRef.current.theme = this.props.theme;
            if (this.props.useValidation !== prevProps.useValidation)
                this.ctrlRef.current.useValidation = this.props.useValidation;
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Data --------------------------------------------------------------------------------------

    addColumn(column){
        if (this._isCtrlDefined())
            this.ctrlRef.current.addColumn(column);
    }

    addRow(row, parent){
        if (this._isCtrlDefined())
            this.ctrlRef.current.addRow(row, parent);
    }

    clearColumns(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.clearColumns();
    }

    clearRows(parent){
        if (this._isCtrlDefined())
            this.ctrlRef.current.clearRows(parent);
    }

    insertColumnAfter(column, refColumn){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertColumnAfter(column, refColumn);
    }

    insertColumnAt(column, index){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertColumnAt(column, index);
    }

    insertColumnBefore(column, refColumn){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertColumnBefore(column, refColumn);
    }

    loadData(data, fields, incremental){
        if (this._isCtrlDefined())
            this.ctrlRef.current.loadData(data, fields, incremental);
    }

    insertRowAfter(row, refRow){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertRowAfter(row, refRow);
    }

    insertRowAt(row, index, parent){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertRowAt(row, index, parent);
    }

    insertRowBefore(row, refRow){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertRowBefore(row, refRow);
    }

    removeColumn(column){
        if (this._isCtrlDefined())
            this.ctrlRef.current.removeColumn(column);
    }

    removeColumnAt(index){
        if (this._isCtrlDefined())
            this.ctrlRef.current.removeColumnAt(index);
    }

    removeRow(row){
        if (this._isCtrlDefined())
            this.ctrlRef.current.removeRow(row);
    }

    removeRowAt(index, parent){
        if (this._isCtrlDefined())
            this.ctrlRef.current.removeRowAt(index, parent);
    }

    // Editing -----------------------------------------------------------------------------------

    beginEdit(row){
        if (this._isCtrlDefined())
            this.ctrlRef.current.beginEdit(row);
    }

    endEdit(save){
        if (this._isCtrlDefined())
            this.ctrlRef.current.endEdit(save);
    }

    // Expand/Colapse ----------------------------------------------------------------------------

    collapse(row){
        if (this._isCtrlDefined())
            this.ctrlRef.current.collapse(row);
    }

    expand(row){
        if (this._isCtrlDefined())
            this.ctrlRef.current.expand(row);
    }

    toggle(row, value){
        if (this._isCtrlDefined())
            this.ctrlRef.current.toggle(row, value);
    }

    // Export ------------------------------------------------------------------------------------

    exportToCSV(){
        return this._isCtrlDefined() ? this.ctrlRef.current.exportToCSV() : null;
    }

    exportToJSON(columnFields, rowFields, spacing, flat){
        return this._isCtrlDefined() ? this.ctrlRef.current.exportToJSON(columnFields, rowFields, spacing, flat) : null;
    }

    // Filtering ---------------------------------------------------------------------------------

    filter(column, params){
        if (this._isCtrlDefined())
            this.ctrlRef.current.filter(column, params);
    }

    // General -----------------------------------------------------------------------------------

    cloneRow(row){
        return this._isCtrlDefined() ? this.ctrlRef.current.cloneRow(row) : null;
    }

    getColumnById(id){
        return this._isCtrlDefined() ? this.ctrlRef.current.getColumnById(id) : null;
    }

    getCellByColumnId(list, id){
        return this._isCtrlDefined() ? this.ctrlRef.current.getCellByColumnId(list, id) : null;
    }

    getColumnById(id){
        return this._isCtrlDefined() ? this.ctrlRef.current.getColumnById(id) : null;
    }

    getColumnParent(column){
        return this._isCtrlDefined() ? this.ctrlRef.current.getColumnParent(column) : null;
    }

    getFullList(){
        return this._isCtrlDefined() ? this.ctrlRef.current.getFullList() : [];
    }

    getList(key, parent){
        return this._isCtrlDefined() ? this.ctrlRef.current.getList(key, parent) : null;
    }

    getSize(){
        return this._isCtrlDefined() ? this.ctrlRef.current.getSize() : { width: 0, height: 0 };
    }

    isColumnVisible(column){
        return this._isCtrlDefined() ? this.ctrlRef.current.isColumnVisible(column) : false;
    }

    isRowHovered(row){
        return this._isCtrlDefined() ? this.ctrlRef.current.isRowHovered(row) : false;
    }

    isRowSelected(row){
        return this._isCtrlDefined() ? this.ctrlRef.current.isRowSelected(row) : false;
    }

    moveColumn(column, direction, targetColumn, position){
        if (this._isCtrlDefined())
            this.ctrlRef.current.moveColumn(column, direction, targetColumn, position);
    }

    // Keyboard Navigation -----------------------------------------------------------------------

    moveFocus(direction, step){
        if (this._isCtrlDefined())
            this.ctrlRef.current.moveFocus(direction, step);
    }

    setFocus(cell){
        if (this._isCtrlDefined())
            this.ctrlRef.current.setFocus(cell);
    }

    // Loading -----------------------------------------------------------------------------------

    beginLoad(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.beginLoad();
    }

    endLoad(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.endLoad();
    }

    // Pagination --------------------------------------------------------------------------------

    currentPage(value){
        return this._isCtrlDefined() ? this.ctrlRef.current.currentPage(value) : 0;
    }

    getMaxPages(){
        return this._isCtrlDefined() ? this.ctrlRef.current.getMaxPages() : 0;
    }

    firstPage(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.firstPage();
    }

    lastPage(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.lastPage();
    }

    nextPage(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.nextPage();
    }

    prevPage(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.prevPage();
    }
    
    // Scrolling ---------------------------------------------------------------------------------

    scrollPos(value){
        return this._isCtrlDefined() ? this.ctrlRef.current.scrollPos(value) : { x: 0, y: 0 };
    }

    isVerScrollVisible(){
        return this._isCtrlDefined() ? this.ctrlRef.current.isVerScrollVisible() : false;
    }

    isHorScrollVisible(){
        return this._isCtrlDefined() ? this.ctrlRef.current.isHorScrollVisible() : false;
    }

    scrollTo(row){
        if (this._isCtrlDefined())
            this.ctrlRef.current.scrollTo(row);
    }

    // Search ----------------------------------------------------------------------------

    findColumnById(id){
        return this._isCtrlDefined() ? this.ctrlRef.current.findColumnById(id) : null;
    }

    findRowById(id){
        return this._isCtrlDefined() ? this.ctrlRef.current.findRowById(id) : null;
    }

    findRowByText(text){
        return this._isCtrlDefined() ? this.ctrlRef.current.findRowByText(text) : null;
    }
    
    // Selection -------------------------------------------------------------------------

    clearSelection(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.clearSelection();
    }

    selectRows(rows){
        if (this._isCtrlDefined())
            this.ctrlRef.current.selectRows(rows);
    }
    
    // Sorting -----------------------------------------------------------------------------------

    sort(column, order, comparer){
        if (this._isCtrlDefined())
            this.ctrlRef.current.sort(column, order, comparer);
    }
 
    // Style -------------------------------------------------------------------------------------

    setClass(value, obj){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.setClass(value, obj);
    }

    setStyle(value, obj){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.setStyle(value, obj);
    }

    // Update ------------------------------------------------------------------------------------

    refresh(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.refresh();
    }

    resolve(type){
        if (this._isCtrlDefined())
            this.ctrlRef.current.resolve(type);
    }

    resumeLayout(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.resumeLayout();
    }

    suspendLayout(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.suspendLayout();
    }

    updateFullList(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.updateFullList();
    }

    updateLayout(optimal){
        if (this._isCtrlDefined())
            this.ctrlRef.current.updateLayout(optimal);
    }

    updateView(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.updateView();
    }

    wait(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.wait();
    }

    render(){
        return (
            <iui-grid id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-grid>
        );
    }
}


export default IntegralUIGridComponent;
