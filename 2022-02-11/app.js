// Task 1 - Remove an exclamation mark from the end of string
  // Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

  // Solution
  function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }

  // Tests
  doTest("Hi!") // "Hi"
  doTest("Hi!!!") // "Hi!!"
  doTest("!Hi") // "!Hi"
  doTest("!Hi!") // "!Hi"
  doTest("Hi! Hi!") // "Hi! Hi"