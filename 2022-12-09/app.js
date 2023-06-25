// Task - Contamination
  // An AI has infected a text with a character!!

  // This text is now fully mutated to this character.

  // If the text or the character are empty, return an empty string.
  // There will never be a case when both are empty as nothing is going on!!

  // Note: The character is a string of length 1 or an empty string.

  // Example
  // text before = "abc"
  // character   = "z"
  // text after  = "zzz"

    // Solution
    function contamination(text, char){
      return text.length ? text.split('').map(el => el = char).join('') : text
    }

    // Tests
    console.log(contamination("abc","z"), "zzz")
    console.log(contamination("","z"), "")
    console.log(contamination("//case"," "), "      ")