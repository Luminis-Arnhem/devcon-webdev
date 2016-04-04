/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="talk.controller.ts" />
/// <reference path="talk.service.ts" />


namespace Talk {
    
    let talkModule: angular.IModule = angular.module("talk", ["ui.router","common"]);
    
    let talkView = "talk/partials/talks.html";
    
    talkModule.config(($stateProvider: any) => {
            $stateProvider.state("talks", {
                controller: "talkController as ctrl",
                templateUrl: talkView,
                url: "/",
            });
        });
    
    talkModule.controller("talkController", TalkController);
    talkModule.service("talkService", TalkService);
}