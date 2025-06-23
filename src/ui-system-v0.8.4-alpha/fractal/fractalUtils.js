var previous;
const collator = (markup, item) => {
    let result = "";
    if (item.label !== previous) {
        result += `${ previous ? "</dd>" : ""}`;
        result += `<dt class="fractal-dt ontario-padding-bottom-24-!">${
            item.isDefault ? item.context.defaultLabel : item.label
        }</dt><dd>`;
    }
    previous = item.label;
    result += `<!-- Start: @${item.handle} -->\n${markup}\n<!-- End: @${item.handle} -->\n`;
    return result;
};
module.exports = {
    collator
}