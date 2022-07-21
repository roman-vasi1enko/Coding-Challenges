// Task 1 - Isograms
  // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

  // Example: (Input --> Output)

  // "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

    // Solution
    function isIsogram(str){
      let arr = str.split('').map(char => char.toLowerCase());
      return [...new Set(arr)].length === arr.length;
    }

    // Tests
    isIsogram("Dermatoglyphics") // true
    isIsogram("isogram") // true
    isIsogram("aba") // false
    isIsogram("moOse") // false
    isIsogram("isIsogram") // false
    isIsogram("") // true