// Task - Anagram Detection
  // Note: anagrams are case insensitive

  // Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

  // Examples
  // "foefet" is an anagram of "toffee"

  // "Buckethead" is an anagram of "DeathCubeK"

    // Solution
    let isAnagram = function(test, original) {
      const testMod = test.toLowerCase().split('').sort().join('');
      const origMod = original.toLowerCase().split('').sort().join('');
      
      return testMod == origMod;
    };

    // Tests
    isAnagram("foefet", "toffee") // true
    isAnagram("Buckethead", "DeathCubeK") // true
    isAnagram("Twoo", "WooT") // true

    isAnagram("dumble", "bumble") // false
    isAnagram("ound", "round") // false
    isAnagram("apple", "pale") // false