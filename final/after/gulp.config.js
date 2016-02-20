module.exports = function() {
     
    var app = './app/';
    var build = './build/';
    
    var tsProject = {
        declarationFiles: false,
        noExternalResolve: true,
        module: "system",
        target: "ES5",
        sortOutput: true
    };
    
    var config = {
        app : app,
        build : build,
        ts: app + '**/*.ts',
        html : app + '**/partials/**/*.html',
        index : app + 'index.html',
        fonts : app + '/**/fonts/**/*',
        images : app + '/**/images/**/*',
        sass : app + '/**/*.scss',
        tsProject : tsProject
    };
    return config;
}; 
