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
            var start = new DateTime(2016, 4, 19, 8, 0, 0);
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-0",
                Begin = start,
                End = start.AddHours(1)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-1",
                Begin = start.AddHours(1),
                End = start.AddHours(1).AddMinutes(30)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-2",
                Begin = start.AddHours(1).AddMinutes(30),
                End = start.AddHours(2).AddMinutes(30)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-3",
                Begin = start.AddHours(2).AddMinutes(45),
                End = start.AddHours(3).AddMinutes(45)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-4",
                Begin = start.AddHours(4),
                End = start.AddHours(5)
            });

            timeSlots.Add(new TimeSlot()
            {
                Key = "time-5",
                Begin = start.AddHours(5),
                End = start.AddHours(6)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-6",
                Begin = start.AddHours(6),
                End = start.AddHours(7)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-7",
                Begin = start.AddHours(7).AddMinutes(15),
                End = start.AddHours(8).AddMinutes(15)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-8",
                Begin = start.AddHours(8).AddMinutes(30),
                End = start.AddHours(9).AddMinutes(30)
            });
            timeSlots.Add(new TimeSlot()
            {
                Key = "time-9",
                Begin = start.AddHours(9).AddMinutes(30)
            });
            return timeSlots;
        }
    }
}