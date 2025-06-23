## When to use this component
Page alerts contain **time-sensitive** pieces of information and typically appear at the top of a page to capture the user’s attention.  

Use page alerts to:

* bring a user’s attention to important page information or system status
* communicate the result of a user action (for example, error or success)

Do not use page alerts to simply add emphasis or highlight content &ndash; use [callouts and asides]({{path './callouts-asides.html'}}) instead.

<hr>

## How page alerts work
Page alerts occur after a change of context. For example, when a user clicks a link or submits a form, launching a new page or an updated view.

Success and error summary alerts are used **following a form submission.** When the new page or view is first loaded, ensure that focus is moved to the success or error summary alert. Screen readers will then announce the alert, letting the user know the status of their form submission and what to do next.

The HTML title element should also start with copy that indicates the status (for example, "Success:" or "Error:" or “There is a problem:”) to ensure feedback is provided in the page’s name.

<hr>

## Types of page alerts

There are four main types of page alerts:

* [Information](#info)
* [Warning](#warning)
* [Success](#success)
* [Error](#error)

### <a name="info"></a>Information
Use **information alerts** for important **time-sensitive** information. For example, important dates, recent content updates, new policies or email confirmation.

### <a name="warning"></a>Warning
**Warning alerts** tell the user something **urgent** or help the user **avoid a problem.** For example, travel information, content trigger warnings or location closures.

### <a name="success"></a>Success
**Success alerts** should be used to tell the user that the **action was successful.** Use them for confirmation messaging as a user moves through a web form. For example, when a payment has been successfully processed in a transaction.

### <a name="error"></a>Error
**Error alerts** tell users that the action was **unsuccessful** or that there was a **validation error** upon submission of a form. For example, a user incorrectly completes a field and the system does not allow the user to complete the task upon submission unless the errors are fixed.

<hr>

## Best practices

Page alerts are typically at the top of the page and above the main body content. In some cases, there might be an alert needed for a particular section of a page - in this case, place the alert next to impacted points of service or information.

If a user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible, for example by providing a link.

### Do:
* try to limit to one alert per page
* write concise headings and copy totalling a max of **280 characters**
* page alerts must include headings that clearly convey the purpose of the alert (for example, "Warning")

### Do not:
* use page alerts just for styling regular content (for emphasis or highlighting)
* include alerts that are not related to the user’s current goal.

<hr>

## Help improve this page

If you have other suggestions or advice or any questions on page alerts, the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
