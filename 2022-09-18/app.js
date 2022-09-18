// Task - Alternate case
  // Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

    // Solution
    function alternateCase(s) {
      return s.split('').map(l => l === l.toLowerCase() ? l.toUpperCase() : l.toLowerCase()).join('');
    }

    // Tests
    alternateCase("abc") // "ABC"
    alternateCase("ABC") // "abc"
    alternateCase("Hello World") // "hELLO wORLD"