## When to use this component
Callouts and asides are excerpts or related information that have been pulled out from a larger piece of content and given a different visual treatment to draw users’ attention. They may be used for:

* important snippets of information
* examples
* additional information about the page

<hr>

## Callouts
A **callout** is used to **emphasize an important snippet of information** within the flow of a page. Content in a callout should be something on the page that you want to highlight, but that is not **critical** information.

<hr>

## Asides
An **aside** should include content that is **not directly related to surrounding content** on the page. Content in an aside could be considered separate from the rest of the page content.

Use an aside rather than a callout when the content can be skipped over without affecting the natural flow of the rest of the content. Asides are coded differently from callouts so they don’t interrupt the flow of content for screen readers.

<hr>

## Best practices

### Do:
* keep text brief and aim for a maximum of 280 characters
* minimize the use of callouts and asides &ndash; avoid having multiple per page if possible
* choose a maximum of two [accent colours](#colours) that match branding initiatives

### Do not:
* use a callout or aside as a substitute for critical alerts or page alerts
* put an entire block of content (rather than a short excerpt) in a callout or aside

<hr>

## <a name="colours"></a> Colour options

You can use dedicated colours for the callout and aside accent line.  Add the following class names to the callout or aside div to apply.


| Colour     | Colour name                                                                      | Hex code                                                          |SCSS variable             |  Class Name |
|-----------|--------------------------------------------------------------|------------------------------------------------|---------------------|------|
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-teal"></div> | Dark teal (default) | `#367A76`   | `$ontario-colour-dark-teal` |  `ontario-border-highlight--teal` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-gold"></div> | Dark gold | `#86743D`  | `$ontario-colour-dark-gold` | `ontario-border-highlight--gold` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-yellow"></div> | Dark yellow | `#8A600D`  | `$ontario-colour-dark-yellow` | `ontario-border-highlight--yellow` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-taupe"></div> | Dark taupe | `#7B725C` | `$ontario-colour-dark-taupe` | `ontario-border-highlight--taupe` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-lime"></div> | Dark lime | `#5F8129` | `$ontario-colour-dark-lime` | `ontario-border-highlight--lime` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-sky"></div> | Dark sky | `#1080A6` | `$ontario-colour-dark-sky` |  `ontario-border-highlight--sky` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-purple"></div> | Dark purple| `#92278F` | `$ontario-colour-dark-purple` | `ontario-border-highlight--purple` |
 
<hr>

## Help improve this page

If you have other suggestions or advice or any questions on callouts and asides, the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
