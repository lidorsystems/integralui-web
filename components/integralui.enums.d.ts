declare enum IntegralUIAlignmentName {
    None = 0,
    Top = 1,
    Right = 2,
    Bottom = 4,
    Left = 8
}
export abstract class IntegralUIAlignment {
  static readonly None = IntegralUIAlignmentName.None;
  static readonly Top = IntegralUIAlignmentName.Top;
  static readonly Right = IntegralUIAlignmentName.Right;
  static readonly Bottom = IntegralUIAlignmentName.Bottom;
  static readonly Left = IntegralUIAlignmentName.Left;
}
declare enum IntegralUIAnchorStyleName {
    None = 0,
    Top = 1,
    Right = 2,
    Bottom = 4,
    Left = 8
}
export abstract class IntegralUIAnchorStyle {
  static readonly None = IntegralUIAnchorStyleName.None;
  static readonly Top = IntegralUIAnchorStyleName.Top;
  static readonly Right = IntegralUIAnchorStyleName.Right;
  static readonly Bottom = IntegralUIAnchorStyleName.Bottom;
  static readonly Left = IntegralUIAnchorStyleName.Left;
}
declare enum IntegralUIAnimationTypeName {
    None = 'None',
    Fade = 'Fade',
    Slide = 'Slide'
}
export abstract class IntegralUIAnimationType {
  static readonly None = IntegralUIAnimationTypeName.None;
  static readonly Fade = IntegralUIAnimationTypeName.Fade;
  static readonly Slide = IntegralUIAnimationTypeName.Slide;
}
declare enum IntegralUICheckModeName {
    TwoState = 'TwoState',
    ThreeState = 'ThreeState'
}
export abstract class IntegralUICheckMode {
  static readonly TwoState = IntegralUICheckModeName.TwoState;
  static readonly ThreeState = IntegralUICheckModeName.ThreeState;
}
declare enum IntegralUICheckStateName {
    Unchecked = 'Unchecked',
    Indeterminate = 'Indeterminate',
    Checked = 'Checked'
}
export abstract class IntegralUICheckState {
  static readonly Unchecked = IntegralUICheckStateName.Unchecked;
  static readonly Indeterminate = IntegralUICheckStateName.Indeterminate;
  static readonly Checked = IntegralUICheckStateName.Checked;
}
declare enum IntegralUIColorFormatName {
    HEX = 'HEX',
    HSL = 'HSL',
    RGB = 'RGB'
}
export abstract class IntegralUIColorFormat {
  static readonly HEX = IntegralUIColorFormatName.HEX;
  static readonly HSL = IntegralUIColorFormatName.HSL;
  static readonly RGB = IntegralUIColorFormatName.RGB;
}
declare enum IntegralUIColorSchemeName {
    None = 'None',
    Dark = 'Dark',
    Light = 'Light'
}
export abstract class IntegralUIColorScheme {
  static readonly None = IntegralUIColorSchemeName.None;
  static readonly Dark = IntegralUIColorSchemeName.Dark;
  static readonly Light = IntegralUIColorSchemeName.Light;
}
declare enum IntegralUIComponentAppearanceName {
    Static = 'Static',
    Dynamic = 'Dynamic'
}
export abstract class IntegralUIComponentAppearance {
  static readonly Static = IntegralUIComponentAppearanceName.Static;
  static readonly Dynamic = IntegralUIComponentAppearanceName.Dynamic;
}
declare enum IntegralUIContentVisibilityName {
    None = 'None',
    Hover = 'Hover',
    Select = 'Select',
    Both = 'Both'
}
export abstract class IntegralUIContentVisibility {
  static readonly None = IntegralUIContentVisibilityName.None;
  static readonly Hover = IntegralUIContentVisibilityName.Hover;
  static readonly Select = IntegralUIContentVisibilityName.Select;
  static readonly Both = IntegralUIContentVisibilityName.Both;
}
declare enum IntegralUIDateFormatName {
    Short = 'Short',
    Long = 'Long',
    Custom = 'Custom'
}
export abstract class IntegralUIDateFormat {
  static readonly Short = IntegralUIDateFormatName.Short;
  static readonly Long = IntegralUIDateFormatName.Long;
  static readonly Custom = IntegralUIDateFormatName.Custom;
}
declare enum IntegralUIDirectionName {
    None = 1,
    Above = 2,
    Right = 4,
    Below = 8,
    Left = 16
}
export abstract class IntegralUIDirection {
  static readonly None = IntegralUIDirectionName.None;
  static readonly Above = IntegralUIDirectionName.Above;
  static readonly Right = IntegralUIDirectionName.Right;
  static readonly Below = IntegralUIDirectionName.Below;
  static readonly Left = IntegralUIDirectionName.Left;
}
declare enum IntegralUIDockPermissionName {
    None = 1,
    Top = 2,
    Right = 4,
    Fill = 8,
    Bottom = 16,
    Left = 32,
    All = 64
}
export abstract class IntegralUIDockPermission {
  static readonly None = IntegralUIDockPermissionName.None;
  static readonly Top = IntegralUIDockPermissionName.Top;
  static readonly Right = IntegralUIDockPermissionName.Right;
  static readonly Fill = IntegralUIDockPermissionName.Fill;
  static readonly Bottom = IntegralUIDockPermissionName.Bottom;
  static readonly Left = IntegralUIDockPermissionName.Left;
  static readonly All = IntegralUIDockPermissionName.All;
}
declare enum IntegralUIDockStyleName {
    None = 'None',
    Top = 'Top',
    Right = 'Right',
    Fill = 'Fill',
    Bottom = 'Bottom',
    Left = 'Left'
}
export abstract class IntegralUIDockStyle {
  static readonly None = IntegralUIDockStyleName.None;
  static readonly Top = IntegralUIDockStyleName.Top;
  static readonly Right = IntegralUIDockStyleName.Right;
  static readonly Fill = IntegralUIDockStyleName.Fill;
  static readonly Bottom = IntegralUIDockStyleName.Bottom;
  static readonly Left = IntegralUIDockStyleName.Left;
}
declare enum IntegralUIDragDropModeName {
    Static = 'Static',
    Dynamic = 'Dynamic'
}
export abstract class IntegralUIDragDropMode {
  static readonly Static = IntegralUIDragDropModeName.Static;
  static readonly Dynamic = IntegralUIDragDropModeName.Dynamic;
}
declare enum IntegralUIDropDownDirectionName {
    Down = 'Down',
    Up = 'Up'
}
export abstract class IntegralUIDropDownDirection {
  static readonly Down = IntegralUIDropDownDirectionName.Down;
  static readonly Up = IntegralUIDropDownDirectionName.Up;
}
declare enum IntegralUIEditModeName {
    None = 'None',
    Batch = 'Batch',
    Custom = 'Custom',
    Dialog = 'Dialog',
    Form = 'Form',
    Inline = 'Inline'
}
export abstract class IntegralUIEditMode {
  static readonly None = IntegralUIEditModeName.None;
  static readonly Batch = IntegralUIEditModeName.Batch;
  static readonly Custom = IntegralUIEditModeName.Custom;
  static readonly Dialog = IntegralUIEditModeName.Dialog;
  static readonly Form = IntegralUIEditModeName.Form;
  static readonly Inline = IntegralUIEditModeName.Inline;
}
declare enum IntegralUIEditorTypeName {
    None = 'None',
    Button = 'Button',
    CheckBox = 'CheckBox',
    Color = 'Color',
    Custom = 'Custom',
    Date = 'Date',
    DropDownList = 'DropDownList',
    Image = 'Image',
    Label = 'Label',
    ListScroller = 'ListScroller',
    Numeric = 'Numeric',
    Progress = 'Progress',
    RadioButton = 'RadioButton',
    Rating = 'Rating',
    Slider = 'Slider',
    Text = 'Text'
}
export abstract class IntegralUIEditorType {
  static readonly None = IntegralUIEditorTypeName.None;
  static readonly Button = IntegralUIEditorTypeName.Button;
  static readonly CheckBox = IntegralUIEditorTypeName.CheckBox;
  static readonly Color = IntegralUIEditorTypeName.Color;
  static readonly Custom = IntegralUIEditorTypeName.Custom;
  static readonly Date = IntegralUIEditorTypeName.Date;
  static readonly DropDownList = IntegralUIEditorTypeName.DropDownList;
  static readonly Image = IntegralUIEditorTypeName.Image;
  static readonly Label = IntegralUIEditorTypeName.Label;
  static readonly ListScroller = IntegralUIEditorTypeName.ListScroller;
  static readonly Numeric = IntegralUIEditorTypeName.Numeric;
  static readonly Progress = IntegralUIEditorTypeName.Progress;
  static readonly RadioButton = IntegralUIEditorTypeName.RadioButton;
  static readonly Rating = IntegralUIEditorTypeName.Rating;
  static readonly Slider = IntegralUIEditorTypeName.Slider;
  static readonly Text = IntegralUIEditorTypeName.Text;
}
declare enum IntegralUIFilterTypeName {
    Boolean = 1,
    Date = 2,
    Numeric = 4,
    String = 8
}
export abstract class IntegralUIFilterType {
  static readonly Boolean = IntegralUIFilterTypeName.Boolean;
  static readonly Date = IntegralUIFilterTypeName.Date;
  static readonly Numeric = IntegralUIFilterTypeName.Numeric;
  static readonly String = IntegralUIFilterTypeName.String;
}
declare enum IntegralUIGridLinesName {
    None = 'None',
    Horizontal = 'Horizontal',
    Vertical = 'Vertical',
    Both = 'Both'
}
export abstract class IntegralUIGridLines {
  static readonly None = IntegralUIGridLinesName.None;
  static readonly Horizontal = IntegralUIGridLinesName.Horizontal;
  static readonly Vertical = IntegralUIGridLinesName.Vertical;
  static readonly Both = IntegralUIGridLinesName.Both;
}
declare enum IntegralUIHorizontalAlignmentName {
    Left = 'Left',
    Center = 'Center',
    Right = 'Right'
}
export abstract class IntegralUIHorizontalAlignment {
  static readonly Left = IntegralUIHorizontalAlignmentName.Left;
  static readonly Center = IntegralUIHorizontalAlignmentName.Center;
  static readonly Right = IntegralUIHorizontalAlignmentName.Right;
}
declare enum IntegralUIIncrementModeName {
    Free = 'Free',
    Partial = 'Partial',
    Full = 'Full'
}
export abstract class IntegralUIIncrementMode {
  static readonly Free = IntegralUIIncrementModeName.Free;
  static readonly Partial = IntegralUIIncrementModeName.Partial;
  static readonly Full = IntegralUIIncrementModeName.Full;
}
declare enum IntegralUIItemDisplayModeName {
    Partial = 'Partial',
    Full = 'Full'
}
export abstract class IntegralUIItemDisplayMode {
  static readonly Partial = IntegralUIItemDisplayModeName.Partial;
  static readonly Full = IntegralUIItemDisplayModeName.Full;
}
declare enum IntegralUILabelAlignmentName {
    BottomCenter = 'BottomCenter',
    BottomLeft = 'BottomLeft',
    BottomRight = 'BottomRight',
    Inline = 'Inline',
    Left = 'Left',
    MiddleCenter = 'MiddleCenter',
    MiddleLeft = 'MiddleLeft',
    MiddleRight = 'MiddleRight',
    Right = 'Right',
    TopCenter = 'TopCenter',
    TopLeft = 'TopLeft',
    TopRight = 'TopRight'
}
export abstract class IntegralUILabelAlignment {
  static readonly BottomCenter = IntegralUILabelAlignmentName.BottomCenter;
  static readonly BottomLeft = IntegralUILabelAlignmentName.BottomLeft;
  static readonly BottomRight = IntegralUILabelAlignmentName.BottomRight;
  static readonly Inline = IntegralUILabelAlignmentName.Inline;
  static readonly Left = IntegralUILabelAlignmentName.Left;
  static readonly MiddleCenter = IntegralUILabelAlignmentName.MiddleCenter;
  static readonly MiddleLeft = IntegralUILabelAlignmentName.MiddleLeft;
  static readonly MiddleRight = IntegralUILabelAlignmentName.MiddleRight;
  static readonly Right = IntegralUILabelAlignmentName.Right;
  static readonly TopCenter = IntegralUILabelAlignmentName.TopCenter;
  static readonly TopLeft = IntegralUILabelAlignmentName.TopLeft;
  static readonly TopRight = IntegralUILabelAlignmentName.TopRight;
}
declare enum IntegralUIMoveDirectionName {
    After = 'After',
    At = 'At',
    Before = 'Before',
    Down = 'Down',
    First = 'First',
    Left = 'Left',
    Last = 'Last',
    Right = 'Right',
    Up = 'Up'
}
export abstract class IntegralUIMoveDirection {
  static readonly After = IntegralUIMoveDirectionName.After;
  static readonly At = IntegralUIMoveDirectionName.At;
  static readonly Before = IntegralUIMoveDirectionName.Before;
  static readonly Down = IntegralUIMoveDirectionName.Down;
  static readonly First = IntegralUIMoveDirectionName.First;
  static readonly Left = IntegralUIMoveDirectionName.Left;
  static readonly Last = IntegralUIMoveDirectionName.Last;
  static readonly Right = IntegralUIMoveDirectionName.Right;
  static readonly Up = IntegralUIMoveDirectionName.Up;
}
declare enum IntegralUINumericDisplayModeName {
    InBound = 'InBound',
    LeftRight = 'LeftRight',
    UpDown = 'UpDown'
}
export abstract class IntegralUINumericDisplayMode {
  static readonly InBound = IntegralUINumericDisplayModeName.InBound;
  static readonly LeftRight = IntegralUINumericDisplayModeName.LeftRight;
  static readonly UpDown = IntegralUINumericDisplayModeName.UpDown;
}
declare enum IntegralUIObjectStateName {
    Normal = 0,
    Hovered = 1,
    Selected = 2,
    Focused = 4,
    Disabled = 8
}
export abstract class IntegralUIObjectState {
  static readonly Normal = IntegralUIObjectStateName.Normal;
  static readonly Hovered = IntegralUIObjectStateName.Hovered;
  static readonly Selected = IntegralUIObjectStateName.Selected;
  static readonly Focused = IntegralUIObjectStateName.Focused;
  static readonly Disabled = IntegralUIObjectStateName.Disabled;
}
declare enum IntegralUIOrientationName {
    Horizontal = 'Horizontal',
    Vertical = 'Vertical'
}
export abstract class IntegralUIOrientation {
  static readonly Horizontal = IntegralUIOrientationName.Horizontal;
  static readonly Vertical = IntegralUIOrientationName.Vertical;
}
declare enum IntegralUIPlacementName {
    Top = 'Top',
    Right = 'Right',
    Bottom = 'Bottom',
    Left = 'Left'
}
export abstract class IntegralUIPlacement {
  static readonly Top = IntegralUIPlacementName.Top;
  static readonly Right = IntegralUIPlacementName.Right;
  static readonly Bottom = IntegralUIPlacementName.Bottom;
  static readonly Left = IntegralUIPlacementName.Left;
}
declare enum IntegralUIResizeName {
    None = 'None',
    TopLeft = 'TopLeft',
    Top = 'Top',
    TopRight = 'TopRight',
    Right = 'Right',
    BottomRight = 'BottomRight',
    Bottom = 'Bottom',
    BottomLeft = 'BottomLeft',
    Left = 'Left'
}
export abstract class IntegralUIResize {
  static readonly None = IntegralUIResizeName.None;
  static readonly TopLeft = IntegralUIResizeName.TopLeft;
  static readonly Top = IntegralUIResizeName.Top;
  static readonly TopRight = IntegralUIResizeName.TopRight;
  static readonly Right = IntegralUIResizeName.Right;
  static readonly BottomRight = IntegralUIResizeName.BottomRight;
  static readonly Bottom = IntegralUIResizeName.Bottom;
  static readonly BottomLeft = IntegralUIResizeName.BottomLeft;
  static readonly Left = IntegralUIResizeName.Left;
}
declare enum IntegralUIScrollModeName {
    Horizontal = 'Horizontal',
    Vertical = 'Vertical'
}
export abstract class IntegralUIScrollMode {
  static readonly Horizontal = IntegralUIScrollModeName.Horizontal;
  static readonly Vertical = IntegralUIScrollModeName.Vertical;
}
declare enum IntegralUISelectionModeName {
    None = 'None',
    One = 'One',
    MultiSimple = 'MultiSimple',
    MultiExtended = 'MultiExtended'
}
export abstract class IntegralUISelectionMode {
  static readonly None = IntegralUISelectionModeName.None;
  static readonly One = IntegralUISelectionModeName.One;
  static readonly MultiSimple = IntegralUISelectionModeName.MultiSimple;
  static readonly MultiExtended = IntegralUISelectionModeName.MultiExtended;
}
declare enum IntegralUISortModeName {
    Single = 'Single',
    Multiple = 'Multiple'
}
export abstract class IntegralUISortMode {
  static readonly Single = IntegralUISortModeName.Single;
  static readonly Multiple = IntegralUISortModeName.Multiple;
}
declare enum IntegralUISortOrderName {
    None = 'None',
    Ascending = 'Ascending',
    Descending = 'Descending'
}
export abstract class IntegralUISortOrder {
  static readonly None = IntegralUISortOrderName.None;
  static readonly Ascending = IntegralUISortOrderName.Ascending;
  static readonly Descending = IntegralUISortOrderName.Descending;
}
declare enum IntegralUISpeedModeName {
    VerySlow = 'VerySlow',
    Slow = 'Slow',
    Normal = 'Normal',
    Fast = 'Fast',
    VeryFast = 'VeryFast'
}
export abstract class IntegralUISpeedMode {
  static readonly VerySlow = IntegralUISpeedModeName.VerySlow;
  static readonly Slow = IntegralUISpeedModeName.Slow;
  static readonly Normal = IntegralUISpeedModeName.Normal;
  static readonly Fast = IntegralUISpeedModeName.Fast;
  static readonly VeryFast = IntegralUISpeedModeName.VeryFast;
}
declare enum IntegralUISlideDisplayModeName {
    Carousel = 'Carousel',
    Stream = 'Stream'
}
export abstract class IntegralUISlideDisplayMode {
  static readonly Carousel = IntegralUISlideDisplayModeName.Carousel;
  static readonly Stream = IntegralUISlideDisplayModeName.Stream;
}
declare enum IntegralUITabAlignmentName {
    TopLeft = 'TopLeft',
    Middle = 'Middle',
    BottomRight = 'BottomRight'
}
export abstract class IntegralUITabAlignment {
  static readonly TopLeft = IntegralUITabAlignmentName.TopLeft;
  static readonly Middle = IntegralUITabAlignmentName.Middle;
  static readonly BottomRight = IntegralUITabAlignmentName.BottomRight;
}
declare enum IntegralUITabDisplayModeName {
    AutoSized = 'AutoSized',
    Compressed = 'Compressed',
    Justified = 'Justified'
}
export abstract class IntegralUITabDisplayMode {
  static readonly AutoSized = IntegralUITabDisplayModeName.AutoSized;
  static readonly Compressed = IntegralUITabDisplayModeName.Compressed;
  static readonly Justified = IntegralUITabDisplayModeName.Justified;
}
declare enum IntegralUITabNavigationModeName {
    Normal = 'Normal',
    Multiline = 'Multiline'
}
export abstract class IntegralUITabNavigationMode {
  static readonly Normal = IntegralUITabNavigationModeName.Normal;
  static readonly Multiline = IntegralUITabNavigationModeName.Multiline;
}
declare enum IntegralUITabScrollModeName {
    None = 'None',
    InBound = 'InBound',
    OutBound = 'OutBound'
}
export abstract class IntegralUITabScrollMode {
  static readonly None = IntegralUITabScrollModeName.None;
  static readonly InBound = IntegralUITabScrollModeName.InBound;
  static readonly OutBound = IntegralUITabScrollModeName.OutBound;
}
declare enum IntegralUITabStripPlacementName {
    Top = 'Top',
    Right = 'Right',
    Middle = 'Middle',
    Bottom = 'Bottom',
    Left = 'Left'
}
export abstract class IntegralUITabStripPlacement {
  static readonly Top = IntegralUITabStripPlacementName.Top;
  static readonly Right = IntegralUITabStripPlacementName.Right;
  static readonly Middle = IntegralUITabStripPlacementName.Middle;
  static readonly Bottom = IntegralUITabStripPlacementName.Bottom;
  static readonly Left = IntegralUITabStripPlacementName.Left;
}
declare enum IntegralUIThemeName {
    None = 'None',
    Office = 'Office'
}
export abstract class IntegralUITheme {
  static readonly None = IntegralUIThemeName.None;
  static readonly Office = IntegralUIThemeName.Office;
}
declare enum IntegralUIToastAlignmentName {
    BottomCenter = 'BottomCenter',
    BottomFull = 'BottomFull',
    BottomLeft = 'BottomLeft',
    BottomRight = 'BottomRight',
    TopCenter = 'TopCenter',
    TopFull = 'TopFull',
    TopLeft = 'TopLeft',
    TopRight = 'TopRight'
}
export abstract class IntegralUIToastAlignment {
  static readonly BottomCenter = IntegralUIToastAlignmentName.BottomCenter;
  static readonly BottomFull = IntegralUIToastAlignmentName.BottomFull;
  static readonly BottomLeft = IntegralUIToastAlignmentName.BottomLeft;
  static readonly BottomRight = IntegralUIToastAlignmentName.BottomRight;
  static readonly TopCenter = IntegralUIToastAlignmentName.TopCenter;
  static readonly TopFull = IntegralUIToastAlignmentName.TopFull;
  static readonly TopLeft = IntegralUIToastAlignmentName.TopLeft;
  static readonly TopRight = IntegralUIToastAlignmentName.TopRight;
}
declare enum IntegralUIToastTypeName {
    Error = 'Error',
    Info = 'Info',
    Success = 'Success',
    Warning = 'Warning'
}
export abstract class IntegralUIToastType {
  static readonly Error = IntegralUIToastTypeName.Error;
  static readonly Info = IntegralUIToastTypeName.Info;
  static readonly Success = IntegralUIToastTypeName.Success;
  static readonly Warning = IntegralUIToastTypeName.Warning;
}
declare enum IntegralUIToolItemTypeName {
    Button = 'Button',
    CheckBox = 'CheckBox',
    ColorPicker = 'ColorPicker',
    DatePicker = 'DatePicker',
    DropDownList = 'DropDownList',
    Image = 'Image',
    Label = 'Label',
    ListScroller = 'ListScroller',
    Numeric = 'Numeric',
    ProgressBar = 'ProgressBar',
    RadioButton = 'RadioButton',
    Rating = 'Rating',
    Separator = 'Separator',
    Slider = 'Slider',
    TextBox = 'TextBox'
}
export abstract class IntegralUIToolItemType {
  static readonly Button = IntegralUIToolItemTypeName.Button;
  static readonly CheckBox = IntegralUIToolItemTypeName.CheckBox;
  static readonly ColorPicker = IntegralUIToolItemTypeName.ColorPicker;
  static readonly DatePicker = IntegralUIToolItemTypeName.DatePicker;
  static readonly DropDownList = IntegralUIToolItemTypeName.DropDownList;
  static readonly Image = IntegralUIToolItemTypeName.Image;
  static readonly Label = IntegralUIToolItemTypeName.Label;
  static readonly ListScroller = IntegralUIToolItemTypeName.ListScroller;
  static readonly Numeric = IntegralUIToolItemTypeName.Numeric;
  static readonly ProgressBar = IntegralUIToolItemTypeName.ProgressBar;
  static readonly RadioButton = IntegralUIToolItemTypeName.RadioButton;
  static readonly Rating = IntegralUIToolItemTypeName.Rating;
  static readonly Separator = IntegralUIToolItemTypeName.Separator;
  static readonly Slider = IntegralUIToolItemTypeName.Slider;
  static readonly TextBox = IntegralUIToolItemTypeName.TextBox;
}
declare enum IntegralUIVerticalAlignmentName {
    Top = 'Top',
    Middle = 'Middle',
    Bottom = 'Bottom'
}
export abstract class IntegralUIVerticalAlignment {
  static readonly Top = IntegralUIVerticalAlignmentName.Top;
  static readonly Middle = IntegralUIVerticalAlignmentName.Middle;
  static readonly Bottom = IntegralUIVerticalAlignmentName.Bottom;
}
declare enum IntegralUIVisibilityName {
    None = 0,
    Hover = 1,
    Click = 2,
    Always = 4
}
export abstract class IntegralUIVisibility {
  static readonly None = IntegralUIVisibilityName.None;
  static readonly Hover = IntegralUIVisibilityName.Hover;
  static readonly Click = IntegralUIVisibilityName.Click;
  static readonly Always = IntegralUIVisibilityName.Always;
}
declare enum IntegralUIWeekDaysName {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
}
export abstract class IntegralUIWeekDays {
  static readonly Monday = IntegralUIWeekDaysName.Monday;
  static readonly Tuesday = IntegralUIWeekDaysName.Tuesday;
  static readonly Wednesday = IntegralUIWeekDaysName.Wednesday;
  static readonly Thursday = IntegralUIWeekDaysName.Thursday;
  static readonly Friday = IntegralUIWeekDaysName.Friday;
  static readonly Saturday = IntegralUIWeekDaysName.Saturday;
  static readonly Sunday = IntegralUIWeekDaysName.Sunday;
}
declare enum IntegralUIWindowStateName {
  Maximized = "Maximized",
  Minimized = "Minimized",
  Normal = "Normal"
}
export abstract class IntegralUIWindowState {
  static readonly Maximized = IntegralUIWindowStateName.Maximized;
  static readonly Minimized = IntegralUIWindowStateName.Minimized;
  static readonly Normal = IntegralUIWindowStateName.Normal;
}
export default IntegralUIObjectState;
