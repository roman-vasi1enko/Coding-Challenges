// Task - Counting Duplicates
  // Count the number of Duplicates
  // Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

  // Example
  // "abcde" -> 0 # no characters repeats more than once
  // "aabbcde" -> 2 # 'a' and 'b'
  // "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
  // "indivisibility" -> 1 # 'i' occurs six times
  // "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
  // "aA11" -> 2 # 'a' and '1'
  // "ABBA" -> 2 # 'A' and 'B' each occur twice

    // Solution
    //P: strings of letters (ignore case) and nums
    //R: number (count of non-unique values)

    function duplicateCount(text){
      if (text.length < 1) {
        return 0;
      }
      let letters = text.split('').reduce((obj, item) => {
        if (!obj[item.toLowerCase()]) {
          obj[item.toLowerCase()] = 0;
        }
        obj[item.toLowerCase()]++;
        return obj;
      }, {});
      
      let count = 0;
      for (let l in letters) {
        letters[l] > 1 ? count++ : l
      }
      return count;
    }

    // Tests
    duplicateCount("") // 0
    duplicateCount("abcde") // 0
    duplicateCount("aabbcde") // 2
    duplicateCount("aabBcde") // 2,"should ignore case"
    duplicateCount("Indivisibility") // 1
    duplicateCount("Indivisibilities") // 2, "characters may not be adjacent