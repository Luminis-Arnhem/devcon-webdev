using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevCon.Models
{
    public class Talk
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public TimeSlot TimeSlot { get; set; }

        public Venue Venue { get; set; }
    }
}