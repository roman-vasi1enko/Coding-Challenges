// Task - Unique In Order
  // Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

  // For example:
  // uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
  // uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
  // uniqueInOrder([1,2,2,3,3])       == [1,2,3]

    // Solution
    function uniqueInOrder(iterable) {
      if (typeof iterable === 'string') iterable = iterable.split('');
      
      return iterable.filter((el, i, arr) => el !== arr[i+1]);
    }

    // Tests
    console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B']);
    console.log(uniqueInOrder([1,2,2,3,3]), [1,2,3]);