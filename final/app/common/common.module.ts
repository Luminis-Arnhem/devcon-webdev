/// <reference path="../../typings/tsd.d.ts" />

namespace Common {
    const moduleName = "common";
    let appModule: angular.IModule = angular.module(moduleName, []);

    appModule.constant("urlConfig", "http://devconwebdev.azurewebsites.net/api/");
}