// Task - Vowel one
  // Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

  // All non-vowels including non alpha characters (spaces,commas etc.) should be included.

  // Examples:

  // vowelOne( "abceios" ) // "1001110"

  // vowelOne( "aeiou, abc" ) // "1111100100"

    // Solution
    function vowelOne(s){
      return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
    }

    // Tests
    console.log( vowelOne( "vowelOne" ), "01010101" );
    console.log( vowelOne( "123, arou" ), "000001011" );