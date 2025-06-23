const { lang = "en" } = require("yargs").argv;

module.exports = {
    title: lang === "en" ? "Form" : "Formulaire",
    label: lang === "en" ? "Form" : "Formulaire",
    order: 2,
};
