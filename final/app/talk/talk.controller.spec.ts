/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../app/talk/talk.module.ts" />
/// <reference path="../../app/talk/talk.controller.ts" />

describe("talkController", function () {
    let $controller;
    let $state;
    let TalkService;

    beforeEach(inject(( _$state_, _$controller_,_TalkService_) => {
        //angular.mock.module("ui.router");
        angular.mock.module("talk");
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $state = _$state_;
        $controller = _$controller_;
        TalkService = _TalkService_;
    }));

    it("check if the setVariable actually sets the variable", () => {
        let $scope = {};
        let controller: Talk.TalkController = $controller("talkController", { $scope: $scope,TalkService:TalkService });
        expect(controller).toBeDefined();
    });
});