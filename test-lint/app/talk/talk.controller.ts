/// <reference path="talk.model.ts" />
/// <reference path="talk.service.ts" />

namespace Talk {
    
    interface ITalkStateParams extends ng.ui.IState {
        talkkey: string;
}
    
    export class TalkController {
      
      public talks: Talk[];
      
      public talk: Talk;
      
      constructor(public talkService: ITalkService, $state: any) {
          this.getTalks();
          if ($state.params.talkkey) {
            this.getTalkByKey($state.params.talkkey);
          }
      }
      
      public getTalks() {
          this.talkService.getAllTalks().then((talks: Talk[]) => {
             this.talks = talks; 
          });
      }
      
      public getTalkByKey(key: string) {
          this.talkService.getTalkByKey(key).then((talk: Talk) => {
              this.talk = talk;
          });
      }
    }
}