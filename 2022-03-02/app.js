// Task 1 - find the letter position
  // When provided with a letter, return its position in the alphabet.
  // Input :: "a"
  // Ouput :: "Position of alphabet: 1"

    // Solution
    function position(letter){
      return `Position of alphabet: ${parseInt(letter, 36) - 9}`
    }

    // Tests
    position("a") // "Position of alphabet: 1"
    position("z") // "Position of alphabet: 26"
    position("e") // "Position of alphabet: 5"