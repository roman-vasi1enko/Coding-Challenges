// Task - Find Duplicates
  // Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

  // Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

  // Examples
  // [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
  // [0, 1, 2, 3, 4, 5]                ==>  []

    // Solutions
    function duplicates(arr) {
      return [...new Set(arr.filter((e,i) => arr.indexOf(e) < i))]
    }

    // Tests
    console.log(duplicates([1, 2, 3, 4, 5]), [], "arr = [1, 2, 3, 4, 5]");
    console.log(duplicates([]), [], "arr = []");
    console.log(duplicates([1, 2, 3, 4, 3]), [3], "arr = [1, 2, 3, 4, 3]");
    console.log(duplicates([1, 2, 3, 3, 2, 1]), [3, 2, 1], "arr = [1, 2, 3, 3, 2, 1]");
    console.log(duplicates([1, 2, 3, 4, '3']), [], "arr = [1, 2, 3, 4, '3']");
    console.log(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']), [4, 3, 'zut'], "arr = ['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']");