// Task - Simple string reversal
  // we are going to reverse a string while maintaining the spaces (if any) in their original place.

  // For example:

  // solve("our code") = "edo cruo"
  // -- Normal reversal without spaces is "edocruo". 
  // -- However, there is a space at index 3, so the string becomes "edo cruo"

  // solve("your code rocks") = "skco redo cruoy". 
  // solve("codewars") = "srawedoc"

    // Solution
    function solve(str){
      let result = str.split(' ').join('').split('').reverse();
      str.split('').map((c, i) => c===' ' ? result.splice(i, 0, ' ') : c);
      
     return result.join('');
   }

    // Tests
    console.log(solve("codewars"), "srawedoc");
    console.log(solve("your code"), "edoc ruoy");
    console.log(solve("your code rocks"), "skco redo cruoy");
    console.log(solve("i love codewars"), "s rawe docevoli");