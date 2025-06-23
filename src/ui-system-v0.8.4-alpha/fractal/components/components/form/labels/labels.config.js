const { collator } = require("../../../../fractalUtils");
const { lang = "en" } = require("yargs").argv;

module.exports = {
    title: lang === "en" ? "Labels" : "Étiquettes",
    label: lang === "en" ? "Labels" : "Étiquettes",
    collated: true,
    order: 4,
    context: {
        id: "label-example",
        label: lang === "en" ? "Label" : "Étiquette",
        defaultLabel: lang === "en" ? "Default" : "Valeur par défaut",
        flag: {
            text:
                lang === "en" ? "required/optional" : "obligatoire/facultative",
        },
        leadStatement:
            lang === "en"
                ? "Always use a label to tell the user how to use each form element."
                : "Mettez toujours une étiquette pour indiquer à l’utilisateur comment utiliser chaque élément du formulaire.",
        labelSize: "",
    },
    collator: collator,
    variants: [
        {
            name: "Large label",
            label: lang === "en" ? "Large label" : "Grande étiquette",
            context: {
                id: "large-label-example",
                label: lang === "en" ? "Label" : "Étiquette",
                labelSize: "large",
            },
        },
        {
            name: "Labels as page headings",
            label:
                lang === "en"
                    ? "Labels as page headings"
                    : "Étiquettes en tant que titres de page",
            context: {
                id: "heading-label-example",
                label: lang === "en" ? "Heading label" : "Étiquette titre",
                labelSize: "heading",
                heading: true,
            },
        },
    ],
};
