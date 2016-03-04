/// <reference path="../../typings/tsd.d.ts" />

namespace People {
    export class PeopleController {
        public someVariable: string;

        /* @ngInject */
        constructor($http: angular.IHttpService) {
            $http.get("/test");
            console.log("people ctrl");
        }

        public setSomeVariable() {
            this.someVariable = "something";
        }
    }
}