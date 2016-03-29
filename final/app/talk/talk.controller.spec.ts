/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../app/talk/talk.module.ts" />
/// <reference path="../../app/talk/talk.controller.ts" />

describe("talkController", function () {
    beforeEach(() => {
        angular.mock.module("ui.router");
        angular.mock.module("talk");
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
        let controller: Talk.TalkController = $controller("talkController", { $scope: $scope });
        expect(controller).toBeDefined();
    });
});