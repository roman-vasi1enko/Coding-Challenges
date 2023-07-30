// Task - Replace With Alphabet Position
    // you are required to, given a string, replace every letter with its position in the alphabet.

    // If anything in the text isn't a letter, ignore it and don't return it.

    // "a" = 1, "b" = 2, etc.

    // Example
    // alphabetPosition("The sunset sets at twelve o' clock.")
    // Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

      // Solution
      // 'abc', 'a b c', 'a123 b cc', 'a!? b c' (str)
      // '1 2 3'

      function alphabetPosition(str) {
        
        return str.split('')
                  .map(char => char.toLowerCase().charCodeAt(0) - 96)
                  .filter(code => code > 0 && code < 27).join(' ')
      }

      // Tests
      console.log(alphabetPosition('abc'), '1 2 3');
      console.log(alphabetPosition('a b c'), '1 2 3');
      console.log(alphabetPosition('a123 b cc'), '1 2 3 3');
      console.log(alphabetPosition('a!? bc'), '1 2 3');