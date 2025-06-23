const { collator } = require("../../../../fractalUtils");
const { lang = "en" } = require("yargs").argv;

module.exports = {
    title: lang === "en" ? "Dropdown lists" : "Listes déroulantes",
    label: lang === "en" ? "Dropdown lists" : "Listes déroulantes",
    collated: true,
    order: 2,
    context: {
        id: "dropdown-list-example",
        name: "default",
        label: lang === "en" ? "Label" : "Étiquette",
        defaultLabel: lang === "en" ? "Default" : "Valeur par défaut",
        leadStatement:
            lang === "en"
                ? "Only use a dropdown (select) list if you cannot use other form components to capture the user’s information."
                : "N’ayez recours à une liste déroulante (sélection) que si vous ne pouvez pas utiliser d’autres éléments du formulaire pour saisir les renseignements de l’utilisateur.",
        flag: {
            text:
                lang === "en" ? "required/optional" : "obligatoire/facultative",
        },
        options: [
            {
                value: "",
                label: lang === "en" ? "Select" : "Sélectionner",
            },
            {
                value: "option-1",
                label: "Option 1",
            },
            {
                value: "option-2",
                label: "Option 2",
            },
        ],
    },
    collator: collator,
    variants: [
        {
            name: "With default option selected",
            label:
                lang === "en"
                    ? "With default option selected"
                    : "Avec sélection de l’option par défaut",
            id: "province-selection",
            context: {
                label:
                    lang === "en"
                        ? "Province/Territory"
                        : "Province/territoire",
                flag: {
                    text: lang === "en" ? "required" : "obligatoire",
                },
                required: true,
                options:
                    lang === "en"
                        ? [
                              {
                                  value: "",
                                  label: "Select",
                              },
                              {
                                  value: "AB",
                                  label: "Alberta",
                              },
                              {
                                  value: "BC",
                                  label: "British Columbia",
                              },
                              {
                                  value: "MB",
                                  label: "Manitoba",
                              },
                              {
                                  value: "NB",
                                  label: "New Brunswick",
                              },
                              {
                                  value: "NL",
                                  label: "Newfoundland and Labrador",
                              },
                              {
                                  value: "NS",
                                  label: "Nova Scotia",
                              },
                              {
                                  value: "ON",
                                  label: "Ontario",
                                  selected: true,
                              },
                              {
                                  value: "PE",
                                  label: "Prince Edward Island",
                              },
                              {
                                  value: "QC",
                                  label: "Quebec",
                              },
                              {
                                  value: "SK",
                                  label: "Saskatchewan",
                              },
                              {
                                  value: "NT",
                                  label: "Northwest Territories",
                              },
                              {
                                  value: "NU",
                                  label: "Nunavut",
                              },
                              {
                                  value: "YT",
                                  label: "Yukon",
                              },
                          ]
                        : [
                              {
                                  value: "",
                                  label: "Sélectionner",
                              },
                              {
                                  value: "AB",
                                  label: "Alberta",
                              },
                              {
                                  value: "BC",
                                  label: "Colombie-Britannique",
                              },
                              {
                                  value: "MB",
                                  label: "Manitoba",
                              },
                              {
                                  value: "NB",
                                  label: "Nouveau-Brunswick",
                              },
                              {
                                  value: "NL",
                                  label: "Terre-Neuve-et-Labrador",
                              },
                              {
                                  value: "NS",
                                  label: "Nouvelle-Écosse",
                              },
                              {
                                  value: "ON",
                                  label: "Ontario",
                                  selected: true,
                              },
                              {
                                  value: "PE",
                                  label: "Île-du-Prince-Édouard",
                              },
                              {
                                  value: "QC",
                                  label: "Quebec",
                              },
                              {
                                  value: "SK",
                                  label: "Saskatchewan",
                              },
                              {
                                  value: "NT",
                                  label: "Territoires du Nord-Ouest",
                              },
                              {
                                  value: "NU",
                                  label: "Nunavut",
                              },
                              {
                                  value: "YT",
                                  label: "Yukon",
                              },
                          ],
            },
        },
    ],
};
