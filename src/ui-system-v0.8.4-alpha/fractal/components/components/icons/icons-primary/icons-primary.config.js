var variants = require('./icons-primary-variants.json')
const { lang = "en" } = require("yargs").argv;

module.exports = {
	title: lang === "en" ? "Primary icons": "Icônes primaires",
	label: lang === "en" ? "Primary icons": "Icônes primaires",
	preview: "@preview-icons",
	collated: true,
	//Custom collator is being done with JS, todo: can be switched to here
	collator: (markup, item) =>{
        return markup;
    },
	context: {
		"leadStatement":  lang === "en" ? "Use simple, easy-to-understand icons from Material Design to help guide users." : "Utilisez les icônes simples et faciles à comprendre qui se trouvent dans Material Design pour orienter les utilisateurs.",
	},
	variants: variants
}
