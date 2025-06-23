**[Guiding principle]({{path '../../docs/documentation/design-principles.html'}}):** Design for everyone.

<hr class="dark"> 

## When to underline

Generally, **do** underline links when they are in:
* body text (including bulleted lists) 
* a hover state 

Generally, **do not** underline links when they are in big navigation panels such as:
* dropdown menus
* side panels
* in-page table of contents

([source](https://www.nngroup.com/articles/guidelines-for-visualizing-links/))

### When to break underlining rules

Only break these rules if underlining or not underlining **starts to impact readability**. See the [accessibility section](#accessibility) for more on this.

## Technical specifications

* Links should always be `$ontario-colour-link` (`#0066CC`) 
* Link hover state should always be `$ontario-colour-link--hover` (`#002142`) 
* Link visited state should always be `$ontario-colour-link--visited` (`#551A8B`) 
* Links should have a focus state 

  
### Links that open in a new window

If the user is in the middle of a transaction or form, links should open in a new window.

If a link is opening in a new window or tab, include this standard icon at the end of the link: <svg class="ontario-icon" alt="new window" aria-hidden="true" focusable="false" sol:category="primary" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><use xlink:href="#ontario-icon-new-window"></use></svg>.


### Links paired with icons

Only pair icons when the link is in a list, never within a paragraph.

Example:
<ul style="padding-left: 0; margin-left: 0.5rem;">
    <li style="list-style-type: none;"><svg class="ontario-icon" alt="telephone icon" aria-hidden="true" focusable="false" sol:category="primary" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><use xlink:href="#ontario-icon-phone"></use></svg> Tel: 416-325-3000</li>
    <li style="list-style-type: none;"><svg class="ontario-icon" alt="" aria-hidden="true" focusable="false" sol:category="primary" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><use xlink:href="#ontario-icon-tty"></use></svg> TTY: 1-855-889-5775</li>
</ul>

Icons you can pair with links include:

* Phone 
* Email 
* Social media 
* Fax 
* Website 



## <a name="accessibility"></a> Accessibility

[Underlining is generally a good accessibility practice.](https://www.usability.gov/get-involved/blog/2007/05/underlining-links.html) 

Underline links as much as possible **until it starts impacting readability** – use your judgement. For example, if you have a long bulleted list of links, it may look a little overwhelming or distracting if they are all underlined – this would be a time when _not_ underlining links will help readability.  

If you are not sure how underlining links will impact readability, you can test with some users.

<hr>

## Help improve this page

If you have other suggestions, advice or any questions on links, the [design system team]({{path '../../docs/give-feedback.html'}}) would love to hear from you.
