
const { collator } = require("../../../fractalUtils");
const { lang = "en" } = require("yargs").argv;

    module.exports = {
    "title": lang === "en" ? "Buttons" : "Boutons",
    "label": lang === "en" ? "Buttons" : "Boutons",
    "collated": true,
    "order": 1,
    "context": {
        "defaultLabel": lang === "en" ? "Default" : "Valeur par défaut",
        "desc": lang === "en" ? "Primary - default" : "Primaire – par défaut",
        "class": "primary",
        "leadStatement": lang === "en" ? "Use buttons to help the user carry out an important action such as starting a transaction or agreeing to a purchase." : "Installez des boutons pour permettre à l’utilisateur d’effectuer une action importante, par exemple entamer une opération ou accepter un achat."
    },
    collator: collator,
    "variants": [
        {
            "name": "Secondary Button",
            "label":  lang === "en" ? "Secondary button" : "Bouton secondaire",
            "context": {
                "desc": lang === "en" ? "Secondary - default" : "Secondaire – par défaut",
                "class": "secondary"
            }
        },
        {
            "name": "Tertiary Button",
            "label": lang === "en" ? "Tertiary button" : "Bouton tertiaire",
            "context": {
                "desc": lang === "en" ? "Tertiary - default" : "Tertiaire – par défaut",
                "class": "tertiary"
            }
        }
    ]
}
