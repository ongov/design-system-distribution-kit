**[Guiding principle]({{path '../../docs/documentation/design-principles.html'}}):** Help the user be successful the first time.

## When to use this component

### Hint text
Only use hint text when you need to:
* explain why you are asking a certain question 
    * example: “We will only email you if there’s a problem with your order”
* provide clarifying details
   * example: “For example, A1A 1A1”
* tell the user where to find the information you’re asking for
   * example: “Find taxes payable on line 435 of your notice of assessment”

### Hint expander
A hint expander is a hint text that can be shown or hidden using a toggle. Use a hint expander when:
* the hint text is longer than two sentences
* you want to give the user the option to see a helpful image, such as where to find a permit number
  * remember you will also need text that explains the image
* make sure the toggle tells the user what they’ll see before they click
   * for example, if the hint expander is an image of a circled permit number, the text should say “Where is my permit number?”

Don’t nest hint expanders, and try not to use more than one per label.

<hr>

## Technical specifications

### Do:
* left-align hint text
* put hint text under the associated label
* use a unique ID that ties the hint text to the specific input

### Do not:
* put hint text inside text inputs. This is [bad practice for accessibility]({{path './text-inputs.html#leave-text-input-fields-blank'}}).
* include photos or more than two sentences in hint text (use a hint expander instead)
* use manual line breaks (`<br>` tags)

<hr>

## Hint text specifications (summary chart)

<div class="fractal-table-scroll">

| Component type | Mobile specs | Desktop specs |
| ------------------ | -------------------- | ------------------ |
| Hint text |  Text&nbsp;Color:&nbsp;`#666666`<br>Background:&nbsp;`#FFFFFF`<br>Font:&nbsp;`Open Sans`<br>Size:&nbsp;`16px`<br>Line&nbsp;Height:&nbsp;`1.6`<br>Weight:&nbsp;`400` | Text&nbsp;Color:&nbsp;`#666666`<br>Background:&nbsp;`#FFFFFF`<br>Font:&nbsp;`Open Sans`<br>Size: `16px`<br>Line&nbsp;Height:&nbsp;`1.6`<br>Weight:&nbsp;`400`|
| Hint expander |  Text&nbsp;Color:&nbsp;`#1A1A1A`<br>Background:&nbsp;`#FFFFFF`<br>Font:&nbsp;`Open Sans`<br>Size:&nbsp;`16px`<br>Line&nbsp;Height:&nbsp;`1.6`<br>Weight:&nbsp;`400` | Text&nbsp;Color:&nbsp;`#1A1A1A`<br>Background:&nbsp;`#FFFFFF`<br>Font:&nbsp;`Open Sans`<br>Size:&nbsp;`16px`<br>Line&nbsp;Height:&nbsp;`1.6`<br>Weight:&nbsp;`400` |

</div>

<hr>

## Help improve this page
If you have suggestions, advice or any questions about hint text the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
