/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="people.controller.ts" />

namespace People {
    const modulename = "people";
    let module: angular.IModule = angular.module(modulename, ["templates"]);

    /* @ngInject */
    module.config(($stateProvider) => {
        $stateProvider.state("people", {
            controller: "PeopleController as ctrl",
            templateUrl: "people/partials/people.html",
            url: "/people",
        });
    })
        .controller("PeopleController", PeopleController);
}