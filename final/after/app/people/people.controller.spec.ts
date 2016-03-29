/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../app/people/people.module.ts" />
/// <reference path="../../app/people/people.controller.ts" />

describe("peopleController", function () {
    let controller;
    beforeEach(() => {
        controller = new People.PeopleController();
     });
     it("check if the setVariable actually sets the variable", () => {
        controller.setSomeVariable();
        expect(controller.someVariable).toEqual("something");
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
            let ctrl: People.PeopleController = $controller("PeopleController", { $scope: $scope });
            ctrl.setSomeVariable();
            expect(controller.someVariable).toEqual("something");
        });
    });
});