/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../talk/talk.module.ts" />
/// <reference path="../venue/venue.module.ts" />
/// <reference path="../timeslot/timeslot.module.ts" />


namespace Common {
    const appName = "devcon-webdev";
    let appModule: angular.IModule = angular.module(appName, ["templates", "ui.router", "talk", "venue", "timeslot"]);

    appModule.constant("urlConfig", "http://devconwebdev.azurewebsites.net/api/");
    angular.bootstrap(document, [appName]);
}