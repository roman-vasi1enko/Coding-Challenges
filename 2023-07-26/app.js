// Task - Alphabetical Addition
  // Your task is to add up letters to one letter.

  // The function will be given a variable amount of arguments, each one being a letter to add.

  // Notes:
  // Letters will always be lowercase.
  // Letters can overflow (see second to last example of the description)
  // If no letters are given, the function should return 'z'
  // Examples:
  // addLetters('a', 'b', 'c') = 'f'
  // addLetters('a', 'b') = 'c'
  // addLetters('z') = 'z'
  // addLetters('z', 'a') = 'a'
  // addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
  // addLetters() = 'z'

    // Solution
    function addLetters(...letters) {
      if (!letters.length) return 'z'
      let sum = (letters.reduce((sum, l) => sum + l.charCodeAt() - 96, 0) + 25) % 26 + 97
      
      return String.fromCharCode(sum);
    }

    // Tests
    console.log(addLetters(['a', 'b', 'c']), 'f')
    console.log(addLetters(['z']), 'z')
    console.log(addLetters(['a', 'b']), 'c')
    console.log(addLetters(['c']), 'c')
    console.log(addLetters(['z', 'a']), 'a')
    console.log(addLetters(['y', 'c', 'b']), 'd')
    console.log(addLetters([]), 'z')