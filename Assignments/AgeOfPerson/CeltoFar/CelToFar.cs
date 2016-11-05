using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CeltoFar
{
    class CelToFar
    {
        static void Main(string[] args)
        {
            double celsius, farenheit;
            Console.WriteLine("Enter the to convert temperatures from Celsius \x00B0C to Fahrenheit \x00B0F");
            celsius = int.Parse(Console.ReadLine());
            Console.WriteLine("The Entered Temprature in Celsius is:" + celsius + "\x00B0");
            farenheit = (1.8 * celsius) + 32;
            Console.WriteLine("The convertd Temprature from Celsius \x00B0C to Fahrenheit \x00B0F is:" + farenheit + "\x00B0");
            Console.ReadLine();
        }
    }
}
