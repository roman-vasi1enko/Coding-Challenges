// Task 1 - Powers of 2

  // Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

  // Examples
  // n = 0  ==> [1]        # [2^0]
  // n = 1  ==> [1, 2]     # [2^0, 2^1]
  // n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

    // Solution
    function powersOfTwo(n){
      let arr = [];
      for (let i = 0; i <= n; i++) {
        arr.push(2 ** i);
      }
      return arr;
    }

    // Tests
    powersOfTwo(0) //[1]
    powersOfTwo(4) //[1, 2, 4, 8, 16]


// Task 2 - Filter out the geese

  // Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

  // The geese are any strings in the following array, which is pre-populated in your solution:
  //   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

  // For example, if this array were passed as an argument:
  //  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
  
  // Your function would return the following array:
  // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

  // The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

    // Solution
    function gooseFilter (birds) {
      let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
      return birds.filter(b => !geese.includes(b));
    }

    // Tests
    gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]) //["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
    gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]) //["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
    gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]) //[]


// Task 4 - Is it a palindrome?
  // Write a function that checks if a given string (case insensitive) is a palindrome.

    // Solution
    function isPalindrome(x) {
      return x.toLowerCase() === x.split('').reverse().join('').toLowerCase();;
    }

    //Tests
    isPalindrome("aba") //true
    isPalindrome("AbBa") //true
    isPalindrome("hello") //false

