// Task 1 - Area of a Square
  // Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

    // Solution
    function squareArea(A){
      //arc length = 2 * PI * r * (ang / 360)
      // r = (arc length) / (2 * PI * (ang / 360))
      
      let a = A / (2 * Math.PI * (90 / 360));
      let area = Math.pow(a, 2)
      
      return Number(area.toFixed(2));
    }

    // Tests
    squareArea(2) // 1.62
    squareArea(0) // 0
    squareArea(14.05) // 80
