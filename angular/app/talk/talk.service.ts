/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="talk.model.ts" />


namespace Talk {

    export interface ITalkService {
        getAllTalks(): angular.IPromise<Talk[]>;
        getTalkByKey(key: string): angular.IPromise<Talk> ;
    }
    
    export class TalkService implements ITalkService {

        /* @ngInject */
        constructor(public $http: angular.IHttpService, public urlConfig: string) {
            
        }
        
        public getAllTalks(): angular.IPromise<Talk[]> {
         return this.$http.get(this.urlConfig + "talks").then((returnData) => {
              let result: Talk.Talk[] = <Talk[]>returnData.data;
              return result;
            });
        }
        
        public getTalkByKey(key: string): angular.IPromise<Talk> {
            return this.$http.get(this.urlConfig + "talks/" + key).then((returnData) => {
              let result: Talk.Talk = <Talk>returnData.data;
              return result;
            });
        }
   
    }
}