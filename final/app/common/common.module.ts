/// <reference path="../../typings/tsd.d.ts" />

namespace Common {
    const moduleName = "common";
    let appModule: angular.IModule = angular.module(moduleName, ["templates", "ui.router"]);

    appModule.config(($urlRouterProvider: angular.ui.IUrlRouterProvider) => {
        $urlRouterProvider.otherwise("/talks");
    });
    appModule.constant("urlConfig", "http://devconwebdev.azurewebsites.net/api/");
    appModule.filter("sanitize", ($sce: angular.ISCEService) => {
        return (htmlCode)=>{
            return $sce.trustAsHtml(htmlCode);
        }
    });
}