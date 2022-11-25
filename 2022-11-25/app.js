// Task - Multiples of 3 or 5
  // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  // Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

  // Note: If the number is a multiple of both 3 and 5, only count it once.

    // Solution
      // p: number
      // r: number (sum of multiples of 3 or 5 below given number)

      function solution(number){
        if (number < 3) {
          return 0;
        }
        let result = 0;
        for (let i = 3; i < number; i++) {
          i % 3 == 0 || i % 5 == 0 ? result += i : result;
        }
        return result;
      }

      // e: solution(10) // 3+5+6+9 = 23

      // Test
      solution(10) // 23
