using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculateAttendance
{
    class Employee
    {
        public Employee()
        {

        }
        private string mEmployeeName;

        public string EmployeeName
        {
            get { return mEmployeeName; }
            set { mEmployeeName = value; }
        }
        private string mEmployeeNumber;

        public string EmployeeNumber
        {
            get { return mEmployeeNumber; }
            set { mEmployeeNumber = value; }
        }
        private string mEmployeeId;

        public string EmployeeId
        {
            get { return mEmployeeId; }
            set { mEmployeeId = value; }
        }
        public bool Validate()
        {
            return true;
        }
        
    }
}
