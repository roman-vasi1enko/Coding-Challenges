// Task - Two fighters, one winner.
  // Create a function that returns the name of the winner in a fight between two fighters.

  // Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

  // Each fighter will be a Fighter object/instance. See the Fighter class below.

  // Both health and damagePerAttack will be integers larger than 0. You can mutate the Fighter objects.

  // Your function also receives a third argument, a string, with the name of the fighter that attacks first.

  // Example:
  //   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

  // function Fighter(name, health, damagePerAttack) {
  //         this.name = name;
  //         this.health = health;
  //         this.damagePerAttack = damagePerAttack;
  //         this.toString = function() { return this.name; }
  // }

    // Solution
    function declareWinner(fighter1, fighter2, firstAttacker) {

      let def1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
      let def2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

      if (def1 < def2) {
        return fighter2.name;
      } 
      else if (def2 < def1) {
        return fighter1.name;
      } 
      else {
        return firstAttacker;
      }
    }

    // Tests
    console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");
    console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
    console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
    console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
    console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
    console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")