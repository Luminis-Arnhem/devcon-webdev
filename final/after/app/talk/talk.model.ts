///<reference path="../venue/venue.model.ts" />
///<reference path="../timeslot/timeslot.model.ts" />

namespace Talk {
    
    export class Talk {
         public title: string;

         public description: string;

         public timeslot: Timeslot.Timeslot;

         public venue: Venue.Venue;
    }
}