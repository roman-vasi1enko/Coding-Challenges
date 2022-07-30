// Task 1 - Printer Errors
  // Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

  // You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

  // The string has a length greater or equal to one and contains only letters from ato z.

  // Examples:
  // s="aaabbbbhaijjjm"
  // printer_error(s) => "0/14"

  // s="aaaxbbbbyyhwawiwjjjwwm"
  // printer_error(s) => "8/22"

    // Solution
    function printerError(s) {
      let allowedChars = 'abcdefghijklm';
      return `${s.split('').filter(x => !allowedChars.includes(x)).length}/${s.length}`
    }

    // Test
    printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz") // "3/56"