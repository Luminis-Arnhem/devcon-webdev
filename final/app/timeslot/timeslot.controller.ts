/// <reference path="timeslot.service.ts" />
/// <reference path="timeslot.model.ts" />



namespace Timeslot {
    export class TimeslotController {
        public timeslots: Timeslot[];
      
        constructor(public timeslotService: ITimeslotService) {
            this.getTimeslots();
        }
        
        public getTimeslots() {
            this.timeslotService.getAllTimeslots().then((timeslots: Timeslot[]) => {
                this.timeslots = timeslots; 
            });
        }
    }
}