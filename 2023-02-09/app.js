// Task - Count consonants
  // Complete the function that takes a string of English-language text and returns the number of consonants in the string.
  // Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

    // Solution
    function consonantCount(str) {
      let counter = 0;
      for (let i = 0; i < str.length; i++) {
        !'aeiou'.includes(str[i].toLowerCase()) && str[i].toLowerCase() !== str[i].toUpperCase() ? counter++ : counter;
      }
      
      return counter;
    }

    // Tests
    console.log(consonantCount('bcdfghjklmnpqrstvwxyz'), 21)
    console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'), 42)
    console.log(consonantCount('01234567890_'), 0)