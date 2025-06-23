const { collator } = require("../../../../fractalUtils");
const { lang = "en" } = require("yargs").argv;

module.exports =
    {
        "title": lang === "en" ? "Blockquote" : "Éléments blockquote",
        "label": lang === "en" ? "Blockquote" : "Éléments blockquote",
        "collated": true,
        "order": 1,
        "status" : "draft",
        "context": {
            "defaultLabel": lang === "en" ? "Default" : "Valeur par défaut",
            "leadStatement":  lang === "en" ? "Use a blockquote to draw attention to a speaker quote or excerpt." : "Utilisez l’élément blockquote pour attirer l’attention sur une citation ou un extrait.",
            "desc":  lang === "en" ?  "In the past few years, Ontario has gained a high level of respect for its visionary work in early education. The changes have been profound, and thoughtfully introduced. The views that guide the work are articulated clearly, and express great respect for children, families, and educators. We now have a solid foundation upon which to build a more coherent system." : "Ces dernières années, l’Ontario s’est bâti une bonne réputation grâce à ses efforts visionnaires dans le domaine de l’éducation de la petite enfance. Les changements ont été profonds et mis en œuvre de manière réfléchie. Les perspectives qui orientent les travaux sont clairement définies et témoignent d’un grand respect aux enfants, aux familles et aux éducatrices et éducateurs. Nous disposons maintenant de solides assises pour construire un système plus cohérent.",
            "attribution": lang === "en" ? "Academic partners" : "Partenaires universitaires",
            "byline": lang === "en" ? "Ontario’s Pedagogy for the Early Years" : "Pédagogie de l'Ontario pour la petite enfance",

        },
        collator: collator,
        "variants": [
            {
                "name": "Short",
                "label": lang === "en" ? "Short (under 140 characters)" : "Les éléments blockquote courts (maximum de 140 caractères)",
                "context": {
                    "class": "ontario-blockquote--short",
                    "desc": lang === "en" ? "Access to high-quality child care is an issue that impacts our entire society." : "L’accès à des services de garde d’enfants de grande qualité a une incidence sur l’ensemble de la société.",
                    "attribution": lang === "en" ? "Survey respondent" : "Répondant au sondage",
                    "byline" : false
                }
            }
        ]
    }
