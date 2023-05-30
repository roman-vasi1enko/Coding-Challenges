// Task - Cubes and Setters
  // Define a class Cube whose constructor function takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.

  // No initial code will be given. You are free to use whatever syntax you like to complete this Kata but it is highly recommended that you use ES6 syntax and features to complete this Kata.

    // Solution
    class Cube {
      constructor(length) { this.length = length };
      
      get surfaceArea() { return Math.pow(this.length, 2) * 6 };

      set surfaceArea(value) { this.length = Math.sqrt(value / 6) };

      get volume() { return Math.pow(this.length, 3) };

      set volume(value) { this.length = Math.cbrt(value) };
    }

    // Tests
    let cube = new Cube(1);
    console.log(cube.length, 1);
    console.log(cube.surfaceArea, 6);
    console.log(cube.volume, 1);
    cube.length = 2;
    console.log(cube.surfaceArea, 24);
    console.log(cube.volume, 8);
    cube.surfaceArea = 54;