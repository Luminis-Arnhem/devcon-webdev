/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="venue.model.ts" />

namespace Venue {
    
    export interface IVenueService {
        getAllVenues(): angular.IPromise<Venue[]>;
    }
    
    export class VenueService implements IVenueService {
        
        /* @ngInject */
        constructor(public $http: angular.IHttpService, public urlConfig: string) { }
           
        public getAllVenues(): angular.IPromise<Venue[]> {
            return this.$http.get(this.urlConfig + "venues").then((returnData) => {
                    let result: Venue[] = <Venue[]>returnData.data;
                    return result;
                });
        }
    } 
}