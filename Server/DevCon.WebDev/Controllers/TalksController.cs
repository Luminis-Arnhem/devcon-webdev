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
                Title = "Keynote session",
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