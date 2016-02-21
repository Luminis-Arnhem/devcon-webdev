/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../people/people.module.ts" />

module  Common {
    const appName = "devcon-webdev";
    let appModule: angular.IModule = angular.module(appName, ["templates", "ui.router", "people"]);

    /* @ngInject */
    appModule.config(($urlRouterProvider: angular.ui.IUrlRouterProvider) => {
        $urlRouterProvider.otherwise("/people");
    });
    angular.bootstrap(document, [appName]);
}
