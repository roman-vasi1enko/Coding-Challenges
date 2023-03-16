// Task - Return the closest number multiple of 10
  // Given a number return the closest number to it that is divisible by 10.

  // Example input:
  // 22
  // 25
  // 37

  // Expected output:
  // 20
  // 30
  // 40

    // Solution
    const closestMultiple10 = num => Math.round(num / 10) * 10;

    // Tests
    for (let i = 10; i <= 14; ++i) {
      console.log(closestMultiple10(i), 10);
    }

    for (let i = 15; i <= 20; ++i) {
      console.log(closestMultiple10(i), 20);
    }