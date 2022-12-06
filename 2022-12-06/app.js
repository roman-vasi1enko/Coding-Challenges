// Task - Triple Trouble
  // Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

  // E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

  // Note: You can expect all of the inputs to be the same length.

    // Solution
    // make 1 str out of 3 str, following element order number
    // always three str, keep case (lower, upper), always the same length, never empy
    // return str

    function tripleTrouble(one, two, three){
      let result = "";
      for (let i = 0; i < one.length; i++) {
        x +=  one[i] + two[i] + three[i]
      }
      return result;
    }

    //Tests
    console.log(tripleTrouble("aaa","bbb","ccc"), "abcabcabc")
    console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl")
    console.log(tripleTrouble("Sea","urn","pms"), "Supermans")