// Task - Compare Strings by Sum of Chars
  // Compare two strings by comparing the sum of their values (ASCII character code).

  // For comparing treat all letters as UpperCase
  // null/NULL/Nil/None should be treated as empty strings
  // If the string contains other characters than letters, treat the whole string as it would be empty
  // Your method should return true, if the strings are equal and false if they are not equal.

  // Examples:
  // "AD", "BC"  -> equal
  // "AD", "DD"  -> not equal
  // "gf", "FG"  -> equal
  // "zz1", ""   -> equal (both are considered empty)
  // "ZzZz", "ffPFF" -> equal
  // "kl", "lz"  -> not equal
  // null, ""    -> equal

    // Solution
    function compare(s1, s2) {
      let sum1 = 0;
      let sum2 = 0;
    
      if (!s1 || s1.search(/[^a-zA-Z]+/) !== -1) s1 = '';
      if (!s2 || s2.search(/[^a-zA-Z]+/) !== -1) s2 = '';
    
      s1.toUpperCase().split('').map((char) => sum1 += char.charCodeAt(0));
      s2.toUpperCase().split('').map((char) => sum2 += char.charCodeAt(0));
    
      return sum1 === sum2;
    }

    // Tests
    console.log("AD", "BC", true);
    console.log("AD", "DD", false);
    console.log("gf", "FG", true);
    console.log("Ad", "DD", false);
    console.log("zz1", "", true);
    console.log("ZzZz", "ffPFF", true);
    console.log("kl", "lz", false);
    console.log("!!", "7476", true);
    console.log("##", "1176", true);
    console.log(null, "BC", false);
    console.log(null, null, true);
    console.log(null, "", true);
    console.log("", "", true);