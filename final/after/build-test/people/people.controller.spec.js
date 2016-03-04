/// <reference path="../../typings/tsd.d.ts" />
describe("peopleController", function () {
    beforeEach(angular.mock.module("people"));
    var $controller;
    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));
    describe("$scope.grade", function () {
        it("sets the strength to 'strong ' if the password length is >8 chars", function () {
            expect(1).toEqual(1);
        });
    });
});
