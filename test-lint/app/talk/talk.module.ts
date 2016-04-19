/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="talk.controller.ts" />
/// <reference path="talks.controller.ts" />
/// <reference path="talk.service.ts" />


namespace Talk {
    let talkModule: angular.IModule = angular.module("talk", ["common"]);
    
    let talkView = "talk/partials/talks.html";
    let talkDetail = "talk/partials/talk.html";
    
    /* @ngInject */
    talkModule.config(($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state("talks", {
                controller: "talksController as ctrl",
                templateUrl: talkView,
                url: "/talks",
            }).state("talks.detail", {
                controller: "talkController as ctrl",
                templateUrl: talkDetail,
                url: "/:talkkey",
            });
        });
    
    talkModule.controller("talkController", TalkController);
    talkModule.controller("talksController", TalksController);
    talkModule.service("talkService", TalkService);
}