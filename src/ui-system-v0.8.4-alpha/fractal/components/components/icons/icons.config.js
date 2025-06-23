const { lang = "en" } = require("yargs").argv;
module.exports = 
{
    "order": 10,
    "title":  lang === "en" ? "Icons" : "Icône",
    "label":  lang === "en" ? "Icons" : "Icône",
}
