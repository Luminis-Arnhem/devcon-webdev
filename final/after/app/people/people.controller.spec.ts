/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../app/people/people.module.ts" />
/// <reference path="../../app/people/people.controller.ts" />

describe("peopleController", function () {
    beforeEach(angular.mock.module("ui.router"));
    beforeEach(angular.mock.module("people"));
    let $controller;
    let $state;

    beforeEach(inject(( _$state_, _$controller_) => {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $state = _$state_;
        $controller = _$controller_;
    }));

    describe("Controller" , function () {
        it("check if the setVariable actually sets the variable", () => {
            let $scope = {};
            let controller: People.PeopleController = $controller("PeopleController", { $scope: $scope });
            controller.setSomeVariable();
            expect(controller.someVariable).toEqual("something");
        });
    });
});