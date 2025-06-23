**[Guiding principle]({{path '../../docs/documentation/design-principles.html'}}):** Be consistent

<hr class="dark">

## About this component
Spacing is the distance between elements on a page. 

We use two types of spacing:
* Padding is how much extra space there will be within an element.
* Margins are how much extra space there will be surrounding an element.

### Spacing is built in to components
We’ve given each element in the design system a default set of padding and margins that works with our 8-pixel spacing grid and should generally work well on any page or layout, without modification. 

Generally, an element will have a 40px margin below it by default. Labels will have a 16px margin below, to closely link the label with its associated form element. See example below:

<img src="{{path '../../markdown-assets/spacing/DS_Spacing_Guidance.png'}}" alt="Form with two empty required text input fields: Name on card and Card number. Image shows 16 pixel spacing between 'Name on card (required)' label and empty text input field below it. It then shows 40 pixel spacing between the empty text input field and 'Card number (required)' text. It also shows 16 pixel spacing between 'Card number' (required label and the empty text input field below it." />

### Override classes
If the default spacing for a specific element doesn’t work with your design, you can use override classes to customize the spacing.

Use override classes to apply padding and margins separately to any side of any element.

Only use override classes for spacing if the default spacing around an element causes problems for your design.

### Override class guidance

Ideally, align your spacing to an **8-pixel grid** – meaning all of your spacing amounts are a multiple of 8 pixels.

If an 8-pixel grid does not work, you can use a **4-pixel grid** – this may be the case when you’re aligning icons.

Generally, add space to the bottom of elements, not the top. This will help them flow better on different screen sizes.

There are separate classes for padding and margins. **Use the override classes as indicated in the following chart**.

<hr>

## Padding
When possible, use spacing variables that are multiples of 8. These are preferred over multiples of 4.

<div class="fractal-table-scroll">

| size |            top           |            right           |            bottom           |            left           |
| ---- | ------------------------ | -------------------------- | --------------------------- | ------------------------- |
|  *0* | <code>ontario-padding-top-0-!</code>  | <code>ontario-padding-right-0-!</code>  | <code>ontario-padding-bottom-0-!</code>  | <code>ontario-padding-left-0-!</code>  |
|   4  | <code>ontario-padding-top-4-!</code>  | <code>ontario-padding-right-4-!</code>  | <code>ontario-padding-bottom-4-!</code>  | <code>ontario-padding-left-4-!</code>  |
|  *8* | <code>ontario-padding-top-8-!</code>  | <code>ontario-padding-right-8-!</code>  | <code>ontario-padding-bottom-8-!</code>  | <code>ontario-padding-left-8-!</code>  |
|  12  | <code>ontario-padding-top-12-!</code> | <code>ontario-padding-right-12-!</code> | <code>ontario-padding-bottom-12-!</code> | <code>ontario-padding-left-12-!</code> |
| *16* | <code>ontario-padding-top-16-!</code> | <code>ontario-padding-right-16-!</code> | <code>ontario-padding-bottom-16-!</code> | <code>ontario-padding-left-16-!</code> |
|  24  | <code>ontario-padding-top-24-!</code> | <code>ontario-padding-right-24-!</code> | <code>ontario-padding-bottom-24-!</code> | <code>ontario-padding-left-24-!</code> |
| *32* | <code>ontario-padding-top-32-!</code> | <code>ontario-padding-right-32-!</code> | <code>ontario-padding-bottom-32-!</code> | <code>ontario-padding-left-32-!</code> |
|  40  | <code>ontario-padding-top-40-!</code> | <code>ontario-padding-right-40-!</code> | <code>ontario-padding-bottom-40-!</code> | <code>ontario-padding-left-40-!</code> |
| *48* | <code>ontario-padding-top-48-!</code> | <code>ontario-padding-right-48-!</code> | <code>ontario-padding-bottom-48-!</code> | <code>ontario-padding-left-48-!</code> |
|  64  | <code>ontario-padding-top-64-!</code> | <code>ontario-padding-right-64-!</code> | <code>ontario-padding-bottom-64-!</code> | <code>ontario-padding-left-64-!</code> |

</div>

<hr>

<div class="fractal-table-scroll">

## Margins

| size |           top           |           right           |           bottom           |           left           |
| ---- | ----------------------- | ------------------------- | -------------------------- | ------------------------ |
|  *0* | <code>ontario-margin-top-0-!</code>  | <code>ontario-margin-right-0-!</code>  | <code>ontario-margin-bottom-0-!</code> | <code>ontario-margin-left-0-!</code>  |
|   4  | <code>ontario-margin-top-4-!</code>  | <code>ontario-margin-right-4-!</code>  | <code>ontario-margin-bottom-4-!</code>  | <code>ontario-margin-left-4-!</code>  |
|  *8* | <code>ontario-margin-top-8-!</code>  | <code>ontario-margin-right-8-!</code>  | <code>ontario-margin-bottom-8-!</code>  | <code>ontario-margin-left-8-!</code>  |
|  12  | <code>ontario-margin-top-12-!</code> | <code>ontario-margin-right-12-!</code> | <code>ontario-margin-bottom-12-!</code> | <code>ontario-margin-left-12-!</code> |
| *16* | <code>ontario-margin-top-16-!</code> | <code>ontario-margin-right-16-!</code> | <code>ontario-margin-bottom-16-!</code> | <code>ontario-margin-left-16-!</code> |
|  24  | <code>ontario-margin-top-24-!</code> | <code>ontario-margin-right-24-!</code> | <code>ontario-margin-bottom-24-!</code> | <code>ontario-margin-left-24-!</code> |
| *32* | <code>ontario-margin-top-32-!</code> | <code>ontario-margin-right-32-!</code> | <code>ontario-margin-bottom-32-!</code> | <code>ontario-margin-left-32-!</code> |
|  40  | <code>ontario-margin-top-40-!</code> | <code>ontario-margin-right-40-!</code> | <code>ontario-margin-bottom-40-!</code> | <code>ontario-margin-left-40-!</code> |
| *48* | <code>ontario-margin-top-48-!</code> | <code>ontario-margin-right-48-!</code> | <code>ontario-margin-bottom-48-!</code> | <code>ontario-margin-left-48-!</code> |
|  64  | <code>ontario-margin-top-64-!</code> | <code>ontario-margin-right-64-!</code> | <code>ontario-margin-bottom-64-!</code> | <code>ontario-margin-left-64-!</code> 

</div>

<hr>

## Help improve this page
If you have suggestions, advice or any questions about spacing, or need custom spacing for your design the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
