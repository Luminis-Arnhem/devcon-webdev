/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="timeslot.model.ts" />

namespace Timeslot {

    export interface ITimeslotService {
        getAllTimeslots(): angular.IPromise<Timeslot[]>;
    }
    
    export class TimeslotService implements ITimeslotService {

        /* @ngInject */
        constructor(public $http: angular.IHttpService, public urlConfig: string) {}
        
        public getAllTimeslots(): angular.IPromise<Timeslot[]> {
         return this.$http.get(this.urlConfig + "timeslots").then((returnData) => {
              let result: Timeslot[] = <Timeslot[]>returnData.data;
              return result;
            });
        }
        
   
    }
    
}