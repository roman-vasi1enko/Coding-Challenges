// Task - Stones on the Table
  // There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

  // Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colors.

  // Examples:
  // "RGBRGBRGGB"   => 1
  // "RGGRGBBRGRR"  => 3
  // "RRRRGGGGBBBB" => 9

    // Solution
    function solve(stones) {
      let counter = 0

      for (let i = 1; i <= stones.length; i++) {
        if (stones[i] === stones[i - 1]) counter++
      }
      
      return counter;
    }

    // Tests
    console.log(solve(""), 0);
    console.log(solve("RRGGBB"), 3);
    console.log(solve("RGBRGB"), 0);
    console.log(solve("BGRBBGGBRRR"), 4);
    console.log(solve("GBBBGGRRGRB"), 4);
    console.log(solve("GBRGGRBBBBRRGGGB"), 7);