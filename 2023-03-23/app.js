// Task - Moves in squared strings
  // You are given a string of n lines, each substring being n characters long: For example:

  // s = "abcd\nefgh\nijkl\nmnop"

  // We will study some transformations of this square of strings.

  // Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
  // vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
  // Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
  //  hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
  // or printed:

  // vertical mirror   |horizontal mirror   
  // abcd --> dcba     |abcd --> mnop 
  // efgh     hgfe     |efgh     ijkl 
  // ijkl     lkji     |ijkl     efgh 
  // mnop     ponm     |mnop     abcd 
  // Task:
  // Write these two functions
  // and

  // high-order function oper(fct, s) where

  // fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

  // Examples:
  // s = "abcd\nefgh\nijkl\nmnop"
  // oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
  // oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
  // Note:
  // The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".

    // Solution
    function vertMirror(arr) {
      return arr.map(l => l.split('').reverse().join(''))
    }
    function horMirror(arr) {
      return arr.reverse()
    }
    function oper(fct, s) {
      return fct(s.split('\n')).join('\n')
    }

    // Tests
    console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"), "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw");
    console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"), "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP");
    console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"), "yeCt\nCSbg\nJVhv\nlVHt");
    console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"), "cEYz\nLPKo\ndbrZ\nnjMK");