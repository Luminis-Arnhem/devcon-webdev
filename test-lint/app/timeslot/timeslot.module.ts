/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="timeslot.controller.ts" />
/// <reference path="timeslot.service.ts" />

namespace Timeslot {
    
    let timeslotModule: angular.IModule = angular.module("timeslot", ["ui.router", "common"]);
    
    let timeslotView = "timeslot/partials/timeslots.html";
    
    timeslotModule.config(function ($stateProvider: any) {
            $stateProvider.state("timeslots", {
                controller: "timeslotController as ctrl",
                templateUrl: timeslotView,
                url: "/timeslots",
            });
        });
    
    timeslotModule.controller("timeslotController", TimeslotController);
    timeslotModule.service("timeslotService", TimeslotService);
}