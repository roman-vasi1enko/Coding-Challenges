// Task 1 - Strong Number
  // Strong number is the number that the sum of the factorial of its digits is equal to number itself.

  // For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

  // Task
  // Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

  // Notes
  // Number passed is always Positive.
  // Return the result as String
  // Input >> Output Examples
  // strong_num(1) ==> return "STRONG!!!!"
  // Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

  // strong_num(123) ==> return "Not Strong !!"
  // Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .

  // strong_num(2)  ==>  return "STRONG!!!!"
  // Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

  // strong_num(150) ==> return "Not Strong !!"
  // Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong .

    // Solution
    function strong(n) {
      if (n == 1 || n == 2) {
        return 'STRONG!!!!';
      }
      return String(n).split('').reduce((sum, num) => sum + factorial(Number(num)),0) == n ? 'STRONG!!!!' : 'Not Strong !!'
    }
    
    function factorial(n) {
      if (n == 1 || n == 0) {
        return 1;
      }
      return n * factorial(n - 1);
    }

    // Tests
    strong(1) // "STRONG!!!!"
    strong(2) // "STRONG!!!!"
    strong(145) // "STRONG!!!!"
    strong(7) // "Not Strong !!"
    strong(93) // "Not Strong !!"