/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../app/talk/talk.module.ts" />
/// <reference path="../../app/talk/talk.controller.ts" />

describe("Talk", function () {
    describe("TalkServiceTests", function () {
        /* tslint:disable */
        let talkData = [{ "key": "welcome", "title": "Welcome", "description": null, "timeSlotKey": "time-0", "venueKey": "theater-foyer" }, { "key": "opening", "title": "Opening", "description": null, "timeSlotKey": "time-1", "venueKey": "expo-theater" }, { "key": "keynote-session", "title": "Keynote session", "description": null, "timeSlotKey": "time-2", "venueKey": "expo-theater" }, { "key": "java-9-modularity-in-action", "title": "Java 9 Modularity in Action", "description": null, "timeSlotKey": "time-3", "venueKey": "expo-theater" }, { "key": "automated-testing-angular-front-end", "title": "Automated testing of your Angular front-end", "description": null, "timeSlotKey": "time-3", "venueKey": "cinema-5" }, { "key": "theres-a-camel-in-my-house", "title": "There's a Camel in My House!", "description": null, "timeSlotKey": "time-3", "venueKey": "cinema-6" }, { "key": "modularity-using-asp-net-5", "title": "Modularity Using ASP.Net 5 and Azure Service Fabric", "description": null, "timeSlotKey": "time-3", "venueKey": "cinema-7" }, { "key": "the-fallacies-of-distributed-computing", "title": "The Fallacies of Distributed Computing: What if the Network Fails?", "description": null, "timeSlotKey": "time-4", "venueKey": "cinema-4" }, { "key": "indexing-and-enriching-documents-within-elasticsearch", "title": "Ingest Node: (re)Indexing and Enriching Documents within Elasticsearch", "description": null, "timeSlotKey": "time-4", "venueKey": "cinema-5" }, { "key": "introduction-to-ionic-framework", "title": "Introduction to Ionic Framework", "description": null, "timeSlotKey": "time-4", "venueKey": "cinema-6" }, { "key": "automobilista-motorsports-simulator", "title": "Automobilista Motorsports Simulator", "description": null, "timeSlotKey": "time-4", "venueKey": "cinema-7" }, { "key": "lunch", "title": "Lunch", "description": null, "timeSlotKey": "time-5", "venueKey": "theater-foyer" }, { "key": "keynote-session2", "title": "Keynote Session 2", "description": null, "timeSlotKey": "time-6", "venueKey": "expo-theater" }, { "key": "an-introduction-to-kotlin", "title": "Methods Are No Fun – An Introduction to Kotlin", "description": null, "timeSlotKey": "time-7", "venueKey": "cinema-4" }, { "key": "webdev", "title": "Font-end web development for back-end developers", "description": null, "timeSlotKey": "time-7", "venueKey": "cinema-5" }, { "key": "dumped-a-dataset-on-our-doorstep", "title": "Help!They Dumped a Dataset on Our Doorstep", "description": null, "timeSlotKey": "time-7", "venueKey": "cinema-6" }, { "key": "robot-with-java-brain", "title": "Creating a Cheap as Chips Robot with a Java Brain", "description": null, "timeSlotKey": "time-7", "venueKey": "cinema-7" }, { "key": "automating-kubernetes-deployments", "title": "Automating Kubernetes deployments", "description": null, "timeSlotKey": "time-8", "venueKey": "cinema-4" }, { "key": "software-evolution-and-modern-software-architecture", "title": "Software Evolution and Modern Software Architecture", "description": null, "timeSlotKey": "time-8", "venueKey": "cinema-5" }, { "key": "knwu-racedirector", "title": "KNWU RaceDirector(How I Learned to Stop Worrying and Trust Blackboards)", "description": null, "timeSlotKey": "time-8", "venueKey": "cinema-6" }, { "key": "tamapotchi", "title": "Tamapotchi", "description": null, "timeSlotKey": "time-8", "venueKey": "cinema-7" }, { "key": "borrel", "title": "Borrel", "description": null, "timeSlotKey": "time-9", "venueKey": "theater-foyer" }];
        /* tslint:enable */

        beforeEach(angular.mock.module("talk"));

        let $httpBackend: angular.IHttpBackendService;
        let urlConfig: string;
        let talkService: Talk.ITalkService;

        beforeEach(inject((/* talkservice, */_$httpBackend_, _urlConfig_) => {
            $httpBackend = _$httpBackend_;
            urlConfig = _urlConfig_;
        }));
        
        it("should return talks", () => {
            $httpBackend.when("GET", urlConfig + "talks").respond(200, talkData);
            
            // add get talks test
            
            talkService.getAllTalks().then(() => {
                expect(false).toBe(true);
            });
            
            $httpBackend.flush();
        });
        it("should handle error", () => {
            $httpBackend.when("GET", urlConfig + "talks").respond(500);

            let hasCatch = false;
            talkService.getAllTalks().catch(() => {
                hasCatch = true;
            });
            expect($httpBackend.flush()).not.toThrow();
            expect(hasCatch).toBeTruthy();
        });
        afterEach(() => {
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
    describe("TalkController", function () {
        beforeEach(angular.mock.module("talk"));
        let $controller;
        let $state;
        let talkService: Talk.ITalkService;

        beforeEach(inject((_$state_, _$controller_, _talkService_) => {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $state = _$state_;
            $controller = _$controller_;
            talkService = _talkService_;
        }));

        it("check if the setVariable actually sets the variable", () => {
            let ctrl = new Talk.TalkController(talkService, $state);
            expect(ctrl).toBeDefined();

            let controller: Talk.TalkController = $controller("talkController", {
                $state: $state,
                TalkService: talkService,
            });
            expect(controller).toBeDefined();
        });
    });
});