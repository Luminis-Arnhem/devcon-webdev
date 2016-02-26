﻿var config = require('./gulp.config')();
var gulp = require('gulp');
var p = require('gulp-load-plugins')({lazy: true});
var args = require('yargs').argv;
var lib = require('bower-files')();


var tsProject = p.typescript.createProject(config.tsProject);


/**
 * Builds the external libraries into a single javascript file
 * On release it uglifies
 * @return {Stream}
 */
gulp.task('build-libs', function () {
    return gulp.src(lib.ext('js').files)
        .pipe(p.concat(config.out.libs))
        .pipe(args.release ? p.uglify() : p.util.noop())
        .pipe(gulp.dest(config.build))
        .pipe(p.connect.reload());
});

/**
 * Builds the typescript into a single javascript file
 * @return {Stream}
 */
gulp.task('build-templates', function () {
    return gulp.src(config.html)
        .pipe(p.angularTemplatecache(config.out.templates, { standalone: true }))
        .pipe(gulp.dest(config.build))
        .pipe(p.connect.reload());
});

/**
 * Builds the typescript into a single javascript file
 * adds source maps on debug and minification and ngAnnotate on release
 * @return {Stream}
 */
gulp.task('build-ts', function () {
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
gulp.task('build-sass', function () {
    log("Bulding sass")
    return gulp.src(config.sass)
        .pipe(p.sass({
            sourceComments: !args.release
        }).on("error", p.notify.onError({
            message: 'Error: <%= error.message %>'
        })))
        .pipe(p.autoprefixer())
        .pipe(args.release ? p.minifyCss() : p.util.noop())
        .pipe(p.concat(config.out.css))
        .pipe(gulp.dest(config.build))
        .on("error", p.notify.onError({
            message: 'Error: <%= error.message %>'
        }))
        .pipe(p.connect.reload());
});

/**
 * runs ts lint
 * @return {Stream}
 */
gulp.task('tslint', function() {
    return gulp
        .src(config.ts.ts)
        .pipe(p.tslint())
        .pipe(p.tslint.report(p.tslintStylish, {
            emitError: true,
            sort: true,
            bell: true,
            fullPath: false
        })).on("error", p.notify.onError({
            message: 'Error: <%= error.message %>'
        }));
});

gulp.task('copy-images', function () {
    return copy(config.images);
});
gulp.task('copy-fonts', function () {
    return gulp
        .src(config.fonts)
        .pipe(gulp.dest(config.out.fonts));
});

gulp.task('copy-index', function () {
    return copy(config.index);
});


/**
 * deletes all the content from the build folder
 * @return {Stream}
 */
gulp.task('clean', function () {
    log("Cleaning " + config.build + "folder");
    return gulp.src(config.build, { read: false })
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
gulp.task('build', ['build-ts', 'build-templates', 'build-libs', 'copy-images', 'build-sass','copy-index','copy-fonts','tslint'], function () {
    if(!args.release){
        return gulp.start('watch-dev');
    }
});

/**
 * watches for changes and rebuilds sepecific parts
 * @return {Stream}
 */
gulp.task('watch-dev', function () {
    gulp.watch(config.html, ['build-templates']);
    gulp.watch(config.images, ['copy-images']);
    gulp.watch(config.ts.ts, ['build-ts','tslint']);
    gulp.watch(config.sass, ['build-sass']);
    gulp.watch(config.index, ['copy-index']);
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
                p.util.log(p.util.colors.blue(msg[item]));
            }
        }
    } else {
        p.util.log(p.util.colors.blue(msg));
    }
}