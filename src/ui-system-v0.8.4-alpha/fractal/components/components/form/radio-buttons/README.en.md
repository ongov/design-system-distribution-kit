**[Guiding principle]({{path '../../docs/documentation/design-principles.html'}}):** Give the user control.

## When to use this component
Use radio buttons when you want the user to select **only one option** from a list.

If you want the user to select more than one option use a list with [checkboxes]({{path './checkboxes.html'}}).

<hr>

## Order of radio button lists

Put radio button lists  in **alphabetical** order, with these exceptions:
* list **yes before no**
* if there is an option that you know about **[90% or more](https://uxplanet.org/ux-design-drop-downs-in-forms-c6943ec30037) of your users** will choose, put that option first 
  * for example, list Ontario first if users are choosing their province from a list
  * be careful not to bias the user’s choice or imply the importance of option one over another
* put any **“None of the above”** or **“I do not know”** options last

<hr>

## Technical specifications

<img src="{{path '../../markdown-assets/radio-buttons/DS_Radiobuttons_Label.png'}}" alt="Heading: choose your renewal term (required). Two radio buttons with options listing Two year and One year. Arrow pointing to the Two Year option to indicate label." />

### Do:
* **always include an associated  [label]({{path './labels.html'}}) with a matching ID** next to each radio button
* position radio buttons to the **left of their labels**
* **left-align** radio buttons
* always make the **label and the radio button selectable**
* stack radio buttons **vertically**
  * exception: yes/no can be listed horizontally
* **include a “None of the above”** or **“I do not know”** option if they are valid because users cannot go back to having no option selected once they have selected one

### Do not:
* change a radio button’s **default size** (32px on desktop and 36px on mobile, with a hit area of 48px for both)
* **pre-select** radio buttons (users might miss the question or submit the wrong answer)

<hr>

## Help improve this page
The design system team is considering making a smaller radio button available – please [let us know]({{path '../../docs/give-feedback.html'}}) if there is a use case for it.

If you have other suggestions or advice or any questions on radio buttons, the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
