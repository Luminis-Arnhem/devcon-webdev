/// <reference path="talk.model.ts" />
/// <reference path="talk.service.ts" />

namespace Talk {
    
    interface ITalkStateParams extends ng.ui.IState {
        talkkey: string;
}
    
    export class TalkController {
      
      constructor(public talkService: ITalkService, $state: any) {
      }
    }
}