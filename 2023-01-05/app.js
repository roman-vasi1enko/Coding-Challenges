// Task - 16+18=214
  // For this task you will have to forget how to add two numbers.

  // In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

  // You may assume both integers are positive integers.

  // Examples:
  // 16+18=214
  // 26+39=515
  // 122+81=1103

    // Solution
    function add(num1, num2) {
      let arr1 = String(Math.max(num1, num2)).split('')
      let arr2 = String(Math.min(num1, num2)).split('')
      let result = []
      
      while(arr2.length < arr1.length) {
        arr2.unshift('0')
      }
      
      for (let i = 0; i < arr1.length; i++) {
        result.push(Number(arr1[i]) + Number(arr2[i]))
      }
      
      return Number(result.join(''))
    }

    // Tests
    console.log(add(2, 11), 13);
    console.log(add(0, 1), 1);
    console.log(add(0, 0), 0);
    console.log(add(16, 18), 214);
    console.log(add(26, 39), 515);
    console.log(add(122, 81), 1103);
    console.log(add(1222, 30277), 31499);
    console.log(add(1236, 30977), 31111013);
    console.log(add(38810, 1383), 391193);
    console.log(add(49999, 49999), 818181818);