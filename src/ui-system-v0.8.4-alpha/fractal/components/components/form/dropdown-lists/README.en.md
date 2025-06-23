**[Guiding principle]({{path '../../docs/documentation/design-principles.html'}}):** Give the user control.

## When to use this component

Because some users find them **hard to navigate**, only use dropdown lists (also known as “select boxes”) when you:
* want the user to choose from a **set list of options**
* cannot adequately capture the information using **other form elements** such as [radio buttons]({{path './radio-buttons.html'}}) or a [text input field]({{path './text-inputs.html'}})

Dropdown lists usually work well for inputs where:
* there is a **specific set of options** 
* **only one** option can be selected 
* there are only **7 to 15 options**

<hr>

## Options in dropdown lists
In general, options should be **intuitive** for users but should **not bias** them towards a specific answer. 

### Number of options
Dropdown lists work best for lists with **7 to 15 options**. If there are:
* fewer than 7 options, use a list of [radio buttons]({{path './radio-buttons.html'}}) instead
* more than 15 options, consider a [text input field]({{path './text-inputs.html'}}) with [predicted/type-ahead options](https://en.wikipedia.org/wiki/Incremental_search)

### Order of options
Dropdown list options should be listed **alphabetically** unless there is another logical order. For example, if you’re listing provinces, it would be logical to put Ontario at the top. 

Put any **“None of the above”** or **“I do not know” options last**.

### Choosing a default option

The “default option” is what appears in the dropdown list before the user clicks on it.

**Never** leave the default option **blank**.

If the purpose of the dropdown list is to **filter results**, use the “all” option as the default. For example, this image shows “All categories” as the default option:

<img src="{{path '../../markdown-assets/dropdowns/DS_Dropdowns_Defaultoption.png'}}" alt="Required field with select a category label and a dropdown showing all categories as the default option." />

**Only** if you know that **[90% or more](https://uxplanet.org/ux-design-drop-downs-in-forms-c6943ec30037) of your users** will choose one of the options you can put that option as the default. In this example, Canada is the default country because, in this case, we’re sure at least 90% of our users will live in Canada:

<img src="{{path '../../markdown-assets/dropdowns/DS_Dropdowns_90percentrule.png'}}" alt="Shipping address heading with dropdown list to complete the required country field. 'Canada' is selected as the default option." />

In **all other cases**, use the default option to **repeat the label** – this provides additional help to users with assistive devices like screen readers.

<img src="{{path '../../markdown-assets/dropdowns/DS_Dropdowns_Repeatlabel.png'}}" alt="Label: select a language (required). Dropdown menu with 'select a language' set as the default option." />

<hr>

## Technical specifications

The user’s browser determines how the dropdown list looks and works. **The browser’s default is most accessible** (for example, it will support keyboard input in addition to pointing with the mouse), so **do not add any customized styles to dropdown lists**.

<div class="fractal-table-scroll">

| Property | Mobile | Desktop |
|---------------|---------|--------|
| Border colour | `#1A1A1A` | `#1A1A1A` |
| Border width | `2px` | `2px` |
| Height | `48px` | `48px` |
| Width | `100%` | `100% and max width 736px` |

</div>

This is an example of Chrome using IOS:

<img src="{{path '../../markdown-assets/dropdowns/DS_Dropdowns_Chrome.png'}}" alt="Example of expanded dropdown that lists Canadian provinces and territories under Select your province/territory. Select is the default option.
" />

Dropdown lists (and all form input elements) **must include a label with matching ID to be accessible**. Please see the [labels guidance]({{path './labels.html'}}) to ensure your labels are accessible.


<hr>

## Help improve this page
If you have suggestions, advice or any questions about dropdown lists, the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
