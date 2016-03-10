using DevCon.WebDev.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace DevCon.WebDev.Controllers
{
    [RoutePrefix("api")]
    public class VenuesController : ApiController
    {
        [Route("venues")]
        public IEnumerable<Venue> GetAll()
        {
            return getAllVenues();
        }

        [Route("venues/{key}")]
        public Venue Get(string key)
        {
            return getAllVenues().Where(v => v.Key == key).First();
        }

        private List<Venue> getAllVenues()
        {
            var venues = new List<Venue>();
            venues.Add(new Venue()
            {
                Key = "theater-foyer",
                Name = "Theater Foyer"
            });
            venues.Add(new Venue()
            {
                Key = "expo-theater",
                Name = "Expo Theater"
            });
            venues.Add(new Venue()
            {
                Key = "cinema-5",
                Name = "Cinema 5"
            });
            venues.Add(new Venue()
            {
                Key = "cinema-6",
                Name = "Cinema 6"
            });
            venues.Add(new Venue()
            {
                Key = "cinema-6",
                Name = "Cinema 6"
            });
            venues.Add(new Venue()
            {
                Key = "cinema-7",
                Name = "Cinema 7"
            });
            return venues;
        }
    }
}