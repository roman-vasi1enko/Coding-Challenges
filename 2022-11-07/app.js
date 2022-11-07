// Task 1 - Number Of Occurrences
  // Write a function that returns the number of occurrences of an element in an array.

  // Examples
  // var arr = [0, 1, 2, 2, 3];
  // arr.numberOfOccurrences(0) === 1;
  // arr.numberOfOccurrences(4) === 0;
  // arr.numberOfOccurrences(2) === 2;
  // arr.numberOfOccurrences("a") === 0;

    // Solution
    Array.prototype.numberOfOccurrences = function(element) {
      return this.reduce(function(acc, current) {
        return current === element ? acc + 1 : acc;
      }, 0);
    }

    // Tests
    let arr = [4, 0, 4];
    arr.numberOfOccurrences(4) // 2