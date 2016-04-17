/// <reference path="../../typings/tsd.d.ts" />

namespace Venue {
    export class VenueController {
        public venues: Venue[];
      
        constructor(public venueService: IVenueService) {
            this.getVenues();
        }
        
        public getVenues() {
            this.venueService.getAllVenues().then((venues: Venue[]) => {
                this.venues = venues; 
            });
        }
        
    }
}