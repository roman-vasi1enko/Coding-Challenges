// Task - Return substring instance count
  // Complete the solution so that it returns the number of times the search_text is found within the full_text.

  // Usage example:

  // solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
  // solution('aaabbbcccc', 'bbb') # should return 1

    // Solution
    function solution(fullText, searchText){
      return fullText.split(searchText).length - 1;
    }

    // Tests
    console.log(solution('abcdeb','b'), 2);
    console.log(solution('abc','b'), 1);
    console.log(solution('abbc','bb'), 1);