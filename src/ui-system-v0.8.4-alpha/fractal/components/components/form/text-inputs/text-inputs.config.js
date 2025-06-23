var previous;
const { lang = "en" } = require("yargs").argv;
const titles = {
        default: lang === "en" ? "Default" : "Valeur par défaut",
        withOverrides:
            lang === "en"
                ? "Input width overrides"
                : "Contournements de largeur de saisie",
    },
    withOverrides = [
        {
            name: "20 character width",
            id: "text-input-example-width-20",
            label:
                lang === "en"
                    ? "20 character width"
                    : "Largeur de 20 caractères",
            width: "20",
        },
        {
            name: "10 character width",
            id: "text-input-example-width-10",
            label:
                lang === "en"
                    ? "10 character width"
                    : "Largeur de 10 caractères",
            width: "10",
        },
        {
            name: "7 character width",
            id: "text-input-example-width-7",
            label:
                lang === "en" ? "7 character width" : "Largeur de 7 caractères",
            width: "7",
        },
        {
            name: "5 character width",
            id: "text-input-example-width-5",
            label:
                lang === "en" ? "5 character width" : "Largeur de 5 caractères",
            width: "5",
        },
        {
            name: "4 character width",
            id: "text-input-example-width-4",
            label:
                lang === "en" ? "4 character width" : "Largeur de 4 caractères",
            width: "4",
        },
        {
            name: "3 character width",
            id: "text-input-example-width-3",
            label:
                lang === "en" ? "3 character width" : "Largeur de 3 caractères",
            width: "3",
        },
        {
            name: "2 character width",
            id: "text-example-width-2",
            label:
                lang === "en" ? "2 character width" : "Largeur de 2 caractères",
            width: "2",
        },
    ];

const createVariant = (item) => {
    return {
        name: item.name,
        context: {
            name: item.name,
            id: item.id,
            label: item.label,
            width: item.width,
            type: "withOverrides",
        },
    };
};

module.exports = {
    title: lang === "en" ? "Text inputs" : "Saisies de texte",
    label: lang === "en" ? "Text inputs" : "Saisies de texte",
    collated: true,
    order: 7,
    context: {
        leadStatement:
            lang === "en"
                ? "Use a text input when you want the user to enter no more than a single line of information."
                : "Utilisez une saisie de texte lorsque vous voulez que l’utilisateur ne saisisse qu’une seule ligne d’information.",
        type: "default",
        name: "default",
        id: "text-input-example",
        label: "Label",
        flag: {
            text:
                lang === "en" ? "required/optional" : "obligatoire/facultative",
        },
        width: "",
        labelSize: "",
    },
    collator: function (markup, item) {
        let result = "";
        if (item.context.type !== previous) {
            //previous is first empty nothing added, once assigned close the previous definition before adding a label
            result += `${previous ? "</dd>" : ""}`;
            //since new type add it's label and start a defin
            //fractal dt is in merge request related to global collator
            result += `<dt class="fractal-dt ontario-padding-bottom-24-!">${
                titles[item.context.type]
            }</dt><dd>`;
        }
        previous = item.context.type;
        result += `<!-- Start: @${item.handle} -->\n${markup}\n<!-- End: @${item.handle} -->\n`;
        return result;
    },
    variants: withOverrides.reduce(
        (accumulator, item) => accumulator.concat(createVariant(item)),
        []
    ),
};
