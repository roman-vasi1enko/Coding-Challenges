// Task - Move 10
  // Move every letter in the provided string forward 10 letters through the alphabet.
  // If it goes past 'z', start again at 'a'.
  // Input will be a string with length > 0.

    // Solution
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let map   = 'klmnopqrstuvwxyzabcdefghij';
    let moveTen = s => [...s].map(x => map[alpha.indexOf(x)]).join('');

    // Tests
    console.log(moveTen("testcase"), "docdmkco");
    console.log(moveTen("codewars"), "mynogkbc");
    console.log(moveTen("exampletesthere"), "ohkwzvodocdrobo");