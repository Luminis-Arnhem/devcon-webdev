/// <reference path="../../typings/tsd.d.ts" />

module People {
    const modulename = "people";
    let module: angular.IModule = angular.module(modulename, ["templates"]);
    module.config(($stateProvider) => {
        $stateProvider.state("people", {
            controller: ($http: angular.IHttpService) => {
                $http.get("/test");
                console.log("people ctrl");
            },
            templateUrl: "people/partials/people.html",
            url: "/people",
        });
    });
}
