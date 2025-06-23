**[Guiding principle]({{path '../../docs/documentation/design-principles.html'}}):** Give the user control.

## When to use this component

Use checkboxes when you want the user to:
- select **more than one option** from a list
- **sign off** or agree to something using a single checkbox

If you want the user to select **only one option** use a list with [radio buttons]({{path './radio-buttons.html'}}).

<hr>

## Order of checkbox lists

Put checkbox lists in **alphabetical** order, with these exceptions:
- list **yes before no**
- if there is an option that you know about **[90% or more](https://uxplanet.org/ux-design-drop-downs-in-forms-c6943ec30037) of your users** will choose, put that option first 
  - for example, list Ontario first if users are choosing their province from a list
  - be careful not to bias the user’s choice or imply the importance of one option over another
- put any **“None of the above” or “I do not know” options last**

<hr>

## Technical specifications

<img src="{{path '../../markdown-assets/checkboxes/DS_Checkboxes_Label.png'}}" alt="Examples showing the associated labels for checkbox inputs." />

### Do:
- **always include an associated  [label]({{path './labels.html'}}) with a matching ID** next to each checkbox
- position checkboxes to the **left of their labels** 
- **left-align** checkboxes
- always make the **label and the checkbox selectable**
- stack checkbox **vertically**
  - exception: yes/no can be listed horizontally

### Do not:
- change a checkbox’s **default size** (32 px by 32 px)
- **pre-select** checkboxes (users might miss the question or submit the wrong answer)

<hr>

## Help improve this page
The design system team is considering making a smaller checkbox available – please [let us know]({{path '../../docs/give-feedback.html'}}) if there is a use case for it.

If you have other suggestions or advice or any questions on checkboxes, the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
