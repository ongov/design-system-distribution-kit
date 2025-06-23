const { src, dest, task, series } = require("gulp");
const rename = require("gulp-rename");
const { lang = "en" } = require("yargs").argv;
task("lang-rename-mds", () => {
  return src(`fractal/components/**/README.${lang}.md`, { base: "." })
    .pipe(
      rename(function(path) {
        //console.log("pathpath",path, path.dirname)
        return {
          dirname: path.dirname,
          basename: "README",
          extname: ".md"
        };
      })
    )
    .pipe(dest("."));
});

// All icon tasks grouped
task(
    "lang",
    series(
        "lang-rename-mds",
    )
);
