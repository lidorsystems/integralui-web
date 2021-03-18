# IntegralUI Web, v21.1

IntegralUI Web includes 40+ native Web Components and services that can help you build modern web applications. 

<b>Note</b>  Older version of IntegralUI Web that was built specifically for Angular is available here: [IntegralUI Web for Angular](https://github.com/lidorsystems/integralui-web-angular).

![IntegralUI Web 19.4 - 40+ UI Components for Angular, React and Vue](https://www.lidorsystems.com/about/newsletter/images/integralui-web-components.png)

Here is a brief overview of what is included:

## Components

[Accordion](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/accordion) - Displays a list of expandable groups in vertical layout

[AutoComplete](https://www.lidorsystems.com/products/web/studio/samples/angular/#/autocomplete) - Represents a text box with a dropdown list where you can choose among suggested options

[Breadcrumb](https://www.lidorsystems.com/products/web/studio/samples/angular/#/breadcrumb) - Used for navigation, where each item can have a link that is automatically separated

[Button](https://www.lidorsystems.com/products/web/studio/samples/angular/#/button) - Represents a button

[ButtonGroup](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/buttongroup) - Manages actions of multiple buttons arranged in group

[Calendar](https://www.lidorsystems.com/products/web/studio/samples/angular/#/calendar) - Enables the user to select a date using a visual monthly calendar display

[CheckBox](https://www.lidorsystems.com/products/web/studio/samples/angular/#/checkbox) - Represents a check box

[ColorPicker](https://www.lidorsystems.com/products/web/studio/samples/angular/#/colorpicker) - Allows the user to select a color by using a drop-down panel with color palette and slider

[ContextMenu](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/contextmenu) - Represents a shortcut menu

[ComboBox](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/combobox) - Advanced version of standard ComboBox element

[DatePicker](https://www.lidorsystems.com/products/web/studio/samples/angular/#/datepicker) - Allows the user to select a date by using a drop-down calendar

[Dialog](https://www.lidorsystems.com/products/web/studio/samples/angular/#/dialog) - Displays a modal window

[DropDown](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/dropdown) - Represents a dropdown window

[DropDownButton](https://www.lidorsystems.com/products/web/studio/samples/angular/#/dropdownbutton) - Represents a button with option to show a dropdown list

[Grid](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/grid) - Displays tabular data sets

[GroupBox](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/groupbox) - An expandable container with header and content

[ListBar](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/listbar) - Displays a list of expandable groups with items

[ListBox](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/listbox) - Displays a collection of items with content in custom layouts

[ListScroller](https://www.lidorsystems.com/products/web/studio/samples/angular/#/listscroller) - Displays a scrollable item list in horizontal or vertical layout

[ListView](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/listview) - Displays a collection of items using several different views

[Menu](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/menu) - Allows you to create static or dynamic menus

[NumericUpDown](https://www.lidorsystems.com/products/web/studio/samples/angular/#/numeric-updown) - Displays a numeric value and allows changes within a range of defined minimum and maximum values

[Paginator](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/paginator) - Allows you to divide the content in multiple views in single page

[Popover](https://www.lidorsystems.com/products/web/studio/samples/angular/#/popover) - Displays custom HTML content over specified element

[ProgressBar](https://www.lidorsystems.com/products/web/studio/samples/angular/#/progressbar) - Visualize the progression of an operation

[RadioButton](https://www.lidorsystems.com/products/web/studio/samples/angular/#/radiobutton) - Represents a radio button

[Rating](https://www.lidorsystems.com/products/web/studio/samples/angular/#/rating) - Visualizes ratings

[SideBar](https://www.lidorsystems.com/products/web/studio/samples/angular/#/sidebar) - Allows you to add a custom content panel that appears by sliding from page side over main content

[SlideBar](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/slidebar) - Animates slides composed of custom content

[Slider](https://www.lidorsystems.com/products/web/studio/samples/angular/#/slider) - Allows changes to a numeric value within a range of defined minimum and maximum values

[SplitContainer](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/splitcontainer) - Consists of two resizable panels separated by a splitter with tabs and command buttons

[Splitter](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/splitter) - Allows you to resize two block elements during run-time

[TabStrip](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/tabstrip) - Consists of multiple scrollable panels that share the same space 

[Tooltip](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/tooltip) - Adds a tooltip to an element

[TreeGrid](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/treegrid) - Displays hierarchical data structures in multiple columns

[TreeList](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/treelist) - Allows you to navigate through tree hierarchy showing only one list at a time

[TreeView](https://www.lidorsystems.com/products/web/studio/samples/web-components/#/treeview) - Displays hierarchical data structures


## Services

<b>Common</b> - Includes a set of common functions usable in most applications

<b>Data</b> - Includes a set of data related functions for different operations like: add/remove, search, etc.

<b>DragDrop</b> - Provides a way to use drag drop operations between custom components or elements.

<b>Filter</b> - Includes a set of related functions for filter operations


All components are inheritable, you can further extend functionalities of specific component by simple create a subclass of component main class.


## Dependencies

IntegralUI Web Lite is built on top of [LitElement](https://github.com/Polymer/lit-element). All necessary files from that library are already included in the /external subfolder of this repository.


## DEMO

[Online QuickStart App](https://www.lidorsystems.com/products/web/studio/samples/web-components/) - An online demo of each component included


## Installation

Install the repository by running

```bash
npm install https://github.com/lidorsystems/integralui-web.git
```

or directly from NPM

```bash
npm i integralui-web
```

Open your application and add a reference to a component you want to use. For example, if you are using the IntegralUI TreeView component:</p>

### Angular

```bash
import 'integralui-web-lite/components/integralui.treeview.js';
```

### React

```bash
import IntegralUITreeViewComponent from 'integralui-web-lite/wrappers/react.integralui.treeview.js';
```

<b>Note</b>   Currently [ReactJS doesn't have full support for Web Components](https://custom-elements-everywhere.com/#react). Mainly because of the way data is passed to the component via attributes and their own synthetic event system. For this reason, you can use available wrappers located under /wrappers directory, which are ReactJS components that provide all public API from an IntegralUI component.</p>

### Vanilla JavaScript

```bash
<script type="module" src="integralui-web-lite/components/integralui.treeview.js"></script>
```


## Icons

Because of the web component specification that defines URLs to be always relative to the main document, the path that leads to the icons used by the IntegralUI Web components needs to be set. In addition you may also need to copy/paste the /icons folder in your application folder. Depending on the framework of your choosing this may differ.

### Angular

Follow these steps:
1. Copy/Paste the content of the integralui-web-lite/icons folder under /assets/integralui/icons subfolder in your React application. 
2. Set the resourcePath property of IntegralUI Web components to point to the location set in your /assets folder. In this case, for TreeView for example:

```bash
<iui-treeview [resourcePath]="'assets/integralui/icons'"></iui-treeview>
```

### React

Follow these steps:
1. Copy/Paste the content of the integralui-web-lite/icons folder under /public/integralui/icons subfolder in your React application. 
2. Set the resourcePath property of IntegralUI Web components to point to the location set in your /public folder. In this case, for TreeView for example:

```bash
<IntegralUITreeViewComponent resourcePath="integralui/icons"></IntegralUITreeViewComponent>
```

### Vanilla JavaScript

Set the resourcePath property of IntegralUI Web components to point to /integralui-web-lite/icons folder. In this case, for TreeView for example:

```bash
<iui-treeview resource-path="../../integralui-web-lite/icons"></iui-treeview>
```


## QuickStart App

There is a demo application with source code that contains samples for each component included in the IntegralUI Web Lite library. It can help you to get started quickly with learning about the components and write tests immediatelly. 

From [IntegralUI Web Lite - QuickStart](https://www.lidorsystems.com/products/web/lite/#quickstart) you can download a demo app for Angular, React and Vanilla JavaScript. A detailed information about each of these quick-start demos is available in ReadMe file, located in the root folder of the demo app.


## License Information

You may use this version for the limited purposes of demonstrations, trials or design-time evaluations.

This project has been released under the IntegralUI Web License, and may not be used except in compliance with the License.
A copy of the License should have been installed in the product's root installation directory or it can be found here: [License Agreement](https://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf).

This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language governing rights and limitations under the License.
