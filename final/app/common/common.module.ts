/// <reference path="../../typings/tsd.d.ts" />

namespace Common {
    const moduleName = "Common";
    let appModule: angular.IModule = angular.module(moduleName, []);

    appModule.constant("urlConfig", "http://devconwebdev.azurewebsites.net/api/");
}