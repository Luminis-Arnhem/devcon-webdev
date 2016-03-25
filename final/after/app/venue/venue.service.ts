/// <reference path="venue.model.ts" />
/// <reference path="../talk/talk.model.ts" />

/// <reference path="../../typings/tsd.d.ts" />


namespace Venue {
    
    export class VenueService {
        
        /* @ngInject */
        constructor(public $http: angular.IHttpService, public $urlConfig: string) { }
           
        public getTalksByVenue(venueKey: string): angular.IPromise<Talk.Talk[]> {
                return this.$http.get(this.$urlConfig + "").then((returnData) => {
                let result: Talk.Talk[] = <Talk.Talk[]>returnData.data;
                return result;
                });
            }   
    } 
}