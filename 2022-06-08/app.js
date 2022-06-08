// Task - Count Vowels
  // Return the number (count) of vowels in the given string.
  // We will consider a, e, i, o, u as vowels (but not y).
  // The input string will only consist of lower case letters and/or spaces.

    // Solution
    function getCount(str) {
      return str.split('').filter(l => l == 'a' || l == 'e' || l == 'i' || l =='o' || l == 'u').length;
    }

    // Test
    getCount("abracadabra") // 5