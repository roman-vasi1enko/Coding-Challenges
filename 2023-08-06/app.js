// Task - Split Strings
  // Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

  // Examples:

  // * 'abc' =>  ['ab', 'c_']
  // * 'abcdef' => ['ab', 'cd', 'ef']

    // Solution
    function solution(str){
      let arr = str.split('');
      let result = [];
      
      for (let i = 0; i < arr.length; i+=2) {
        !arr[i+1] ? result.push(arr[i]+'_') : result.push(arr[i]+arr[i+1]);
      }
      
      return result;
    }

    // Tests
    console.log(solution("abcdef"), ["ab", "cd", "ef"]);
    console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    console.log(solution(""), []);