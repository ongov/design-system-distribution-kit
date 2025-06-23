"use strict";

const fractal = require("@frctl/fractal").create();
const mandelbrot = require("@frctl/mandelbrot");
const Path = require("path");
const dotenv = require("dotenv").config();
const fs = require("fs");
const instance = fractal.components.engine();
const rootPath = Path.join(__dirname, "fractal");
const { lang = "en" } = require("yargs").argv;
const moment = require("moment");
const { release } = require("os");
const packageJson = JSON.parse(fs.readFileSync("./package.json"));
moment.locale(lang);

const paths = {
    build: Path.join(rootPath, "build"),
    public: Path.join(rootPath, "public"),
    theme: Path.join(rootPath, "theme"),
    components: Path.join(rootPath, "components"),
    docs: Path.join(rootPath, "docs/docs-" + lang),
};

const defaultScripts = [
    "/scripts/navigation.js",
    "default",
    "/scripts/clipboard.min.js",
    "/scripts/svgxuse.js",
];

const releaseDate = {
    label: lang === "en" ? "Built on" : "Date de sortie",
    date: new Date(),
    dateString: moment().format("LL"),
};

const odsFractalTheme = mandelbrot({
    favicon: "/favicon.ico",
    skin: "navy",
    nav: ["docs", "components", "information"],
    releaseDate: releaseDate,
    panels: ["notes", "html", "resources"],
    styles: ["/styles/ds-theme.min.css", "/styles/fractal-theme.min.css"], // This path is relative to either the overall or theme-specific static folder,
    scripts:
        lang === "en"
            ? defaultScripts
            : [...defaultScripts, "/scripts/translations/translations.js"],
});

odsFractalTheme.addLoadPath(Path.join(paths.theme, "overrides"));
odsFractalTheme.addStatic(Path.join(paths.theme, "assets"), "");

fractal.set(
    "project.title",
    lang === "en" ? "Design System" : "Système de conception"
);
fractal.set("project.lang", lang);
fractal.set("project.releaseDate", releaseDate.dateString);
fractal.set("project.version", packageJson.version);
fractal.components.set("path", paths.components);
fractal.components.set("default.status", null);
fractal.components.set("default.preview", "@preview");
fractal.components.set("default.collator", function (markup, item) {
    return `
            <dt class="fractal-dt ontario-padding-bottom-24-!">${item.label}</dt>
            <dd>
            <!-- Start: @${item.handle} -->
            \n${markup}\n
            <!-- End: @${item.handle} -->
            </dd>
        \n`;
});

fractal.components.set("resources", {
    scss: {
        label: "SCSS",
        match: ["**/*.scss"],
    },
    css: {
        label: lang === "en" ? "Compiled CSS" : "Compilé CSS",
        match: ["**/*.css"],
    },
});

fractal.components.set("statuses", {
    draft: {
        label: lang === "en" ? "In progress" : "En cours",
        description: "Work in progress.",
        class_name: "Status-progress-mark",
        color: "#92278F",
    },
    ready: {
        label: lang === "en" ? "Ready" : "Disponible",
        description: "Ready for referencing.",
        class_name: "Status-ready-mark",
        color: "#367A76",
    },
});

fractal.docs.set("path", paths.docs);
fractal.docs.set("statuses", {
    draft: {
        label: lang === "en" ? "In progress" : "En cours",
        description: "Work in progress.",
        class_name: "Status-progress-mark",
        color: "#92278F",
    },
    ready: {
        label: lang === "en" ? "Ready" : "Disponible",
        description: "Ready for referencing.",
        class_name: "Status-ready-mark",
        color: "#367A76",
    },
});

fractal.web.theme(odsFractalTheme);
fractal.web.set("static.path", paths.public);
fractal.web.set("builder.dest", paths.build);

//helper needed for callouts,
//more helpers https://github.com/helpers/handlebars-helpers
instance.handlebars.registerHelper("append", function (str, suffix) {
    if (typeof str === "string" && typeof suffix === "string") {
        return str + suffix;
    }
    return str;
});

module.exports = fractal;
