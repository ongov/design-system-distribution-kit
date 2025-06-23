const { collator } = require("../../../../fractalUtils");
const { lang = "en" } = require("yargs").argv;

module.exports = {
    title: lang === "en" ? "Page alerts" : "Alertes de page",
    label: lang === "en" ? "Page alerts" : "Alertes de page",
    collated: true,
    "status" : "draft",
    order: 4,
    context: {
        defaultLabel: lang === "en" ? "Informational" : "Information",
        leadStatement:
            lang === "en"
                ? "Use a page alert to notify users of important information or changes on a page."
                : "Utilisez une alerte de page pour informer les utilisateurs de toute information ou modification importante sur une page.",
        icon: "icons-primary--ontario-icon-alert-information",
        title: lang === "en" ? "Licence plates" : "Plaques d’immatriculation",
        class: "informational",
        info: true,
        en: lang === "en",
        fr: lang === "fr"
    },
    collator: collator,
    variants: [
        {
            name: "Warning",
            label: lang === "en" ? "Warning" : "Avertissement",
            context: {
                icon: "icons-primary--ontario-icon-alert-warning",
                title: lang === "en" ? "Service wait times" : "Délai pour la prestation des services",
                class: "warning",
                warning: true,
                info: false,
                en: lang === "en",
                fr: lang === "fr"
            },
        },
        {
            name: "Success",
            label: lang === "en" ? "Success" : "Confirmation",
            context: {
                icon: "icons-primary--ontario-icon-alert-success",
                title:
                    lang === "en" ? "Your payment was successful and your order is now complete." : "Votre paiement a été reçu et votre commande est maintenant terminée.",
                class: "success",
                success: true,
                info: false,
                en: lang === "en",
                fr: lang === "fr"
            },
        },
        {
            name: "Error",
            label: lang === "en" ? "Error" : "Erreur",
            context: {
                icon: "icons-primary--ontario-icon-alert-error",
                title: lang === "en" ? "There is a problem" : "Un problème est survenu",
                class: "error",
                error: true,
                info: false,
                en: lang === "en",
                fr: lang === "fr"
            },
        },
    ],
};
