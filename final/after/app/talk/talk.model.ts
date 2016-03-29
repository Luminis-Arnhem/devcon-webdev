///<reference path="../venue/venue.model.ts" />
///<reference path="../timeslot/timeslot.model.ts" />

namespace Talk {
    
    export class Talk {
         public title: string;
         
         public key: string;

         public description: string;

         public TimeSlotKey: string;

         public venueKey: string;
    }
}