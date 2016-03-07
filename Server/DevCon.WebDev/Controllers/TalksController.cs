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
                TimeSlotKey = "time-0"
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
                TimeSlotKey = "time-2",
                VenueKey = "expo-theater"
            });
            talks.Add(new Talk()
            {
                Key = "automated-testing-of-your-angular-front-end",
                Title = "Automated testing of your Angular front-end",
                TimeSlotKey = "time-2",
                VenueKey = "cinema-5"
            });
            talks.Add(new Talk()
            {
                Key = "theres-a-camel-in-my-house",
                Title = "There's a Camel in My House!",
                TimeSlotKey = "time-2",
                VenueKey = "cinema-6"
            });
            talks.Add(new Talk()
            {
                Key = "modularity-using-asp-net-5-and-azure-service-fabric",
                Title = "Modularity Using ASP.Net 5 and Azure Service Fabric",
                TimeSlotKey = "time-2",
                VenueKey = "cinema-7"
            });
            talks.Add(new Talk()
            {
                Key = "the-fallacies-of-distributed-computing-what-if-the-network-fails",
                Title = "The Fallacies of Distributed Computing: What if the Network Fails?",
                TimeSlotKey = "time-2",
                VenueKey = "cinema-4"
            });
            talks.Add(new Talk()
            {
                Key = "webdev",
                Title = "Font-end web development for back-end developers",
                TimeSlotKey = "time-2",
                VenueKey = "cinema-5"
            });

            return talks;
        }
    }
}