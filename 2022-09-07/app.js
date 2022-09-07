// Task - Flatten
  // Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

  // flatten([1,2,3]) // => [1,2,3]
  // flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
  // flatten([[[1,2,3]]]) // => [[1,2,3]]

    // Solution
    var flatten = function (array){
      return [].concat(...array);
    }

    // Tests
flatten([]) // []
flatten([1, 2, 3]) // [1, 2, 3]
flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]) // [1, 2, 3, "a", "b", "c", 1, 2, 3]
flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]) // [3, 4, 5, [9, 9, 9], "a,b,c"]
flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]) // [[3], [4], [5], 9, 9, 8, [1, 2, 3]]