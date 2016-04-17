/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="talk.model.ts" />
/// <reference path="talk.service.ts" />

namespace Talk {
    interface ITalkStateParams extends ng.ui.IStateParamsService {
        talkkey: string;
    }
    
    export class TalkController {
      
      public talk: Talk;
      
        /* @ngInject */
      constructor(private talkService: ITalkService, $stateParams: ITalkStateParams) {
          this.getTalk($stateParams.talkkey);
      }
      
      public getTalk(key: string) {
          this.talkService.getTalkByKey(key).then((talk: Talk) => {
             this.talk = talk; 
          });
      }
    }
}