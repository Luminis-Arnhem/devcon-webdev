using DevCon.WebDev.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace DevCon.WebDev.Controllers
{
    [RoutePrefix("api")]
    public class TalksController : ApiController
    {
        [Route("talks")]
        public IEnumerable<Talk> GetAll()
        {
            return getAllTalks();
        }

        [Route("talks/{key}")]
        public Talk Get(string key)
        {
            return getAllTalks().Where(v => v.Key == key).First();
        }

        [Route("venues/{key}/talks")]
        public IEnumerable<Talk> getTalksByVenue(string key)
        {
            return getAllTalks().Where(v => v.VenueKey == key);
        }

        [Route("timeslots/{key}/talks")]
        public IEnumerable<Talk> getTalksByTimeSlots(string key)
        {
            return getAllTalks().Where(v => v.TimeSlotKey == key);
        }

        private List<Talk> getAllTalks()
        {
            var talks = new List<Talk>();
            talks.Add(new Talk()
            {
                Key = "welcome",
                Title = "Welcome",
                TimeSlotKey = "time-0",
                VenueKey = "theater-foyer"
            });
            talks.Add(new Talk()
            {
                Key = "opening",
                Title = "Opening",
                TimeSlotKey = "time-1",
                VenueKey = "expo-theater"
            });
            talks.Add(new Talk()
            {
                Key = "keynote-session",
                Title = "Keynote session: One Step Beyond - How We Go Beyond The Things That Limit Us",
                Description = "<p>Chris Moon is one of the luckiest people to be alive you’re likely to meet. He’s one of the few westerners to survive as a prisoner of Khmer Rouge guerrillas in Cambodia and being blown up walking in a safe area of a minefield in remote East Africa. The surgeon who treated him said he’d never seen anyone live with such a small amount of blood. He left hospital within seven weeks, did his first marathon within a year of leaving hospital and at the same time successfully completed a Masters Degree. He became the world’s first amputee ultra distance runner in 1997 and has completed many of the world’s toughest ultras and runs faster now than at any point since he was blown up. His humorous and uplifting experiences and philosophy can equip us to challenge our concept of limitation and become the best version of ourselves that we can be.</p>",
                TimeSlotKey = "time-2",
                VenueKey = "expo-theater"
            });
            talks.Add(new Talk()
            {
                Key = "java-9-modularity-in-action",
                Title = "Java 9 Modularity in Action",
                TimeSlotKey = "time-3",
                VenueKey = "expo-theater"
            });
            talks.Add(new Talk()
            {
                Key = "automated-testing-angular-front-end",
                Title = "Automated testing of your Angular front-end",
                TimeSlotKey = "time-3",
                VenueKey = "cinema-5"
            });
            talks.Add(new Talk()
            {
                Key = "theres-a-camel-in-my-house",
                Title = "There's a Camel in My House!",
                TimeSlotKey = "time-3",
                VenueKey = "cinema-6"
            });
            talks.Add(new Talk()
            {
                Key = "modularity-using-asp-net-5",
                Title = "Modularity Using ASP.Net 5 and Azure Service Fabric",
                TimeSlotKey = "time-3",
                VenueKey = "cinema-7"
            });
            talks.Add(new Talk()
            {
                Key = "the-fallacies-of-distributed-computing",
                Title = "The Fallacies of Distributed Computing: What if the Network Fails?",
                TimeSlotKey = "time-4",
                VenueKey = "cinema-4"
            });
            talks.Add(new Talk()
            {
                Key = "indexing-and-enriching-documents-within-elasticsearch",
                Title = "Ingest Node: (re)Indexing and Enriching Documents within Elasticsearch",
                TimeSlotKey = "time-4",
                VenueKey = "cinema-5"
            });
            talks.Add(new Talk()
            {
                Key = "introduction-to-ionic-framework",
                Title = "Introduction to Ionic Framework",
                TimeSlotKey = "time-4",
                VenueKey = "cinema-6"
            });
            talks.Add(new Talk()
            {
                Key = "automobilista-motorsports-simulator",
                Title = "Automobilista Motorsports Simulator",
                TimeSlotKey = "time-4",
                VenueKey = "cinema-7"
            });

            talks.Add(new Talk()
            {
                Key = "lunch",
                Title = "Lunch",
                TimeSlotKey = "time-5",
                VenueKey = "theater-foyer"
            });
            talks.Add(new Talk()
            {
                Key = "keynote-session2",
                Title = "Keynote Session 2",
                TimeSlotKey = "time-6",
                VenueKey = "expo-theater"
            });
            talks.Add(new Talk()
            {
                Key = "an-introduction-to-kotlin",
                Title = "Methods Are No Fun – An Introduction to Kotlin",
                TimeSlotKey = "time-7",
                VenueKey = "cinema-4"
            });
            talks.Add(new Talk()
            {
                Key = "webdev",
                Title = "Font-end web development for back-end developers",
                Description = "<p>In the past back-end developers have frowned upon front-end web development, but with the introduction of proper programming languages, build tools and frameworks, front-end development has grown up. In this talk I want to introduce you to my favourite front-end development stack: AngularJS, Typescript and Gulp. AngularJS is been around for a while now, and is a great framework and gives you a clear structure, separation of concerns, templating engine and much more. </p ><p>JavaScript, you either love it or hate it, I know for developers who are used to java or C# it is probably the latter. Would it not be nice if we could use classes, interfaces, type safety, object inheritance, and I can go on.. Typescript gives you all that and much more.</p><p>Ok, so now you have your code nicely written in typescript modules and classes, organized in angular views controllers and services.But how do you prevent the browser from loading 30 + JavaScript files? And would it not be nice if you could debug your typescript code in the browser, compile typescript whenever there is a change, and do you really want to run the same code in development as in production? This is where Gulp comes in handy to fully automate your build process.</p>",
                TimeSlotKey = "time-7",
                VenueKey = "cinema-5"
            });
            talks.Add(new Talk()
            {
                Key = "dumped-a-dataset-on-our-doorstep",
                Title = "Help!They Dumped a Dataset on Our Doorstep",
                TimeSlotKey = "time-7",
                VenueKey = "cinema-6"
            });
            talks.Add(new Talk()
            {
                Key = "robot-with-java-brain",
                Title = "Creating a Cheap as Chips Robot with a Java Brain",
                TimeSlotKey = "time-7",
                VenueKey = "cinema-7"
            });
            talks.Add(new Talk()
            {
                Key = "automating-kubernetes-deployments",
                Title = "Automating Kubernetes deployments",
                TimeSlotKey = "time-8",
                VenueKey = "cinema-4"
            });

            talks.Add(new Talk()
            {
                Key = "software-evolution-and-modern-software-architecture",
                Title = "Software Evolution and Modern Software Architecture",
                TimeSlotKey = "time-8",
                VenueKey = "cinema-5"
            });
            talks.Add(new Talk()
            {
                Key = "knwu-racedirector",
                Title = "KNWU RaceDirector(How I Learned to Stop Worrying and Trust Blackboards)",
                TimeSlotKey = "time-8",
                VenueKey = "cinema-6"
            });
            talks.Add(new Talk()
            {
                Key = "tamapotchi",
                Title = "Tamapotchi",
                TimeSlotKey = "time-8",
                VenueKey = "cinema-7"
            });
            talks.Add(new Talk()
            {
                Key = "borrel",
                Title = "Borrel",
                TimeSlotKey = "time-9",
                VenueKey = "theater-foyer"
            });
            return talks;
        }
    }
}