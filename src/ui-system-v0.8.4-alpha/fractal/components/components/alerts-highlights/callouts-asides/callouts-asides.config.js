const { collator } = require("../../../../fractalUtils");
const { lang = "en" } = require("yargs").argv;

module.exports = {
    title: lang === "en" ? "Callouts and asides" : "Encadrés et apartés",
    label: lang === "en" ? "Callouts and asides" : "Encadrés et apartés",
    collated: true,
    preview: "@preview-react",
    "status" : "draft",
    order: 2,
    context: {
        defaultLabel: lang === "en" ? "Callouts" : "Encadrés",
        leadStatement:
            lang === "en"
                ? "Use callouts and asides to highlight in-page content."
                : "Utilisez les encadrés et apartés pour mettre en évidence le contenu des pages.",
        title: lang === "en" ? "Get notified" : "Recevez une notification",
        type: "callout",
        callout: true,
        aside: false,
        en: lang === "en",
        fr: lang === "fr"
    },
    collator: collator,
    variants: [
        {
            name: "Asides",
            label: lang === "en" ? "Asides" : "Apartés",
            context: {
                title: lang === "en" ? "Quick fact:" : "Fait en bref",
                type: "aside",
                callout: false,
                aside: true,
                en: lang === "en",
                fr: lang === "fr"
            },
        },
    ],
};
