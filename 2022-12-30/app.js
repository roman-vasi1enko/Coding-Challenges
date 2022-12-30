// Task - Parts of a list
  // Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

  // Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
  // Each part will be in a string
  // Elements of a pair must be in the same order as in the original array.
  
  // Example:
  // a = ["az", "toto", "picaro", "zone", "kiwi"] -->
  // [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 

    // Solution
    function partlist(arr) {
      let result = []
      for (let i = 0; i < arr.length-1; i++) {
        result.push([String(arr.slice(0, i + 1).join(' ')), arr.slice(i + 1).join(' ')])
      }
      return result;
    }

    // Test
    console.log(partlist(["I", "wish", "I", "hadn't", "come"]), [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
    console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]), [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
    console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]), [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])