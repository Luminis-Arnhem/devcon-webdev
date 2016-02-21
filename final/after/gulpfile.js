var config = require('./gulp.config')();
var gulp = require('gulp');
var p = require('gulp-load-plugins')({lazy: true});
var stylish = require('gulp-tslint-stylish');
var args = require('yargs').argv;
var lib = require('bower-files')();


var tsProject = p.typescript.createProject(config.tsProject);

gulp.task('buildLibs', function () {
    return gulp.src(lib.ext('js').files)
        .pipe(p.concat(config.out.libs))
        .pipe(args.release ? p.uglify() : p.util.noop())
        .pipe(gulp.dest(config.build))
        .pipe(p.connect.reload());
});

gulp.task('buildTemplates', function () {
    return gulp.src(config.html)
        .pipe(p.angularTemplatecache(config.out.templates, { standalone: true }))
        .pipe(gulp.dest(config.build))
        .pipe(p.connect.reload());
});

gulp.task('buildTs', function () {
    return gulp.src([config.ts.dts,config.ts.ts])
        .pipe(!args.release  ? p.sourcemaps.init() : p.util.noop())
        .pipe(p.typescript(config.tsProject))
        .pipe(p.concat(config.out.custom))
        .pipe(!args.release  ? p.sourcemaps.write() : p.util.noop())
        .pipe(args.release  ? p.ngAnnotate() : p.util.noop())
        .pipe(args.release  ? p.uglify() : p.util.noop())
        .pipe(gulp.dest(config.build))
        .pipe(p.connect.reload());
});

/**
 * Compile scss to css and minifying it on release
 * @return {Stream}
 */
gulp.task('buildSass', function () {
    return gulp.src(config.sass)
        .pipe(p.sass({
            sourceComments: !args.release
        }).on("error", p.notify.onError({
            message: 'Error: <%= error.message %>'
        })))
        .pipe(p.autoprefixer())
        .pipe(args.release ? p.minifyCss() : p.util.noop())
        .pipe(gulp.dest(config.build))
        .pipe(p.connect.reload());
});

/**
 * vet the code
 * @return {Stream}
 */
gulp.task('vet', function() {
    return gulp
        .src(config.ts.ts)
        .pipe(p.tslint())
        .pipe(p.tslint.report(p.stylish, {
            emitError: true,
            sort: true,
            bell: true,
            fullPath: false
        })).on("error", p.notify.onError({
            message: 'Error: <%= error.message %>'
        }));
});

gulp.task('copyImages', function () {
    return copy(config.images);
});

gulp.task('copyIndex', function () {
    return copy(config.index);
});

gulp.task('clean', function () {
    return gulp.src([config.build], { read: false })
        .pipe(p.clean());
});

gulp.task('connect', function() {
  p.connect.server({
    root: config.build,
    livereload: true
  });
});

/**
 * makes sure all the files are build and in the build folder.
 * if not release also starts server
 * @return {Stream}
 */
gulp.task('build', ['buildTs', 'buildTemplates', 'buildLibs', 'copyImages', 'buildSass','copyIndex','vet'], function () {
    if(!args.release){
        return gulp.start('watch-dev');
    }
});

/**
 * watches for changes and rebuilds sepecific parts
 * @return {Stream}
 */
gulp.task('watch-dev', function () {
    gulp.watch(config.html, ['buidlTemplates']);
    gulp.watch(config.images, ['copyImages']);
    gulp.watch(config.fonts, ['copyFonts']);
    gulp.watch(config.ts.ts, ['buildTs','vet']);
    gulp.watch(config.sass, ['buildSass']);
    gulp.watch(config.index, ['copyIndex']);
});

gulp.task('clean-build', ['clean'], function () {
    return gulp.start('build');
});

/**
 * cleans builds and if release sta
 */
gulp.task('default', ['clean-build'], function () {
    if(!args.release){
        return gulp.start('connect');
    }
});


//// helper functions //////

/**
 * Copies any glob to the build directory
 * Also reloads the browser
 */
var copy = function (source) {
    return gulp.src(source)
        .pipe(gulp.dest(config.build))
        .pipe(p.connect.reload());
};

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}