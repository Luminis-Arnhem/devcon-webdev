/// <reference path="talk.model.ts" />
/// <reference path="talk.service.ts" />

namespace Talk {
    
    export class TalkController {
      
      public talks: Talk[];
      
      constructor(public talkService: ITalkService) {
          this.getTalks();
      }
      
      public getTalks() {
          this.talkService.getAllTalks().then((talks: Talk[]) => {
             this.talks = talks; 
          });
      }
    }
}