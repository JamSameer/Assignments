using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculateAttendance
{
    class GuestEmployee
    {
        public GuestEmployee()
        {

        }
        private string mGuestName;

        public string GuestName
        {
            get { return mGuestName; }
            set { mGuestName = value; }
        }
    }
}
