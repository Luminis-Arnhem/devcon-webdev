/// <reference path="../../typings/tsd.d.ts" />

namespace Common {
    const moduleName = "common";
    let appModule: angular.IModule = angular.module(moduleName, ["templates","ui.router"]);

    appModule.constant("urlConfig", "http://devconwebdev.azurewebsites.net/api/");
}