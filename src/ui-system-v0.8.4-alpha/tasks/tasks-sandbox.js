const { src, dest, task, series } = require("gulp");
const replace = require("gulp-replace");
const { sandbox = "" } = require("yargs").argv;

const styleFiles = [
    "fractal/build/components/raw/**/*.css",
    "fractal/build/components/raw/**/*.scss"
];

//copy react build to fractal public
task("sandbox-name-lang-toggle", function() {
    return src("fractal/build/scripts/navigation.js", { base: "fractal/build/scripts/" })
    .pipe(replace("SANDBOX_NAME",sandbox))
    .pipe(
        dest("fractal/build/scripts/")
    );
});

// All Icons
task(
    "sandbox",
    series(
    "sandbox-name-lang-toggle")
);