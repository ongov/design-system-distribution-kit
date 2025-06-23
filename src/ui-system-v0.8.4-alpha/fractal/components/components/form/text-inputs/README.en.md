**[Guiding principle]({{path '../../docs/documentation/design-principles.html'}}):** Give the user control.

## When to use this component

A text input is a **single-line field** where the user can type in information. For example:

<img src="{{path '../../markdown-assets/text-inputs/DS_Textinputs_Label-Hinttext-Textinput.png'}}" alt="Enter your vehicle information section. Label: licence plate number (required). Hint text: for example, AAAA111. Empty text input field." />

Use a text input if:
- you want the user to enter **no more than a single line** of information 
- you need **unique information** from the user such as their name or phone number 
- it’s **faster for the user** to write out an answer rather than choose from a list 

Do not use a text box if:
- you want users to enter answers that are **longer than one line** (instead, consider a [text area]({{path './text-areas.html'}}))
- you want users to choose from a **set list of responses** such as yes or no (instead, consider [radio buttons]({{path './radio-buttons.html'}}), [checkboxes]({{path './checkboxes.html'}}) or [dropdown lists]({{path './dropdown-lists.html'}})

<hr>

## Use appropriately sized text inputs
All text inputs have a height of 48px.

Providing clear [labels]({{path './labels.html'}}), [hint text]({{path './hint-text.html'}}) and specifying the width of the fields **gives the user an indication on how to correctly fill out the input field**. Choose the width of your text input field based on the type of information you’re asking for, but never limit the number of characters a user can input.

### Known input length
Use **fixed-width inputs** for content that has a specific, known length, such as a postal code. Add room for 1 or 2 extra character spaces if users are likely to add spaces or dashes. Our standard fixed input widths are:
- 2 characters (use for: date, month) 
- 3 characters (use for: area code, <abbr title="card verification code">CVC</abbr> on a credit card, age) 
- 4 characters (use for: year) 
- 7 characters (use for: postal code [includes extra character]) 
- 8 characters (use for: licence plate) 
- 11 characters (use for: <abbr title="Social Insurance Number">SIN</abbr> [includes extra character])

### Unknown input length
If you don’t know how many characters the user will need to input (for example, if you’re asking them for their name), make your text input **100% of the container**. 

<hr>

## Include the right keyboard code
Include the right code so the keyboard that comes up for mobile users matches the type of information you’re asking for. For example:
* `input type="text"`shows the normal keyboard
* `input type="email"` shows the normal keyboard plus a “@” and “.com”
* `input type="tel"`shows the numeric 0 to 9 keypad
* `input type="number"` shows a keyboard with numbers and symbols
* `input type="date"`shows the date selector
* `input type="datetime"` shows the date and time selector
* `input type="month"` shows the month and year selector

<hr>

## Let users choose formatting
Let users input information in any format and **reformat it as needed for your database on the backend**. For example, if you’re asking for a postal code, let users type it in upper- or lowercase, with or without spaces and dashes so any of these will be accepted:
* A1A1A1
* A1A-1A1
* A1A 1A1
* a1A 1a1

**Only** reformat information on the backend – don’t change how it appears to the user. 

<hr>

## Leave text input fields blank
Do not put a [label]({{path './labels.html'}}) or [hint text]({{path './hint-text.html'}}) in the text field itself. Using “placeholder text” like this is **[not a good practice](https://www.nngroup.com/articles/form-design-placeholders/) from a usability or accessibility perspective** because it disappears when users start typing.

<img src="{{path '../../markdown-assets/text-inputs/DS_Textinputs_Noplaceholder.png'}}" alt="Do not put placeholder text inside the text field. Label: full name (required). Text input field showing enter your full name as placeholder text." />

<hr>

## Additional technical specifications
In general, give the user control of what they’re entering and how they enter it.

### Do: 
* always include an **associated [label]({{path './labels.html'}}) with a matching ID** above a text box 
* include [hint text]({{path './hint-text.html'}}) only if needed
* **left-align** text areas (as well as their labels and hint text)
* usually **stack text inputs vertically**
   * exception: sometimes it may make sense to include text inputs next to each outer, such as the birth/year/month inputs when asking for someone’s birthday 
- allow the user to:
   - **copy and paste** text
   - input **any characters** (although this doesn’t mean they can submit any type of character)
   - make their answer **as long as they want** (although they may get an error)
* enable **autofill**
   * for example, if a user has their address stored in their web browser so it fills in address form fields automatically, let this happen
* use **one input field**, rather than breaking a data element into multiple input fields
  * for example, use a single field for a credit card number, rather than breaking it into four fields

<img src="{{path '../../markdown-assets/text-inputs/DS_Textinputs_Separatefields.png'}}" alt="Do this: One input field labelled 'credit card number (required)'. Don't do this: Input field separated into 4 input fields labelled 'credit card number (required)'" />

### Do not:
* **limit the number or type of characters** the user can input
   * instead, give clear instructions and/or an error message if needed
* use **auto-tab**, which is automatically moving the user’s cursor to the next text input

<hr>

## Help improve this page
If you have other suggestions or advice or any questions on text inputs, the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
