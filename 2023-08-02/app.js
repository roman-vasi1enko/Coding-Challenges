// Task - Detect Pangram
  // A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

  // Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

    // Solution
    function isPangram(string){
      let alphabet = 'abcdefghijklmnopqrstuvwqyz';
      return alphabet.split('').filter(char => !string.toLowerCase().includes(char)).length === 0;
    }

    // Tests
    console.log(isPangram("The quick brown fox jumps over the lazy dog."), true);
    console.log(isPangram("This is not a pangram."), false);