// Task - Find the missing element between two arrays
  // Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

  // Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

  // find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
  // find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
  // The first array will always have at least one element.

    // Solution
    function findMissing(arr1, arr2) {
      arr1.sort()
      arr2.sort()
    
      for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return arr1[i]
      }
      
      return 0;
    }

    // Tests
    console.log(findMissing([1, 2, 3], [1, 3]), 2);
    console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]), 8);
    console.log(findMissing([7], []), 7);
    console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]), 3);
    console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]), 0);