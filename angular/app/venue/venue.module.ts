/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="venue.controller.ts" />
/// <reference path="venue.service.ts" />

namespace Venue {
    
    let venueModule: angular.IModule = angular.module("venue", ["ui.router", "common"]);
    
    let venueView = "venue/partials/venues.html";
    
    venueModule.config(function ($stateProvider: any) {
            $stateProvider.state("venues", {
                controller: "venueController as ctrl",
                templateUrl: venueView,
                url: "/venues",
            });
        });
    
    venueModule.controller("venueController", Venue.VenueController);
    venueModule.service("venueService", Venue.VenueService);
}