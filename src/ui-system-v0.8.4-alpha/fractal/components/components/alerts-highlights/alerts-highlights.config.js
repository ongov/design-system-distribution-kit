const { lang = "en" } = require("yargs").argv;
module.exports =
{
    "order": 1,
    "title":  lang === "en" ? "Alerts and highlights" : "Alertes et mises en évidence",
    "label":  lang === "en" ? "Alerts and highlights" : "Alertes et mises en évidence",
}
