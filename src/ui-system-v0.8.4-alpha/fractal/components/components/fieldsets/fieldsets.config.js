const { lang = "en" } = require("yargs").argv;

    module.exports = 
    {
        "title": "Fieldsets and legends",
        "label": "Fieldsets and legends",
        "collated": true,
        "order": 4,
        "hidden": true,
        "context": {
            "id": "fieldset-example",
            "legend": "Legend",
            "flag": {
                "text": "required/optional"
            },
            "legendSize": "",
            "leadStatement":  lang === "en" ? "leadStatementEN" : "leadStatementFR"
        },
        "variants": [{
                "name": "Large legend",
                "context": {
                    "id": "large-legend-example",
                    "legend": "Legend",
                    "legendSize": "large"
                }
            },
            {
                "name": "Legends as page headings",
                "context": {
                    "id": "heading-legend-example",
                    "legend": "Heading legend",
                    "legendSize": "heading",
                    "heading": true
                }
            }
        ]
    }
    