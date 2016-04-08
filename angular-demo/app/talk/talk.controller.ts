/// <reference path="talk.model.ts" />
/// <reference path="talk.service.ts" />

namespace Talk {
    
    interface ITalkStateParams extends ng.ui.IState {
        talkkey: string;
}
    
    export class TalkController {
      
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