var config = require('./gulp.config')();
var gulp = require('gulp');
var p = require('gulp-load-plugins')({lazy: true});
var args = require('yargs').argv;
var lib = require('bower-files')();


var tsProject = p.typescript.createProject(config.tsProject);

gulp.task('buildLibs', function () {
    return gulp.src(lib.ext('js').files)
        .pipe(p.concat('libs.js'))
        .pipe(args.release ? p.uglify() : p.util.noop())
        .pipe(gulp.dest(config.build));
});

gulp.task('buildTemplates', function () {
    return gulp.src(config.html)
        .pipe(p.angularTemplatecache('templates.js', { standalone: true }))
        .pipe(args.release ? p.uglify() : p.util.noop())
        .pipe(gulp.dest(config.build));
});

gulp.task('buildTs', function () {
    return gulp.src(config.ts.concat())
        .pipe(!args.release  ? p.sourcemaps.init() : p.util.noop())
        .pipe(p.typescript(config.tsProject))
        .pipe(p.concat('custom.js'))
        .pipe(!args.release  ? p.sourcemaps.write() : p.util.noop())
        .pipe(args.release  ? p.ngAnnotate() : p.util.noop())
        .pipe(args.release  ? p.uglify() : p.util.noop())
        .pipe(gulp.dest(config.build));
});

gulp.task('buildSass', function () {
    return gulp.src(config.sass)
    .pipe(p.sass({
        sourceComments: !args.release
    }).on("error", p.notify.onError({
        message: 'Error: <%= error.message %>'
    })))
    .pipe(p.autoprefixer())
    .pipe(args.release ? p.minifyCss() : p.util.noop())
    .pipe(gulp.dest(config.build));
});

gulp.task('copyImages', function () {
    return copy(config.images);
});

gulp.task('copyFonts', function () {
    return copy(config.fonts);
});

gulp.task('copyIndex', function () {
    return copy(config.index);
});

gulp.task('clean', function () {
    return gulp.src([config.build], { read: false })
        .pipe(p.clean());
});

gulp.task('build', ['buildTs', 'buildTemplates', 'buildLibs', 'copyImages', 'copyFonts', 'buildSass','copyIndex'], function () {
    if(!args.release){
        return gulp.start('watch-dev');
    }
});

gulp.task('watch-dev', function () {
    gulp.watch(config.html, ['buidlTemplates']);
    gulp.watch(config.images, ['copyImages']);
    gulp.watch(config.fonts, ['copyFonts']);
    gulp.watch(config.ts, ['buildTs']);
    gulp.watch(config.sass, ['buildSass']);
});

gulp.task('default', ['clean'], function () {
    return gulp.start('build');
});

//// helper functions //////

var copy = function (source) {
    return gulp.src(source)
        .pipe(gulp.dest(config.build));
};