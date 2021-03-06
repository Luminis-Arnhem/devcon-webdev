/// <reference path="../typings/tsd.d.ts" />
/// <reference path="talk/talk.module.ts" />
/// <reference path="venue/venue.module.ts" />
/// <reference path="timeslot/timeslot.module.ts" />
/// <reference path="common/common.module.ts" />

const appName = "devcon-webdev";
/* tslint:disable:no-unused-variable */
let appModule: angular.IModule = angular.module(appName, ["talk", "venue", "timeslot"]);
/* tslint:enable:no-unused-variable */
angular.bootstrap(document, [appName]);