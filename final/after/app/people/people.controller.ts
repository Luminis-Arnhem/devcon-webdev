/// <reference path="../../typings/tsd.d.ts" />

namespace People {
    export class PeopleController {
        public someVariable: string;

        constructor() {
            this.someVariable = "initial value";
        }

        public setSomeVariable() {
            this.someVariable = "something";
        }
    }
}