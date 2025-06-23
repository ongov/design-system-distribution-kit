const { src, dest, task, series } = require("gulp");
const del = require("del");
const zip = require("gulp-zip");
const replace = require("gulp-replace");
const fs = require("fs");
const package = JSON.parse(fs.readFileSync("./package.json"));
const version = `${package.name}-dist-${package.version}`;
const rename = require("gulp-rename");
const inject = require("gulp-inject");
const injectString = require("gulp-inject-string");
const config = require("./tasks-config");
const { icons } = require("./tasks-config");

//VARIABLES
const iconFiles = [
    "fractal/build/icons/png/*.png",
    "fractal/build/icons/svg/**/*.svg",
    "fractal/build/icons/ontario-icons-secondary.svg",
    "fractal/build/icons/ontario-icons-primary.svg",
    "fractal/build/icons/ontario-checkbox-background-no-width.svg",
    "fractal/build/icons/ontario-material-dropdown-arrow-48px.svg",
];
//path to folder where dist will live
const dist_target = "dist";
//scripts
const scriptFiles = ["fractal/build/scripts/svgxuse.js"];
//styles
const styleFiles = [
    "fractal/build/components/raw/**/*.css",
    "fractal/build/components/raw/**/*.scss",
];
//sass
const sassFiles = [
    "fractal/build/styles/sass/**/*",
    "!fractal/build/styles/sass/_platform-specific-import.scss",
    "!fractal/build/styles/sass/platform-specific/**",
    "!fractal/build/styles/sass/preview-icons.scss",
    "!fractal/build/styles/sass/fractal-theme.scss",
];
//HTML samples
const htmlBase = "fractal/build/components/render/";
const htmlFiles = [
    `!${htmlBase}*`,
    `${htmlBase}colours.html`,
    `${htmlBase}typegraphy.html`,
    `${htmlBase}12col-grid.html`,
    `${htmlBase}links.html`,
    `${htmlBase}blockquote--*`,
    `${htmlBase}callouts-asides--*`,
    `${htmlBase}critical-alerts.html`,
    `${htmlBase}page-alerts--*`,
    `${htmlBase}buttons--*.html`,
    `${htmlBase}checkboxes.html`,
    `${htmlBase}dropdown-lists--*.html`,
    `${htmlBase}hint-text.html`,
    `${htmlBase}labels--*`,
    `${htmlBase}radio-buttons.html`,
    `${htmlBase}text-areas.html`,
    `${htmlBase}text-inputs.html`,
    `${htmlBase}icon-primaryheader.html`,
    `${htmlBase}icons-primary--ontario-icon-*.html`,
    `${htmlBase}icon-secondaryheader.html`,
    `${htmlBase}icons-secondary--ontario-icon-*.html`,
];

//Gulp steps to build a dist folder and archive file
//Archive file will be named using project namd and version from package.json file
//Dist will get built in the usual build process
//dist-versions folder will include dists of all design system versions

//helpers
function capitalizeTitle(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//tasks
//Cleanup
task("dist:clean", () => {
    return del([dist_target]);
});

//FONTS
task("dist:fonts", function () {
    return src("fractal/build/fonts/**/*").pipe(dest(dist_target + "/fonts"));
});

//ICONS
task("dist:icons", function () {
    return src(iconFiles, { base: "fractal/build/icons/" }).pipe(
        dest(dist_target + "/icons")
    );
});

//JS
task("dist:js", function () {
    return src(scriptFiles).pipe(dest(dist_target + "/scripts"));
});

//STYLES: seperate component styles css and scss in folders
task("dist:styles-comps", function () {
    return src(styleFiles, { base: "fractal/build/components/raw/" })
        .pipe(replace("../../../theme/assets/styles/sass/", "../../sass/"))
        .pipe(dest(dist_target + "/styles/components"));
});

//This is the main css styles, it won't include CSS once we merge the fix splitting fractal styles from ds
task("dist:styles-ds", function () {
    return src([
        "fractal/build/styles/ds-theme.css",
        "fractal/build/styles/ds-theme.min.css",
    ]).pipe(dest(dist_target + "/styles"));
});

//globals of components, will need some more work
task("dist:styles-sass", function () {
    return src(sassFiles).pipe(dest(dist_target + "/styles/sass"));
});

//Selection of best examples, excluding some not so useful and Fractal files
task("dist:html", function () {
    return src(htmlFiles, { allowEmpty: true }).pipe(
        dest(dist_target + "/html-samples")
    );
});

//Inject components in index.html
task("dist:index", function () {
    const builderContent = (filePath, file, idx) => {
        const Header = capitalizeTitle(
            filePath.replace("/" + htmlBase, "").replace(".html", "")
        );
        const Content = file.contents.toString("utf8");

        if (
            Header === "Icon-primaryheader" ||
            Header === "Icon-secondaryheader"
        ) {
            return `<hr id="${Header}">` + Content;
        } else if (Header.indexOf("Icons") + 1) {
            iconsId++;
            return (
                (iconsId === 1 || iconsId === 27
                    ? '<ul class="icons-list">\n<li>'
                    : "<li>") +
                Content +
                "<span> " +
                Header.replace("Icons-primary--", "").replace(
                    "Icons-secondary--",
                    ""
                ) +
                "</span>" +
                (iconsId === 26 || iconsId === 111 ? "</ul>" : "</li>")
            );
            //if other components
        } else {
            return (
                "<hr>" +
                `<h2 id=${Header}>` +
                Header.replace("--", " ").replace(/-/g, " ") +
                "</h2>" +
                Content
            );
        }
    };

    const builderMenu = (filePath, file, idx, length) => {
        const Header = capitalizeTitle(
            filePath.replace("/" + htmlBase, "").replace(".html", "")
        );

        let returnable = "";

        if (idx === 0) {
            returnable +=
                `<div id="main-header">
            <span>Release ${package.version}</span>
            <h1><a href="https://designsystem.ontario.ca/" title="Ontario Design System Examples">Ontario Design System Examples</a></h1>
            <p class="ontario-lead-statement">To preview this page you may use the <a href=https://www.npmjs.com/package/serve>Serve</a> command` +
                "`serve dist`</p>" +
                `<ul>`;
        }

        if (Header.indexOf("Icons") === -1) {
            returnable +=
                "\n<li><a href='#" +
                Header +
                "'>" +
                Header.replace(/-/g, " ")
                    .replace("Icon primaryheader", "Icons Primary")
                    .replace("Icon secondaryheader", "Icons Secondary") +
                "</a></li>\n";
        }

        if (idx === length - 1) {
            returnable += `</ul> </div>`;
        }
        return returnable;
    };

    var sources = src([...htmlFiles], { allowEmpty: true });
    let iconsId = 0;

    return src("dist-index-template.html")
        .pipe(
            inject(sources, {
                starttag: "<!-- inject:menu:{{ext}} -->",
                transform: (filePath, file, idx, length) =>
                    builderMenu(filePath, file, idx, length),
            })
        )
        .pipe(
            inject(sources, {
                starttag: "<!-- inject:body:{{ext}} -->",
                transform: (filePath, file, idx, length) =>
                    builderContent(filePath, file, idx, length),
            })
        )
        .pipe(
            injectString.after(
                "</title>",
                fs.readFileSync(
                    config.icons.store.path + "/ontario-icons-primary.svg",
                    "utf8"
                )
            )
        )
        .pipe(rename("index.html"))
        .pipe(
            dest(dist_target, {
                overwrite: true,
            })
        );
});

//dist notes
task("dist:notes", async function () {
    return await src("fractal/docs/docs-en/documentation/03-release-notes.md")
        .pipe(rename(`version-release-notes-${version}.txt`))
        .pipe(dest(dist_target));
});

task("dist:packageJson", async () => {
    const packageJson = {
        name: "design-system-dist",
        version: package.version,
        description: "Design System Dist",
        license: "ISC",
    };
    return await fs.writeFileSync(
        dist_target + "/package.json",
        JSON.stringify(packageJson)
    );
});

//zip dist with version number
task("dist:package", function () {
    return src(dist_target + "/**/*")
        .pipe(zip(`${version}.zip`))
        .pipe(dest("./fractal/public/dist/"))
        .pipe(dest("./fractal/build/dist/"));
});

task(
    "dist",
    series(
        "dist:clean",
        "dist:fonts",
        "dist:icons",
        "dist:js",
        "dist:html",
        "dist:styles-comps",
        "dist:styles-ds",
        "dist:styles-sass",
        "dist:packageJson",
        "dist:notes",
        "dist:index",
        "dist:package" //always last step
    )
);
