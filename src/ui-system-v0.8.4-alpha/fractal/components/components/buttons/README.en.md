**[Guiding principle]({{path '../../docs/documentation/design-principles.html'}}):** Be consistent.

## When to use this component

Use buttons when you want the user to **do** something (often called a “call to action”), for example:
  * start an application process or a transaction
  * agree to make a payment
  * download a <abbr title="portable document format">PDF</abbr>

Don’t use a button when you’re not encouraging an action. Buttons **should not be used the same way as links**, which usually send the user to another page or to a different part of the same page.

<hr>

## Types of buttons

Use a **primary button** to draw attention to the **main action** you want to help the user take. Avoid using multiple primary buttons on one page unless the page has equally important calls to action. 

Use a **secondary button** for a **less important** call to action on a page. Avoid using multiple secondary buttons so the user is not confused about what they should do next. Instead, ask the writer to simplify or break up the content so that it doesn’t need multiple secondary buttons.

Use **tertiary buttons** for links that should function like a button, such as “edit” or “cancel” in applications. It’s okay to use more than one tertiary button on a page.

### Disabled buttons

Disabling buttons until users have correctly completed a form can cause usability and accessibility problems. Disabled buttons can create barriers for assistive technology users and users with physical or cognitive impairments, and they can be confusing and frustrating for all users because they do not help the user understand what they need to do to proceed.

A better approach is to **keep buttons enabled** and instead **develop error handling** to provide clear feedback about any missed fields or input errors when the user tries to submit the form. For guidance on error messaging, see [Page alerts]({{path './page-alerts.html'}}).

<hr>

## Technical specifications

<div class="fractal-table-scroll">

| Button type | Colour | Minimum width |
|----------------------|---------------------------------------------|------------------------|
| Primary button | Default background: `#0066CC`<br>Font: `#FFFFFF`<br>Hover background: `#00478F`<br>Active background: `#002142`|`160px` |
| Secondary button | Default background: `#FFFFFF`<br>Default border and font: `#0066CC`<br>Hover background: `#E0F0FF`<br>Hover border and font: `#00478F`<br>Active background: `#C2E0FF`<br>Active border and font: `#002142`| `160px` |
| Tertiary button | Default background: `none`<br>Default border: `none`<br>Default font: `#0066CC`<br>Hover background: `#E8E8E8`<br>Hover font: `#00478F`<br>Active background: `#D1D1D1`<br>Active font: `#002142`<br>| `160px`|

</div>

<hr>

The width of primary, secondary and tertiary buttons (minimum 160px) should be the size of the text label with additional padding:
* 24px internal padding on the right and left sides of the button text
* 16px internal padding on the top and bottom of the button text

There should be 32px spacing between buttons on desktop and 24px spacing between buttons on mobile.

### Desktop

<img src="{{path '../../markdown-assets/buttons/DS_Buttons_DesktopPadding.png'}}" alt="Examples showing the padding of normal state primary, secondary and tertiary buttons in desktop mode." />


### Mobile

<img src="{{path '../../markdown-assets/buttons/DS_Buttons_MobilePadding.png'}}" alt="Examples showing the padding of normal state primary, secondary and tertiary buttons in desktop mode." />



#### Do:
* ensure button text is clear, descriptive and action-oriented (for example, “Save your profile” or “Download your receipt”)
* use sentence case (capitalize only the first letter of the first word)
* use a maximum of 25 characters including spaces
* place buttons below form elements
  * when reading online, people’s eyes typically follow an “F” pattern, so you’re making it easier for the user by putting the call-to-action in a button where their eyes are naturally drawn anyway

##### The “F” pattern

<img src="{{path '../../markdown-assets/buttons/DS_Button_Fpattern.png'}}" alt="Examples showing the padding of normal state of primary, secondary and tertiary buttons in mobile mode with 25 character limit." />


#### Don’t:
* change button colours
* underline text for primary or secondary buttons
* use multiple primary and secondary buttons unless absolutely necessary
  * tertiary buttons aren’t as prominent as primary or secondary buttons so you can use a few if needed

<hr>

## Help improve this page
If you have other suggestions or advice or any questions on buttons, the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
