using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IncreamentDec
{
    class IncreamentDec
    {
        static void Main(string[] args)
        {
            int ValueOfa;
            Console.WriteLine("Enter the Value of a");
            ValueOfa=int.Parse(Console.ReadLine());
            Console.WriteLine("the value of a is" + ValueOfa);
            Console.WriteLine("........................");
        
            Console.WriteLine("the value of ++a is\t"+ ++ValueOfa);
            Console.WriteLine("the value of a is\t"+ ValueOfa);
            Console.WriteLine("the value of a++ is\t" + ValueOfa++);
            Console.WriteLine("the value of a is\t" + ValueOfa);
            Console.WriteLine("the value of --a is\t" + --ValueOfa);
            Console.WriteLine("the value of a is\t" + ValueOfa);
            Console.WriteLine("the value of a-- is\t" + ValueOfa--);
            Console.WriteLine("the value of a is\t" + ValueOfa);
            Console.ReadLine();

        }
    }
}
