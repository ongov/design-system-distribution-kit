const { lang = "en" } = require("yargs").argv;

module.exports = {
    title: lang === "en" ? "Hint text" : "Texte d’indication",
    label: lang === "en" ? "Hint text" : "Texte d’indication",
    collated: true,
    order: 3,
    context: {
        id: "hint-text-example",
        label: lang === "en" ? "Label" : "Étiquette",
        flag: {
            text:
                lang === "en" ? "required/optional" : "obligatoire/facultative",
        },
        labelSize: "",
        hint: lang === "en" ? "Hint text placeholder" : "Texte d’indication",
        leadStatement:
            lang === "en"
                ? "Use clear and concise hint text to guide users as they fill out forms."
                : "Rédigez un texte d’indication clair et concis pour orienter les utilisateurs lorsqu’ils remplissent les formulaires.",
    },
};
