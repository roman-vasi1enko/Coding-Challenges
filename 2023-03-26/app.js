// Task - Perimeter sequence
  // The first three stages of a sequence are shown.
  // ■
  // -
  // ■
  // ■■
  // -
  // ■
  // ■■
  // ■■■

  // The blocksize is a by a and a ≥ 1.
  // What is the perimeter of the nth shape in the sequence (n ≥ 1) ?

    // Solution
    let perimeterSequence = (a,n) => a * 4 * n;

    // Test
    console.log(perimeterSequence(1,3), 12)