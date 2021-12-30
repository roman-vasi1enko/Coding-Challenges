// Task 1 - Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

  // PREP
  // mask all imput chars except last 4
  // string, '', any length
  // return

  // Solution
  function maskify(str) {
    // conditional length > 4
    if (str.length > 4) {
      // loop with conditional index < length - 4
      return str.split('').map((el, i) => i < str.length - 5 ? el = '#' : el)
    }
    else {
      return str;
    }
  }

  // Tests
  maskify('') // ''
  maskify('12') // '12'
  maskify('1234123456785678') // '############5678'