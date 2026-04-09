const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const browsersync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cache = require("gulp-cache");
const del = require("del");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const tinypng = require("gulp-tinypng-compress");
const gulpIf = require("gulp-if");
const fs = require("fs");
/* Options
 * ------ */
const options = {
    pug: {
        src: [
            "app/views/*.pug",
            "app/views/!blocks/**",
            "app/views/!layout/**",
        ],
        all: "app/views/**/*.pug",
        dest: "template",
    },
    html: {
        src: ["app/views/*.pug", "app/views/!blocks/**", "app/views/"],
        all: "app/views/**/*.html",
        dest: "template",
    },
    styles: {
        src: "app/scss/**/*.scss",
        dest: "template/css",
    },
    json: {
        src: "app/js/**/*.json",
        dest: "template/js",
    },
    scripts: {
        src: "app/js/**/*.js",
        dest: "template/js",
    },
    images: {
        src: "app/assets/images/*.+(png|jpeg|jpg|gif|svg)",
        dest: "template/assets/images",
    },
    audios: {
        src: "app/assets/audios/*.+(mp3|ogg|wav)",
        dest: "template/assets/audios",
    },
    fonts: {
        src: "app/assets/font/*/*",
        dest: "template/assets/font",
    },
    browserSync: {
        baseDir: "template",
    },
};

// Coppy Library
function copyLibrary() {
    return gulp
        .src(["app/assets/library/**/*"])
        .pipe(gulp.dest("template/assets/library"));
}
copyLibrary();

// Coppy Library
function copyGetfile() {
    return gulp.src(["app/views/getfile.php"]).pipe(gulp.dest("template"));
}
copyGetfile();

function jsonFiles() {
    return gulp.src(options.json.src).pipe(gulp.dest(options.json.dest));
}
jsonFiles();

//Tiny PNG
var API_KEY = ["3fNcnsRXNMBdhXX9hCtMbwv0QQ1XP8JS"];

function optimizeImages() {
    const sizeLimit = 1024 * 1024;

    return gulp
        .src("app/assets/images/**/*.{png,jpg,jpeg}")
        .pipe(plumber())
        .pipe(
            gulpIf(
                (file) => {
                    const stats = fs.statSync(file.path);
                    return stats.size > sizeLimit;
                },
                tinypng({
                    key: "3fNcnsRXNMBdhXX9hCtMbwv0QQ1XP8JS",
                    sigFile: "images/.tinypng-sigs",
                    log: true,
                })
            )
        )
        .pipe(gulp.dest("app/assets/images"));
}
optimizeImages();

/* Browser-sync
 * ------------ */
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: options.browserSync.baseDir,
        },
        port: 3000,
    });
    done();
}

/* Styles
 * ------ */

function styles() {
    return gulp
        .src(options.styles.src)
        .pipe(
            plumber(function (err) {
                console.log("Styles Task Error");
                console.log(err);
                this.emit("end");
            })
        )
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"],
                cascade: false,
                grid: true,
            })
        )
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(options.styles.dest))
        .pipe(
            browsersync.reload({
                stream: true,
            })
        );
}

/* Scripts
 * ------ */

function scripts() {
    return gulp
        .src(options.scripts.src)
        .pipe(
            plumber(function (err) {
                console.log("Scripts Task Error");
                console.log(err);
                this.emit("end");
            })
        )
        .pipe(gulp.dest(options.scripts.dest))
        .pipe(
            browsersync.reload({
                stream: true,
            })
        );
}

/* Views
 * ------ */

function views() {
    return gulp
        .src(options.pug.src)
        .pipe(
            plumber(function (err) {
                console.log("Pug Task Error");
                console.log(err);
                this.emit("end");
            })
        )
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(options.pug.dest))
        .pipe(
            browsersync.reload({
                stream: true,
            })
        );
}

/* Images
 * ------ */

function images() {
    return gulp.src(options.images.src).pipe(gulp.dest(options.images.dest));
}

/* Fonts
 * ------ */

function fonts() {
    return gulp.src(options.fonts.src).pipe(gulp.dest(options.fonts.dest));
}

/* HTML Files
 * ------ */
function htmlFiles() {
    return gulp
        .src(options.html.all)
        .pipe(
            plumber(function (err) {
                console.log("HTML Task Error");
                console.log(err);
                this.emit("end");
            })
        )
        .pipe(gulp.dest(options.html.dest))
        .pipe(
            browsersync.reload({
                stream: true,
            })
        );
}

/* Clean up
 * ------ */

async function clean() {
    return Promise.resolve(del.sync("template"));
}

function watchFiles() {
    gulp.watch(options.pug.all, views);
    gulp.watch(options.styles.src, styles);
    gulp.watch(options.scripts.src, scripts);
    gulp.watch(options.images.src, images);
    gulp.watch(options.fonts.src, fonts);
    gulp.watch(options.html.all, htmlFiles);
    gulp.watch(options.json.src, jsonFiles); // Thêm dòng này để watch file json
}

/* Build
 * ------ */
const build = gulp.series(
    clean,
    gulp.parallel(styles, views, scripts, images, fonts, htmlFiles, jsonFiles) // Thêm jsonFiles vào build
);
const watch = gulp.parallel(watchFiles, browserSync);
// export tasks
exports.styles = styles;
exports.views = views;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;
exports.htmlFiles = htmlFiles;
exports.jsonFiles = jsonFiles; // Export task jsonFiles
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
