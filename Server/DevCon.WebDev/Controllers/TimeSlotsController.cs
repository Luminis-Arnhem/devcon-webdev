using DevCon.WebDev.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace DevCon.WebDev.Controllers
{
    [RoutePrefix("api")]
    public class TimeSlotsController : ApiController
    {
        [Route("TimeSlots")]
        public IEnumerable<TimeSlot> GetAll()
        {
            return getAllTimeSlots();
        }

        [Route("TimeSlots/{key}")]
        public TimeSlot Get(string key)
        {
            return getAllTimeSlots().Where(t => t.Key == key).First();
        }

        private List<TimeSlot> getAllTimeSlots()
        {
            var timeSlots = new List<TimeSlot>();
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-0",
                Begin = DateTime.Now,
                End = DateTime.Now.AddHours(1)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-1",
                Begin = DateTime.Now.AddHours(1),
                End = DateTime.Now.AddHours(2)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-2",
                Begin = DateTime.Now.AddHours(2),
                End = DateTime.Now.AddHours(3)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-3",
                Begin = DateTime.Now.AddHours(3),
                End = DateTime.Now.AddHours(4)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-4",
                Begin = DateTime.Now.AddHours(4),
                End = DateTime.Now.AddHours(5)
            });

            timeSlots.Add(new TimeSlot()
            {
                Key = "time-5",
                Begin = DateTime.Now.AddHours(5),
                End = DateTime.Now.AddHours(6)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-6",
                Begin = DateTime.Now.AddHours(6),
                End = DateTime.Now.AddHours(7)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-7",
                Begin = DateTime.Now.AddHours(7),
                End = DateTime.Now.AddHours(8)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-8",
                Begin = DateTime.Now.AddHours(8),
                End = DateTime.Now.AddHours(9)
            });
            return timeSlots;
        }
    }
}