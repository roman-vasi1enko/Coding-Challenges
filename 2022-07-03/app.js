// Task 1 - Shortest Word
  // Given a string of words, return the length of the shortest word(s).
  // String will never be empty and you do not need to account for different data types.

    // Solution
    function findShort(s) {
      let counter = Infinity;
      s.split(' ').map(word => word.length < counter ? counter = word.length : counter);
      
      return counter;
    }

    // Solution 2 (refactored)
    function findShort(s){
      return Math.min(...s.split(" ").map (s => s.length));
  }

    // Tests
    findShort("bitcoin take over the world maybe who knows perhaps") // 3
    findShort("turns out random test cases are easier than writing out basic ones") // 3
    findShort("Let's travel abroad shall we") // 2