/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../app/people/people.module.ts" />
/// <reference path="../../app/people/people.controller.ts" />

describe("peopleController", function () {

     it("check if the setVariable actually sets the variable", () => {
        let controller = new People.PeopleController();
        controller.setSomeVariable();
        expect(controller.someVariable).toEqual("somethingg");
    });

    describe("Controller with angular" , function () {
        beforeEach(() => {
            angular.mock.module("ui.router");
            angular.mock.module("people");
        });
        let $controller;
        let $state;

        beforeEach(inject(( _$state_, _$controller_) => {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $state = _$state_;
            $controller = _$controller_;
        }));

        it("check if the setVariable actually sets the variable", () => {
            let $scope = {};
            let controller: People.PeopleController = $controller("PeopleController", { $scope: $scope });
            controller.setSomeVariable();
            expect(controller.someVariable).toEqual("something");
        });
    });
});