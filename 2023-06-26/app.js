// Task - Alphabetically ordered
  // Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

  // Examples (input -> output)
  // "kata" -> false ('a' comes after 'k')
  // "ant" -> true (all characters are in alphabetical order)

    // Solution
    const alphabetic = s => s === s.split('').sort().join('');


    // Tests
    console.log(alphabetic("asd"), false);
    console.log(alphabetic("codewars"), false);
    console.log(alphabetic("door"), true);
    console.log(alphabetic("cell"), true);
    console.log(alphabetic("z"), true);
    console.log(alphabetic(""), true); 