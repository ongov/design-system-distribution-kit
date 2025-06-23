---
title: Getting started
label: Getting started
---

<p class="ontario-lead-statement">The Ontario Design System provides principles, guidance and code to help you design and build accessible, mobile-friendly government websites and digital services.</p>

<hr class="dark">

## Get started with the design system
   
- [For developers](#developers)
- [For designers](#designers)


## <a name="developers"></a> For developers

### Install the distribution package

In the distribution package, you will find all the necessary files (HTML, CSS/SCSS, JS) to build into your development projects. The package also includes font files and the favicon. You can find SCSS variables and usage in each component section.

[{{{render '@icons-secondary--ontario-icon-download' }}} Download latest version ({{{ _config.project.version }}})]({{path '../../dist/ontario-design-system-dist-{{{ _config.project.version }}}.zip'}})

[Release notes and past versions]({{path './release-notes.html'}}) 

We recommend you create a folder where you can put all your files to keep them consistent and separate from other project files. When a new version is released, you can easily replace this folder with the new version. 

### Usage
1.	Unzip the distribution package
2.	Rename the extracted folder to `ontario-design-system`
3.	Move this folder into your project (i.e. the same place as your other static assets)
4.	Import `ontario-design-system/styles/ds-theme.css` (or ds-theme.min.css) globally into your own project. Example using SCSS and CSS: `@import "ontario-design-system/styles/ds-theme.css";`

Now that the design system is a part of your project, all of the global styles are applied automatically (header styles, paragraph spacing, etc). You can also use any of the component classes to create buttons, checkboxes and more.

### Building custom components

The design system distribution package contains SCSS files with variables that can help you  build new custom components and pages in alignment with the design system. Simply import `ontario-design-system/styles/sass/_variables-import.scss` into your component. This file will import several categories of variables all at once (grid, colour, font, spacing, etc).

Example: colour variables

<div class="code">
<span class="hljs-selector-class">.ontario-callout-alert {</span><br>
&nbsp;&nbsp;&nbsp;border-color: $ontario-colour-alert;<br>
}
</div>

<hr>

## <a name="designers"></a> For designers
The visual style of components in the design system offers a clean, flexible and modern aesthetic that meets high standards of usability and accessibility while promoting credibility and trust.

The design system contains HTML examples of common UI components designed to follow Ontario’s visual identity. Most components will have design properties available for you to use in your prototyping tools. You can also use your browser’s developer tools to view the specs of each example (for example, padding, margins, stroke weight, line-height and so on).

### Download Ontario Design System fonts

The Ontario Design System primarily uses two font sets - Open Sans and a modified version of Raleway. Download and install the fonts on your local machine to use them in your prototyping tools.

[{{{render '@icons-secondary--ontario-icon-download' }}} Download Ontario Design System fonts]({{path '../../fonts/ds-fonts.zip'}})

Read the [fonts and typography guidance]({{path '../basics/fonts.html'}})  before you start.

### Prototyping kit
**Coming soon:** we’re in the process of creating a prototyping kit that includes all of our design components. 

In the prototyping kit, you’ll find:
- grid and sample breakpoint artboards
- colour swatches with hex codes
- typography and heading styles
- components
- templates

### Ontario logo
If you need a high resolution version of the Ontario logo or have any questions around logo usage, please contact visual.Identity@ontario.ca.

The Ontario logo is trademarked and is restricted to official Government of Ontario products. An exception is made for sponsorships and transfer payment recipients. If there is no official partnership agreement that outlines their use of our official mark(s), then the logo cannot be used.

### Illustrations and images

- We recommend using images and photography to align with [Ontario’s visual identity](https://intra.ontario.ca/tbs/visual-identity)
- If you are going to create custom illustrations, read the guidelines 

<hr>

## Help improve the design system

If you have other suggestions, advice or any questions, the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
