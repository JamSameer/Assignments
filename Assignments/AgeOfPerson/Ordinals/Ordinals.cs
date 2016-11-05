using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ordinals
{
    class Ordinals
    {
        public static string suffix = null;
        public static int modeOf10, number, modeof100, rigtMostDigit;
        static void Main(string[] args)
        {


            Console.WriteLine("Enter the Number");
            number = int.Parse(Console.ReadLine());
            getOrdinals(number);
            Console.WriteLine("That's the \t" + number + suffix + "\t item");
            Console.ReadLine();
        }
        public static string getOrdinals(int number)
        {
            modeOf10 = number % 10;

            rigtMostDigit = modeOf10;
            if (rigtMostDigit == 1 || rigtMostDigit == 2 || rigtMostDigit == 3)
            {
                modeof100 = number % 100;
                if (modeof100 == 11 || modeof100 == 12 || modeof100 == 13)
                {
                    suffix = "th";
                }
                else
                {

                    if (modeOf10 == 1)
                    {
                        //Console.WriteLine("That's the \t \t" + number + "\tst item");
                        suffix = "st";
                    }
                    else if (modeOf10 == 2)
                    {
                        //Console.WriteLine("That's the" + number + "nd item");
                        suffix = "nd";
                    }
                    else if (modeOf10 == 3)
                    {
                        //Console.WriteLine("That's the" + number + "rd item");
                        suffix = "rd";
                    }

                }
            }
            else
            {
                suffix = "th";
            }

            return suffix;
        }

    }
}
