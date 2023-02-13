// Task - Jumping Number
  // Jumping number is the number that All adjacent digits in it differ by 1.
  // Given a number, Find if it is Jumping or not.

  // Notes
  // Number passed is always Positive.
  // Return the result as String.
  // The difference between ‘9’ and ‘0’ is not considered as 1.
  // All single digit numbers are considered as Jumping numbers.

  // Input >> Output Examples
  // jumpingNumber(9) ==> return "Jumping!!"
  // Explanation:
  // It's single-digit number
  // jumpingNumber(79) ==> return "Not!!"
  // Explanation:
  // Adjacent digits don't differ by 1

    // Solution
    function jumpingNumber(n){
      let arr = String(n).split('').map(Number);
      let result = 'Jumping!!'
      if (arr.length <= 1) return result;
      
      for (let i = 0; i < arr.length-1; i++) {
        arr[i] - arr[i+1] == 1 || arr[i+1] - arr[i] == 1 ? i : result = 'Not!!'
      }
      
      return result;
    }

    // Tests
    console.log(jumpingNumber(1), "Jumping!!");
    console.log(jumpingNumber(7), "Jumping!!");
    console.log(jumpingNumber(9), "Jumping!!");
    console.log(jumpingNumber(23), "Jumping!!");
    console.log(jumpingNumber(32), "Jumping!!");
    console.log(jumpingNumber(79), "Not!!");
    console.log(jumpingNumber(98), "Jumping!!");
    console.log(jumpingNumber(8987), "Jumping!!");
    console.log(jumpingNumber(4343456), "Jumping!!");
    console.log(jumpingNumber(98789876), "Jumping!!");