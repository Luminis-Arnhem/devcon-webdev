/// <reference path="../../typings/tsd.d.ts" />

module People {
    var modulename = "people";
    var module: angular.IModule = angular.module(modulename, ["templates"]);
     module.config(($stateProvider) => {
        $stateProvider.state("people", {
            controller: () => {
                console.log("people ctrl");
            },
            templateUrl: "people/partials/people.html",
            url: "/people",
        });
    });
}
