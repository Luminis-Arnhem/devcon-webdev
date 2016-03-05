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
                Key = "webdev",
                Title = "Font-end web development for back-end developers",
                TimeSlotKey = "time-2",
                VenueKey = "cinema-5"
            });
            talks.Add(new Talk()
            {
                Key = "keynote1",
                Title = "Keynote",
                TimeSlotKey = "time-8",
                VenueKey = "expo-theater"
            });

            return talks;
        }
    }
}