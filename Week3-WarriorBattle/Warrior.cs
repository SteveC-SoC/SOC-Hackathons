using System;

class Warrior
{
// state
    string Name;
    public int Health;
    int MaxAttack;
    int MaxBlock;
//constructor
    public Warrior(string name, int health, int maxAttack, int maxBlock)
    {
        Health = health;
        MaxAttack = maxAttack;
        MaxBlock = maxBlock;
        Name = name;
    }
//behavior
    public int GetAttack()
    {
        Random rnd = new Random();
        int randomA = rnd.Next(0, MaxAttack);
        return randomA;

    }

    public int GetBlock()
    {
        Random rnd = new Random();
        int randomB = rnd.Next(0, MaxBlock);
        return randomB;
    }

    public void ApplyDamage(int damage)
    {
        Health -= damage;
    }

    public static void HandleAttack(Warrior warriorA, Warrior warriorB)
    {
        int atck = warriorA.GetAttack();
        Console.WriteLine($"{warriorA.Name} attacks with {atck}.");
        int blck = warriorB.GetBlock();
        Console.WriteLine($"{warriorB.Name} blocks with {blck}. ");

        int dmg = atck - blck;
        if (dmg > 0)
        {
            Console.Write($"{warriorB.Name} recieved {dmg} damage. ");
            warriorB.ApplyDamage(dmg);
            Console.WriteLine($"{warriorB.Name} has {warriorB.Health} health left.");
        }
        Console.ReadKey(true);
        Console.WriteLine();
    }

    public static void Battle(Warrior warrior1, Warrior warrior2)
    {
        while (true)
        {
            HandleAttack(warrior1, warrior2);
            if (warrior2.Health < 0)
            {
                Console.WriteLine($"{warrior2.Name}, it was a pleasure to have fought against you but you lost!");
                break;
            }
            HandleAttack(warrior2, warrior1);
            if (warrior1.Health < 0)
            {
                Console.WriteLine($"{warrior1.Name}, it was a pleasure to have fought against you but you lost!");
                break;
            }
        }
    }


}