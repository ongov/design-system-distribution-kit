**[Guiding principle]({{path '../../docs/documentation/design-principles.html'}}):** Help the user be successful the first time.

## When to use this component

Always use labels for **form input elements** such as:
* [radio buttons]({{path './radio-buttons.html'}})
* [dropdowns]({{path './dropdown-lists.html'}}) 
* [checkboxes]({{path './checkboxes.html'}})
* [text inputs]({{path './text-inputs.html'}})

Links don’t need labels, whether they are styled as buttons, icons or regular links.

<img src="{{path '../../markdown-assets/labels/DS_Labels_Label-Hinttext-Textinput.png'}}" alt="Label: licence plate number (required). Hint text: for example, AAAA111. Empty text input field." />

<hr>

## Technical specifications

### Using labels as headings
If there is only **one** form element on the page (for example, the only thing on a page is a label asking for the user’s licence plate number and a text input) :
* make the label the page heading by including it inside as an h1
* use “large label” formatting

### Do:
* **left-align** labels, text inputs and hint text
* **always use a "for" attribute** that ties the label to the specific input - it’s an accessibility requirement
* ensure labels are located **close to their associated field**
* always specify if a response is **optional or required** in brackets at the end of the label
   * add (required) next to questions that the user must answer to move on
   * add (optional) next to questions that the user does not have to answer to move on

<img src="{{path '../../markdown-assets/labels/DS_Labels_RequiredOptional.png'}}" alt="Provide your contact information section. Name (required), email address (required) and phone number (optional), with three empty text input fields under each label." />

### Do not:
* use labels for interactive elements that aren’t form input elements (such as buttons)
* put labels inside text inputs. This is [bad practice for accessibility]({{path './text-inputs.html#leave-text-input-fields-blank'}}).

<hr>

## Label specifications (summary chart)

<div class="fractal-table-scroll">

| Component type |  Mobile specs | Desktop specs |
| ------------------ | ------------------------- | ------------------ |
| Standard label | Text Color:&nbsp;`#1A1A1A`<br>Background:&nbsp;`#FFFFFF`<br>Font:&nbsp;`Raleway Modified`<br>Size:&nbsp;`18px`<br>Line Height:&nbsp;`1.56`<br>Weight:&nbsp;`700`<br>Spacing:&nbsp;`0.03rem` | Text Color:&nbsp;`#1A1A1A`<br>Background:&nbsp;`#FFFFFF`<br>Font:&nbsp;`Raleway Modified`<br>Size:&nbsp;`19px`<br>Line Height:&nbsp;`1.5`<br>Weight:&nbsp;`700`<br>Spacing:&nbsp;`0.025rem` |
| Large label | Text&nbsp;Color:&nbsp;`#1A1A1A`<br>Background:&nbsp;`#FFFFFF`<br>Font:&nbsp;`Raleway Modified`<br>Size:&nbsp;`23px`<br>Line&nbsp;Height:&nbsp;`1.39`<br>Weight:&nbsp;`700`<br>Spacing:&nbsp;`0.02rem` |Text&nbsp;Color:&nbsp;`#1A1A1A`<br>Background:&nbsp;`#FFFFFF`<br>Font:&nbsp;`Raleway Modified`<br>Size:&nbsp;`28px`<br>Line&nbsp;Height:&nbsp;`1.43`<br>Weight:&nbsp;`700`<br>Spacing:&nbsp;`0.02rem` |

</div>

<hr>

## Help improve this page
If you have suggestions, advice or any questions about labels the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
