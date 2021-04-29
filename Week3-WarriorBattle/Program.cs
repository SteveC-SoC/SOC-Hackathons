using System;
using System.Threading;

namespace WarriorBattle
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Type the name of the first player and press Enter:");
            string playerFirst = Console.ReadLine();
            Warrior player1 = new Warrior(playerFirst, 100, 60, 100);

            Console.WriteLine("Type the name of the second player and press Enter:");
            string playerSecond = Console.ReadLine();
            Warrior player2 = new Warrior(playerSecond, 100, 40, 100);

            Console.WriteLine($"Thus begins a battle of two great warriors; {playerFirst}(Health:{player1.Health}) and {playerSecond}(Health:{player2.Health})");
            Console.WriteLine("Press any key to start the Battle and countinue after each attack.");
            Console.ReadKey(true);

            Warrior.Battle(player1, player2);

        }


    }
}
