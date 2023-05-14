// Task - String Merge
  // Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

  // Examples
  // ("hello", "world", "l")       ==>  "held"
  // ("coding", "anywhere", "n")   ==>  "codinywhere"
  // ("jason", "samson", "s")      ==>  "jasamson"
  // ("wonderful", "people", "e")  ==>  "wondeople"

    // Solution
    function stringMerge(s1, s2, letter){
      return `${s1.split(letter, 1)}${s2.slice(s2.indexOf(letter))}`;
    }

    // Tests
    console.log(stringMerge("person","here", "e"), "pere");
    console.log(stringMerge("apowiejfoiajsf","iwahfeijouh", "j"), "apowiejouh");
    console.log(stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz");
    console.log(stringMerge("12345654321","123456789", "6"), "123456789");
    console.log(stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd");
    console.log(stringMerge("incredible","people", "e"), "increople");