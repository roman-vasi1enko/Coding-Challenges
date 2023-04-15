// Task - Fire on the boat
  // Enjoying your holiday, you head out on a scuba diving trip!

  // Disaster!! The boat has caught fire!!

  // You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

  // Solution
  function fireFight(s){
    return s.split(' ').map((w) => w === 'Fire' ? w = '~~' : w).join(' ');
   }

  // Tests
  console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
  console.log(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
  console.log(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"), "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain");