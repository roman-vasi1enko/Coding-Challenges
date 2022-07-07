// Task - Double Char
  // Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
  // Examples (Input -> Output):
  // * "String"      -> "SSttrriinngg"
  // * "Hello World" -> "HHeelllloo  WWoorrlldd"
  // * "1234!_ "     -> "11223344!!__  "

    // Solution
    function doubleChar(str) {
      return str.split('').map(l => l += l).join('');
    }

    // Tests
    doubleChar("abcd") // "aabbccdd"
    doubleChar("Adidas") // "AAddiiddaass"
    doubleChar("1337") // "11333377"
    doubleChar("illuminati") // "iilllluummiinnaattii"
    doubleChar("123456") // "112233445566"
    doubleChar("%^&*(") // "%%^^&&**(("