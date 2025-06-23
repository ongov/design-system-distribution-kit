## Palette types

The full Ontario digital colour palette (based on the marketing colour palette for print and social media) is made up of:

* **1 [system colour palette](#system)** – use only for assigned purposes (such as regular text, unvisited/visited links, button text and confirmation text – the full list is in the chart below)
* **1 [greyscale colour palette](#greyscale)** – mainly hard-coded into components (such as tables), but you can use the greys with discretion for the same purposes as the accent colour palette
* **1 [accent colour palette](#accent)** in **3 shades** ([base](#base), [light](#light) and [dark](#dark)) – use for digital marketing or other page elements (such as infographics, banners, illustrations and icons)

<hr>

## <a name="system"></a> System colour palette

These colours are used in specific ways to ensure **consistency across all our digital services** (ontario.ca, applications, transactional services, digital marketing). Do not use them for other purposes (exceptions: system-black and system-white – use these as needed).

<div class="fractal-table-scroll">

| Colour | Colour name | Hex code | SCSS variable | Notes |
|---|---|---|---|---|
| <div class="ontario-bg-black fractal-colour-circle fractal-colour-outline"></div>   | System-black | `#1A1A1A` | `$ontario-colour-black` | Default colour for most text (such as body, headings, subheadings) |
| <div class="fractal-bg-white fractal-colour-circle fractal-colour-outline"></div>   | System-white | `#FFFFFF` | `$ontario-colour-white` | Text on primary buttons, dark backgrounds |
| <div class="fractal-bg-alert fractal-colour-circle fractal-colour-outline"></div>   | Alert | `#CD0000` | `$ontario-colour-alert` | Alert-level icons, left-hand vertical bar of alert box or error box |
| <div class="fractal-bg-alert-light fractal-colour-circle fractal-colour-outline"></div>   | Alert light | `#FCEFF0` | `$ontario-colour-alert-light` | Background of alert box |
| <div class="fractal-bg-success fractal-colour-circle fractal-colour-outline"></div>   | Success | `#118847` | `$ontario-colour-success` | Success-level icons, left-hand vertical bar of success box |
| <div class="fractal-bg-success-light fractal-colour-circle fractal-colour-outline"></div>   | Success light| `#E5f0E9` | `$ontario-colour-success-light` | Background of success box |
| <div class="fractal-bg-warning fractal-colour-circle fractal-colour-outline"></div>   | Warning | `#FFD440` | `$ontario-colour-warning` | Warning-level icons, left-hand vertical bar of warning box |
| <div class="fractal-bg-warning-light fractal-colour-circle fractal-colour-outline"></div>   | Warning light | `#FEF6DC` | `$ontario-colour-warning-light` | Background of warning box |
| <div class="fractal-bg-information fractal-colour-circle fractal-colour-outline"></div>   | Information | `#1080A6` | `$ontario-colour-information` | Information-level icons, left-hand vertical bar of information box |
| <div class="fractal-bg-information-light fractal-colour-circle fractal-colour-outline"></div>   | Information light | `#E2F0F4` | `$ontario-colour-information-light` | Background of information box |
| <div class="fractal-bg-link fractal-colour-circle fractal-colour-outline"></div>   | Link | `#0066cc` | `$ontario-colour-link` | Buttons and unvisited links |
| <div class="fractal-bg-link--hover fractal-colour-circle fractal-colour-outline"></div>   | Link - hover | `#00478F` | `$ontario-colour-link--hover` | Button and link hover state |
| <div class="fractal-bg-link--active fractal-colour-circle fractal-colour-outline"></div>   | Link - active | `#002142` | `$ontario-colour-link--active` | Button and link active state |
| <div class="fractal-bg-link--visited fractal-colour-circle fractal-colour-outline"></div>   | Link - visited | `#551A8B` | `$ontario-colour-link--visited` | Link visited state (but not buttons – they remain blue) |
| <div class="fractal-bg-secondary--hover fractal-colour-circle fractal-colour-outline"></div>   | Secondary - hover | `#E0F0FF` | `$ontario-colour-secondary--hover` | Secondary button hover state |
| <div class="fractal-bg-secondary--active fractal-colour-circle fractal-colour-outline"></div>   | Secondary - active | `#C2E0FF` | `$ontario-colour-secondary--active` | Secondary button active state |
| <div class="fractal-bg-tertiary--hover fractal-colour-circle fractal-colour-outline"></div>   | Tertiary - hover | `#E8E8E8` | `$ontario-colour-tertiary--hover` | Tertiary button hover state |
| <div class="fractal-bg-tertiary--active fractal-colour-circle fractal-colour-outline"></div>   | Tertiary - active | `#D1D1D1` | `$ontario-colour-tertiary--active` | Tertiary button active state |
| <div class="fractal-bg-focus fractal-colour-circle fractal-colour-outline"></div>   | Focus ring | `#009ADB` | `$ontario-colour-focus` | Focus state outline for inputs, links and buttons |

</div>

<hr>

## <a name="greyscale"></a> Greyscale colour palette
The greys in this palette are mostly hard-coded into elements (such as tables) but you can use them with discretion for the same purposes as the accent colour palettes. 

**Do not use other shades of grey** – the greys in this palette were specifically chosen to eliminate grey colours that appear too similar.   For reference, see [greyscale palette contrast ratios](https://contrast-grid.eightshapes.com/?background-colors=%23F2F2F2%2C%20Greyscale%205%0D%0A%23CCCCCC%2C%20Greyscale%2020%0D%0A%23999999%2C%20Greyscale%2040%0D%0A%23666666%2C%20Greyscale%2060%0D%0A%234D4D4D%2C%20Greyscale%2070%0D%0A%0D%0A&foreground-colors=%23FFFFFF%2C%20System-white%0D%0A%231A1A1A%2C%20System-black&es-color-form__tile-size=compact) with system-black text and system-white text.

<div class="fractal-table-scroll">

| Colour | Colour name | Hex code | SCSS variable | Notes |
|---|---|---|---|---|
| <div class="ontario-bg-greyscale-5 fractal-colour-circle fractal-colour-outline"></div>   | Greyscale-5 | `#F2F2F2` | `$ontario-greyscale-5` | If used as a background colour use **system-black** text |
| <div class="ontario-bg-greyscale-20 fractal-colour-circle fractal-colour-outline"></div>   | Greyscale-20 | `#CCCCCC` | `$ontario-greyscale-20` | If used as a background colour use **system-black** text |
| <div class="ontario-bg-greyscale-40 fractal-colour-circle fractal-colour-outline"></div>   | Greyscale-40 | `#999999` | `$ontario-greyscale-40` | If used as a background colour use **system-black** text |
| <div class="ontario-bg-greyscale-60 fractal-colour-circle fractal-colour-outline"></div>   | Greyscale-60 | `#666666` | `$ontario-greyscale-60` | If used as a background colour use **system-white** text |
| <div class="ontario-bg-greyscale-70 fractal-colour-circle fractal-colour-outline"></div>   | Greyscale-70 | `#4D4D4D` | `$ontario-greyscale-70` | If used as a background colour use **system-white** text |

</div>

<hr>

## <a name="accent"></a> Accent colour palette
Each colour in the accent colour palette has a [base](#base), [dark](#dark) (to use with system-white text) and [light](#light) (to use with system-black text) version.

You can use any of these colours in your designs as long as you:
* do not use them for elements that have an assigned system colour (these elements are listed in the [system colour palette](#system) chart)
* ensure [acceptable contrast ratios](#accessibility)

Where you can use these colours:
* non-link icons
* illustrations
* infographics
* timelines
* callouts
* banner images
* images

Where you cannot use these colours:
* page backgrounds
* form elements
* table outlines
* any elements listed in the [system colour palette](#system) chart

### <a name="base"></a> Base accent colour palette
Only use these colours with **system-black text** (underlined for links). For reference, see [base accent palette contrast ratios](https://contrast-grid.eightshapes.com/?background-colors=%23CBA52E%2C%20Gold%0D%0A%23FCAF17%2C%20Yellow%0D%0A%23C1B28F%2C%20Taupe%0D%0A%2339B54A%2C%20Green%0D%0A%238DC63F%2C%20Lime%0D%0A%2349A7A2%2C%20Teal%0D%0A%2300B2E3%2C%20Sky%0D%0A%233193CC%2C%20Blue%0D%0A%23B975B7%2C%20Purple%0D%0A%23F15A22%2C%20Orange%0D%0A%23F0454B%2C%20Red%0D%0A%23F03093%2C%20Magenta%0D%0A%0D%0A&foreground-colors=%231A1A1A%2C%20System-black%0D%0A%0D%0A&es-color-form__tile-size=compact) with system-black text. 

<div class="fractal-table-scroll">

| Colour | Colour name | Hex code | SCSS variable |
|---|---|---|---|
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-gold"></div>    | Gold | `#CBA52E` | `$ontario-colour-gold` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-yellow"></div>    | Yellow | `#FCAF17` | `$ontario-colour-yellow` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-taupe"></div>    | Taupe | `#C1B28F` | `$ontario-colour-taupe` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-green"></div>    | Green | `#39B54A` | `$ontario-colour-green` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-lime"></div>    | Lime | `#8DC63F` | `$ontario-colour-lime` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-teal"></div>    | Teal | `#49A7A2` | `$ontario-colour-teal` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-sky"></div>    | Sky | `#00B2E3` | `$ontario-colour-sky` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-blue"></div>    | Blue | `#3193CC` | `$ontario-colour-blue` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-purple"></div>    | Purple | `#B975B7` | `$ontario-colour-purple` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-orange"></div>    | Orange | `#F15A22` | `$ontario-colour-orange` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-red"></div>    | Red | `#F0454B` | `$ontario-colour-red` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-magenta"></div>    | Magenta | `#F03093` | `$ontario-colour-magenta` |

</div>

<hr>

### <a name="light"></a> Light accent colour palette
Only use these colours with **system-black text** (link blue and underlined for links).  For reference, see [light accent palette contrast ratios](https://contrast-grid.eightshapes.com/?background-colors=%23F0E7CC%2C%20Light%20gold%0D%0A%23F8E5C3%2C%20Light%20yellow%0D%0A%23EBE7DB%2C%20Light%20taupe%0D%0A%23D1EFD4%2C%20Light%20green%0D%0A%23DDEDC7%2C%20Light%20lime%0D%0A%23CFEDED%2C%20Light%20teal%0D%0A%23C5EEFA%2C%20Light%20sky%0D%0A%23DBE9F5%2C%20Light%20blue%0D%0A%23F1E3F2%2C%20Light%20purple%0D%0A%23FEE1D9%2C%20Light%20orange%0D%0A%23FFE0E2%2C%20Light%20red%0D%0A%23FEDFF0%2C%20Light%20magenta%0D%0A&foreground-colors=%231A1A1A%2C%20System-black%0D%0A%230066CC%2C%20Link%20blue&es-color-form__tile-size=compact) with system-black text and link blue. 

<div class="fractal-table-scroll">

| Colour | Colour name | Hex code | SCSS variable |
|---|---|---|---|
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-gold"></div>    | Light gold | `#F0E7CC` | `$ontario-colour-light-gold` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-yellow"></div>    | Light yellow | `#F8E5C3` | `$ontario-colour-light-yellow` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-taupe"></div>    | Light taupe | `#EBE7DB` | `$ontario-colour-light-taupe` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-green"></div>    | Light green | `#D1EFD4` | `$ontario-colour-light-green` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-lime"></div>    | Light lime | `#DDEDC7` | `$ontario-colour-light-lime` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-teal"></div>    | Light teal | `#CFEDED` | `$ontario-colour-light-teal` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-sky"></div>    | Light sky | `#C5EEFA` | `$ontario-colour-light-sky` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-blue"></div>    | Light blue | `#DBE9F5` | `$ontario-colour-light-blue` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-purple"></div>    | Light purple | `#F1E3F2` | `$ontario-colour-light-purple` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-orange"></div>    | Light orange | `#FEE1D9` | `$ontario-colour-light-orange` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-red"></div>    | Light red | `#FFE0E2` | `$ontario-colour-light-red` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-magenta"></div>    | Light magenta | `#FEDFF0` | `$ontario-colour-light-magenta` |

</div>

<hr>

### <a name="dark"></a> Dark accent colour palette
Only use these colours with **system-white text** (underlined for links). For reference, see [dark accent palette contrast ratios](https://contrast-grid.eightshapes.com/?background-colors=%2386743D%2C%20Dark%20gold%0D%0A%238A600D%2C%20Dark%20yellow%0D%0A%237B725C%2C%20Dark%20taupe%0D%0A%232B8737%2C%20Dark%20green%0D%0A%235F8129%20Dark%20lime%0D%0A%23367A76%2C%20Dark%20teal%0D%0A%231080A6%2C%20Dark%20sky%0D%0A%230369AC%2C%20Dark%20blue%0D%0A%2392278F%2C%20Dark%20purple%0D%0A%23C64A1C%2C%20Dark%20orange%0D%0A%23D81A21%2C%20Dark%20red%0D%0A%23C00264%2C%20Dark%20magenta%0D%0A%0D%0A&foreground-colors=%23FFFFFF%2C%20System-white%0D%0A%0D%0A&es-color-form__tile-size=compact) with system-white text. 

<div class="fractal-table-scroll">

| Colour | Colour name | Hex code | SCSS variable |
|---|---|---|---|
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-gold"></div>    | Dark gold | `#86743D` | `$ontario-colour-dark-gold` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-yellow"></div>    | Dark yellow | `#8A600D` | `$ontario-colour-dark-yellow` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-taupe"></div>    | Dark taupe | `#7B725C` | `$ontario-colour-dark-taupe` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-green"></div>    | Dark green | `#2B8737` | `$ontario-colour-dark-green` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-lime"></div>    | Dark lime | `#5F8129` | `$ontario-colour-dark-lime` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-teal"></div>    | Dark teal | `#367A76` | `$ontario-colour-dark-teal` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-sky"></div>    | Dark sky | `#1080A6` | `$ontario-colour-dark-sky` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-blue"></div>    | Dark blue | `#0369AC` | `$ontario-colour-dark-blue` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-purple"></div>    | Dark purple | `#92278F` | `$ontario-colour-dark-purple` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-orange"></div>    | Dark orange | `#C64A1C` | `$ontario-colour-dark-orange` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-red"></div>    | Dark red | `#D81A21` | `$ontario-colour-dark-red` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-magenta"></div>    | Dark magenta | `#C00264` | `$ontario-colour-dark-magenta` |

</div>

<hr>

## <a name="accessibility"></a> Accessibility
If you’re using colour to convey information, make sure you [also include a text alternative](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html) for people who have difficulty seeing colour.

Having a **good contrast ratio** (making text stand out from its background) makes it easier to read for everyone. It’s also [the law](https://www.ontario.ca/page/how-make-websites-accessible#section-3) to, at a minimum, meet <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0, which says regular text must meet the colour contrast ratio of 4.5:1 and large text must meet the contrast ratio of 3:1.

The contrast ratios in Ontario design system palettes meet level AA of [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1](https://www.w3.org/TR/WCAG21/#use-of-color) on colour contrast – so, **as long as you use the palette colours as indicated in this guideline, your text will be accessible**.

### Double-check accessibility
As you design, use a colour contrast checker to double-check that your design meets at least <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0’s minimum. A couple of options are: 
* WebAIM’s [free online contrast checker](https://webaim.org/resources/contrastchecker/) 
* The Paciello Group’s [Colour Contrast Analyzer](http://www.paciellogroup.com/resources/contrastanalyser/) program 
  * this downloadable program is free but, if you’re using an <abbr title="Ontario Public Service">OPS</abbr> computer and don’t have administration rights, you’ll need to submit a <abbr title="Service Desk Online">S.ODO</abbr> request to install it

<hr>

## Help improve this page

If you have other suggestions, advice or any questions on colours, the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
