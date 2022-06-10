// Task - Square every digit
  // square every digit of a number and concatenate them.

  // For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
  // Note: The function accepts an integer and returns an integer

    // Solution
    function squareDigits(num){
      let result = [];
      String(num).split('').forEach(n => result.push(Number(n ** 2)));
      return Number(result.join(''));
    }

    // Tests
    squareDigits(3212) // 9414
    squareDigits(2112) // 4114
    squareDigits(0) // 0