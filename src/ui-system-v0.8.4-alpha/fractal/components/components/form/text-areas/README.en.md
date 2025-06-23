**[Guiding principle]({{path '../../docs/documentation/design-principles.html'}}):** Give the user control.

## When to use this component

A text area (or <q>text box</q>) is a **multi-line field** where the user can type in information.

Use a text area if you want the user to enter **more than** a single line of information.

Do not use a text area if:
- you want users to enter answers that are **only one line** (instead, consider a [text input]({{path './text-inputs.html'}})) 
- it will be easier for the user to choose from a **set list of options**
   - users can find open-ended questions difficult to answer, so only use them when it doesn’t make sense to give them answers to choose from with a [dropdown list]({{path './dropdown-lists.html'}}), [radio buttons]({{path './radio-buttons.html'}}) or [checkboxes]({{path './checkboxes.html'}})

### Examples
Examples of where to use text areas include:
- comments and user feedback 
- <q>tell us about yourself</q> sections
- requests for more detail

<img src="{{path '../../markdown-assets/textarea/DS_Textarea_Feedback.png'}}" alt="Provide your feedback. Comments (required). Please don't include any personal or financial information. Arrow pointing to empty text area." />

<hr>

## Technical specifications
In general, give the user control of what they’re entering.

### Do:
- always **include an associated [label]({{path './labels.html'}}) with a matching ID** 
- include [hint text]({{path './hint-text.html'}}) only if needed
- **left-align** text fields (as well as their labels and hint text)
- allow the user to:
   - **copy and paste** text
   - input **any characters** (although this doesn’t mean they can submit any type of character, and remember you can reformat responses on the backend)
   - make their answer **as long as they want** (although they may get an error)
- make the input field the **appropriate height** for the type of answer you want
   - this serves as a visual indicator for about how long the user’s response should be (for example, about 3 lines)
- have the text area take up the **full width of the surrounding container**
- **preserve line breaks** using `white-space: pre-wrap;` 

### Do not:
- **limit the number or type of characters** the user can input
   - instead, give clear instructions and/or an error message if needed – for example, <q>Tell us about yourself (200 word maximum length)</q>
- put placeholder or hint text **within the text area**
- **remove the resizing handle** in the corner of the text area that allows users to drag the corner of the field to make it longer or shorter
- put a [label]({{path './labels.html'}}) or [hint text]({{path './hint-text.html'}}) **in the text area itself**
  - using “placeholder text” like this is [not a good practice](https://www.nngroup.com/articles/form-design-placeholders/) from a usability or accessibility perspective because it disappears when users start typing

<hr>

## Help improve this page
If you have other suggestions or advice or any questions on text areas, the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
