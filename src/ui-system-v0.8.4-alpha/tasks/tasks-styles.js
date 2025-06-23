const { dest, series, src, task, watch } = require("gulp");
const sass = require("gulp-sass");
const config = require("./tasks-config");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

// Shared helper for sass:components, and sass:theme
sassConfig = () => {
    // Default CSS style is expanded
    const sassConfig = { outputStyle: "expanded" };
    // Production CSS style is compressed
    if (config.isProd === true) {
        sassConfig.outputStyle = "compressed";
    }
    return sassConfig;
};

const scssFiles = ["fractal/**/*.scss", "!fractal/build", "!fractal/build/**"];

task("watch", (done) => {
    watch(scssFiles, { ignoreInitial: false }, series("sass"));
    done();
});

// Component styles
task("sass:components", () => {
    return src("fractal/components/**/*.scss")
        .pipe(
            sass({ outputStyle: sassConfig().outputStyle }).on(
                "error",
                sass.logError
            )
        )
        .pipe(autoprefixer())
        .pipe(dest((f) => f.base));
});

// Design System styles
task("sass:ds-theme", () => {
    return src([
        "!fractal/build",
        "fractal/theme/assets/styles/sass/variables/**/*.scss",
        "fractal/theme/assets/styles/sass/global/**/*.scss",
        "fractal/components/basics/**/*.scss",
        "fractal/components/components/**/*.scss",
        "!fractal/components/platform/**/*.scss",
    ])
        .pipe(
            sass({ outputStyle: sassConfig().outputStyle }).on(
                "error",
                sass.logError
            )
        )
        .pipe(autoprefixer())
        .pipe(concat("ds-theme.css"))
        .pipe(dest("fractal/theme/assets/styles"));
});

task("sass:ds-theme-minify-css", () => {
    return src("fractal/theme/assets/styles/ds-theme.css")
        .pipe(cleanCSS({ compatibility: "*" }))
        .pipe(rename(`ds-theme.min.css`))
        .pipe(dest("fractal/theme/assets/styles"));
});

const fractalScssFiles = [
    "fractal/**/*.scss",
    "!fractal/build",
    "!fractal/build/**",
    "!fractal/components/**/*.scss",
];

task("sass:fractal-theme", () => {
    return src([
        "fractal/theme/assets/styles/sass/fractal-theme.scss",
        "fractal/components/platform/**/*.scss",
    ])
        .pipe(
            sass({ outputStyle: sassConfig().outputStyle }).on(
                "error",
                sass.logError
            )
        )
        .pipe(autoprefixer())
        .pipe(concat("fractal-theme.css"))
        .pipe(dest("fractal/theme/assets/styles"));
});

task("sass:fractal-minify-css", () => {
    return src("fractal/theme/assets/styles/fractal-theme.css")
        .pipe(cleanCSS({ compatibility: "*" }))
        .pipe(rename(`fractal-theme.min.css`))
        .pipe(dest("fractal/theme/assets/styles"));
});

task("sass:preview-icons", () => {
    return src(["fractal/theme/assets/styles/sass/preview-icons.scss"])
        .pipe(
            sass({ outputStyle: sassConfig().outputStyle }).on(
                "error",
                sass.logError
            )
        )
        .pipe(autoprefixer())
        .pipe(concat("preview-icons.css"))
        .pipe(dest("fractal/theme/assets/styles"));
});

// All Stylesheets
task(
    "sass",
    series(
        "sass:components",
        "sass:preview-icons",
        "sass:ds-theme",
        "sass:ds-theme-minify-css",
        "sass:fractal-theme",
        "sass:fractal-minify-css"
    )
);
