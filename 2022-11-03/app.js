// Task 1 - Last
  // Find the last element of the given argument(s).

  // Examples
  // last([1, 2, 3, 4] ) // =>  4
  // last("xyz")         // => "z"
  // last(1, 2, 3, 4)    // =>  4
  // In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

    // Solution
    function last(list){
      let last = arguments[arguments.length - 1];
      return last[last.length - 1] || last;
    }
    
    // Tests
    last([1,2,3,4,5]) // 5  //-- array
    last("abcde") // "e"    //-- string
    last(1,"b",3,"d",5) // 5    //-- arguments