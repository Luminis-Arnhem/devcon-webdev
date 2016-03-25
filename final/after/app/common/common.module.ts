/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../people/people.module.ts" />

namespace Common {
    const appName = "devcon-webdev";
    let appModule: angular.IModule = angular.module(appName, ["templates", "ui.router", "talk", "venue", "timeslot"]);

    appModule.config(($urlRouterProvider: angular.ui.IUrlRouterProvider) => {
        $urlRouterProvider.otherwise("/people");
    });
    angular.bootstrap(document, [appName]);
    
    appModule.constant("urlConfig", "http://devconwebdev.azurewebsites.net/api/");
}