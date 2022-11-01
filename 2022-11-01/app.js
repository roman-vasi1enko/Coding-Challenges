// Task 1 - Disarium Number
  // Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

  // Task
  // Given a number, Find if it is Disarium or not .

  // Warm-up (Highly recommended)
  // Playing With Numbers Series
  // Notes
  // Number passed is always Positive .
  // Return the result as String
  // Input >> Output Examples
  // disariumNumber(89) ==> return "Disarium !!"
  // Explanation:
  // Since , 81 + 92 = 89 , thus output is "Disarium !!"
  // disariumNumber(564) ==> return "Not !!"
  // Explanation:
  // Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"

    // Solution
    function disariumNumber(n){
      return String(n).split('').reduce((sum, num, i) => sum + Math.pow(Number(num), i + 1), 0) == n ? 'Disarium !!' : 'Not !!';
    }

    // Tests
    disariumNumber(89) // "Disarium !!"
    disariumNumber(564) // "Not !!"
    disariumNumber(1024) // "Not !!"
    disariumNumber(135) // "Disarium !!"
    disariumNumber(136586) // "Not !!"