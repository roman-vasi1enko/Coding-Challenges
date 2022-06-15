// Task - Does My List Include This?
  // Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

    // Solution
    function include(arr, item){
      return arr.includes(item);
    }

    // Tests
    include([1,2,3,4], 3) // true
    include([1,2,4,5], 3) // false