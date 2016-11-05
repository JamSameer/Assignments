using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GreatestValue
{
    class GreatestValue
    {
        static void Main(string[] args)
        {
            int quizescore, Midtermscore, finalscore, Average;
            Console.WriteLine("Enter the Quize-Score , Mid-Term Score , Final-Score ");
            quizescore = int.Parse(Console.ReadLine());
            Midtermscore = int.Parse(Console.ReadLine());
            finalscore = int.Parse(Console.ReadLine());
            Average = (quizescore + Midtermscore + finalscore)/ 3;
            Console.WriteLine("The Average is\t" + Average +"%");
            //Avg = int.Parse(Console.ReadLine());
            if(Average >= 90)
            {
                Console.WriteLine("You Got A Greade");
                Console.ReadLine();
            }
            else if(Average >=70 &&  Average < 90 )
            {
                Console.WriteLine("You got B grade");
                Console.ReadLine();
            }
            else if (Average >= 50 && Average < 90)
            {
                Console.WriteLine("You got c grade");
                Console.ReadLine();
            }
            else
            {
                Console.WriteLine("You got F grade");
                Console.ReadLine();
            }
            
          
        }
    }
}
