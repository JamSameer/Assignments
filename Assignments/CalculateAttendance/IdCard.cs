using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculateAttendance
{
 public   class IdCard
    {
        private int mIdNumber;

        public int IdNumber
        {
            get { return mIdNumber; }
            set { mIdNumber = value; }
        }
        private float mSignIn;

        public float SignIn
        {
            get { return mSignIn; }
            set { mSignIn = value; }
        }
        private float mSignOut;

        public float SignOut
        {
            get { return mSignOut; }
            set { mSignOut = value; }
        }
        public float Calculate()
        {
           
            float calculate = SignOut - SignIn;
            Console.WriteLine("Working hours" +calculate);
            return calculate;
        }
    }
}
