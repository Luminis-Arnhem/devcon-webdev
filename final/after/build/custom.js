var People;!function(e){var o="people",t=angular.module(o,["templates"]);t.config(["$stateProvider",function(e){e.state("people",{controller:["$http",function(e){e.get("/test"),console.log("people ctrl")}],templateUrl:"people/partials/people.html",url:"/people"})}])}(People||(People={}));var Common;!function(e){var o="devcon-webdev",t=angular.module(o,["templates","ui.router","people"]);t.config(["$urlRouterProvider",function(e){e.otherwise("/people")}]),angular.bootstrap(document,[o])}(Common||(Common={}));