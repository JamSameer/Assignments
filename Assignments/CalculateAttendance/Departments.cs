using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculateAttendance
{
    class Departments
    {
        public Departments()
        {

        }
        private string mDepartmentName;

        public string DepartmentName
        {
            get { return mDepartmentName; }
            set { mDepartmentName = value; }

        }

        private string mDepartmentId;

        public string DepartmentId
        {
            get { return mDepartmentId; }
            set { mDepartmentId = value; }
        }
    }
  
}
