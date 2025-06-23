const { lang = "en" } = require("yargs").argv;

module.exports = {
    title: lang === "en" ? "Radio buttons" : "Cases d’option",
    label: lang === "en" ? "Radio buttons" : "Cases d’option",
    collated: true,
    order: 5,
    context: {
        leadStatement:
            lang === "en"
                ? "Use radio buttons when you want the user to select only one option from a list."
                : "Utilisez les cases d’option lorsque vous voulez que l’utilisateur ne choisisse qu’une seule option dans une liste.",
        id: "input-radio",
        legend: lang === "en" ? "Radio legend" : "Légende de case d’option",
        flag: {
            type: "required",
            text:
                lang === "en" ? "required/optional" : "obligatoire/facultative",
        },
        options: [
            {
                label: "Option 1",
                name: "radio-buttons",
                id: "radio-button-option-1",
                value: "option-1",
            },
            {
                label: "Option 2",
                name: "radio-buttons",
                id: "radio-button-option-2",
                value: "option-2",
            },
            {
                label: "Option 3",
                name: "radio-buttons",
                id: "radio-button-option-3",
                value: "option-3",
            },
        ],
    },
};
