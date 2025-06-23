const { lang = "en" } = require("yargs").argv;

module.exports = {
    title: lang === "en" ? "Text areas" : "Zones de texte",
    label: lang === "en" ? "Text areas" : "Zones de texte",
    collated: true,
    order: 6,
    context: {
        id: "text-area-example",
        label: lang === "en" ? "Label" : "Étiquette",
        leadStatement:
            lang === "en"
                ? "Use a text area when you want the user to enter <strong>more than</strong> a single line of information."
                : "Utilisez une zone de texte lorsque vous voulez que l’utilisateur saisisse <strong>plus d’une option</strong> pour remplir plusieurs lignes d’information.",
        flag: {
            type: "required",
            text:
                lang === "en" ? "required/optional" : "obligatoire/facultative",
        },
    },
};
