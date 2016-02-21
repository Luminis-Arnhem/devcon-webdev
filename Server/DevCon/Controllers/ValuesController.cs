using DevCon.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DevCon.Controllers
{
    public class TalksController : ApiController
    {
        // GET api/talks
        public IEnumerable<Talk> Get()
        {
            var expo = new Venue()
            {
                Name = "Expo Theater"
            };
            var cinema5 = new Venue()
            {
                Name = "Cinema 5"
            };
            var now = DateTime.Now;
            var timeslot1 = new TimeSlot() { Begin = now, End = now.AddHours(1) };
            var talks = new List<Talk>();
            talks.Add(new Talk()
            {
                Title = "Font-end web development for back-end developers",
                TimeSlot = timeslot1,
                Venue = cinema5
            });
            talks.Add(new Talk()
            {
                Title = "Keynote",
                TimeSlot = timeslot1,
                Venue = expo
            });

            return talks;
        }
    }
}