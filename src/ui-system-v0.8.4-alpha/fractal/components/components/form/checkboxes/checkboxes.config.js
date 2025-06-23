const { lang = "en" } = require("yargs").argv;

module.exports = {
    title: lang === "en" ? "Checkboxes" : "Cases à cocher",
    label: lang === "en" ? "Checkboxes" : "Cases à cocher",
    collated: true,
    order: 1,
    context: {
        leadStatement:
            lang === "en"
                ? "Use checkboxes when you want the user to select one or more options from a list."
                : "Utilisez les cases à cocher lorsque vous voulez que l’utilisateur sélectionne un ou plusieurs choix de la liste.",
        name: "Default",
        legend: lang === "en" ? "Checkbox legend" : "Légende de case à cocher",
        flag: {
            text:
                lang === "en" ? "required/optional" : "obligatoire/facultative",
        },
        checkboxes: [
            {
                label: "Option 1",
                name: "options",
                id: "checkbox-option-1",
                value: "option-1",
            },
            {
                label: "Option 2",
                name: "options",
                id: "checkbox-option-2",
                value: "option-2",
            },
            {
                label: "Option 3",
                name: "options",
                id: "checkbox-option-3",
                value: "option-3",
            },
        ],
    },
};
