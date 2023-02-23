// Task - Unique string characters
  // you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

  // For example:

  // solve("xyab","xzca") = "ybzc" 
  // --The first string has 'yb' which is not in the second string. 
  // --The second string has 'zc' which is not in the first string. 
  // Notice also that you return the characters from the first string concatenated with those from the second string.

    // Solution
    function solve(a,b){
      let arr1 = a.split('').filter(el => !b.split('').includes(el))
      let arr2 = b.split('').filter(el => !a.split('').includes(el))
      
      return arr1.concat(arr2).join('')
    };

    // Tests
    console.log(solve("xyab","xzca"),"ybzc");
    console.log(solve("xyabb","xzca"),"ybbzc");
    console.log(solve("abcd","xyz"),"abcdxyz");
    console.log(solve("xxx","xzca"),"zca");