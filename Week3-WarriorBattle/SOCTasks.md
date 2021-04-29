# Warrior Battle

A battle between two great warriors.

## Task 1

👉 Read the following plan carefully through and talk though with your partner any bit you are unsure of.

👉 Break the plan down further into your own plan and execute!

**Expected output**

```
Thus begins a battle of two great warriors; Ben and Hercules
Ben has 100 health
Hercules has 100 health

Ben attacks with 57
Hercules received 48 damage and now has 52 health

Hercules attacks with 78
Ben received 55 damage and now has 45 health

Ben attacks with 92
Hercules received 74 damage and now has -22 health

Hercules has died
```

To make this game we will be creating a `Warrior` class, and writing methods in `Program.cs`

## Warrior Class

This class will need a constructor to take in Name

**State**

- Name
- Health
- MaxAttack
- MaxBlock

**Behavior**

- `GetAttack`
  - return a random int between 0 and MaxAttack
- `GetBlock`
  - return a random int between 0 and MaxBlock
- `ApplyDamage`
  - take in damage and subtract from health returning nothing

## Methods in Program

- For each of the following operations, print as appropriate like in the example output.

### HandleAttack

- This method should take in two warriors (warriorA and warriorB)
- From warriorA get an attack
- From warriorB get a block
- Calculate damage to warriorB (attack - block)
- If the damage is greater than 0
  - apply the damage to warriorB

### Battle

- This method should take in two warriors (warrior1 and warrior2)
- Within a while loop that runs continuously
  - call your `HandleAttack` method with warrior1 and warrior2
  - if warrior2 health is less than zero
    - break the loop
  - call your `HandleAttack` method with warrior2 and warrior1
  - if warrior1 health is less than zero
    - break the loop

### Main

- create two new warriors with names of your choice
- call the `Battle` method with your two warriors

## Bonus Task

- Take in names before you commence battle
- Alter the warrior constructor so that you can change the Health, MaxAttack and MaxBlock when instantiating.
- Go Crazy! Use your imagination to use what you've learnt to add to the story and the game.
