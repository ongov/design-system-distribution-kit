const del = require("del");
const fractal = require("./fractal.js");
const logger = fractal.cli.console;
const sass = require("gulp-sass");
const { dest, parallel, series, src, task, watch, registry } = require("gulp");
const env = require("gulp-env");
const inject = require("gulp-inject-string");
const googleHelper = require("./gulp-ga-helper");
const HubRegistry = require("gulp-hub");
const config = require("./tasks/tasks-config");
// load task files into the registry
const hub = new HubRegistry(["./tasks/*.js"]);
registry(hub);

//use the dart complier vs node-sass for latest sass features and support of sass doc examples
sass.compiler = require("sass");

/**
 * Holds global configuration vars. See 'env' job
 * @namespace
 * @property {string} gaToken Populated by .env
 * @property {boolean} isProd Is this build a production or dev build?
 */

// Load custom env file
env({ file: ".env" });
// Test for production variants
if (process.env.NODE_ENV === "production") {
    config.isProd = true;
    // Sets the value of the GA token for Production
    config.gaToken = process.env.GA_PROD;
} else if (process.env.NODE_ENV === "development") {
    config.isProd = false;
    // Sets the value of the GA token for Stage and Dev
    config.gaToken = process.env.GA_STAGE;
} else {
    config.isProd = false;
    config.isTest = true;
}

// Google Analytics
task("ga", async () => {
    // if the build is for sb-test, or if the build is neither prod nor dev, do not inject ga code
    if (config.isTest) {
        return;
    } else {
        const gtm = new googleHelper(config.gaToken);

        return src([
            "fractal/build/**/*.html",
            "!fractal/build/components/preview/*.html",
        ])
            .pipe(inject.after("<head>", gtm.head()))
            .pipe(inject.after("<body>", gtm.body()))
            .pipe(dest("fractal/build/", { sourcemaps: true }));
    }
});

task("dev", () => {
    const server = fractal.web.server({ sync: true });
    server.on("error", (err) => logger.error(err.message));
    return server
        .start()
        .then(() =>
            logger.success(`Fractal server is now running at ${server.url}`)
        );
});

task("builder", () => {
    const builder = fractal.web.builder();
    builder.on("progress", (completed, total) =>
        logger.update(`Exported ${completed} of ${total} items`, "info")
    );
    builder.on("error", (err) => {
        console.log("err", err);
    });
    return builder
        .build()
        .then(() => logger.success("Fractal build completed!"));
});

// Cleans up any existing auto-generated CSS files, and fractal head to be replaced with icons
task("cleanup", () => {
    return del([
        "fractal/{build,{components,theme}/**/*.css}",
        "fractal/theme/overrides/partials/head.nunj",
        "fractal/public/reactjs/",
    ]);
});

task("clean", parallel("cleanup"));
task(
    "build",
    series(
        "clean",
        "react",
        "lang",
        "sass",
        "icons",
        "builder",
        "sandbox",
        "ga",
        "fonts",
        "ontario-icons-to-build",
        "dist"
    )
);
task("default", series("clean", "react", "lang", "icons", "dev", "watch"));
