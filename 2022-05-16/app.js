// Task 1 - Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

  // Solution
  function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( (e, i, w) => w.indexOf(e) == w.lastIndexOf(e) ? '(' : ')')
      .join('');
  }

  // Tests
  duplicateEncode("din") //"((("
  duplicateEncode("recede") //"()()()"
  duplicateEncode("Success") //")())())","should ignore case"
  duplicateEncode("(( @") //"))(("