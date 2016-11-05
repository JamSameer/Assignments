using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgeOfPerson
{
    class AgeOfPerson
    {
        static void Main(string[] args)
        {
            int Age;
            Console.WriteLine("Enter the Person Age\n");
            Age=int.Parse(Console.ReadLine());
            Console.WriteLine("You are\t"+ Age +"\tYears old");
            Console.ReadLine();

        }
    }
}
