const { src, dest, task, series } = require("gulp");
const svgstore = require("gulp-svgstore");
const svgmin = require("gulp-svgmin");
const path = require("path");
const rename = require("gulp-rename");
const gulpcheerio = require("gulp-cheerio");
const fs = require("fs");
const jeditor = require("gulp-json-editor");
const glob = require("glob");
const zip = require("gulp-zip");
const inject = require("gulp-inject-string");
const config = require("./tasks-config");
const { lang = "en" } = require("yargs").argv;

//Generate svgstore file from many svg icons for primary
task("svgstore-ontario-icons-primary", () => {
    return src(config.icons.source.primary)
        .pipe(
            rename((path) => {
                path.basename = path.basename.split("_")[0];
            })
        )
        .pipe(
            svgmin(function (file) {
                var prefix = path.basename(
                    file.relative,
                    path.extname(file.relative)
                );
                return {
                    //https://github.com/svg/svgo/tree/master/plugins
                    plugins: [
                        {
                            cleanupIDs: {
                                prefix: prefix + "-",
                                minify: true,
                            },
                        },
                    ],
                };
            })
        )
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(
            gulpcheerio({
                run: function ($) {
                    $("symbol").each(function () {
                        var symbol = $(this);
                        var id = symbol.attr("id");
                        if (!config.icons.customFill.find((cf) => cf === id)) {
                            $(symbol)
                                .find("path")
                                .each(function (k, elem) {
                                    // console.log('object', k, elem)
                                    if ($(elem).attr("fill") === "#000") {
                                        $(elem).attr("fill", "");
                                    }
                                });
                        }
                    });
                    $("svg").attr("style", "display:none");
                    $("svg").attr("aria-hidden", "true");
                },
                parserOptions: { xmlMode: true },
            })
        )
        .pipe(dest(config.icons.store.path));
});

//read files by names and create a json for variants for Fractal configs.js to use
const configVariants = async (type) => {
    var variants = await glob.sync(config.icons.source[type]).map((file) => {
        var basename = path.basename(file, ".svg");
        var nameNcat = basename.split("_");
        return {
            name: nameNcat[0],
            context: {
                name: nameNcat[0],
                category: nameNcat[1],
                viewBox: config.icons.customViewBox[nameNcat[0]] || "0 0 24 24",
            },
        };
    });

    return fs.writeFileSync(
        "fractal/components/components/" +
            config.icons.store.primary +
            "/icons-" +
            type +
            "/icons-" +
            type +
            "-variants.json",
        JSON.stringify(variants)
    );
};

//make array of variants with names for primary icons config
task("ontario-icons-primary-variants", async () => {
    await configVariants("primary");
});

//make array of variants with names for primary icons config
task("ontario-icons-secondary-variants", async () => {
    await configVariants("secondary");
});

//Generate svgstore file from many svg icons for secondary
task("svgstore-ontario-icons-secondary", () => {
    return src(config.icons.source.secondary)
        .pipe(
            rename((path) => {
                path.basename = path.basename.split("_")[0];
            })
        )
        .pipe(
            svgmin(function (file) {
                var prefix = path.basename(
                    file.relative,
                    path.extname(file.relative)
                );
                return {
                    plugins: [
                        {
                            cleanupIDs: {
                                prefix: prefix + "-",
                                minify: false,
                            },
                        },
                    ],
                };
            })
        )
        .pipe(svgstore())
        .pipe(
            gulpcheerio({
                run: function ($) {
                    //
                    $("symbol").each(function () {
                        var symbol = $(this);
                        var id = symbol.attr("id");
                        if (!config.icons.customFill.find((cf) => cf === id)) {
                            $(symbol)
                                .find("path")
                                .each(function (k, elem) {
                                    if ($(elem).attr("fill") !== "none") {
                                        $(elem).attr("fill", "");
                                    }
                                });
                        }
                    });

                    $("svg").each(function () {
                        var svg = $(this);
                    });
                },
                parserOptions: { xmlMode: true },
            })
        )
        .pipe(dest("fractal/public/icons"));
});

//copy primary svgs from iconstores folder to handlebars
task("copy-ontario-icons-primary", function () {
    return src(config.icons.store.path + "/ontario-icons-primary.svg")
        .pipe(dest("fractal/public/icons"))
        .pipe(rename("icons-primary-setup.hbs"))
        .pipe(
            dest(
                "fractal/components/components/" +
                    config.icons.store.primary +
                    "/_icons-primary-setup",
                {
                    overwrite: true,
                }
            )
        );
});

task("inline-ontario-icons-primary-fractal", async function () {
    const primaryIcons = await fs.readFileSync(
        config.icons.store.path + "/ontario-icons-primary.svg",
        "utf8"
    );
    return src("fractal/theme/overrides/partials/head_source.nunj")
        .pipe(inject.after("</title>", primaryIcons))
        .pipe(rename("head.nunj"))
        .pipe(dest("fractal/theme/overrides/partials"));
});

task("inline-ontario-icons-secondary-fractal", async function () {});

//setup the preview of Fractal icons
task("preview-icons-setup", async function () {
    //loading the primary icons store
    const primaryIcons = await fs.readFileSync(
        config.icons.store.path + "/ontario-icons-primary.svg",
        "utf8"
    );

    //loading react file paths, asset-manifest generated when build react occursm, it includes latest js and css files to load
    const reactAssets = JSON.parse(
        await fs.readFileSync(
            "fractal/public/reactjs/build/asset-manifest.json",
            "utf8"
        )
    );

    //making _preview-icons.hbs for all icons previews in Fractal
    return src("fractal/components/_preview.hbs")
        .pipe(
            //root is needed for react app to load
            inject.after(
                "<body>",
                ` <div id="root"></div> <div id="fractal-icons-preview">`
            )
        )
        .pipe(
            //loading all js scripts
            //svgxuse = polyfill for IE icons to load
            //reactloader = needed to load react webapp
            //preview-icons = puts icons into categories in the preview
            //react build js files
            inject.before(
                "</body>",
                `</div>
                    <script> window.lang = '${lang}' </script>
                    <script src="{{ path '/scripts/svgxuse.js' }}"></script>
                    <script src="{{ path '/scripts/reactloader.js' }}"></script>
                    <script src="{{ path '/scripts/translations/translations.js' }}"></script>
                    <script src="{{ path '/scripts/preview-icons.js' }}"></script>
                    <script src="{{ path '/reactjs/build${reactAssets.files["main.js"]}' }}">
                    </script> <script src="{{ path '/reactjs/build/${reactAssets.entrypoints[1]}' }}"></script>`
            )
        )
        .pipe(
            inject.after(
                "<head>",
                `<link href="{{ path '/reactjs/build${reactAssets.files["main.css"]}' }}" rel="stylesheet">
                    <link href="{{ path '/styles/preview-icons.css' }}" rel="stylesheet">
            `
            )
        )
        .pipe(rename("_preview-icons.hbs"))
        .pipe(
            dest("fractal/components", {
                overwrite: true,
            })
        );
});

//move all svg icons to a public place for download
task("icons-svg-to-public-secondary", function () {
    return src(config.icons.source.secondary)
        .pipe(
            rename((path) => {
                path.basename = path.basename.split("_")[0];
            })
        )
        .pipe(
            dest("fractal/public/icons/svg/", {
                overwrite: true,
            })
        );
});

//move all svg icons to a public place for download, strip out category names for clean look
task("icons-svg-to-public-primary", function () {
    return src(config.icons.source.primary)
        .pipe(
            rename((path) => {
                path.basename = path.basename.split("_")[0];
            })
        )
        .pipe(
            dest("fractal/public/icons/svg/", {
                overwrite: true,
            })
        );
});

//move all svg icons to a public place for download
task("ontario-icons-archive-pngs", function () {
    return src("fractal/public/icons/png/*.png")
        .pipe(zip("ontario-icons-archive-pngs.zip"))
        .pipe(dest("fractal/public/icons/png/"));
});

//put all icons to build folder
task("ontario-icons-to-build", function () {
    return src("fractal/public/icons/**/*").pipe(dest("fractal/build/icons/"));
});

// All icon tasks grouped
task(
    "icons",
    series(
        "svgstore-ontario-icons-primary",
        "svgstore-ontario-icons-secondary",
        "copy-ontario-icons-primary",
        "inline-ontario-icons-primary-fractal",
        "preview-icons-setup",
        "ontario-icons-primary-variants",
        "ontario-icons-secondary-variants",
        "icons-svg-to-public-primary",
        "icons-svg-to-public-secondary",
        "ontario-icons-archive-pngs"
    )
);
