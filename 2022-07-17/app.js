// Task 1 - get character from ASCII Value
  // Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

  // Example:
  // get_char(65)
  // should return: 'A'

    // Solution
    function getChar(c){
      return String.fromCharCode(c)
    }

    // Tests
    getChar(55) // '7'
    getChar(56) // '8'
    getChar(57) // '9'
    getChar(8) // ':'
    getChar(9) // ';'
    getChar(0) // '<'
    getChar(1) // '='
    getChar(2) // '>'
    getChar(3) // '?'
    getChar(4) // '@'
    getChar(65) // 'A'