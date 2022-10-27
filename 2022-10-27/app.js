// Task 1 - Divide and Conquer
  // Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

  // Return as a number.

    // Solution
    function divCon(x){
      let stringInt = 0;
      let numberInt = 0;
      x.map(num => typeof num === 'string' ? stringInt += Number(num) : numberInt += num);
      return numberInt - stringInt;
    }

    // Solution 2
    function divCon(x){
      return x.reduce((sum, num) => typeof num === 'number'? sum + num : sum - Number(num), 0);
    }

    // Tests
    divCon([9, 3, '7', '3']) // 2
    divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]) // 14 
    divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) // 13 