# IntegralUI Web, v21.4

IntegralUI Web includes 40+ native Web Components and services that can help you build modern web applications. 

<b>Note</b>  Older version of IntegralUI Web that was built specifically for Angular is available here: [IntegralUI Web for Angular](https://github.com/lidorsystems/integralui-web-angular).

![IntegralUI Web 21.4 - 40+ UI Components for Angular, React and Vue](https://www.lidorsystems.com/about/newsletter/images/integralui-web-components.png)

Here is a brief overview of what is included:

## Components

[Accordion](https://www.lidorsystems.com/products/web/studio/samples/#/accordion) - Displays a list of expandable groups in vertical layout

[AutoComplete](https://www.lidorsystems.com/products/web/studio/samples/#/autocomplete) - Represents a text box with a dropdown list where you can choose among suggested options

[Breadcrumb](https://www.lidorsystems.com/products/web/studio/samples/#/breadcrumb) - Used for navigation, where each item can have a link that is automatically separated

[Button](https://www.lidorsystems.com/products/web/studio/samples/#/button) - Represents a button

[ButtonGroup](https://www.lidorsystems.com/products/web/studio/samples/#/buttongroup) - Manages actions of multiple buttons arranged in group

[Calendar](https://www.lidorsystems.com/products/web/studio/samples/#/calendar) - Enables the user to select a date using a visual monthly calendar display

[CheckBox](https://www.lidorsystems.com/products/web/studio/samples/#/checkbox) - Represents a check box

[ColorPicker](https://www.lidorsystems.com/products/web/studio/samples/#/colorpicker) - Allows the user to select a color by using a drop-down panel with color palette and slider

[ContextMenu](https://www.lidorsystems.com/products/web/studio/samples/#/contextmenu) - Represents a shortcut menu

[ComboBox](https://www.lidorsystems.com/products/web/studio/samples/#/combobox) - Advanced version of standard ComboBox element

[DatePicker](https://www.lidorsystems.com/products/web/studio/samples/#/datepicker) - Allows the user to select a date by using a drop-down calendar

[Dialog](https://www.lidorsystems.com/products/web/studio/samples/#/dialog) - Displays a modal window

[DropDown](https://www.lidorsystems.com/products/web/studio/samples/#/dropdown) - Represents a dropdown window

[DropDownButton](https://www.lidorsystems.com/products/web/studio/samples/#/dropdownbutton) - Represents a button with option to show a dropdown list

[Grid](https://www.lidorsystems.com/products/web/studio/samples/#/grid) - Displays tabular data sets

[GroupBox](https://www.lidorsystems.com/products/web/studio/samples/#/groupbox) - An expandable container with header and content

[ListBar](https://www.lidorsystems.com/products/web/studio/samples/#/listbar) - Displays a list of expandable groups with items

[ListBox](https://www.lidorsystems.com/products/web/studio/samples/#/listbox) - Displays a collection of items with content in custom layouts

[ListScroller](https://www.lidorsystems.com/products/web/studio/samples/#/listscroller) - Displays a scrollable item list in horizontal or vertical layout

[ListView](https://www.lidorsystems.com/products/web/studio/samples/#/listview) - Displays a collection of items using several different views

[Menu](https://www.lidorsystems.com/products/web/studio/samples/#/menu) - Allows you to create static or dynamic menus

[NumericUpDown](https://www.lidorsystems.com/products/web/studio/samples/#/numeric-updown) - Displays a numeric value and allows changes within a range of defined minimum and maximum values

[Paginator](https://www.lidorsystems.com/products/web/studio/samples/#/paginator) - Allows you to divide the content in multiple views in single page

[Popover](https://www.lidorsystems.com/products/web/studio/samples/#/popover) - Displays custom HTML content over specified element

[PivotGrid](https://www.lidorsystems.com/products/web/studio/samples/) - Summarizes the data of a more extensive table

[ProgressBar](https://www.lidorsystems.com/products/web/studio/samples/#/progressbar) - Visualize the progression of an operation

[RadioButton](https://www.lidorsystems.com/products/web/studio/samples/#/radiobutton) - Represents a radio button

[Rating](https://www.lidorsystems.com/products/web/studio/samples/#/rating) - Visualizes ratings

[SideBar](https://www.lidorsystems.com/products/web/studio/samples/#/sidebar) - Allows you to add a custom content panel that appears by sliding from page side over main content

[SlideBar](https://www.lidorsystems.com/products/web/studio/samples/#/slidebar) - Animates slides composed of custom content

[Slider](https://www.lidorsystems.com/products/web/studio/samples/#/slider) - Allows changes to a numeric value within a range of defined minimum and maximum values

[SplitContainer](https://www.lidorsystems.com/products/web/studio/samples/#/splitcontainer) - Consists of two resizable panels separated by a splitter with tabs and command buttons

[Splitter](https://www.lidorsystems.com/products/web/studio/samples/#/splitter) - Allows you to resize two block elements during run-time

[TabStrip](https://www.lidorsystems.com/products/web/studio/samples/#/tabstrip) - Consists of multiple scrollable panels that share the same space 

[Tooltip](https://www.lidorsystems.com/products/web/studio/samples/#/tooltip) - Adds a tooltip to an element

[TreeGrid](https://www.lidorsystems.com/products/web/studio/samples/#/treegrid) - Displays hierarchical data structures in multiple columns

[TreeList](https://www.lidorsystems.com/products/web/studio/samples/#/treelist) - Allows you to navigate through tree hierarchy showing only one list at a time

[TreeView](https://www.lidorsystems.com/products/web/studio/samples/#/treeview) - Displays hierarchical data structures


## Services

<b>Common</b> - Includes a set of common functions usable in most applications

<b>Data</b> - Includes a set of data related functions for different operations like: add/remove, search, etc.

<b>DragDrop</b> - Provides a way to use drag drop operations between custom components or elements.

<b>Filter</b> - Includes a set of related functions for filter operations


All components are inheritable, you can further extend functionalities of specific component by simple create a subclass of component main class.


## Dependencies

IntegralUI Web is built on top of [LitElement](https://github.com/Polymer/lit-element). All necessary files from that library are already included in the /external subfolder of this repository.


## DEMO

[Online QuickStart App](https://www.lidorsystems.com/products/web/studio/samples/) - An online demo of each component included


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
import 'integralui-web/components/integralui.treeview.js';
```

Depending on current version of TypeScript, you may need to add some settings in tsconfig.json, under "angularCompilerOptions":

```bash"angularCompilerOptions": {

    . . .

    "suppressImplicitAnyIndexErrors": true,     // solves implicit any values
    "noImplicitAny": false,             // solves angular could not find a declaration file for module implicitly has an 'any' type
    "strictNullChecks": false           // solves type null is not assignable to type

}
```

### React

```bash
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
```

<b>Note</b>   Currently [ReactJS doesn't have full support for Web Components](https://custom-elements-everywhere.com/#react). Mainly because of the way data is passed to the component via attributes and their own synthetic event system. For this reason, you can use available wrappers located under /wrappers directory, which are ReactJS components that provide all public API from an IntegralUI component.</p>

### Vanilla JavaScript

```bash
<script type="module" src="integralui-web/components/integralui.treeview.js"></script>
```


## Icons

Because of the web component specification that defines URLs to be always relative to the main document, the path that leads to the icons used by the IntegralUI Web components needs to be set. In addition you may also need to copy/paste the /icons folder in your application folder. Depending on the framework of your choosing this may differ.

### Angular

Follow these steps:
1. Copy/Paste the content of the integralui-web/icons folder under /assets/integralui-web/icons subfolder in your React application. 
2. Set the resourcePath property of IntegralUI Web components to point to the location set in your /assets folder. In this case, for TreeView for example:

```bash
<iui-treeview [resourcePath]="'assets/integralui-web/icons'"></iui-treeview>
```

### React

Follow these steps:
1. Copy/Paste the content of the integralui-web/icons folder under /public/integralui-web/icons subfolder in your React application. 
2. Set the resourcePath property of IntegralUI Web components to point to the location set in your /public folder. In this case, for TreeView for example:

```bash
<IntegralUITreeViewComponent resourcePath="integralui-web/icons"></IntegralUITreeViewComponent>
```

### Vanilla JavaScript

Set the resourcePath property of IntegralUI Web components to point to /integralui-web/icons folder. In this case, for TreeView for example:

```bash
<iui-treeview resource-path="../../integralui-web/icons"></iui-treeview>
```


## QuickStart App

There is a demo application with source code that contains samples for each component included in the IntegralUI Web library. It can help you to get started quickly with learning about the components and write tests immediatelly. 

From [IntegralUI Web - QuickStart](https://github.com/lidorsystems/integralui-web-quickstart) you can download a demo app for Angular, AngularJS, React and Vanilla JavaScript. A detailed information about each of these quick-start demos is available in ReadMe file, located in the root folder of the demo app.


## License Information

You may use this version for the limited purposes of demonstrations, trials or design-time evaluations.

This project has been released under the IntegralUI Web License, and may not be used except in compliance with the License.
A copy of the License should have been installed in the product's root installation directory or it can be found here: [License Agreement](https://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf).

This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language governing rights and limitations under the License.
