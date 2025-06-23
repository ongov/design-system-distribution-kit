<p class="ontario-lead-statement">Always use the modified version of Raleway font for headings and Open Sans for leads and body text.</p>

**[Guiding principle]({{path '../../docs/documentation/design-principles.html'}}):** Be consistent.

<hr class="dark">

## Before you start – install Raleway modified
To make it easier to read, we’ve modified the “w” and the numbers of the standard Raleway font. So the **first thing you’ll need to do** before you start designing is to [download the Ontario Design System fonts]({{path '../../fonts/ds-fonts.zip'}}). (Users won’t need it installed because they’ll get it directly from us as their pages load.)

<hr>

## Parts of the page

<img src="{{path '../../markdown-assets/fonts/DS_TypographyHeadings_Guidance.png'}}" alt="Heading: Business services. Example of a lead statement and a subheader reading: Get services online. Arrows pointing to Heading, lead statement and subheading." />

<hr>

## Headings
Writers use headings and subheadings to structure information on a page. 

### Headings font
Use the **Raleway modified** font for headings on Ontario webpages. If a character is not part of Raleway modified the user will see it as either (in order): 
1. Open Sans
2. Helvetica Neue
3. Sans Serif 

Use (almost) black text (`#1A1A1A`) for the standard font colour against a white background (`#FFFFFF`).

### Heading levels
There are six heading levels: H1 to H6. H1 is the title of the page and H2-H6 are subheading levels. Generally, writers try to not go further than H4 because too many nested subheadings can make a page harder to read.  

The approximate typescales for H1 to H6 headings are:

* 1.2 for desktop screens 
* 1.137 for mobile screens 

The font weight for headings on both desktop and mobile screens is <code>700</code>.

#### Do:
* use only one H1 heading per page 
* use H2 to H6 headings (in order) to further structure your page 
    * for example, use an H3 under an H2, an H4 under an H3, etc. 

#### Do not:
* use more than one H1 per page 
* skip a heading level
   * for example, do not put an H3 under an H1 without an H2 in between

<hr>

## Lead text

On Ontario webpages, the “lead” is the text that goes directly under the title (H1). Writers use lead text to briefly tell the user what they’ll find on the page so they know if they’re in the right place or not.

Use the <code>ontario-lead-statement</code> class for lead text.

<p class="ontario-lead-statement">Lead content looks like this</p>

### Lead text font

Use Open Sans font for lead text on Ontario webpages. If a character is not part of Open Sans, the user will see it as either (in order): 
1. Helvetica Neue
2. Sans Serif 

The default size for lead text is 22px for both desktop and mobile screens.

Use (almost) black text (`#1A1A1A`) for lead text against a white page background (`#FFFFFF`).

<hr>

## Body text
Use body text for the main content and paragraphs of your page.

<strong>Use the <code>&lt;strong&gt;</code> tag for bolded body text</strong>. 

<cite>Use the <code>&lt;cite&gt;</code> tag for italics</cite>.

### Body text font
Use Open Sans font for all body text on Ontario webpages. If a character is not part of Open Sans, the user will see it as either (in order): 
1. Helvetica Neue
2. Sans Serif 

The default body text size is 16px for desktop and mobile screens.

Use (almost) black text (<code>#1A1A1A</code>) for body text against a white page background (<code>#FFFFFF</code>). 

<hr>

## Font specifications (summary chart)

For all fonts below, across desktop and mobile screen sizes:
* **Text colour:** <code>#1A1A1A</code>
* **Page body colour:** <code>#FFFFFF</code>

<div class="fractal-table-scroll">

| Name      | Mobile styles  | Desktop styles  | 
|-----------|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| <p class="fractal-heading--h1">H1</p>        | Font: <code>Raleway modified</code><br>Size: <code>32px</code><br>Line Height: <code>1.29</code><br>Weight: <code>700</code><br>Spacing: <code>0.04rem</code> | Font: <code>Raleway modified</code><br>Size: <code>40px</code><br>Line Height: <code>1.2</code><br>Weight: <code>700</code><br>Spacing: <code>0.04rem</code>   | 
| <p class="fractal-heading--h2">H2</p>        | Font: <code>Raleway modified</code><br>Size: <code>27px</code><br>Line Height: <code>1.37</code><br>Weight: <code>700</code><br>Spacing: <code>0.03rem</code> | Font: <code>Raleway modified</code><br>Size: <code>33px</code><br>Line Height: <code>1.33</code><br>Weight: <code>700</code><br>Spacing: <code>0.02rem</code>  | 
| <p class="fractal-heading--h3">H3</p>        | Font: <code>Raleway modified</code><br>Size: <code>23px</code><br>Line Height: <code>1.39</code><br>Weight: <code>700</code><br>Spacing: <code>0.02rem</code> | Font: <code>Raleway modified</code><br>Size: <code>28px</code><br>Line Height: <code>1.43</code><br>Weight: <code>700</code><br>Spacing: <code>0.02rem</code>  | 
| <p class="fractal-heading--h4">H4</p>        | Font: <code>Raleway modified</code><br>Size: <code>20px</code><br>Line Height: <code>1.5</code><br>Weight: <code>700</code><br>Spacing: <code>0.03rem</code>  | Font: <code>Raleway modified</code><br>Size: <code>24px</code><br>Line Height: <code>1.5</code><br>Weight: <code>700</code><br>Spacing: <code>0.0313rem</code> | 
| <p class="fractal-heading--h5">H5</p>        | Font: <code>Raleway modified</code><br>Size: <code>18px</code><br>Line Height: <code>1.56</code><br>Weight: <code>700</code><br>Spacing: <code>0.03rem</code> | Font: <code>Raleway modified</code><br>Size: <code>19px</code><br>Line Height: <code>1.5</code><br>Weight: <code>700</code><br>Spacing: <code>0.025rem</code>  | 
| <p claass="fractal-heading--h6">H6</p>        | Font: <code>Raleway modified</code><br>Size: <code>16px</code><br>Line Height: <code>1.56</code><br>Weight: <code>700</code><br>Spacing: <code>0.03rem</code> | Font: <code>Raleway modified</code><br>Size: <code>16px</code><br>Line Height: <code>1.5</code><br>Weight: <code>700</code><br>Spacing: <code>0.025rem</code>  | 
| Body text | Font: <code>Open Sans</code><br>Size: <code>16px</code><br>Line Height: <code>1.6</code><br>Weight: <code>400</code>                    | Font: <code>Open Sans</code><br>Size: <code>16px</code><br>Line Height: <code>1.6</code><br>Weight: <code>400</code>                     | 
| <p class="ontario-lead-statement">Lead text</p> | Font: <code>Open Sans</code><br>Size: <code>20px</code><br>Line Height: <code>1.6</code><br>Weight: <code>400</code>                    | Font: <code>Open Sans</code><br>Size: <code>22px</code><br>Line Height: <code>1.6</code><br>Weight: <code>400</code>                  | 

</div>

<hr>

## Help improve this page

If you have other suggestions, advice or any questions on fonts and typography, the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
