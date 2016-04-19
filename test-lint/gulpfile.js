var config = require('./gulp.config')();
var gulp = require('gulp');
var p = require('gulp-load-plugins')({ lazy: true });
var args = require('yargs').argv;
var Server = require('karma').Server;
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
 * Builds the external libraries into a single javascript file for test
 * On release it uglifies
 * @return {Stream}
 */
gulp.task('build-libs-test', function () {
    return gulp.src(lib.dev().ext('js').files)
        .pipe(p.concat(config.out.libs))
        .pipe(gulp.dest(config.buildTest));
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
    return gulp.src([config.ts.dts, config.ts.ts, config.ts.noSpec])
        .pipe(!args.release ? p.sourcemaps.init() : p.util.noop())
        .pipe(p.typescript(config.tsProject))
        .pipe(p.concat(config.out.custom))
        .pipe(!args.release ? p.sourcemaps.write() : p.util.noop())
        .pipe(args.release ? p.ngAnnotate() : p.util.noop())
        .pipe(args.release ? p.uglify({ mangle: false }) : p.util.noop())
        .pipe(gulp.dest(config.build))
        .pipe(p.connect.reload());
});

/**
 * Builds the typescript spec files into javascript spec files
 * @return {Stream}
 */
gulp.task('build-test', function () {
    return gulp.src([config.ts.dts, config.ts.ts])
        .pipe(p.typescript(config.tsProject))
        .pipe(p.concat(config.out.tests))
        .pipe(gulp.dest(config.buildTest));
});

/**
 * Compile scss to css and minifying it on release
 * @return {Stream}
 */
gulp.task('build-sass', function () {
    log("Bulding sass");
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
gulp.task('tslint', function () {
    return gulp
        .src(config.ts.ts)
        .pipe(p.tslint())
        .pipe(p.tslint.report(p.tslintStylish, {
            emitError: false,
            sort: true,
            bell: true,
            fullPath: false
        }));
});

/**
 * Bump the version
 * --type=pre will bump the prerelease version *.*.*-x
 * --type=patch or no flag will bump the patch version *.*.x
 * --type=minor will bump the minor version *.x.*
 * --type=major will bump the major version x.*.*
 * --ver=1.2.3 will bump to a specific version and ignore other flags
 */
gulp.task('bump', function () {
    var msg = 'Bumping versions';
    var type = args.type;
    var version = args.ver;
    var options = {};
    if (version) {
        options.version = version;
        msg += ' to ' + version;
    } else {
        options.type = type;
        msg += ' for a ' + type;
    }
    log(msg);

    return gulp
        .src(config.packages)
        .pipe(p.bump(options))
        .pipe(gulp.dest('./'))
        .pipe(p.git.commit('bumps package version'))
        .pipe(p.filter('package.json'))
        // **tag it in the repository**
        .pipe(p.tagVersion());
    ;
});

gulp.task('copy-images', function () {
    return copy(config.images);
});
gulp.task('copy-fonts', function () {
    return gulp
        .src(config.fonts)
        .pipe(gulp.dest(config.build + config.out.fonts));
});

gulp.task('copy-index', function () {
    return copy(config.index);
});

/**
 * Run test once and exit
 */
gulp.task('test', ['build-test', 'build-libs-test', 'build-templates'], function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});
/**
 * deletes all the content from the build folder
 * @return {Stream}
 */
gulp.task('clean', function () {
    log("Cleaning " + config.build + "folder");
    return gulp.src([config.build, config.buildTest], { read: false })
        .pipe(p.clean());
});

gulp.task('connect', function () {
    p.connect.server({
        port: 8082,
        root: config.build,
        livereload: {port:4001}
    });
});

/**
 * makes sure all the files are build and in the build folder.
 * if not release also starts server
 * @return {Stream}
 */
gulp.task('build', ['build-ts', 'build-templates', 'build-libs', 'copy-images', 'build-sass', 'copy-index', 'copy-fonts', 'tslint'], function () {
    if (!args.release) {
        return gulp.start('watch-dev');
    } else {
        return gulp.start('test');
    }
});

/**
 * watches for changes and rebuilds sepecific parts
 * @return {Stream}
 */
gulp.task('watch-dev', function () {
    gulp.watch(config.html, ['build-templates']);
    gulp.watch(config.images, ['copy-images']);
    gulp.watch(config.ts.ts, ['build-ts', 'tslint']);
    gulp.watch(config.sass, ['build-sass']);
    gulp.watch(config.index, ['copy-index']);
    gulp.watch(config.ts.spec, ['test']);
});

gulp.task('clean-build', ['clean'], function () {
    return gulp.start('build');
});

/**
 * cleans builds and if release sta
 */
gulp.task('default', ['clean-build'], function () {
    if (!args.release) {
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
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                p.util.log(p.util.colors.blue(msg[item]));
            }
        }
    } else {
        p.util.log(p.util.colors.blue(msg));
    }
}