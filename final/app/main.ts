/// <reference path="../typings/tsd.d.ts" />
/// <reference path="talk/talk.module.ts" />
/// <reference path="venue/venue.module.ts" />
/// <reference path="timeslot/timeslot.module.ts" />
/// <reference path="common/common.module.ts" />


const appName = "devcon-webdev";
let appModule: angular.IModule = angular.module(appName, ["templates", "ui.router", "talk", "venue", "timeslot"]);
angular.bootstrap(document, [appName]);
