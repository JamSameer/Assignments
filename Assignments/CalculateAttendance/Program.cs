using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculateAttendance
{
    class Program
    {
        static void Main(string[] args)
        {
            Departments department = new Departments();

            department.DepartmentName = "IT DEAPRTMENT";
            Console.WriteLine(department.DepartmentName);
            ITDepartment itdepartment = new ITDepartment();
            itdepartment.EmployeeId = "1";
            itdepartment.EmployeeName = "Sameer";

            itdepartment.EmployeeNumber = "81235711615";
            Console.WriteLine(itdepartment.EmployeeId + "\n" + itdepartment.EmployeeName + "\n" + itdepartment.EmployeeNumber);
            IdCard idcard = new IdCard();
            idcard.SignIn = 10.0f;
            idcard.SignOut = 20.0f;
            Console.WriteLine("SignIn is:"+ idcard.SignIn + "\n SignOut is:"+ idcard.SignOut);
            idcard.Calculate();

            Console.ReadLine();

        }
    }
}
