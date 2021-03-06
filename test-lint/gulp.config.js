module.exports = function () {
    var app = './app/';
    var build = './build/';
    var typings = './typings/';
    var bower_components = './bower_components/';

    var tsProject = {
        declarationFiles: false,
        noExternalResolve: true,
        module: "system",
        target: "ES5",
        sortOutput: true
    };

    var config = {
        app: app,
        build: build,
        buildTest: 'build-test/',
        out: {
            custom: 'custom.js',
            libs: 'libs.js',
            tests: 'test.js',
            css: 'styles.css',
            fonts: 'fonts/',
            templates: 'templates.js',
        },
        ts: {
            ts: app + '**/*.ts',
            noSpec:'!**/*.spec.ts',
            spec: app + '**/*.spec.ts',
            dts: typings + '**/*.ts'
        },
        html: app + '**/partials/**/*.html',
        index: app + 'index.html',
        packages: ['./package.json', './bower.json'],
        fonts: [
            app + '/**/fonts/**/*',
            bower_components + 'font-awesome/fonts/*'],
        images: app + '/**/images/**/*',
        sass: [
            app + '/styles.scss'
        ],
        tsProject: tsProject
    };
    return config;
};