const { src, dest, task, series } = require("gulp");
const fs = require("fs");
const inject = require("gulp-inject-string");
const { lang = "en" } = require("yargs").argv;
const rename = require("gulp-rename");
// const run = require("gulp-run-command").default; // or `var run = require('gulp-run-command').default` for ES5

// task("react-build", async () =>
//     run("npm run build-react-ci", {
//         env: { NODE_ENV: process.env.NODE_ENV },
//     })()
// );

//copy react build to fractal public
task("react-build-fractal-public", function () {
    return src("reactjs/build/**/*", { base: "." }).pipe(
        dest("fractal/public", {
            overwrite: true,
        })
    );
});

task("react-preview", async function () {
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
                `<div style="
            margin: 0 15px 15px 0;
            position: fixed;
            bottom: 0;
            right: 0;" id="root"></div>`
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
                `
                    <script> window.lang = '${lang}' </script>
                    <script src="{{ path '/scripts/svgxuse.js' }}"></script>
                    <script src="{{ path '/scripts/reactloader.js' }}"></script>
                    <script src="{{ path '/scripts/translations/translations.js' }}"></script>
                    <script src="{{ path '/reactjs/build${reactAssets.files["main.js"]}' }}">
                    </script> <script src="{{ path '/reactjs/build/${reactAssets.entrypoints[1]}' }}"></script>`
            )
        )
        .pipe(
            inject.after(
                "<head>",
                `<link href="{{ path '/reactjs/build${reactAssets.files["main.css"]}' }}" rel="stylesheet">
                   
            `
            )
        )
        .pipe(rename("_preview-react.hbs"))
        .pipe(
            dest("fractal/components", {
                overwrite: true,
            })
        );
});

// All Icons
task("react", series("react-build-fractal-public", "react-preview"));
