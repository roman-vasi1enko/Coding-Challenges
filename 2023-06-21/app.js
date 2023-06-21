// Task - Ghostbusters (whitespace removal)
  // Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

  // In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

  // So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

  // Example:

  // ghostBusters("Sky scra per");
  // Should return:

  // "Skyscraper"
  // If the building contains no ghosts, return the string:

  // "You just wanted my autograph didn't you?"

    // Solution
    function ghostBusters(building) {
      let noSpace = building.split(' ').join('')
      
      return noSpace === building ? 'You just wanted my autograph didn\'t you?' : noSpace
    }

    // Tests
    console.log(ghostBusters("Factor y") === "Factory", 'Nope, there may still be a ghost in the building. Try again.');
    console.log(ghostBusters("O  f fi ce") === "Office", 'Nope, there may still be a ghost in the building. Try again.');
    console.log(ghostBusters("BusStation") === "You just wanted my autograph didn't you?", 'Nope, as there were no ghosts in the BusStation you need to return a witty retort.');