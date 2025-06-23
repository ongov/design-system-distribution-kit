const { lang = "en" } = require("yargs").argv;

module.exports = {
    title: lang === "en" ? "Components" : "Composantes",
    label: lang === "en" ? "Components" : "Composantes",
    order: 3,
    "status" : "ready",
};
