const { lang = "en" } = require("yargs").argv;

module.exports =
    {
        "title": lang === "en" ? "Critical alerts" : "Bannières d’alerte critique",
        "label": lang === "en" ? "Critical alerts" : "Bannières d’alerte critique",
        "order": 3,
        "status" : "draft",
        "context": {
            "leadStatement":  lang === "en" ? "Use a critical alert banner to bring a user’s attention to a significant situation, such as a site-wide service disruption or other critical information that will impact most users." : "Utilisez une bannière d’alerte critique pour attirer l’attention d’un utilisateur sur une situation importante, telle qu’une interruption de service à l’échelle du site ou toute autre information critique qui aura une incidence sur la plupart des utilisateurs.",
            en: lang === "en",
            fr: lang === "fr"
        }
    }
