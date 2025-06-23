const { src, dest, task, series } = require("gulp");
const zip = require("gulp-zip");
const fontsPackage = "ds-fonts.zip";
const del = require("del");

task("fonts:package", async function () {
    await del(["fractal/public/fonts/" + fontsPackage]);
    return src(["fractal/public/fonts/**/*"])
        .pipe(zip(fontsPackage))
        .pipe(dest("fractal/public/fonts/"));
});

task("fonts", series("fonts:package"));
