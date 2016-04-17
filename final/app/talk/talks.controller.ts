/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="talk.model.ts" />
/// <reference path="talk.service.ts" />

namespace Talk {
    export class TalksController {
      
      public talks: Talk[];
      
      constructor(public talkService: ITalkService, $state: any) {
          this.getTalks();
      }
      
      public getTalks() {
          this.talkService.getAllTalks().then((talks: Talk[]) => {
             this.talks = talks; 
          });
      }
    }
}