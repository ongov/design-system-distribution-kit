const { lang = "en" } = require("yargs").argv;

const label = lang === "en" ? "Copy to clipboard" : "Copiez dans le presse-papiers";

module.exports = {
    "title": "Inline Code",
    "label": "Inline Code",
    "collated": true,
    "order": 8,
    "context": {
        "code": "",
        "renderComponent": false
    },
    "variants": [
        {
            "name": "icons-primary-setup",
            "context": {
                "code": "icons-primary-setup",
                "renderComponent": true,
                "label": label
            }
        },   
        {
            "name": "icons-secondary-setup",
            "context": {
                "code": "icons-secondary-setup",
                "renderComponent": true,
                "label": label
            }
        },
        {
            "name": "icons-primary",
            "context": {
                "code": "icons-primary--ontario-icon-menu",
                "renderComponent": true,
                "label": label
            }
        },     
        {
            "name": "icons-secondary",
            "context": {
                "code": "icons-secondary--ontario-icon-account",
                "renderComponent": true,
                "label": label
            }
        },   
        {
            "name": "",
            "context": {
            }
        },
        
    ]
}
