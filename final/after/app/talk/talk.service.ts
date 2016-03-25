/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="talk.model.ts" />


namespace Talk {

    export class TalkService {
    
        
        /* @ngInject */
        constructor(public $http: angular.IHttpService, public $urlConfig: string) {
            
        }
        
        public getAllTalks(): angular.IPromise<Talk[]> {
         return this.$http.get(this.$urlConfig + "talks").then((returnData) => {
              let result: Talk.Talk[] = <Talk[]>returnData.data;
              return result;
            });
        }
        
   
    }
}