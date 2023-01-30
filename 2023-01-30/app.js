// Task - Sum of integers in string
  // Your task is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

  // Note: only positive integers will be tested.

    // Solution
    function sumOfIntegersInString(s){
      return s.split((/[^0-9]/)).reduce((sum, num) => sum + Number(num), 0)
    }

    // Tests
    console.log(sumOfIntegersInString("12.4"), 16)
    console.log(sumOfIntegersInString("2 + 3 = "), 5)
    console.log(sumOfIntegersInString("Dogs are our best friends."), 0)