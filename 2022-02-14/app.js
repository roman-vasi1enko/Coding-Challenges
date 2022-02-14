// Task 1 - Surface Area and Volume of a Box
  // Write a function that returns the total surface area and volume of a box as an array: [area, volume]

    // Solution
    function getSize(width, height, depth) {
      let area = 2 * (width * height + height * depth + width * depth);
      let volume = width * height * depth;
      
      return [area, volume];
    }

    // Tests
    getSize(4, 2, 6) // [88, 48]); 
    getSize(10, 10, 10) // [600, 1000]
    getSize(4, 2, 6)[0] //88
    getSize(4, 2, 6)[1] // 48